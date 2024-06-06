import { getUserSubscriptionPlan } from "@/lib/stripe"
import NonSubEst from "./NonSubEst"
import SubEst from "./SubEst"



interface EstimationFormProps {
    subscriptionPlan: Awaited<ReturnType<typeof getUserSubscriptionPlan>>
}
  
const EstimationForm = (
    {subscriptionPlan}: EstimationFormProps
    ) => {

        return (
        <>
        {
            subscriptionPlan?.isSubscribed ? (
                <SubEst/>

            ):(
                <NonSubEst/>
            )
        }
        </>
        )


  }

  export default EstimationForm