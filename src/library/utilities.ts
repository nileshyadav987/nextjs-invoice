import { NextRequest } from "next/server";
import { decodeToken } from "./jwt";

// utils/api.ts
export interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}

export async function fetchApi<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
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
    console.error(
      "Fetch Error:",
      error instanceof Error ? error.message : error
    );
    throw error; // Re-throw error to be handled by the caller
  }
}

interface DecodedToken {
  _id: string;
  [key: string]: any; // If there are additional fields that you don't want to specify now
}

export const getUserDetailsFromToken = async (req: NextRequest): Promise<DecodedToken> => {
  const token = req.cookies.get("x-access-token")?.value;
  if (!token) throw new Error("User token not found.");
  
  const decoded = (await decodeToken(token)) as DecodedToken | null;
  if (!decoded || !decoded._id) throw new Error("Invalid or missing user details in token.");

  return decoded;
};
export const getBusinessDetailsFromToken = async (req: NextRequest) => {
  const token = req.cookies.get("x-business-token")?.value;
  if (!token) throw new Error("Business token not found.");
  
  const decoded = (await decodeToken(token)) as DecodedToken | null;
  if (!decoded || !decoded._id) throw new Error("Invalid or missing business details in token.");

  return decoded;
};
