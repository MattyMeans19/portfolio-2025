import { integer, pgTableCreator, varchar, boolean, text, doublePrecision, pgEnum } from "drizzle-orm/pg-core";

export const pgTable = pgTableCreator((name) => `${name}`);
export const templateEnum = pgEnum('template', ['Business-Standard', 'Business-Premium', 'Restaurant-Standard', 'Restaurant-Premium']);
export type Template = (typeof templateEnum.enumValues)[number];

export const Quotes = pgTable("quotes", {
    customer: varchar("name", {length: 255}).notNull(),
    template: templateEnum('template').default('Business-Standard').notNull(),
})