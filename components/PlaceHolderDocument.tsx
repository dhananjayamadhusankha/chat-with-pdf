"use client"

import React from "react";
import { Button } from "./ui/button";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

function PlaceHolderDocument() {
  const router = useRouter()

  const handleClick = () => {
    // Check if user is FREE tier and if theyre over the file limit, push to the upgrade page
    router.push('/dashboard/upload')
  }

  return (
    <Button onClick={handleClick} className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 dark:bg-indigo-200 drop-shadow-md text-gray-400 dark:text-indigo-400 dark:hover:bg-indigo-900">
      <PlusCircle className="h-16 w-16" />
      <p>Add a Document</p>
    </Button>
  );
}

export default PlaceHolderDocument;
