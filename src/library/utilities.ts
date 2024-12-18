import { NextRequest } from "next/server";
import { decodeToken } from "./jwt";

// utils/api.ts
export interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}

export async function fetchApi<T>(url: string, options: FetchOptions = {}): Promise<T> {
  try {
    const response = await fetch(url, options);

    // Check if response is OK (status 200-299)
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error: ${response.status}`);
    }

    // Parse response data
    const data: T = await response.json();
    return data; // Final data passed to the calling function
  } catch (error) {
    console.error("Fetch Error:", error instanceof Error ? error.message : error);
    throw error; // Re-throw error to be handled by the caller
  }
}

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
