"use client"
import React from 'react'
import {SignInButton, SignUpButton, UserButton} from "@clerk/nextjs"
import {UserRole} from "@prisma/client"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import { ModeToggle } from '../../../components/ui/mode-toggle'
import Image from 'next/image'

const NavBar = ({userRole}) => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="bg-white/70 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-2xl shadow-sm">
        <div className="px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-widest text-amber-400">LeetCode</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/problems" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-amber-500 transition-colors">Problems</Link>
            <Link href="/about" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-amber-500 transition-colors">About</Link>
            {userRole && <Link href="/profile" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-amber-500 transition-colors">Profile</Link>}
          </div>

          <div className="flex items-center gap-3">
            <ModeToggle />
            {userRole === UserRole.ADMIN && (
              <Link href="/create-problem">
                <Button size="sm" variant="outline">Create Problem</Button>
              </Link>
            )}
            {userRole ? (
              <UserButton />
            ) : (
              <>
                <SignInButton>
                  <Button variant="ghost" size="sm">Sign In</Button>
                </SignInButton>
                <SignUpButton>
                  <Button size="sm" className="bg-amber-400 hover:bg-amber-500 text-white">Sign Up</Button>
                </SignUpButton>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
