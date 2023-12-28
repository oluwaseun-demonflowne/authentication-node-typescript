ALTER TABLE "users" DROP CONSTRAINT "users_email_unique";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "full_name" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "phone" varchar(256);--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "email";