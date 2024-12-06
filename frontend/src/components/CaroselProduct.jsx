export default function CaroselProduct() {
  const rewards = [
    {
      name: "Es Teh Manis",
      points: 40,
      img: "https://www.bakmigm.com/cfind/source/thumb/images/menu/cover_w255_h255_es-teh-manis.jpg",
    },
    {
      name: "Lemon Es Teh",
      points: 45,
      img: "https://www.bakmigm.com/cfind/source/thumb/images/menu/cover_w255_h255_lemon-es-teh.jpg",
    },
    {
      name: "Paw Patrol Keychain",
      points: 155,
      img: "https://imgs.search.brave.com/qIgBSQuzDeVi8_FGTEuNJJYKVW7fsvtPVjfXK7FfGVc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFwSHRDTWpvdEwu/anBn",
    },
  ];
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-6 px-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Redeem Your Rewards
            </h2>
            <p className="text-sm text-gray-500">
              Earn more to get your rewards
            </p>
          </div>
          <a
            href="#"
            className="text-orange-500 font-semibold hover:text-orange-600"
          >
            SEE ALL
          </a>
        </div>
        <div className="carousel max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center overflow-x-auto space-x-4 pb-4">
            {rewards.map((reward, index) => (
              <div
                key={index}
                className="carousel-item basis-1/3 md:basis-1/4 lg:basis-1/5 flex-shrink-0 bg-white min-w-[200px] max-w-[200px]"
              >
                <div className="card border-0 shadow-md hover:shadow-lg transition-shadow rounded-lg">
                  <div className="p-4">
                    <div className="aspect-square relative bg-gray-100 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={reward.img}
                        alt={reward.name}
                        className="object-cover w-full h-full rounded-md"
                      />
                    </div>
                    <h3 className="font-medium text-gray-900">{reward.name}</h3>
                    <p className="text-orange-500 font-semibold">
                      {reward.points} Pts
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
