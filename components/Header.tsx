import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";
import { ThemeToggaler } from "./ThemeToggaler";

function Header() {
  return (
    <div className="flex justify-between bg-white shadow-sm p-5 border-b dark:bg-gray-900">
      <Link href={"/dashboard"} className=" text-2xl">
        Chat to <span className=" text-indigo-600">PDF</span>
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button asChild variant={"link"} className="hidden md:flex">
            <Link href={"/dashboard/upgrade"}>Pricing</Link>
          </Button>

          <Button asChild variant={"outline"} className="">
            <Link href={"/dashboard"}>My Document</Link>
          </Button>

          <Button asChild variant={"outline"} className="border-indigo-600">
            <Link href={"/dashboard/upload"}>
              <FilePlus2 className="text-indigo-600" />
            </Link>
          </Button>

          <ThemeToggaler />
          
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}

export default Header;
