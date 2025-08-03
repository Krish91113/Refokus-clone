import { motion } from "framer-motion";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
function Card ({width, start , para, hover="false"}) {

    return (
        <motion.div whileHover={{backgroundColor : hover === "true" && "#7443ff", padding: "25px"}} className={`${width} bg-zinc-800 rounded-xl hover:${hover} p-5 min-h-[30rem] flex flex-col justify-between`}>
            <div className="w-full">
                <div className="w-full flex justify-between items-center">
                    {
                        start === true && (
                            <h1>Get in touch</h1>
                        )
                    }
                    {
                        para === true && (
                            <h1>Up Next: News</h1>
                        )
                    }
                
                <AiOutlineArrowRight/>

            </div>
                {
                    start === true && (
                        <h1 className="text-3xl font-medium mt-10">Let's get to it, together.</h1>
                    )
                }
                {
                    para === true && (
                        <h1 className="text-3xl font-medium mt-10">Insights and behind the scenes</h1>
                    )
                }
            </div>
            <div className=" w-full down">
                {
                    start === true && (
                        <>
                            <h1 className="text-6xl font-semibold tracking-tighter leading-none">start a project</h1>
                            <button className="rounded-full px-6 py-2 border-[1px] border-zinc-50 mt-5">Contact us</button>
                        </>
                    )
                }
                {
                    para === true && (
                        <p className="text-sm text-zinc-500 font-medium mt-2">Explore what drives our team.</p>
                    )
                }
                
            </div>
        </motion.div>
    )
}
export default Card 