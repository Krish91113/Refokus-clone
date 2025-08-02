import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
function Card ({width}) {

    return (
        <div className={`${width} bg-zinc-800 rounded-xl p-5`}>
            <div className="w-full">
                <div className="w-full flex justify-between items-center">
                <h1>Heading</h1>
                <AiOutlineArrowRight/>

            </div>
                <h1 className="text-3xl font-medium mt-10">Whatever heading</h1>
            </div>
            <div className="mt-60">
                <h1 className="text-6xl font-semibold tracking-tighter leading-none">start a project</h1>
                <button className="rounded-full px-6 py-2 border-[1px] border-zinc-50 mt-5">Contact us</button>
                <p className="text-sm text-zinc-500 font-medium mt-2">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
    )
}
export default Card 