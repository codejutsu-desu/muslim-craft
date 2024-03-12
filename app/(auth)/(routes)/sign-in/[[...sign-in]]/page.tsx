import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-[500px]">
      <SignIn />;
    </div>
  );
}
