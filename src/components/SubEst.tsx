"use client"

import { useState } from 'react';
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Card_app_est from "./Card_app_est";
import Card_Bur_est from "./Card_Bur_est";
import Card_Loc_est from "./Card_Loc_est";
import Card_Mai_est from "./Card_Mai_est";
import Card_Vill_est from "./Card_Vill_est";
import { Button } from "./ui/button";
import { Loader2 } from 'lucide-react';

const SubEst = () => {
  const [formData, setFormData] = useState({
    propertyType: 'appartements',
    city: '',
    category: '',
    propertyAge: '',
    floor: '',
    numberOfFloors: '',
    units: '',
    spareRooms: '',
    rooms: '',
    bathrooms: '',
    parking: false,
    airConditioning: false,
    terrace: false,
    security: false,
    balcony: false,
    elevator: false,
    furnished: false,
    heating: false,
    equippedKitchen: false,
    concierge: false,
    period: { start: undefined, end: undefined },
  });

  const [estimationResult, setEstimationResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (name: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    // Send the form data to the server
    try {
      const response = await fetch('/api/pro-estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setEstimationResult(result.estimatedPrice);
      } else {
        console.error('Error in estimation request');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

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

      <MaxWidthWrapper className="mb-12 mt-10 sm:mt-12 flex flex-col items-center justify-center text-center">
        <h1 className='max-w-5xl text-4xl font-bold md:text-6xl lg:text-5xl'>
          <span className='text-green-600'>Estimez</span> le prix de vos biens immobiliers.
        </h1>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-base'>
          Veuillez sélectionner les paramètres pour votre estimation :
        </p>
      </MaxWidthWrapper>

      <MaxWidthWrapper className='max-w-7xl justify-center'>
        <form onSubmit={handleSubmit}>
          <Tabs defaultValue="appartements" onValueChange={(value) => handleChange('propertyType', value)} className="">
            <TabsList>
              <TabsTrigger value="appartements">Appartements</TabsTrigger>
              <TabsTrigger value="maisons">Maisons</TabsTrigger>
              <TabsTrigger value="villas">Villas</TabsTrigger>
              <TabsTrigger value="bureaux">Bureaux</TabsTrigger>
              <TabsTrigger value="locaux-commerciaux">Locaux commerciaux</TabsTrigger>
            </TabsList>
            <TabsContent value="appartements"><Card_app_est onChange={(name, value) => handleChange(name, value)} /></TabsContent>
            <TabsContent value="maisons"><Card_Mai_est onChange={(name, value) => handleChange(name, value)} /></TabsContent>
            <TabsContent value="villas"><Card_Vill_est onChange={(name, value) => handleChange(name, value)} /></TabsContent>
            <TabsContent value="bureaux"><Card_Bur_est onChange={(name, value) => handleChange(name, value)} /></TabsContent>
            <TabsContent value="locaux-commerciaux"><Card_Loc_est onChange={(name, value) => handleChange(name, value)} /></TabsContent>
          </Tabs>
          {/* <div className="mt-6 flex justify-center">
            <Button type="submit">Submit</Button>
          </div> */}
        </form>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="mb-12 mt-8 sm:mt-14 flex flex-col items-center justify-center text-center">
        {loading ? (
          <div className='flex flex-col items-center gap-2'>
            <Loader2 className='h-8 w-8 animate-spin text-zinc-800' />
            <h3 className='font-semibold text-5xl'>
              Estimation en cours...
            </h3>
            <p>Cela peut prendre du temps.</p>
          </div>

        ) : estimationResult !== null && (
          <p className="font-serif text-5xl">Le prix moyen est :{' '}
            <span className="text-green-600 font-serif text-9xl">
              {estimationResult}
            </span>{' '}
            <span className="font-serif text-6xl">
              DH/m<sup>2</sup>
            </span>
          </p>
        )}
      </MaxWidthWrapper>
    </>
  );
}

export default SubEst;
