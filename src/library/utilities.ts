import { NextRequest } from "next/server";
import { decodeToken } from "./jwt";

export const getUserDetailsFromToken = async (req: NextRequest) => {
  try {
    const token = req.cookies.get("x-access-token")?.value;
    if (!token) {
      console.error("Token not found in cookies.");
      return null; // Return null if the token is not present
    }
    console.log("data--------------------------------------------->", token);
    const decoded = await decodeToken(token);
    if (!decoded) {
      return null; // Return null if the header is not present
    }
    return decoded; // Parse and return the object
  } catch (error) {
    console.error("Error parsing user data from token:", error);
    return null; // Return null if JSON parsing fails
  }
};

export const getBusinessDetailsFromToken = async (req: NextRequest) => {
  try {
    const token = req.cookies.get("x-business-token")?.value;
    if (!token) {
      console.error("Business token not found in cookies.");
      return null; // Return null if the token is not present
    }
    console.log("data--------------------------------------------->", token);
    const decoded = await decodeToken(token);
    if (!decoded) {
      return null; // Return null if the header is not present
    }
    return decoded; // Parse and return the object
  } catch (error) {
    console.error("Error parsing business data from token:", error);
    return null; // Return null if JSON parsing fails
  }
};
