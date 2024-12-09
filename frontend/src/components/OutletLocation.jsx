import { MapPin } from "lucide-react";

export default function OutletLocation() {
  const locations = [
    {
      name: "Citra Garden 6",
      address:
        "Food Junction Citra 6 Blok L2-A Citra Garden City, Jakarta Barat",
      distance: "2.4 km",
    },
    {
      name: "Emporium Mall",
      address:
        "Emporium Pluit Mall Lt. 2 Jalan Pluit Selatan Raya, Jakarta Utara",
      distance: "6.2 km",
    },
    {
      name: "Puri Indah Mall",
      address:
        "Bakmi GM Puri Indah Mall, Mall Puri Indah Lt. I Unit 103 Jl. Puri Agung Kembangan, Jakarta Barat",
      distance: "6.4 km",
    },
    {
      name: "Lippo Mall Puri",
      address:
        "Bakmi GM Lippo Mall Puri, Food Avenue Unit FSC-07, Gedung St. Moritz Lippo Mall Puri Lantai 1, Jl. Puri Indah Boulevard Blok U1, Jakarta Barat",
      distance: "6.6 km",
    },
    {
      name: "Terminal 3 Ultimate",
      address:
        "Bandara Soekarno Hatta Terminal 3 Ultimate Domestic Landside, Lantai 2 Ultimate Food Terminal, tangerang",
      distance: "7.7 km",
    },
  ];
  return (
    <>
      <div className="max-w-md mx-auto p-4 w-full pb-10 space-y-4">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-foreground text-black">
            Outlet Location
          </h1>
          <p className="text-sm text-muted-foreground font-semibold text-black">
            Explore your options
          </p>
        </div>

        <div className="space-y-4">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex items-start gap-3 pb-4 border-b last:border-b-0"
            >
              <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
              <div className="space-y-1 min-w-0">
                <h2 className="font-medium text-foreground text-black">
                  {location.name}
                </h2>
                <p className="text-sm text-muted-foreground break-words">
                  {location.address}
                </p>
                <p className="text-sm text-muted-foreground">
                  {location.distance}
                </p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="block text-orange-500 font-semibold hover:text-orange-600 text-left mt-4"
        >
          SEE ALL
        </a>
      </div>
    </>
  );
}
