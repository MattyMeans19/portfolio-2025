import { integer, pgTableCreator, varchar, boolean, text, doublePrecision, pgEnum, serial, jsonb } from "drizzle-orm/pg-core";

export const pgTable = pgTableCreator((name) => `${name}`);
export const templateEnum = pgEnum('template', ['Business-Standard', 'Business-Premium', 'Restaurant-Standard', 'Restaurant-Premium']);
export type Template = (typeof templateEnum.enumValues)[number];

export const Quotes = pgTable("quotes", {
    id: serial('quote_id').primaryKey(),
    customer: varchar("name", {length: 255}).notNull(),
    template: templateEnum('template').default('Business-Standard').notNull(),
    addOns : jsonb("addon_ons").$type<{
        name: string;
        price: number;
        time_to_build: number;
        info: string
    }[]>().default([]),
    totalPrice: integer("total_price").notNull(),
    primaryColor: varchar("primary_color").notNull(),
    secondaryColor: varchar("secondary_color").notNull()
})

export const client = pgTable("clients", {
    id: serial('client_id').primaryKey(),
    name: varchar('client_name', {length: 255}).notNull().unique(),
    phone: varchar('client_tel', {length: 10}).notNull(),
    email: varchar('client_email', {length: 255}).notNull().unique(),
    recurring: integer('maintenence_cost').notNull()
})

export const Issues = pgTable("issues", {
    id: serial('issue_id').notNull().unique(),
    client: varchar('client', {length: 255}).notNull(),
    site: varchar('site', {length: 255}).notNull(),
    issue: text('issue').notNull()
})

export const ToDo = pgTable("to_do", {
    id: serial('id').notNull().unique(),
    title: varchar('todo_title', {length: 60}).notNull(),
    info: text('to_do').notNull()
})