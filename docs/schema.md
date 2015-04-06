# Schema Information

## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
tasker_id   | integer   | foreign key (references users)
title       | string    | not null
description | text      | not null
location    | string    | not null
vehicle     | string    | not null
completed   | boolean   | default false
price       | integer   |

## commentings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
comment_id  | integer   | not null, foreign key (references comments)
commentable_id|integer  | not null, foreign key (references commentables)

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
title       | string    | not null
body        | string    | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
