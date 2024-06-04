
import { DatePickerWithRange } from "./DatePicker"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"


const NonSubEst =() => {


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
        
    <MaxWidthWrapper className="mb-12 mt-10 sm:mt-12 flex flex-col items-center justify-center text-center">
      
      <h1 className='max-w-5xl text-4xl font-bold md:text-6xl lg:text-5xl'>
        {' '}
          <span className='text-green-600'>Estimez</span>{' '}
          le prix de vos biens immobiliers.
      </h1>
      <p className='mt-5 max-w-prose text-zinc-700 sm:text-base'>
        Veuillez sélectionner les paramètres pour votre estimation :
      </p>
    </MaxWidthWrapper>
    
    <MaxWidthWrapper className='max-w-5xl justify-center'>
    <form
      className='mt-12'
    //   onSubmit={()=>{}}
      >
      <Card>
        <CardHeader>
          <CardTitle>Paramétres d&apos;estimation</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="grid gap-3 ">
            <Label htmlFor="city">Ville</Label>
            <Select>
                <SelectTrigger id="cities" aria-label="Select City">
                    <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Casablanca">Casablanca</SelectItem>
                    <SelectItem value="Tanger">Tanger</SelectItem>
                    <SelectItem value="Rabat">Rabat</SelectItem>
                    <SelectItem value="Marrakech">Marrakech</SelectItem>
                    <SelectItem value="Agadir">Agadir</SelectItem>
                    <SelectItem value="Kenitra">Kenitra</SelectItem>
                    <SelectItem value="Mohammedia">Mohammedia</SelectItem>
                    <SelectItem value="Temara">Temara</SelectItem>
                    <SelectItem value="El jadida">El Jadida</SelectItem>
                    <SelectItem value="Sale">Salé</SelectItem>
                    <SelectItem value="Fes">Fès</SelectItem>
                    <SelectItem value="Oujda">Oujda</SelectItem>
                </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3 ">
            <Label htmlFor="type">Type</Label>
            <Select>
              <SelectTrigger id="types" aria-label="Select Type">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Appartements">Appartements</SelectItem>
                <SelectItem value="Maisons">Maisons</SelectItem>
                <SelectItem value="Villas">Villas</SelectItem>
                <SelectItem value="Bureaux">Bureaux</SelectItem>
                <SelectItem value="Locaux commerciaux">Locaux commerciaux</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3 ">
            <Label htmlFor="category">Catégorie</Label>
            <Select>
              <SelectTrigger id="categories" aria-label="Select Catégorie">
                <SelectValue placeholder="Select Catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Vendre">À vendre</SelectItem>
                <SelectItem value="Louer">À louer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3 ">
            <Label htmlFor="periode">Période</Label>
            <DatePickerWithRange/>
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
  <MaxWidthWrapper className="mb-12 mt-8 sm:mt-14 flex flex-col items-center justify-center text-center">
  <p className="font-serif text-5xl">Le prix moyen est : {''}
  <span className=" text-green-600 font-serif text-9xl">
  13,455
  </span>{' '}
  <span className=" font-serif text-6xl">
    DH/m<sup>2</sup>
    </span>
  {''}</p>

    <div className="mt-18 sm:mt-28 items-center justify-center text-center" >
    <p className='rounded-full text-xl italic font-medium'>
        Pour plus de paramètres , {' '}
        <a href ="/pricing" 
        className="underline text-sky-500"
        >passer Pro</a>
        {' '} .
    </p>
    </div>
  </MaxWidthWrapper>



</>)
    
}

export default NonSubEst