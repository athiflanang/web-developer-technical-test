import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function PrevilegeCards() {
  const privileges = [
    {
      description: "PLATINUM Member 💎",
      expiry: "Exp: 31 Dec 2024",
      img: "https://www.bakmigm.com/cfind/source/thumb/images/service/cover_w540_h400_c-1.jpg",
      bgColor: "bg-blue-500",
    },
    {
      description: "GOLD Member ✨",
      expiry: "Exp: 31 Dec 2024",
      img: "https://www.bakmigm.com/cfind/source/thumb/images/cover_w540_h400_p1158462-_540x400.png",
      bgColor: "bg-yellow-500",
    },
    {
      description: "Birthday Reward 🥳",
      expiry: "Exp: 31 Dec 2024",
      img: "https://www.bakmigm.com/cfind/source/thumb/images/menu/cover_w540_h400_kidsmeal-sam-1.png",
      bgColor: "bg-blue-500",
    },
    {
      description: "Redeem Point 💰",
      expiry: "Exp: 31 Dec 2024",
      img: "https://www.bakmigm.com/cfind/source/thumb/images/service/cover_w487_h447_content-phone.png",
      bgColor: "bg-red-500",
    },
    {
      description: "Sign Up Reward 💰",
      expiry: "Exp: 31 Dec 2024",
      img: "https://www.bakmigm.com/cfind/source/thumb/images/service/cover_w540_h500_services-2.jpg",
      bgColor: "bg-orange-500",
    },
    {
      description: "Benefit Gmania 💰",
      expiry: "Exp: 31 Dec 2024",
      img: "https://www.bakmigm.com/cfind/source/thumb/images/food-truck/cover_w540_h500_tw432_th400_x150_y10_foodtruck-548.jpg",
      bgColor: "bg-pink-500",
    },
    {
      description: "FAQ Member",
      expiry: "Exp: 31 Mar 2024",
      img: "https://www.bakmigm.com/cfind/source/thumb/images/cover_w540_h400_782_540x400.jpg",
      bgColor: "bg-green-500",
    },
  ];
  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-extrabold text-black">Privileges</h2>
        <p className="mb-8 text-black text-sm">
          Keep discovering our promo and news
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {privileges.map((privilege, index) => (
            <Card
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition-shadow w-full"
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={privilege.img}
                  alt={privilege.description}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardBody className="px-4 py-2">
                <Typography
                  variant="small"
                  className="text-sm font-bold text-black mt-1 mb-3"
                >
                  {privilege.description}
                </Typography>
                <Typography
                  variant="small"
                  className="text-sm text-gray-500 mb-2"
                >
                  {privilege.expiry}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
