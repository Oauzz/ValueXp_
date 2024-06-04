import MaxWidthWrapper from "./MaxWidthWrapper"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Trash2 } from 'lucide-react';
import { Button } from "./ui/button"
import { Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import Card_Mai_not from "./Card_Mai_not";
import Card_Bur_not from "./Card_Bur_not";
import Card_Loc_not from "./Card_loc_not";
import Card_Vill_not from "./Card_Vill_not";
import Card_app_not from "./Card_app_not";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";


const SubNotification= ()=>{
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
        <MaxWidthWrapper className='max-w-5xl mb-28 mt-10 sm:mt-12 flex flex-col   '>
            <Card>
          <CardHeader>
            <CardTitle>Email notifications</CardTitle>
            <CardDescription>
                    Recevez des infos sur les biens que vous souhaitez.
            </CardDescription> 
            </CardHeader>
            <CardContent>
            <Dialog>
      <DialogTrigger asChild>
      <Button className="w-full">
                <div className="flex items-center space-x-2">
                    <p>Ajoutez une nouvelle notification</p>
                    <Plus size={20}/>
                </div>
                </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-7xl">
        <DialogHeader>
          <DialogTitle>Ajoutez une nouvelle notification</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="appartements" className="" >
        <TabsList>
            <TabsTrigger value="appartements">Appartements</TabsTrigger>
            <TabsTrigger value="maisons">Maisons</TabsTrigger>
            <TabsTrigger value="villas">Villas</TabsTrigger>
            <TabsTrigger value="bureaux">Bureaux</TabsTrigger>
            <TabsTrigger value="locaux-commerciaux">Locaux commerciaux</TabsTrigger>
        </TabsList>
        <TabsContent value="appartements"><Card_app_not/></TabsContent>
        <TabsContent value="maisons"><Card_Mai_not/></TabsContent>
        <TabsContent value="villas"><Card_Vill_not/></TabsContent>
        <TabsContent value="bureaux"><Card_Bur_not/></TabsContent>
        <TabsContent value="locaux-commerciaux"><Card_Loc_not/></TabsContent>
        </Tabs>

        <DialogFooter className="sm:max-w-7xl grid grid-cols-4">
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nom" className="text-right">
              Nom
            </Label>
            <Input
              id="name"
              defaultValue="Nouvelle notification"
              className="col-span-3"
            />
          </div>
          <DialogClose className="col-start-3"asChild>
            <Button type="button" variant="secondary">
              Annuler
            </Button>
          </DialogClose>
          <Button className="col-start-4" type="submit">Ajouter</Button>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              
                <TableCell className="font-medium">Notification 3</TableCell>
                <TableCell className="flex justify-end"><Trash2 className="text-red-600"/></TableCell>

              
            </TableRow>
            <TableRow>
              
                <TableCell className="font-medium">Notification 2</TableCell>
                <TableCell className="flex justify-end"><Trash2 className="text-red-600"/></TableCell>


              
            </TableRow>
            <TableRow>
              
                <TableCell className="font-medium">Notification 1</TableCell>
                <TableCell className="flex justify-end"><Trash2 className="text-red-600"/></TableCell>

              
            </TableRow>
          </TableBody>
        </Table>
            </CardContent>
            </Card>
        
        </MaxWidthWrapper>
        </>
    )
}

export default SubNotification