import { cookies } from "next/headers";

export const getAuthCookieName = () =>
  process.env.NODE_ENV === "production"
    ? "__Secure-next-auth.session-token"
    : "next-auth.session-token";

export const getAuthHeader = () => {
  const nextCookie = cookies();
  const cookieName = getAuthCookieName();
  const nextAuthSessionToken = nextCookie.get(cookieName);
  return {
    headers: {
      Cookie: `${nextAuthSessionToken?.name}=${nextAuthSessionToken?.value}`,
    },
  };
};
