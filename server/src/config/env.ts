import { config } from "dotenv";

config({ path: `.env` });
export const {
  PORT,
  DB_URI,
  JWT_SECRET,
  SMTP_USER,
  SMTP_PASS,
  SENDER_EMAIL,
  SESSION_SECRET,
} = process.env;
