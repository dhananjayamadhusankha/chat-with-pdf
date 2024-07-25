import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="flex justify-between">
      <Link href={"/dashboard"} className=" text-2xl">
        Chat to <span className=" text-indigo-600">PDF</span>
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button asChild variant={"link"} className="hidden md:flex">
            <UserButton />
          </Button>
        </div>
      </SignedIn>
    </div>
  );
}

export default Header;
