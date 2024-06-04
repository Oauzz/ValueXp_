import StatisticsForm from "@/components/StatisticsForm"
import { getUserSubscriptionPlan } from "@/lib/stripe"

const Page = async () =>{
    const subscriptionPlan = await getUserSubscriptionPlan()

    return <StatisticsForm subscriptionPlan={subscriptionPlan}/>
}

export default Page