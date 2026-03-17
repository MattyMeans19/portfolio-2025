import { integer, pgTableCreator, varchar, boolean, text, doublePrecision, pgEnum, serial, jsonb, date } from "drizzle-orm/pg-core";

export const pgTable = pgTableCreator((name) => `${name}`);
export const templateEnum = pgEnum('template', ['Business-Standard', 'Business-Premium', 'Restaurant-Standard', 'Restaurant-Premium']);
export type Template = (typeof templateEnum.enumValues)[number];

export const Quotes = pgTable("quotes", {
    id: serial('quote_id').primaryKey(),
    customer: varchar("name", {length: 255}).notNull(),
    customerTel: varchar("tel", {length: 15}).notNull(),
    customerEmail: varchar("email").notNull(),
    template: templateEnum('template').default('Business-Standard').notNull(),
    addOns : integer('addons').array().notNull(),
    totalStartup: integer("total_startup").notNull(),
    totalMonthly: integer("total_monthly").notNull(),
    completionETA: integer('time_to_build').notNull(),
    createdAt: date('created_at').notNull()
})

export const Clients = pgTable("clients", {
    id: serial('client_id').primaryKey(),
    name: varchar('client_name', {length: 255}).notNull().unique(),
    phone: varchar('client_tel', {length: 15}).notNull(),
    email: varchar('client_email', {length: 255}).notNull().unique(),
    engine: templateEnum('engine').default('Business-Standard').notNull(),
    addOns : integer('addons').array().notNull(),
    startUp: integer('startup_cost').notNull(),
    recurring: integer('maintenence_cost').notNull(),
    clientSince: date('client_since').notNull()
})

export const Issues = pgTable("issues", {
    id: serial('issue_id').primaryKey(),
    client: varchar('client', {length: 255}).notNull(),
    site: varchar('site', {length: 255}).notNull(),
    issue: text('issue').notNull(),
    datePosted: date('date_posted').notNull()
})

export const ToDo = pgTable("to_do", {
    id: serial('id').primaryKey(),
    title: varchar('todo_title', {length: 60}).notNull(),
    info: text('to_do').notNull()
})

export const AddOns = pgTable("add_ons", {
    id: serial('addon_id').primaryKey(),
    name: varchar('name').notNull(),
    info: text('info').notNull(),
    startUp: integer('startup').notNull(),
    monthly: integer('monthly').notNull(),
    buildETA: integer('build_time').notNull(),
    isPremium: boolean('is_premium').notNull()
})
