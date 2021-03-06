# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161109191509) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.integer  "artist_id",                                            null: false
    t.string   "album_name",                                           null: false
    t.date     "release_date",                                         null: false
    t.boolean  "downloadable",                         default: true
    t.decimal  "price",        precision: 8, scale: 2,                 null: false
    t.boolean  "fixed_price",                          default: false
    t.text     "description"
    t.string   "image_url"
    t.string   "artist"
    t.text     "about"
    t.text     "credits"
    t.datetime "created_at",                                           null: false
    t.datetime "updated_at",                                           null: false
  end

  create_table "track_files", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "url",        null: false
    t.integer  "track_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "album_id"
  end

  add_index "track_files", ["track_id"], name: "index_track_files_on_track_id", using: :btree

  create_table "tracks", force: :cascade do |t|
    t.integer  "album_id",                                             null: false
    t.date     "release_date",                                         null: false
    t.boolean  "downloadable",                         default: true
    t.decimal  "price",        precision: 8, scale: 2,                 null: false
    t.boolean  "fixed_price",                          default: false
    t.text     "description"
    t.string   "image_url"
    t.string   "artist"
    t.text     "about"
    t.text     "lyrics"
    t.text     "credits"
    t.boolean  "bonus",                                default: false
    t.text     "track_name",                                           null: false
    t.datetime "created_at",                                           null: false
    t.datetime "updated_at",                                           null: false
    t.integer  "track_number",                                         null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "location"
    t.text     "about"
    t.string   "artist_name"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
