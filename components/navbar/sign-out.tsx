"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaSignOutAlt } from "react-icons/fa";

export default function SignOut() {
  return (
    <Button
      onClick={() => signOut()}
      variant="outline"
      className="px-2 md:px-4 bg-gray-100/40 backdrop-blur-lg"
    >
      <span className="hidden md:block">Sign Out</span>
      <FaSignOutAlt className="block md:hidden text-xl" />
    </Button>
  );
}
