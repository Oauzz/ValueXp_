'use client'

import { useEffect, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const NonSubNotification = () => {
  const [enabled, setEnabled] = useState(false);
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [frequency, setFrequency] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEnabled = JSON.parse(localStorage.getItem("notificationEnabled") || "false");
      const storedCity = localStorage.getItem("notificationCity") || "";
      const storedType = localStorage.getItem("notificationType") || "";
      const storedCategory = localStorage.getItem("notificationCategory") || "";
      const storedFrequency = localStorage.getItem("notificationFrequency") || "";

      setEnabled(storedEnabled);
      setCity(storedCity);
      setType(storedType);
      setCategory(storedCategory);
      setFrequency(storedFrequency);
    }
  }, []);

  const handleSave = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("notificationEnabled", JSON.stringify(enabled));
      localStorage.setItem("notificationCity", city);
      localStorage.setItem("notificationType", type);
      localStorage.setItem("notificationCategory", category);
      localStorage.setItem("notificationFrequency", frequency);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const handleSwitchChange = (value: boolean) => {
    setEnabled(value);
    if (!value) {
      setCity("");
      setType("");
      setCategory("");
      setFrequency("");
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
      <MaxWidthWrapper className='max-w-5xl mb-28 mt-10 sm:mt-12 flex flex-col'>
        {showAlert && (
          <Alert>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Vos paramètres de notification ont été enregistrés avec succès.
            </AlertDescription>
          </Alert>
        )}
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex justify-between">
                <p>Email notifications</p>
                <Switch checked={enabled} onCheckedChange={handleSwitchChange} className="order-last" />
              </div>
            </CardTitle>
            <CardDescription>
              Recevez des infos sur les biens que vous souhaitez.
            </CardDescription>
          </CardHeader>
          {enabled && (
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="grid gap-3">
                  <Label htmlFor="city">Ville</Label>
                  <Select value={city} onValueChange={setCity}>
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
                <div className="grid gap-3">
                  <Label htmlFor="type">Type</Label>
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger id="types" aria-label="Select Type">
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Appartements">Appartements</SelectItem>
                      <SelectItem value="Maisons">Maisons</SelectItem>
                      <SelectItem value="Villas">Villas</SelectItem>
                      <SelectItem value="Bureaux">Bureaux</SelectItem>
                      <SelectItem value="Locaux commerciaux">Locaux commerciaux</SelectItem></SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="category">Catégorie</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger id="categories" aria-label="Select Catégorie">
                      <SelectValue placeholder="Select Catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Vendre">À vendre</SelectItem>
                      <SelectItem value="Louer">À louer</SelectItem></SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="frequency">Fréquence</Label>
                  <Select value={frequency} onValueChange={setFrequency}>
                    <SelectTrigger id="frequencies" aria-label="Select Frequency">
                      <SelectValue placeholder="Select Frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Chaque Jour</SelectItem>
                      <SelectItem value="weekly">Chaque Semaine</SelectItem>
                      <SelectItem value="monthly">Chaque mois</SelectItem></SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3 col-start-3 col-end-4 items-center text-center">
                  <Button type="button" onClick={handleSave}>
                    Enregistrer
                  </Button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      </MaxWidthWrapper>
      <div className="fixed bottom-0 left-0 right-0 pb-4 shadow-md">
        <p className='text-center text-xl italic font-medium'>
          Pour plus de paramètres,{' '}
          <a href="/pricing" className="underline text-sky-500">passer Pro</a>.
        </p>
      </div>
    </>
  );
};

export default NonSubNotification;
