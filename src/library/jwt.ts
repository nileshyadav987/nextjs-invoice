import jwt, { SignOptions } from "jsonwebtoken";
import { jwtVerify } from "jose";

const secretKey = "Ny@Ny@yN@987#"; // Keep your JWT secret in environment variables

// Function to generate a JWT token
export const generateToken = (data: Record<string, any>): string => {
  const options: SignOptions = {}; // Token expiration (e.g., 1 hour)
  if("password" in data) {
    options.expiresIn = "15d";
  }
  delete data.exp;
  delete data.iat;
  delete data.password; // present in users
  // Generate JWT token
  return jwt.sign(data, secretKey, options);
};

export const decodeToken = async (token: string) => {
  try {
    const _l = new TextEncoder().encode(secretKey); 
    const { payload } = await jwtVerify(token, _l);
    return payload; // The decoded token payload
  } catch {
    throw new Error("Invalid or expired token");
  }
};
