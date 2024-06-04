import NotificationForm from "@/components/NotificationForm"
import { getUserSubscriptionPlan } from "@/lib/stripe"

const Page = async () =>{
    const subscriptionPlan = await getUserSubscriptionPlan()

    return <NotificationForm subscriptionPlan={subscriptionPlan}/>
}

export default Page