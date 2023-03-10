import Link from "next/link";

export default function Card() {
    return (
        <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
            <Link href={`/restaurant/thai-thai-poznan`}>
                <img src="https://resizer.otstatic.com/v2/photos/wide-huge/3/26728801.jpg" alt="restaurant image" className="w-full h-36" />
                <div className="p-1">
                    <h3 className="font-bold text-2xl mb-2">Thai Thai Poznan</h3>
                    <div className="flex items-start">
                        <div className="flex mb-2">
                            *****
                        </div>
                        <p className="ml-2">77 reviews</p>
                    </div>
                    <div className="text-reg font-light flex capitalize">
                        <p className="mr-3">Thai</p>
                        <p className="mr-3">$$$$</p>
                        <p className="mr-3">Toronto</p>
                    </div>
                    <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
                </div>
            </Link>
        </div>
    )
}
