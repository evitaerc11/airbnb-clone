import { User } from "@prisma/client"

export type SafeUser = Omit<
  User,
  'password' | 'createdAt' | 'updatedAt' | 'emailVerified'
> & {
  createdAt: string
  updatedAt: string
  emailVerified: string | null
}
