import React from "react";
import { IoMdReturnRight } from "react-icons/io";
function Button ({title = "Get Started"}) {


    return (
        <div className="bg-zinc-100 w-40 text-black flex justify-between items-center rounded-full px-4 py-2 border-b-[1px] border-zinc-100">
            <span className="text-sm font-regular">{title}</span>
            <IoMdReturnRight />
        </div>
    )
}
export default Button;