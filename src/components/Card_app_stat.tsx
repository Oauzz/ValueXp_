import { ReactNode } from "react"
import { ByDayChart } from "./charts/ByDayChart"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"



const RangeDropDown =()=>{
    return (
        <>
        <Select >
                <SelectTrigger className="order-last w-32" id="ranges" aria-label="Select range">
                    <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="week">Dernière Semaines</SelectItem>
                    <SelectItem value="month">Derier mois</SelectItem>
                    <SelectItem value="year">Dernière Année</SelectItem>
                </SelectContent>
            </Select>
        </>
    )
}


type ChartCardProps ={
    title: string
    children: ReactNode
}
function ChartCard ({title ,children }:ChartCardProps){
    return <Card>
        <CardHeader className="">
            <div className="flex gap-4 justify-between items-center">
            <CardTitle>{title}</CardTitle>
            <RangeDropDown />
            </div>
            
        </CardHeader> 
        <CardContent className="pr-0 pl-0 pb-4">
            {children}
        </CardContent>

    </Card>
}

// className="max-w-2xl col-span-2 h-80"


const Card_app_stat =()=>{

    return (

        <main className="flex flex-col gap-4 p-4 ">
            
            <div className="grid gap-4 max-w-6xl grid-cols-2">
                <ChartCard title="title">
                    <ByDayChart/>
                </ChartCard>
                <ChartCard title="title">
                    <ByDayChart/>
                </ChartCard>
                <ChartCard title="title">
                    <ByDayChart/>
                </ChartCard>
                <ChartCard title="title">
                    <ByDayChart/>
                </ChartCard>
                <ChartCard title="title">
                    <ByDayChart/>
                </ChartCard>
                <ChartCard title="title">
                    <ByDayChart/>
                </ChartCard>
            </div>
        </main>
    )

}

export default Card_app_stat