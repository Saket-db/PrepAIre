import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
//   out: "./drizzle",
dbCredentials: {
    url: 'ostgresql://neondb_owner:npg_c7S0wqgTMHEG@ep-small-bonus-a58c5fjk-pooler.us-east-2.aws.neon.tech/PrepAIre?sslmode=require',
}
});
