import { ArrowUpRight, Bot, Eye, ScrollText, SearchCheck, Users } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { ReactNode } from "react"
import RadarWebsite from "./charts/RadarWebsite"
import { Button } from "./ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import Link from "next/link"
import { Badge } from "./ui/badge"
import RadarCities from "./charts/RadarCities"


const FreqDropDown =()=>{
    return (
        <>
        <Select >
                <SelectTrigger className=" items-center" id="freqs" aria-label="Select frequency">
                    <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="3h">Chaque 12 Heures</SelectItem>
                    <SelectItem value="6h">Chaque Jour</SelectItem>
                    <SelectItem value="12h">Chaque semaine</SelectItem>
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
            <CardTitle>{title}</CardTitle> 
        </CardHeader> 
        <CardContent className="pr-0 pl-0 pb-4">
            {children}
        </CardContent>

    </Card>
}

const AdminDash =()=>{

    return (
        <>
        <MaxWidthWrapper className='max-w-8xl'>
      

          <main className="flex flex-1 flex-col gap-4 p-4 ">
            <div className="grid gap-4  grid-cols-2 xl:grid-cols-4">
                <Card id="raw" >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-base font-medium">
                      Totale des Annonces Brutes
                    </CardTitle>
                    <ScrollText className="h-4 w-4 text-muted-foreground" /> 
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold">98,876</div>
                    <p className="text-xs text-muted-foreground">
                      +8.1% de la dernière alimentation
                    </p> 
                  </CardContent>
                </Card>
                <Card id="cleaned" >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-base font-medium">
                      Totale des Annonces Utiles
                    </CardTitle>
                    <SearchCheck className="h-4 w-4 text-muted-foreground" /> 
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold">49,810</div>
                    <p className="text-xs text-muted-foreground">
                      +31% de la dernière alimentation
                    </p> 
                  </CardContent>
                </Card>
                <Card id="pro" >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-base font-medium">
                      Utilisateurs Pro
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" /> 
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold">+1</div>
                    <p className="text-xs text-muted-foreground">
                      +100% de la dernière semaine
                    </p> 
                  </CardContent>
                </Card>
                <Card id="ai" >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium">
                  Solde OpenAI 
                </CardTitle>
                <Bot className="h-4 w-4 text-muted-foreground" /> 
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">$10.97</div>
                <p className="text-xs text-muted-foreground">
                  -2.3% de la dernière alimentation
                </p> 
              </CardContent>
                </Card>
            </div>
            <div className='relative isolate'>
            <div
              aria-hidden='true'
              className='pointer-events-none absolute inset-x-100 -top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
              />
            </div></div>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card
              className="xl:col-span-2">
                 <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Annonces</CardTitle>
                <CardDescription>
                  Annonces récentes de la dérnière alimentation
                </CardDescription>
              </div>
              <Button size="sm" className="ml-auto gap-1">
                  Voir Tout
                  <ArrowUpRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>  
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Annonce</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">studio à louer 50 m² à Casablanca</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                      <Link href="https://www.avito.ma/fr/2_mars/appartements/studio__à_louer_50_m²_à_Casablanca_54884792.htm/">https://www.avito.ma/fr/2_mars/appartements/studio__à_louer_50_m²_à_Casablanca_54884792.htm</Link>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                    <Button size="sm" className="ml-auto gap-1">
                  Voir
                  <Eye className="h-4 w-4" />
              </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Petite villa Hay El Qods Bernoussi a vendre</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                      <Link href="https://www.avito.ma/fr/sidi_bernoussi/maisons_et_villas/Petite_villa_Hay_El_Qods_Bernoussi_a_vendre_54971477.htm/">https://www.avito.ma/fr/sidi_bernoussi/maisons_et_villas/Petite_villa_Hay_El_Qods_Bernoussi_a_vendre_54971477.htm</Link>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                    <Button size="sm" className="ml-auto gap-1">
                  Voir
                  <Eye className="h-4 w-4" />
              </Button>
                    </TableCell>
                  </TableRow>
                  </TableBody>
            </Table>

                </CardContent>

            </Card>
            <div className="grid gap-4">
            <Card>
                <CardHeader>
                <CardTitle>Fréquence de scraping</CardTitle>
                </CardHeader>
                <CardContent>
                    <FreqDropDown/>
                </CardContent>
            </Card>
            <ChartCard title="Apercu">
                <RadarWebsite/>
                <RadarCities/>
            </ChartCard>
            </div>
            </div>


          </main>


        </MaxWidthWrapper>
        
        
        
        
        </>
    )
}

export default AdminDash