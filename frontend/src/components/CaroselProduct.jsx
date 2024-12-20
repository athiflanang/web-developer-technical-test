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
    {
      name: "Paw Patrol Keychain",
      points: 155,
      img: "https://imgs.search.brave.com/qIgBSQuzDeVi8_FGTEuNJJYKVW7fsvtPVjfXK7FfGVc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFwSHRDTWpvdEwu/anBn",
    },
    {
      name: "Paw Patrol Keychain",
      points: 155,
      img: "https://imgs.search.brave.com/qIgBSQuzDeVi8_FGTEuNJJYKVW7fsvtPVjfXK7FfGVc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFwSHRDTWpvdEwu/anBn",
    },
  ];
  return (
    <>
      <div className="px-4 md:px-6 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-extrabold text-gray-900">
              Redeem Your Rewards
            </h2>
            <p className="text-sm text-black">Earn more to get your rewards</p>
          </div>
          <a
            href="#"
            className="text-orange-500 font-extrabold hover:text-orange-600 text-xs"
          >
            SEE ALL
          </a>
        </div>
        <div className="relative w-full">
          <div className="w-full overflow-x-auto overflow-y-hidden">
            <div className="flex space-x-0 pb-2 whitespace-nowrap">
              {rewards.map((reward, index) => (
                <div
                  key={index}
                  className="inline-block rounded-lg w-[165px] shrink-0"
                >
                  <div className="p-1.5">
                    <div className="relative aspect-square bg-gray-100 rounded-lg mb-2 overflow-hidden">
                      <img
                        src={reward.img}
                        alt={reward.name}
                        className="object-cover w-full h-full rounded-lg border-2 border-gray-300"
                      />
                    </div>
                    <h3
                      className="text-sm font-extrabold text-gray-900 truncate"
                      title={reward.name}
                    >
                      {reward.name}
                    </h3>
                    <p className="text-orange-500 font-bold text-sm mt-1">
                      {reward.points} Pts
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
