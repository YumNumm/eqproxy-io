#!/bin/sh

pg_dump \
 	-h aws-0-ap-northeast-1.pooler.supabase.com \
 	-p 6543 \
 	-U postgres.iguidsozjamxfqyvgykv \
 	-d postgres \
 	--schema=public \
 	-W \
 	-vf out.sql \
 	-a \
 	--column-inserts \
 	--on-conflict-do-nothing \
 	-t "device*" \
 	-w

psql -h 127.0.0.1 -U postgres < ./out.sql
