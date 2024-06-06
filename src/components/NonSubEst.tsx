"use client"

import { useState } from 'react';
import { DatePickerWithRange } from "./DatePicker";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { DateRange } from "react-day-picker";
import { Loader2 } from 'lucide-react';

// Define the types for the form data and period
interface Period {
  start: Date | undefined;
  end: Date | undefined;
}

interface FormData {
  city: string;
  type: string;
  category: string;
  period: Period;
}

const NonSubEst = () => {
  const [formData, setFormData] = useState<FormData>({
    city: '',
    type: '',
    category: '',
    period: { start: undefined, end: undefined },
  });

  const [estimationResult, setEstimationResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date: DateRange | undefined) => {
    setFormData((prevData) => ({
      ...prevData,
      period: {
        start: date?.from,
        end: date?.to,
      },
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    // Send the form data to the server
    try {
      const response = await fetch('/api/estimate', {
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

      <MaxWidthWrapper className='max-w-5xl justify-center'>
        <form className='mt-12' onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Paramétres d&apos;estimation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="grid gap-3 ">
                  <Label htmlFor="city">Ville</Label>
                  <Select onValueChange={(value) => handleChange('city', value)}>
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
                  <Select onValueChange={(value) => handleChange('type', value)}>
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
                  <Select onValueChange={(value) => handleChange('category', value)}>
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
                  <DatePickerWithRange onDateChange={handleDateChange} />
                </div>
                <div className="grid gap-3 col-start-3 col-end-4 items-center text-center">
                  <Button type='submit'>Submit</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </form>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="mb-12 mt-8 sm:mt-14 flex flex-col items-center justify-center text-center">
        {loading ? (
          // <p className="font-serif text-5xl">Loading...</p>

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
      <div className="fixed bottom-0 left-0 right-0 pb-4  shadow-md">
        <p className='text-center text-xl italic font-medium'>
          Pour plus de paramètres,{' '}
          <a href="/pricing" className="underline text-sky-500">passer Pro</a>.
        </p>
      </div>
    </>
  );
}

export default NonSubEst;
