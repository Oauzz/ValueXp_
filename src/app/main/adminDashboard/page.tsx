import AdminDash from "@/components/AdminDash"
import { db } from "@/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

const Page = async () =>{

    const { getUser } = getKindeServerSession()
    const user_ = await getUser()
    const dbUser = await db.user.findFirst({
        where: {
            id: user_?.id
        }
        })
    if (dbUser?.role=="client" )
        redirect('/auth-callback?origin=main')

    return <AdminDash/>
}

export default Page