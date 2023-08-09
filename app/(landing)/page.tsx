import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <p className="text-6xl text-green-500">
      <Button>Click me</Button>
      <UserButton afterSignOutUrl="/" />
    </p>
  );
}
