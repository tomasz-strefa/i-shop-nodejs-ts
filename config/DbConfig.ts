import sqlite3 from "sqlite3";
import { open } from "sqlite";

// open the database
export const db = open({ filename: "products.db", driver: sqlite3.Database });
