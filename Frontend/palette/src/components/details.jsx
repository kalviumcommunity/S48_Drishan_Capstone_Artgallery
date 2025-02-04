import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Details() {
  const { id } = useParams();

  const artwork = {
    id,
    title: "Serene Sunset",
    artist: "Jane Doe",
    price: "$500",
    description: "A beautiful depiction of a serene sunset with warm hues.",
    imageUrl: "https://via.placeholder.com/400",
  };

  return (
    <div className="p-6">
      <Card className="shadow-lg">
        <CardContent className="flex flex-col md:flex-row gap-6">
          <img src={artwork.imageUrl} alt={artwork.title} className="w-64 h-64 object-cover rounded-lg" />
          <div>
            <h1 className="text-2xl font-bold">{artwork.title}</h1>
            <p className="text-lg text-gray-600">by {artwork.artist}</p>
            <p className="text-xl font-semibold mt-2">{artwork.price}</p>
            <p className="mt-4">{artwork.description}</p>
            <Button className="mt-4">Purchase</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
