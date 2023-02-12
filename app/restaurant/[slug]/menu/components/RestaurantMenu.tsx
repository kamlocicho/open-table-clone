export default function RestaurantMenu() {
    return (
        <main className="bg-white mt-5">
            <div>
                <div className="mt-4 pb-1 mb-1">
                    <h1 className="font-bold text-4xl">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                    {/* MENU CARD */}
                    <div className="border rounded p-3 w-[49%] mb-3">
                        <h3 className="font-bold text-lg">Chicken</h3>
                        <p className="font-light mt-1 text-small">A well done spicy chicken</p>
                        <p className="mt-7">$80.00</p>
                    </div>
                    {/* MENU CARD END */}
                </div>
            </div>
        </main>
    )
}
