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

ActiveRecord::Schema.define(version: 20150410163214) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "tasks", force: :cascade do |t|
    t.integer  "owner_id",                        null: false
    t.integer  "tasker_id"
    t.string   "title"
    t.text     "description",                     null: false
    t.string   "location",                        null: false
    t.string   "vehicle",                         null: false
    t.string   "completed",   default: "neither", null: false
    t.integer  "price"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.date     "task_date"
    t.integer  "time_slot"
    t.string   "category"
  end

  add_index "tasks", ["location"], name: "index_tasks_on_location", using: :btree
  add_index "tasks", ["owner_id"], name: "index_tasks_on_owner_id", using: :btree
  add_index "tasks", ["tasker_id"], name: "index_tasks_on_tasker_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                           null: false
    t.string   "password_digest",                 null: false
    t.string   "session_token",                   null: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.boolean  "tasker",          default: false
    t.string   "vehicle"
    t.string   "location"
    t.text     "description"
    t.string   "profile_url"
    t.integer  "price"
    t.integer  "num_completed",   default: 0
    t.string   "name"
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end
