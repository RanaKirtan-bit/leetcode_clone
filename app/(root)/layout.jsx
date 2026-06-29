import React from "react";
import NavBar from "../../modules/home/components/navbar";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

const RootLayout = async ({ children }) => {
  const clerkUser = await currentUser();
  let userRole = null;
  if (clerkUser) {
    const dbUser = await db.user.findUnique({
      where: { clerkId: clerkUser.id },
    });
    userRole = dbUser?.role || null;
    console.log(userRole);
  }
  return (
    <main className="flex flex-col min-h-screen max-h-screen">
      <NavBar userRole={userRole} />
      <div className="flex-1 flex flex-col px-4 pb-4">
        <div
          className="absolute inset-0 -z-10 h-full 
                  w-full bg-background dark:bg-[radial-gradient(#393e4a_1px, transparent-1px)]
                  dark:bg-[size:16px_16px] bg-[radial-gradient(#dadde2_1px, transparent_1px)] bg-[size:16px_16px]
                  "
        />
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
