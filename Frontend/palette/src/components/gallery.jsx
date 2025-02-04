import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Gallery() {
  const [artworks] = useState([
    { id: 1, title: "Abstract Bliss", artist: "John Smith", imageUrl: "https://via.placeholder.com/200" },
    { id: 2, title: "Ocean Waves", artist: "Alice Brown", imageUrl: "https://via.placeholder.com/200" },
    { id: 3, title: "City Lights", artist: "David Lee", imageUrl: "https://via.placeholder.com/200" },
  ]);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {artworks.map((art) => (
        <Card key={art.id} className="shadow-lg">
          <CardContent>
            <img src={art.imageUrl} alt={art.title} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="text-lg font-semibold mt-2">{art.title}</h2>
            <p className="text-sm text-gray-600">by {art.artist}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
