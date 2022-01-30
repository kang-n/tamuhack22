import { getSession } from "next-auth/react"
import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
    const session = await getSession({req})
    const user = await prisma.user.findUnique({
        where: {
          email: session.user.email
        }
    })

    if(user && user.budget) {
        res.status(200).json({pastUser: true})
    }
    else if(user) {
        res.status(200).json({pastUser: false})
    }
  }
  