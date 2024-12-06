import {
  ShoppingBasket,
  Gift,
  Ticket,
  Mail,
  CalendarDays,
  MessageSquare,
} from "lucide-react";

export default function Options() {
  return (
    <>
      <div className="grid grid-cols-3 items-center justify-items-center gap-10 mt-10">
        <div className="flex flex-col items-center justify-center">
          <button className="btn btn-circle btn-ghost">
            <ShoppingBasket size={40} color="#18b7ec" />
          </button>
          <p className="text-sm text-black">Order</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="btn btn-circle btn-ghost">
            <Gift size={40} color="#ec4b4b" />
          </button>
          <p className="text-sm text-black">Redeem</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="btn btn-circle btn-ghost">
            <Ticket size={40} color="#ec4bb9" />
          </button>
          <p className="text-sm text-black">My Vouchers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="btn btn-circle btn-ghost">
            <Mail size={40} color="#5973f3" />
          </button>
          <p className="text-sm text-black">Privilege</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="btn btn-circle btn-ghost">
            <CalendarDays size={40} color="#cbaafd" />
          </button>
          <p className="text-sm text-black">History</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="btn btn-circle btn-ghost">
            <MessageSquare size={40} color="#62fb60" />
          </button>
          <p className="text-sm text-black">Contact Us</p>
        </div>
      </div>
    </>
  );
}
