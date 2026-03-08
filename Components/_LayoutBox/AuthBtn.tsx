"use client";
import { SignInButton } from "@clerk/nextjs";
import { IoPersonAddSharp } from "react-icons/io5";

export default function AuthBtn() {
  return (
    <SignInButton mode="redirect">
      <IoPersonAddSharp size={16} className="cursor-pointer hover:-translate-y-0.5 transition-all duration-300 " />
    </SignInButton>
  );
}