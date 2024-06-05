import { getUserSubscriptionPlan } from "@/lib/stripe"
import { redirect } from "next/navigation"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import Card_app_stat from "./Card_app_stat"
import Card_Mai_stat from "./Card_Mai_stat"
import Card_Bur_stat from "./Card_Bur_stat"
import Card_Loc_stat from "./Card_Loc_stat"
import Card_Vill_stat from "./Card_Vill_stat"

const StatisticsForm = (
    ) => {
        return (
            <>
                <div className='relative isolate'>
                <div
                    aria-hidden='true'
                    className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20'>
                    <div
                    style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                    />
                </div></div>
                
            <MaxWidthWrapper className="mb-4 mt-10 sm:mt-12 flex flex-col items-center justify-center text-center">
            
                <h1 className='max-w-5xl text-4xl font-bold md:text-6xl lg:text-5xl'>
                    {' '}
                    <span className='text-green-600'>Suivez</span>{' '}
                    l&apos;évolution des prix.
                </h1>
                <RadioGroup defaultValue="Vendre" className="flex mt-4 space-x-8">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Vendre" id="r1" />
                  <Label htmlFor="r1">Vendre</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Louer" id="r2" />
                  <Label htmlFor="r2">Louer</Label>
                </div>
              </RadioGroup>
            </MaxWidthWrapper>
            <MaxWidthWrapper className='max-w-7xl justify-center'>
      
        <Tabs defaultValue="appartements" className="" >
        <TabsList>
            <TabsTrigger value="appartements">Appartements</TabsTrigger>
            <TabsTrigger value="maisons">Maisons</TabsTrigger>
            <TabsTrigger value="villas">Villas</TabsTrigger>
            <TabsTrigger value="bureaux">Bureaux</TabsTrigger>
            <TabsTrigger value="locaux-commerciaux">Locaux commerciaux</TabsTrigger>
        </TabsList>
        <TabsContent value="appartements"><Card_app_stat/></TabsContent>
        <TabsContent value="maisons"><Card_Mai_stat/></TabsContent>
        <TabsContent value="villas"><Card_Vill_stat/></TabsContent>
        <TabsContent value="bureaux"><Card_Bur_stat/></TabsContent>
        <TabsContent value="locaux-commerciaux"><Card_Loc_stat/></TabsContent>
        </Tabs>

  </MaxWidthWrapper>
    </>
        )


  }

  export default StatisticsForm