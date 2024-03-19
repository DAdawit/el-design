"use client";
import React from "react";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import AdminDrawer from "./AdminDrawer";
import Image from "next/image";
const Navbar = () => {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    api.defaults.headers.common["Authorization"] = "";
    router.push("/");
  };
  return (
    <>
      <nav className="flex justify-between px-5 items-center bg-primary text-black py-3">
        <div className="flex gap-x-3 items-center">
          <AdminDrawer />
          <h1 className="text-white text-2xl font-bold">MaldoMed</h1>
        </div>
        <div className="flex gap-x-3 items-center">
          {/* <button
            className="flex items-center gap-2 px-5 py-2 border-2 border-white rounded-full text-sm"
            onClick={logout}
          >
            <span>Logout</span>
            <span>
              <LogoutIcon fontSize="small" />
            </span>
          </button> */}
          <Image
            src="/logo.png"
            alt="logo"
            width={1000}
            height={1000}
            className="h-20 w-full object-contain"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
//  <th
//                 className="border-r-2 border-gray-50 whitespace-nowrap h-full"
//                 rowSpan="2"
//               >
//                 Price
//               </th>
//               <th
//                 className="border-r-2 border-gray-50 whitespace-nowrap h-full"
//                 rowSpan="2"
//               >
//                 Country of Origin
//               </th>
