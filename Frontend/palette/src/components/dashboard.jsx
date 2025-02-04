import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalArtworks: 120,
    totalSales: 45,
    totalArtists: 30,
  });

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {Object.entries(stats).map(([key, value]) => (
        <Card key={key} className="p-4 shadow-lg">
          <CardContent>
            <h2 className="text-xl font-semibold capitalize">{key.replace(/([A-Z])/g, " $1")}</h2>
            <p className="text-3xl font-bold mt-2">{value}</p>
          </CardContent>
        </Card>
      ))}
      <Button className="col-span-3 mt-4">Refresh Stats</Button>
    </div>
  );
}
