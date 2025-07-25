import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div>
      <h2>Dear visitor, welcome to my-sports-app. Please Sign-up.</h2>
      <SignUp />
    </div>
  );
}
