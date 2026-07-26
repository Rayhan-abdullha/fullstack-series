"use client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginActions } from "../_actions/authActions";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const [state, action, pending] = useActionState(loginActions, null as any);
  const router = useRouter();

  useEffect(() => {
    if (!state) return;
    if (state) {
      toast.success("Registered Successfully");
      router.push("/dashboard");
    }
  }, [state]);
  return (
    <form action={action}>
      <Card className="p-5 space-y-4">
        <Input name="email" placeholder="Email" />
        <Input name="password" placeholder="Password" />
        <Button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
          type="submit"
        >
          {pending ? "Loading..." : "Register"}
        </Button>
      </Card>
    </form>
  );
};

export default LoginForm;
