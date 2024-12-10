export default function Banner() {
  return (
    <>
      <div className="px-6 md:px-12">
        <div className="w-full max-w-3xl rounded-lg bg-blue-500 p-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center justify-center w-full md:w-auto">
              <h2 className="text-xl font-semibold md:text-2xl text-right md:text-right">
                Dapatkan 5 poin dengan mengajak teman kamu
              </h2>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto text-right md:text-right">
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
