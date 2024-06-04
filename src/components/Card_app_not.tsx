
import { Card, CardContent } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"


const CityDropDown =()=>{
    return (
        <>
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
        </>
    )
}

const CateDropDown =()=>{
    return (
        <>
        <Select>
              <SelectTrigger id="categories" aria-label="Select Catégorie">
                <SelectValue placeholder="Select Catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Vendre">À vendre</SelectItem>
                <SelectItem value="Louer">À louer</SelectItem>
              </SelectContent>
            </Select></>
    )}

    const AgeDropDown =()=>{
        return (
            <>
        <Select>
              <SelectTrigger id="ages" aria-label="Select age">
                <SelectValue placeholder="Select Property Age" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="noeuf">Noeuf</SelectItem>
                <SelectItem value="0-5">0 à 5 ans</SelectItem>
                <SelectItem value="+6">+6 ans</SelectItem>
              </SelectContent>
            </Select></>
    )}

    const FloorDropDown =()=>{
        return (
            <>
        <Select>
              <SelectTrigger id="Floors" aria-label="Select floor">
                <SelectValue placeholder="Select Floor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Rez de chaussé</SelectItem>
                <SelectItem value="1">1er étage</SelectItem>
                <SelectItem value="+1">+1 étage</SelectItem>
              </SelectContent>
            </Select></>
    )}
interface CheckBoxPrProps{
    title:String
}
    const CheckBoxPr =({title}:CheckBoxPrProps)=>{

        const terms = ""+ title +""
        return (
            <div className="flex items-center space-x-2">
                <Checkbox id={terms} />
                <label
                    htmlFor={terms}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {title}
                </label>
            </div>
        )

    }

    const SRooDropDown =()=>{
        return (
            <>
        <Select>
              <SelectTrigger id="SRoo" aria-label="Select spare rooms">
                <SelectValue placeholder="Select Spare Rooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="+3">+3</SelectItem>
              </SelectContent>
            </Select></>
    )}

    const RooDropDown =()=>{
        return (
            <>
        <Select>
              <SelectTrigger id="Roo" aria-label="Select rooms">
                <SelectValue placeholder="Select Rooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="+3">+3</SelectItem>
              </SelectContent>
            </Select></>
    )}

    const BthDropDown =()=>{
        return (
            <>
        <Select>
              <SelectTrigger id="Bth" aria-label="Select bathrooms">
                <SelectValue placeholder="Select Bathrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="+3">+3</SelectItem>
              </SelectContent>
            </Select></>
    )}


const Card_app_not = ()=>{


    return (
        <Card >
            <CardContent className="mt-4">
                <div className="grid gap-6 sm:grid-cols-6">
                    <div className="grid gap-3 ">
                        <Label htmlFor="city">Ville</Label>
                        <CityDropDown/>
                    </div>
                    <div className="grid gap-3 ">
                    <Label htmlFor="category">Catégorie</Label>
                        <CateDropDown/>
                    </div>
                    <div className="grid gap-3 ">
                    <Label htmlFor="property_age">Age du bien</Label>
                        <AgeDropDown/>
                    </div>
                    <div className="grid gap-3 ">
                    <Label htmlFor="floor">Etage</Label>
                        <FloorDropDown/>
                    </div>
                    <div className="grid gap-3 ">
                    <Label htmlFor="spare_rooms">Salons</Label>
                        <SRooDropDown/>
                    </div>
                    <div className="grid gap-3 ">
                    <Label htmlFor="rooms">Chambres</Label>
                        <RooDropDown/>
                    </div>
                    <div className="grid gap-3 ">
                    <Label htmlFor="bathrooms">Salles de bain</Label>
                        <BthDropDown/>
                    </div>
                    <div className="grid gap-3 justify-center">
                    <CheckBoxPr title={"Parking"}/>
                    <CheckBoxPr title={"Climatisation"}/>
                    </div>
                    <div className="grid gap-3 justify-center">
                    <CheckBoxPr title={"Terrasse"}/>
                    <CheckBoxPr title={"Sécurité"}/>
                    </div>
                    <div className="grid gap-3 justify-center">
                    <CheckBoxPr title={"Balcon"}/>
                    <CheckBoxPr title={"Ascenseur"}/>
                    </div>
                    <div className="grid gap-3 justify-center">
                    <CheckBoxPr title={"Meublée"}/>
                    <CheckBoxPr title={"Chauffage"}/>

                    </div>
                    <div className="grid gap-3 justify-center">
                    <CheckBoxPr title={"Cuisine équipée"}/>
                    <CheckBoxPr title={"Concierge"}/>
                    </div>
                    
                    
                </div>
          </CardContent>
        </Card>
    )


}

export default Card_app_not

