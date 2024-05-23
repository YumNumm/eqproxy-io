ALTER DATABASE postgres
SET timezone to 'Asia/Tokyo';

--------------- FOUNDATION FUNCTIONS ---------------
CREATE OR REPLACE FUNCTION uuid_generate_v7() RETURNS UUID AS
$$
BEGIN
    return encode(set_bit(set_bit(overlay(
        uuid_send(gen_random_uuid())
        placing substring(int8send(floor(extract(epoch from clock_timestamp()) * 1000)::bigint) from 3)
        from 1 for 6
    ), 52, 1), 53, 1), 'hex')::uuid;
END
$$ LANGUAGE plpgsql;

--------------- ENUM DEFINITION ---------------
CREATE TYPE jma_intensity AS ENUM ('0', '1', '2', '3', '4', '!5-', '5-', '5+', '6-', '6+', '7');
CREATE TYPE jma_lg_intensity AS ENUM ('0', '1', '2', '3', '4');

--------------- TELEGRAM TABLE ---------------
create table
  public.telegram (
    id serial,
    event_id bigint not null,
    type text not null,
    schema_type text not null,
    status text not null,
    info_type text not null,
    press_time timestamp with time zone not null,
    report_time timestamp with time zone not null,
    valid_time timestamp with time zone null,
    serial_no integer null,
    headline text null,
    body jsonb not null,
    constraint telegram_pkey primary key (id)
  ) tablespace pg_default;

ALTER TABLE telegram ENABLE ROW LEVEL SECURITY;
CREATE POLICY telegram_select_policy ON telegram FOR SELECT USING (true);

create table
  public.eew (
    id serial,
    event_id bigint not null,
    type text not null,
    schema_type text not null,
    status text not null,
    info_type text not null,
    serial_no integer null,
    headline text null,
    is_canceled boolean not null,
    is_warning boolean null,
    is_last_info boolean not null,
    origin_time timestamp with time zone null,
    arrival_time timestamp with time zone null,
    hypo_name text null,
    depth smallint null,
    latitude numeric(3, 1) null,
    longitude numeric(4, 1) null,
    magnitude numeric(2, 1) null,
    forecast_max_intensity public.jma_intensity null,
    forecast_max_lpgm_intensity public.jma_lg_intensity null,
    regions jsonb null,
    forecast_max_intensity_is_over boolean null,
    forecast_max_lpgm_intensity_is_over boolean null,
    report_time timestamp with time zone not null default (now() at time zone 'utc'::text),
    accuracy jsonb null,
    is_plum boolean not null,
    constraint eew_pkey primary key (id)
  ) tablespace pg_default;

ALTER TABLE eew ENABLE ROW LEVEL SECURITY;
CREATE POLICY eew_select_policy ON eew FOR SELECT USING (true);

--------------- EARTHQUAKE TABLE ---------------
create table
  public.earthquake (
    event_id bigint not null,
    status text not null,
    magnitude numeric(2, 1) null,
    magnitude_condition text null,
    max_intensity public.jma_intensity null,
    max_lpgm_intensity public.jma_lg_intensity null,
    depth integer null,
    latitude numeric(6, 3) null,
    longitude numeric(6, 3) null,
    epicenter_code smallint null,
    epicenter_detail_code smallint null,
    arrival_time timestamp with time zone null,
    origin_time timestamp with time zone null,
    headline text null,
    text text null,
    max_intensity_region_ids smallint[] null,
    intensity_regions jsonb null,
    intensity_prefectures jsonb null,
    intensity_cities jsonb null,
    intensity_stations jsonb null,
    lpgm_intensity_prefectures jsonb null,
    lpgm_intensity_regions jsonb null,
    lpgm_intenstiy_stations jsonb null,
    constraint earthquake_pkey primary key (event_id)
  ) tablespace pg_default;

create index if not exists earthquake_depth_idx on public.earthquake using btree (depth) tablespace pg_default;
create index if not exists earthquake_epicenter_idx on public.earthquake using btree (epicenter_code) tablespace pg_default;
create index if not exists earthquake_magnitude_idx on public.earthquake using btree (magnitude, magnitude_condition) tablespace pg_default;
create index if not exists earthquake_max_intensity_idx on public.earthquake using btree (max_intensity) tablespace pg_default;
create index if not exists earthquake_max_lpgm_intensity_idx on public.earthquake using btree (max_lpgm_intensity) tablespace pg_default;
create index if not exists earthquake_origin_time_idx on public.earthquake using btree (origin_time) tablespace pg_default;

ALTER TABLE earthquake ENABLE ROW LEVEL SECURITY;
CREATE POLICY earthquake_select_policy ON earthquake FOR SELECT USING (true);
--------------- INTENSITY SUB DIVISION TABLE ---------------
create table
  public.intensity_sub_division (
    id serial,
    event_id bigint not null,
    area_code character varying(5) not null,
    max_intensity public.jma_intensity not null,
    max_lpgm_intensity public.jma_lg_intensity null,
    constraint intensity_sub_division_pkey primary key (id),
    constraint intensity_sub_division_event_id_area_code_key unique (event_id, area_code),
    constraint public_intensity_sub_division_event_id_fkey foreign key (event_id) references earthquake (event_id) on update cascade on delete cascade
  ) tablespace pg_default;

create index if not exists intensity_sub_division_max_intensity_idx on public.intensity_sub_division using btree (max_intensity) tablespace pg_default;

create index if not exists intensity_sub_division_max_lpgm_intensity_idx on public.intensity_sub_division using btree (max_lpgm_intensity) tablespace pg_default;
ALTER TABLE intensity_sub_division ENABLE ROW LEVEL SECURITY;
CREATE POLICY intensity_sub_division_select_policy ON intensity_sub_division FOR SELECT USING (true);

--------------- INFORMATION TABLE ---------------
CREATE TYPE information_author AS ENUM('jma', 'developer', 'unknown');
CREATE TYPE information_level AS ENUM('info', 'warning', 'critical');

create table
  public.information (
    id serial,
    title text not null,
    author public.information_author not null default 'unknown'::information_author,
    created_at timestamp with time zone not null default current_timestamp,
    event_id bigint null,
    type text not null,
    level public.information_level not null,
    body jsonb not null,
    constraint information_pkey primary key (id)
  ) tablespace pg_default;

ALTER TABLE information ENABLE ROW LEVEL SECURITY;
CREATE POLICY information_select_policy ON information FOR SELECT USING (true);

--------------- TSUNAMI TABLE ---------------
create table
  public.tsunami (
    id serial,
    event_id bigint not null,
    serial_no integer null,
    type text not null,
    status text not null,
    info_type text not null,
    press_at timestamp with time zone not null,
    report_at timestamp with time zone not null,
    valid_at timestamp with time zone null,
    body jsonb not null,
    headline text null,
    constraint tsunami_pkey primary key (id)
  ) tablespace pg_default;

create index if not exists tsunami_event_id_idx on public.tsunami using btree (event_id) tablespace pg_default;

create index if not exists tsunami_valid_at_idx on public.tsunami using btree (valid_at) tablespace pg_default;

ALTER TABLE tsunami ENABLE ROW LEVEL SECURITY;
CREATE POLICY tsunami_select_policy ON tsunami FOR SELECT USING (true);


--------------- EEW FUNCTION ---------------
-- serial_no が最新のものを返す event_id ごとに 1 つだけ返す
CREATE OR REPLACE FUNCTION latest_eew() RETURNS SETOF eew AS
$$
SELECT DISTINCT ON (event_id) * FROM eew ORDER BY event_id, serial_no DESC
LIMIT 5;
$$ LANGUAGE SQL;


--------------- USERS TABLE ---------------
CREATE TABLE public.devices (
  id UUID UNIQUE DEFAULT uuid_generate_v7(),
  fcm_token TEXT,
  /* apns_token TEXT DEFAULT null 今後の拡張用 */
  PRIMARY KEY (id, fcm_token)
);

ALTER TABLE public.devices ENABLE ROW LEVEL SECURITY;

--------------- USERS_NOTIFICATION_SETTINGS TABLE ---------------
CREATE TABLE public.devices_notification_settings (
  id UUID REFERENCES public.devices(id),
  notification_volume DECIMAL(2,1) DEFAULT 1.0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, /* upsert時に一緒に書き換え忘れずに (TRIGGER書いても良い。) */
  /*　もろもろの設定 */
  PRIMARY KEY (id)
);
ALTER TABLE public.devices_notification_settings ENABLE ROW LEVEL SECURITY;

--------------- USERS_EARTHQUAKE_SETTINGS TABLE ---------------
CREATE TABLE public.devices_earthquake_settings (
  id UUID REFERENCES public.devices(id),
  region_id SMALLINT NOT NULL, /* 気象庁のコード表22府県予報区:code (9011~9474) */
  min_jma_intensity jma_intensity NOT NULL, /* 通知する最低震度 */
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, /* upsert時に一緒に書き換え忘れずに (TRIGGER書いても良い。) */
  PRIMARY KEY (id, region_id)
);
ALTER TABLE public.devices_earthquake_settings ENABLE ROW LEVEL SECURITY;

--------------- USERS_EEW_SETTINGS TABLE ---------------
CREATE TABLE public.devices_eew_settings (
  id UUID REFERENCES public.devices(id),
  region_id SMALLINT NOT NULL DEFAULT 0, /* 気象庁のコード表23都道府県等: code (01~47) */
  min_jma_intensity jma_intensity NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, /* upsert時に一緒に書き換え忘れずに (TRIGGER書いても良い。) */
  PRIMARY KEY (id, region_id)
);
ALTER TABLE public.devices_eew_settings ENABLE ROW LEVEL SECURITY;

/*

create publication eqmonitor_db
for all tables;

*/
/*
CREATE SUBSCRIPTION supabase_replication
  CONNECTION 'postgresql://postgres:ByajK7MPWL7M4L1J@db.iguidsozjamxfqyvgykv.supabase.co:5432/postgres'
  PUBLICATION eqmonitor_db
  WITH (copy_data = true, create_slot=true, slot_name='eqmonitor_db');
  */

alter user postgres with superuser
