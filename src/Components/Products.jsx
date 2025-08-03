import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
    const products = [
        { title: "arqitel", descriptiom: "Krish Manoj barawnaf fejjg hho o qhg ghohg hgogq hgohg hgqgejhh jvndsjg njvnjrg kjdnvjwh4it sdkjjgrg jgibrg jkdvsdge", live: true, case: false },
        { title: "Layout", descriptiom: "Krish Manoj barawnaf fejjg hho o qhg ghohg hgogq hgohg hgqgejhh jvndsjg njvnjrg kjdnvjwh4it sdkjjgrg jgibrg jkdvsdge", live: true, case: false },
        { title: "YIR 2022", descriptiom: "Krish Manoj barawnaf fejjg hho o qhg ghohg hgogq hgohg hgqgejhh jvndsjg njvnjrg kjdnvjwh4it sdkjjgrg jgibrg jkdvsdge", live: true, case: false },
        { title: "TTR", descriptiom: "Krish Manoj barawnaf fejjg hho o qhg ghohg hgogq hgohg hgqgejhh jvndsjg njvnjrg kjdnvjwh4it sdkjjgrg jgibrg jkdvsdge", live: true, case: true },
        { title: "mainv", descriptiom: "Krish Manoj barawnaf fejjg hho o qhg ghohg hgogq hgohg hgqgejhh jvndsjg njvnjrg kjdnvjwh4it sdkjjgrg jgibrg jkdvsdge", live: true, case: false },
    ];

    const [pos, setPos] = useState(0);

    const mover = (val) => {
        setPos(val * 23);
    };

    return (
        <div className="mt-32 relative">
            {products.map((val, index) => (
                <Product key={index} mover={mover} val={val} count={index} />
            ))}
            <div className="w-full h-full top-0 absolute pointer-events-none">
                <motion.div
                    animate={{ y: `${pos}rem`, x: "-50%" }}
                    transition={{ type: "spring", stiffness: 70, damping: 15, ease: [0.68, -0.6, 0.32, 1.6] , duration: 0.6 }}
                    className="w-[28rem] h-[23rem] bg-white absolute left-[44%] overflow-hidden"
                >
                    <motion.div
                     animate={{y : -pos+ `rem`}}
                     transition={{ease: [0.68, -0.6, 0.32, 1.6] , duration: 0.6 }}
                      className="w-full h-full bg-sky-100 "></motion.div>
                    <motion.div animate={{y : -pos+ `rem`}} transition={{ease: [0.68, -0.6, 0.32, 1.6] , duration: 0.5 }} className="w-full h-full bg-sky-200 "></motion.div>
                    <motion.div animate={{y : -pos+ `rem`}} transition={{ease: [0.68, -0.6, 0.32, 1.6] , duration: 0.5 }} className="w-full h-full bg-sky-300 "></motion.div>
                    <motion.div animate={{y : -pos+ `rem`}} transition={{ease: [0.68, -0.6, 0.32, 1.6] , duration: 0.5 }} className="w-full h-full bg-sky-400 "></motion.div>
                    <motion.div animate={{y : -pos+ `rem`}} transition={{ease: [0.68, -0.6, 0.32, 1.6] , duration: 0.5 }} className="w-full h-full bg-sky-500 "></motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Products;
