export default function Banner() {
  return (
    <>
      <div className="px-6 md:px-12">
        <div className="w-full max-w-3xl rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-6">
              <div>
                <h2 className="text-xl font-semibold md:text-2xl">
                  Dapatkan 5 poin dengan mengajak teman kamu
                </h2>
              </div>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-white py-3 px-5 rounded-lg font-bold text-blue-500 hover:bg-slate-300 transition duration-200 transform hover:scale-105 hover:shadow-lg">
                REFER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
