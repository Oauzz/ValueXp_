import { DatePickerWithRange } from "./DatePicker";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface CardVillEstProps {
  onChange: (name: string, value: any) => void;
}

const CityDropDown = ({ onChange }: { onChange: (value: string) => void }) => {
  return (
    <Select onValueChange={onChange}>
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
  );
};

const CateDropDown = ({ onChange }: { onChange: (value: string) => void }) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger id="categories" aria-label="Select Catégorie">
        <SelectValue placeholder="Select Catégorie" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Vendre">À vendre</SelectItem>
        <SelectItem value="Louer">À louer</SelectItem>
      </SelectContent>
    </Select>
  );
};

const AgeDropDown = ({ onChange }: { onChange: (value: string) => void }) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger id="ages" aria-label="Select age">
        <SelectValue placeholder="Select Property Age" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="noeuf">Noeuf</SelectItem>
        <SelectItem value="0-5">0 à 5 ans</SelectItem>
        <SelectItem value="+6">+6 ans</SelectItem>
      </SelectContent>
    </Select>
  );
};

const NbFloorDropDown = ({ onChange }: { onChange: (value: string) => void }) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger id="NbFloors" aria-label="Select floors">
        <SelectValue placeholder="Select Floors" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1 étage</SelectItem>
        <SelectItem value="2">2 étages</SelectItem>
        <SelectItem value="+3">+3 étages</SelectItem>
      </SelectContent>
    </Select>
  );
};

const CheckBoxPr = ({ title, onChange }: { title: string, onChange: (value: boolean) => void }) => {
  const terms = "" + title + "";
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={terms} onCheckedChange={onChange} />
      <label
        htmlFor={terms}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {title}
      </label>
    </div>
  );
};

const SRooDropDown = ({ onChange }: { onChange: (value: string) => void }) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger id="SRoo" aria-label="Select spare rooms">
        <SelectValue placeholder="Select Spare Rooms" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="+3">+3</SelectItem>
      </SelectContent>
    </Select>
  );
};

const RooDropDown = ({ onChange }: { onChange: (value: string) => void }) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger id="Roo" aria-label="Select rooms">
        <SelectValue placeholder="Select Rooms" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="+3">+3</SelectItem>
      </SelectContent>
    </Select>
  );
};

const BthDropDown = ({ onChange }: { onChange: (value: string) => void }) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger id="Bth" aria-label="Select bathrooms">
        <SelectValue placeholder="Select Bathrooms" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="+3">+3</SelectItem>
      </SelectContent>
    </Select>
  );
};

const Card_Vill_est = ({ onChange }: CardVillEstProps) => {
  return (
    <Card >
      <CardContent className="mt-4">
        <div className="grid gap-6 sm:grid-cols-6">
          <div className="grid gap-3 ">
            <Label htmlFor="city">Ville</Label>
            <CityDropDown onChange={(value) => onChange('city', value)} />
          </div>
          <div className="grid gap-3 ">
            <Label htmlFor="category">Catégorie</Label>
            <CateDropDown onChange={(value) => onChange('category', value)} />
          </div>
          <div className="grid gap-3 ">
            <Label htmlFor="propertyAge">Age du bien</Label>
            <AgeDropDown onChange={(value) => onChange('propertyAge', value)} />
          </div>
          <div className="grid gap-3 ">
            <Label htmlFor="Nbfloor">Nombre d&apos;Etages</Label>
            <NbFloorDropDown onChange={(value) => onChange('numberOfFloors', value)} />
          </div>
          <div className="grid gap-3 ">
            <Label htmlFor="spare_rooms">Salons</Label>
            <SRooDropDown onChange={(value) => onChange('spareRooms', value)} />
          </div>
          <div className="grid gap-3 ">
            <Label htmlFor="rooms">Chambres</Label>
            <RooDropDown onChange={(value) => onChange('rooms', value)} />
          </div>
          <div className="grid gap-3 ">
            <Label htmlFor="bathrooms">Salles de bain</Label>
            <BthDropDown onChange={(value) => onChange('bathrooms', value)} />
          </div>
          <div className="grid gap-3 justify-center">
            <CheckBoxPr title={"Parking"} onChange={(value) => onChange('parking', value)} />
            <CheckBoxPr title={"Climatisation"} onChange={(value) => onChange('airConditioning', value)} />
            <CheckBoxPr title={"Terrasse"} onChange={(value) => onChange('terrace', value)} />
          </div>
          <div className="grid gap-3 justify-center">
            <CheckBoxPr title={"Sécurité"} onChange={(value) => onChange('security', value)} />
            <CheckBoxPr title={"Balcon"} onChange={(value) => onChange('balcony', value)} />
            <div className="mt-4"></div>
          </div>
          <div className="grid gap-3 justify-center">
            <CheckBoxPr title={"Meublée"} onChange={(value) => onChange('furnished', value)} />
            <CheckBoxPr title={"Garage"} onChange={(value) => onChange('garage', value)} />
            <div className="mt-4"></div>
          </div>
          <div className="grid gap-3 justify-center">
            <CheckBoxPr title={"Jardin"} onChange={(value) => onChange('garden', value)} />
            <CheckBoxPr title={"Piscine"} onChange={(value) => onChange('pool', value)} />
            <div className="mt-4"></div>
          </div>
          <div className="grid gap-3 justify-center">
            <CheckBoxPr title={"Chauffage"} onChange={(value) => onChange('heating', value)} />
            <CheckBoxPr title={"Cuisine équipée"} onChange={(value) => onChange('equippedKitchen', value)} />
            <div className="mt-4"></div>
          </div>
          <div className="grid gap-3 col-start-1">
            <DatePickerWithRange onDateChange={(date) => onChange('period', date)} />
          </div>
          <div className="grid gap-3 col-start-6 col-end-7 items-center  text-center" >
            <Button type='submit'>
              Submit
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Card_Vill_est;
