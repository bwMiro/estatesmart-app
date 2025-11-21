import NextAuth from 'next-auth'
import type { Role } from '@prisma/client'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      role: Role
      onboarded: boolean
      name?: string | null
      email?: string | null
    }
  }

  interface User {
    role: Role
    onboarded: boolean
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: Role
    onboarded?: boolean
  }
}

