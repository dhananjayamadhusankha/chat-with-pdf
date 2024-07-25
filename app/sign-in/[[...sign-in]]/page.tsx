"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="grid w-full flex-grow items-center bg-zinc-100 px-4 sm:justify-center">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-lg ring-1 ring-black/5 sm:w-3xl sm:px-8"
        >
          <header className="text-center">
            <Link href="/">
            <h1 className="mt-4 text-xl font-medium tracking-tight text-zinc-950">
              Sign in to Chat to{" "}
              <span className=" text-indigo-600">PDF</span>
            </h1>
            </Link>
          </header>
          <div className="grid grid-cols-3 gap-x-2 dark:text-black">
            <Clerk.Connection
              name="google"
              className="flex items-center gap-x-3 justify-center font-medium border shadow-sm py-1.5 px-2.5 rounded-md"
            >
              <Clerk.Icon className="size-4" />
              <span className="">Google</span>
            </Clerk.Connection>
            <Clerk.Connection
              name="facebook"
              className="flex items-center gap-x-3 justify-center font-medium border shadow-sm py-1.5 px-2.5 rounded-md"
            >
              <Clerk.Icon className="size-4" />
              Facebook
            </Clerk.Connection>
            <Clerk.Connection
              name="apple"
              className="flex items-center gap-x-3 justify-center font-medium border shadow-sm py-1.5 px-2.5 rounded-md"
            >
              <Clerk.Icon className="size-4" />
              Apple
            </Clerk.Connection>
          </div>
          <Clerk.GlobalError className="block text-sm text-red-400" />
          <div className="space-y-4">
            <Clerk.Field name="identifier" className="space-y-2">
              <Clerk.Label className="text-sm font-medium text-zinc-950">
                Username
              </Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
            <Clerk.Field name="password" className="space-y-2">
              <Clerk.Label className="text-sm  font-medium text-zinc-950">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
          </div>
          <SignIn.Action
            submit
            className="w-full rounded-md bg-indigo-600 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-indigo-950 hover:bg-indigo-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-indigo-950 active:text-white/70"
          >
            Sign In
          </SignIn.Action>
          <p className="text-center text-sm text-zinc-500">
            No account?{" "}
            <a
              href="#"
              className="font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline"
            >
              Create an account
            </a>
          </p>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
}
