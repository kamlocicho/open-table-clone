import Link from "next/link";
import Navbar from "../../components/Navbar";
import Header from "./components/Header";
import ReservationSection from "./components/ReservationCard";
import RestaurantDescription from "./components/RestaurantDescription";
import RestaurantImages from "./components/RestaurantImages";
import RestaurantNavbar from "./components/RestaurantNavbar";
import RestaurantRating from "./components/RestaurantRating";
import RestaurantReviews from "./components/RestaurantReviews";
import RestaurantTitle from "./components/RestaurantTitle";

export default function RestaurantPage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />

        <div className="flex m-auto w-2/3 justify-between items-start -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavbar />
            <RestaurantTitle />
            <RestaurantRating />
            <RestaurantDescription />
            <RestaurantImages />
            <RestaurantReviews />
          </div>
          
          <ReservationSection />
        </div>

      </main>
    </main>
  )
}
