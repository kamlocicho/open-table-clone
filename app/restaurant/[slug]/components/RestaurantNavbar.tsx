import Link from "next/link";

export default function RestaurantNavbar() {
    return (
        <nav className="flex text-reg border-b pb-2">
            <Link href="/restaurant/thai-thai-poznan/" className="mr-7">Overview</Link>
            <Link href="/restaurant/thai-thai-poznan/menu" className="mr-7">Menu</Link>
        </nav>
    )
}
