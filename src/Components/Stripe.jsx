
import React from "react";

function Stripe ({val}) {
    
    return (
        <div className="w-[16.66%] px-10 py-5 border-t-[1px] border-r-[1px] flex justify-between items-center border-b-[1px] border-zinc-600">
            <img src={val.url} alt="" />
            <span className="font-semibold ml-5">{val.number}</span>
        </div>
    )
}
export default Stripe;  