import {
  ShoppingBasket,
  Gift,
  Ticket,
  Mail,
  CalendarDays,
  MessagesSquare,
} from "lucide-react";

export default function Options() {
  return (
    <>
      <div className="grid grid-cols-3 items-center justify-items-center gap-10 mt-10">
        <div className="flex flex-col items-center justify-center">
          <button className="rounded-[100px] p-2 bg-cyan-100 hover:bg-cyan-200 transition duration-200 hover:shadow-lg">
            <ShoppingBasket size={40} color="#18b7ec" />
          </button>
          <p className="text-xs text-black mt-2">Order</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="rounded-[100px] p-2 bg-red-100 hover:bg-red-200 transition duration-200 hover:shadow-lg">
            <Gift size={40} color="#ec4b4b" />
          </button>
          <p className="text-xs text-black mt-2">Redeem</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="rounded-[100px] p-2 bg-pink-100 hover:bg-pink-200 transition duration-200 hover:shadow-lg">
            <Ticket size={40} color="#e82181" />
          </button>
          <p className="text-xs text-black mt-2">My Vouchers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="rounded-[100px] p-2 bg-blue-100 hover:bg-blue-200 transition duration-200 hover:shadow-lg">
            <Mail size={40} color="#5973f3" />
          </button>
          <p className="text-xs text-black mt-2">Privilege</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="rounded-[100px] p-2 bg-purple-100 hover:bg-purple-200 transition duration-200 hover:shadow-lg">
            <CalendarDays size={40} color="#b21f8b" />
          </button>
          <p className="text-xs text-black mt-2">History</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="rounded-[100px] p-2 bg-green-100 hover:bg-green-200 transition duration-200 hover:shadow-lg">
            <MessagesSquare size={40} color="#62fb60" />
          </button>
          <p className="text-xs text-black mt-2">Contact Us</p>
        </div>
      </div>
    </>
  );
}
