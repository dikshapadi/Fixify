"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={70}
          onClick={() => (window.location.href = "/")}
          style={{ cursor: "pointer" }}
        />
        <div className="md:flex items-center gap-6 hidden">
          <h2 className="hover:scale-105 hover:text-purple-700 cursor-pointer">
            Home
          </h2>
          <h2 className="hover:scale-105 hover:text-purple-700 cursor-pointer">
            Services
          </h2>
          <h2 className="hover:scale-105 hover:text-purple-700 cursor-pointer">
            About Us
          </h2>
        </div>
      </div>
      <div>
        {status === "authenticated" && session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={session.user.image}
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>My Booking</DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button className="bg-[#7743DB]" onClick={() => signIn("descope")}>
            Login/Signup
          </Button>
        )}
      </div>
    </div>
  );
}

export default Header;
