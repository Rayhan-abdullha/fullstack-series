import LoginForm from "@/app/(auth)/_component/LoginForm";
const page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-md w-full space-y-4 text-center">
        <h1>Login Form</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
