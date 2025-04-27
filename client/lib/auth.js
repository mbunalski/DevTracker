// lib/auth.js
import { hash, compare } from "bcryptjs";

// Hash password for storing in DB
export async function hashPassword(password) {
  const hashedPassword = await hash(password, 12); // 12 rounds of salting
  return hashedPassword;
}

// Verify password during login
export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
