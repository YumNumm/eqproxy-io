/*
@name fcm_earthquake
@param items -> ((region_id, min_jma_intensity)...)
 */
select
   u.fcm_token
FROM
  public.devices AS u
WHERE
  u.id IN (
    SELECT id
    FROM
      public.devices_earthquake_settings
    WHERE
      (region_id, min_jma_intensity) IN (
        :items
      )
    )
  AND fcm_token IS NOT NULL
;