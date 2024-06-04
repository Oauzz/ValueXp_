
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { AreaChartUsageExampleAxisLabel } from "./AreaChartPer"

const SubMainCharts = ()=>{



    return (
        <>
            <MaxWidthWrapper className="mb-12 mt-10 sm:mt-12 flex flex-col items-center justify-center text-center">
                <h1 className='max-w-5xl text-4xl font-bold md:text-6xl lg:text-5xl'>
                    {' '}
                    <span className='text-green-600'>Suivez</span>{' '}
                    l&apos;évolution des prix immobiliers.
                </h1>
                <p className='mt-5 max-w-prose text-zinc-700 sm:text-base'>
                    Configurez votre graphe :
                </p>
            </MaxWidthWrapper>
            <MaxWidthWrapper className='max-w-5xl justify-center'>
            <form
              className='mt-12'
            //   onSubmit={()=>{}}
              >
              <Card>
                <CardHeader>
                  <CardTitle>Paramétres du graphe</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="grid gap-3 items-center  text-center">
                  
                    <RadioGroup defaultValue="à vendre" className=" flex flex-row">
                        <div className=" items-center space-x-2 mr-12">
                            <RadioGroupItem value="à vendre" id ="r1" />
                            <Label htmlFor="r1">à vendre</Label>
                        </div>
                        <div className=" items-center space-x-2 ">
                            <RadioGroupItem value="à louer" id ="r1" />
                            <Label htmlFor="r1">à louer</Label>
                        </div>
                    </RadioGroup>
                  </div>
                  <div className="grid gap-3 col-start-2 col-end-3">
                    <Select>
                      <SelectTrigger id="X" aria-label="Select X">
                        <SelectValue placeholder="Select X" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Temps">Temps</SelectItem>
                        <SelectItem value="Nombre de chambres">Nombre de chambres</SelectItem>
                        {/* etc */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3 col-start-3 col-end-4 items-center  text-center" >
                    <Button type='submit'>
                      Submit
                    </Button>
                  </div>
                </div>
              </CardContent>
              </Card>
            </form>
          </MaxWidthWrapper>
          <MaxWidthWrapper className="mb-12 mt-2 max-w-5xl sm:mt-8 flex flex-col items-center justify-center text-center">
          <AreaChartUsageExampleAxisLabel  />
          </MaxWidthWrapper>
  
        </>
    )



}

export default SubMainCharts