"use server";
import { cookies } from "next/headers";

type loginState = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};
export async function loginActions(prevState: loginState, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const payload = { email, password };
  const res = await fetch(
    "https://gearup-k03z.onrender.com/api/v1/auth/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    },
  );
  const data: loginState = await res.json();
  if (data.success) {
    const cookie = await cookies();
    cookie.set("accessToken", data.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    });
    cookie.set("refreshToken", data.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
    });
  }
  return data;
}
