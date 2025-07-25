import { SignIn } from "@clerk/nextjs";
export default function SignInPage() {
  return (
    <div>
      <h2>Dear visitor, welcome to my-sports-app. Please Sign-in.</h2>
      <SignIn />
    </div>
  );
}
