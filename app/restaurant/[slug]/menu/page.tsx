import Navbar from "../../../components/Navbar";
import Header from "../components/Header";
import RestaurantNavbar from '../components/RestaurantNavbar';
import RestaurantMenu from './components/RestaurantMenu';

export default function MenuPage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavbar />
            <RestaurantMenu />
          </div>
        </div>
      </main>
    </main>
  )
}
