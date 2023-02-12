"use client";

import { useRouter } from 'next/navigation';

export default function ReservationSection() {
    const router = useRouter();

    return (
        <div className="w-[27%] relative text-reg">
            <div className="fixed w-[15%] bg-white p-3 shadow">
                <div className="text-center border-b pb-2 font-bold">
                    <h4 className="mr-7 text-lg">Make a reservation</h4>
                </div>
                <div className="my-3 flex flex-col">
                    <label htmlFor="size">Party Size</label>
                    <select name="size" className="py-3 border-b font-light" id="size">
                        <option value="">1 person</option>
                        <option value="">2 people</option>
                    </select>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="date">Date</label>
                        <input type="text" id="date" className="py-3 border-b font-light w-28" />
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="time">Time</label>
                        <select name="time" id="time" className="py-3 border-b font-light">
                            <option value="">7:30 AM</option>
                            <option value="">9:30 AM</option>
                        </select>
                    </div>
                </div>
                <div className="mt-5">
                    <button 
                    className="bg-red-600 rounded w-full px-4 text-white font-bold h-16"
                    onClick={() => router.push(`/reserve/thai-thai-poznan`)}
                    >Find a time</button>
                </div>
            </div>
        </div>
    )
}
