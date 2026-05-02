"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./shared/NavLink";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { FaHome, FaUser } from "react-icons/fa";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="hidden md:block">
          <div className="flex gap-2 items-center ">
            <Image
              src={"/logo.png"}
              alt="logo"
              loading="eager"
              width={30}
              height={30}
              className="object-cover h-auto w-auto"
            />
            <h3 className="font-black text-lg bg-linear-65 from-purple-500 to-pink-500 bg-clip-text text-transparent">QurbaniHat</h3>
          </div>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-animals"}>All Animals</NavLink>
          </li>
          <li>
            <NavLink href={"/profile"}>Profile</NavLink>
          </li>
        </ul>

        <div className="flex gap-4">
          {!user && <ul className="flex items-center  text-sm gap-5">
            <li>
              <Link href={"/signup"}><Button >Sign Up</Button></Link>
            </li>
            <li>
              <Link href={"/signin"}><Button variant="secondary">Sign In</Button></Link>
            </li>
          </ul>}
          {user && <div className="flex gap-3">
            <Avatar className="w-8 h-8">
              <Avatar.Image alt="John Doe" src={user?.image}
              referrerPolicy="no-referrer"
               />
              <Avatar.Fallback>F</Avatar.Fallback>
            </Avatar>
            <Button variant="danger" size="sm" onClick={() => authClient.signOut()}>Sign Out</Button>
          </div> 
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;