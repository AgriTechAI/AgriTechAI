"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaSignInAlt } from "react-icons/fa";

export default function SignIn() {
  return (
    <Button
      onClick={() => signIn()}
      variant="outline"
      className="px-2 md:px-4 bg-gray-100/40 backdrop-blur-lg"
    >
      <span className="hidden md:block">Sign In</span>
      <FaSignInAlt className="block md:hidden text-xl" />
    </Button>
  );
}
