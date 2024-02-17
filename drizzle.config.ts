import type { Config } from 'drizzle-kit';

export default {
    schema: './src/core/db/schema.ts',
    out: './drizzle',
    driver: 'better-sqlite',
    dbCredentials: {
        url: process.env.DB_URL!
    },
    verbose: true,
    strict: false
} satisfies Config;
