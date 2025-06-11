// import { text } from "drizzle-orm/gel-core"
// import { serial } from "drizzle-orm/mysql-core"

const { pgTable, varchar, text, serial } = require("drizzle-orm/pg-core")

export const MockInterview=pgTable("mockInterview", {
    id:serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDesc: varchar('jobDesc').notNull(),
    jobExp: varchar('jobExp').notNull(),

    createdBy: varchar('createdBy').notNull(),
    createdAt: text('createdAt').notNull(),
    mockId: varchar('mockId').notNull(),
})