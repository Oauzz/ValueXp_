import EstimationForm from "@/components/EstimationForm"
import { getUserSubscriptionPlan } from "@/lib/stripe"

const Page = async () =>{
    const subscriptionPlan = await getUserSubscriptionPlan()

    return <EstimationForm subscriptionPlan={subscriptionPlan}/>
}

export default Page