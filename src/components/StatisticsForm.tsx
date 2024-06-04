import { getUserSubscriptionPlan } from "@/lib/stripe"
import { redirect } from "next/navigation"



interface StatisticsFormProps {
    subscriptionPlan: Awaited<ReturnType<typeof getUserSubscriptionPlan>>
}
  
const StatisticsForm = (
    {subscriptionPlan}: StatisticsFormProps
    ) => {

        if (!subscriptionPlan?.isSubscribed) 
            redirect('/auth-callback?origin=main')

        return (
            <h1>statistics</h1>
        )


  }

  export default StatisticsForm