import { DatePickerWithRange } from "./DatePicker";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface CardLocEstProps {
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


const FloorDropDown = ({ onChange }: { onChange: (value: string) => void }) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger id="Floors" aria-label="Select floor">
        <SelectValue placeholder="Select Floor" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="0">Rez de chaussé</SelectItem>
        <SelectItem value="1">1er étage</SelectItem>
        <SelectItem value="+1">+1 étage</SelectItem>
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

const Card_Loc_est = ({ onChange }: CardLocEstProps) => {
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
            <Label htmlFor="bathrooms">Salles de bain</Label>
            <BthDropDown onChange={(value) => onChange('bathrooms', value)} />
          </div>
          <DatePickerWithRange onDateChange={(date) => onChange('period', date)} className="grid gap-3 col-span-2 mt-6"/>

          <div className="grid gap-3 col-start-1 justify-center">
            <CheckBoxPr title={"Parking"} onChange={(value) => onChange('parking', value)} />
          </div>
          <div className="grid gap-3 justify-center">
            <CheckBoxPr title={"Climatisation"} onChange={(value) => onChange('airConditioning', value)} />
          </div>
          <div className="grid gap-3 justify-center">
            <CheckBoxPr title={"Sécurité"} onChange={(value) => onChange('security', value)} />
          </div>
          <div className="grid gap-3 justify-center">
            <CheckBoxPr title={"Chauffage"} onChange={(value) => onChange('heating', value)} />
          </div>
          
          <div className="grid gap-3 col-start-6 col-end-7 items-center text-center">
            <Button type='submit'>
              Submit
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Card_Loc_est;
