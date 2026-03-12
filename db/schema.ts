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
        description: string
    }[]>().default([]),
    totalPrice: integer("total_price").notNull()
})

export const client = pgTable("clients", {
    id: serial('client_id').primaryKey(),
    name: varchar('client_name', {length: 255}).notNull().unique(),
    phone: varchar('client_tel', {length: 10}).notNull(),
    email: varchar('client_email', {length: 255}).notNull().unique(),
    recurring: integer('maintenence_cost').notNull()
})

export const Issues = pgTable("issues", {

})