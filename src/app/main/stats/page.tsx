import StatisticsForm from "@/components/StatisticsForm"
import { db } from "@/db"
import { getUserSubscriptionPlan } from "@/lib/stripe"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

const Page = async () =>{
    const subscriptionPlan = await getUserSubscriptionPlan()
    const { getUser } = getKindeServerSession()
    const user_ = await getUser()
    const dbUser = await db.user.findFirst({
        where: {
            id: user_?.id
        }
        })
    if (!subscriptionPlan?.isSubscribed && dbUser?.role=="client" )
        redirect('/auth-callback?origin=main')

    return <StatisticsForm/>
}

export default Page