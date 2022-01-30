import { getSession } from "next-auth/react"
import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
    const session = await getSession({req})
    const user = await prisma.user.findUnique({
        where: {
          email: session.user.email
        },
        select: {
            stocks: true,
        }
    })

    if(user && user.stocks) {
        res.status(200).json({stocks: user.stocks})
    }
    else if(user) {
        res.status(200).json({stocks: []})
    }
  }
  