import jwt from "jsonwebtoken";
import { jwtVerify } from "jose";

const secretKey = "Ny@Ny@yN@987#"; // Keep your JWT secret in environment variables

// Function to generate a JWT token
export const generateToken = (user: object): string => {
  const options = { expiresIn: "15d" }; // Token expiration (e.g., 1 hour)
  // Generate JWT token
  return jwt.sign(user, secretKey, options);
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
