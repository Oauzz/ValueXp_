import { ReactNode } from "react";
import { ByDayChart } from "./charts/ByDayChart";
import { ByItemChart } from "./charts/ByItemChart";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const RangeDropDown = ({ onChange }: { onChange: (value: string) => void }) => {
    return (
      <div className="w-fit">
      <Select onValueChange={onChange}>
        <SelectTrigger className="order-last w-32" id="ranges" aria-label="Select range">
          <SelectValue placeholder="Select range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="week">Dernière Semaines</SelectItem>
          <SelectItem value="month">Derier mois</SelectItem>
          <SelectItem value="year">Dernière Année</SelectItem>
        </SelectContent>
      </Select></div>
    );
  };

type ChartCardProps = {
  title: string;
  children: ReactNode;
};

function ChartCard({ title, children }: ChartCardProps) {
  return (
    <Card>
      <CardHeader className="">
        <div className="flex gap-4 justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <RangeDropDown onChange={() => {}} />
        </div>
      </CardHeader>
      <CardContent className="pr-0 pl-0 pb-4">{children}</CardContent>
    </Card>
  );
}

type CardMaiStatProps = {
  category: string;
  city: string;
};

const Card_Mai_stat = ({ category, city }: CardMaiStatProps) => {
  return (
    <main className="flex flex-col gap-4 p-4">
      <div className="grid gap-4 max-w-6xl grid-cols-2">
        <ChartCard title="Prix par rapport au Temps">
          <ByDayChart category={category} city={city} />
        </ChartCard>
        <ChartCard title="Prix par rapport à l&apos;Age du bien">
          <ByItemChart category={category} city={city} />
        </ChartCard>
        <ChartCard title="Prix par rapport au nombre d&apos;Étages">
          <ByDayChart category={category} city={city} />
        </ChartCard>
        <ChartCard title="Prix par rapport au nombre de Salons">
          <ByDayChart category={category} city={city} />
        </ChartCard>
        <ChartCard title="Prix par rapport au nombre de Chambres">
          <ByDayChart category={category} city={city} />
        </ChartCard>
        <ChartCard title="Prix par rapport au nombre de Salles de Bain">
          <ByDayChart category={category} city={city} />
        </ChartCard>
      </div>
    </main>
  );
};

export default Card_Mai_stat;
