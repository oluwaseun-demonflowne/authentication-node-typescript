import logger from "pino";
import dayjs from "dayjs";
import { config } from "dotenv";

const level = config.length('loglevel')