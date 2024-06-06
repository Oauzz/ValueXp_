'use client'

import { useState, useEffect } from "react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import Card_app_stat from "./Card_app_stat"
import Card_Mai_stat from "./Card_Mai_stat"
import Card_Bur_stat from "./Card_Bur_stat"
import Card_Loc_stat from "./Card_Loc_stat"
import Card_Vill_stat from "./Card_Vill_stat"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const StatisticsForm = () => {
  const [category, setCategory] = useState('Vendre')
  const [selectedTab, setSelectedTab] = useState('appartements')
  const [city, setCity] = useState('')

  useEffect(() => {
    const savedCategory = localStorage.getItem("statsCategory")
    const savedTab = localStorage.getItem("statsTab")
    const savedCity = localStorage.getItem("statsCity")

    if (savedCategory) setCategory(savedCategory)
    if (savedTab) setSelectedTab(savedTab)
    if (savedCity) setCity(savedCity)
  }, [])

  useEffect(() => {
    localStorage.setItem("statsCategory", category)
    localStorage.setItem("statsTab", selectedTab)
    localStorage.setItem("statsCity", city)
  }, [category, selectedTab, city])

  const handleCategoryChange = (value: string) => {
    setCategory(value)
  }

  const handleTabChange = (value: string) => {
    setSelectedTab(value)
  }

  const handleCityChange = (value: string) => {
    setCity(value)
  }

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
        </div>
      </div>
      
      <MaxWidthWrapper className="mb-4 mt-10 sm:mt-12 flex flex-col items-center justify-center text-center">
        <h1 className='max-w-5xl text-4xl font-bold md:text-6xl lg:text-5xl'>
          {' '}
          <span className='text-green-600'>Suivez</span>{' '}
          l&apos;évolution des prix.
        </h1>
        <RadioGroup defaultValue={category} onValueChange={handleCategoryChange} className="flex mt-4 space-x-8">
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
        <Tabs defaultValue={selectedTab} onValueChange={handleTabChange} className="">
          <div className="flex justify-between">
            <TabsList>
              <TabsTrigger value="appartements">Appartements</TabsTrigger>
              <TabsTrigger value="maisons">Maisons</TabsTrigger>
              <TabsTrigger value="villas">Villas</TabsTrigger>
              <TabsTrigger value="bureaux">Bureaux</TabsTrigger>
              <TabsTrigger value="locaux-commerciaux">Locaux commerciaux</TabsTrigger>
            </TabsList>
            <div className="w-fit order-last">
              <Select value={city} onValueChange={handleCityChange}>
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
          </div>
          <TabsContent value="appartements"><Card_app_stat category={category} city={city} /></TabsContent>
          <TabsContent value="maisons"><Card_Mai_stat category={category} city={city} /></TabsContent>
          <TabsContent value="villas"><Card_Vill_stat category={category} city={city} /></TabsContent>
          <TabsContent value="bureaux"><Card_Bur_stat category={category} city={city} /></TabsContent>
          <TabsContent value="locaux-commerciaux"><Card_Loc_stat category={category} city={city} /></TabsContent>
        </Tabs>
      </MaxWidthWrapper>
    </>
  )
}

export default StatisticsForm
