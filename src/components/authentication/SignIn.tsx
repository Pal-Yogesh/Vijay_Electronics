import { SignIn } from '@clerk/nextjs';

export default function SignInComponent() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn />
    </div>
  );
}
