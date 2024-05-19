/*
@name fcm_earthquake
@param items -> ((region_id, min_jma_intensity)...)
 */
SELECT
  *
FROM
  public.devices_with_earthquake_settings AS u
INNER JOIN
  public.devices_notification_settings AS notification_settings
    ON u.id = notification_settings.id
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