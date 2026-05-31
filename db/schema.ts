import { integer, pgTableCreator, varchar, boolean, text, doublePrecision, pgEnum, serial, jsonb, date } from "drizzle-orm/pg-core";

export const pgTable = pgTableCreator((name) => `${name}`);
export const projectEnum = pgEnum('project', ['Professional', 'Personal']);
export type Project = (typeof projectEnum.enumValues)[number];

export const PortfolioItem = pgTable('portfolio', {
    id: serial('project_id').primaryKey(),
    title: varchar('project_title').notNull().unique(),
    info: text('project_info').notNull(),
    type: projectEnum("project_type").default("Personal").notNull(),
    thumbnail: varchar('project_image').notNull(),
    url: varchar('project_url').notNull().unique(),
    stack: varchar('stack_items').array().notNull(),
    caseStudy: text('case_study').notNull(),
})