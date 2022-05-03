import React from "react";
import userData from "@constants/data";

export default function About() {
    return (
        <section className="bg-white dark:bg-gray-800">

            <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                    Price
                </h1>
            </div>

            <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
                <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">


                    {/* Text area */}
                    <div className="col-span-1 md:col-span-2">
                        100500 USD
                    </div>
                </div>
            </div>
        </section>
    );
}
