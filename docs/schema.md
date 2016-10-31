# Schema information

## tracks
column name     | data type | details
----------------|-----------|--------------------------
id              | integer   | not null, primary key
artist_id       | integer   | not null
album_id        | integer   | not null, foreign key (references albums
release_date    | data      | not null
downloadable    | boolean   |*
price           | integer   | not null
fixed_price     | boolean   |
description     | text      |
image_url       | string    |
artist          | string    |
about           | text      |
lyrics          | text      |
credits         | text      |
bonus           | boolean   |

## albums
column name     | data type | details
----------------|-----------|--------------------------
id              | integer   | not null, primary key
artist_id       | integer   | not null
album_name      | string    | not null
release_date    | data      | not null
downloadable    | boolean   |
price           | integer   | not null
fixed_price     | boolean   |
description     | text      |
image_url       | string    |
artist          | string    |
about           | text      |
credits         | text      |


## bonus_items
column name     | data type | details
----------------|-----------|--------------------------
id              | integer   | not null, primary key
album_id        | integer   | not null, foreign key (references albums)


## users
column name     | data type | details
----------------|-----------|--------------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_url       | string    |
currency        | string    | not null, default: 'USD'

## artists
column name     | data type | details
----------------|-----------|--------------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users)
location        | string    | not null
about           | text      |
payment_method  | string    |
payment_email   | string    |

## track_files
column name     | data type | details
----------------|-----------|--------------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users)
url             | string    | not null
format          | string    | not null
track_id        | integer   | not null, foreign key (references tracks)

## album_files

column name     | data type | details
----------------|-----------|--------------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users)
url             | string    | not null
format          | string    | not null
album_id        | integer   | not null, foreign key (references albums)



## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null


## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | not null, foreign key (references albums), indexed
album_id    | integer   | not null, foreign key (references tracks), indexed
tag_id      | integer   | not null, foreign key (references tags), indexed


## purchases
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
track_id     | integer   | foreign key, references tracks, indexed
album_id     | integer   | not null, foreign key (references tracks), indexed
purchase_date| date      | not null
purchaser_id | integer   | foreign key, references users
artist_id    | integer   | foreign key, references artists
