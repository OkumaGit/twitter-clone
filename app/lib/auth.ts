export const CURRENT_USER_ID = "JohnDoe";

export async function getCurrentUserId(): Promise<string | null> {
  return CURRENT_USER_ID;
}
