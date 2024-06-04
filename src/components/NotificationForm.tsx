import { getUserSubscriptionPlan } from "@/lib/stripe"
import NonSubNotification from "./NonSubNotification"
import SubNotification from "./SubNotification"



interface NotificationFormProps {
    subscriptionPlan: Awaited<ReturnType<typeof getUserSubscriptionPlan>>
}
  
const NotificationForm = (
    {subscriptionPlan}: NotificationFormProps
    ) => {

        return (
        <>
        {
            subscriptionPlan?.isSubscribed ? (
                <SubNotification/>

            ):(
                <NonSubNotification/>
            )
        }
        </>
        )


  }

  export default NotificationForm