import React from "react";
import Product from "./Product";

function Products () {
    var products = [
        {title : "arqitel", descriptiom: "Krish Manoj barawnaf fejjg hho o qhg ghohg hgogq hgohg hgqgejhh jvndsjg njvnjrg kjdnvjwh4it sdkjjgrg jgibrg jkdvsdge" , live: true , case :false},
        {title : "Layout land", descriptiom: "Krish Manoj barawnaf fejjg hho o qhg ghohg hgogq hgohg hgqgejhh jvndsjg njvnjrg kjdnvjwh4it sdkjjgrg jgibrg jkdvsdge" , live: true , case :false},
        {title : "YIR 2022", descriptiom: "Krish Manoj barawnaf fejjg hho o qhg ghohg hgogq hgohg hgqgejhh jvndsjg njvnjrg kjdnvjwh4it sdkjjgrg jgibrg jkdvsdge" , live: true , case :false},
        {title : "TTR", descriptiom: "Krish Manoj barawnaf fejjg hho o qhg ghohg hgogq hgohg hgqgejhh jvndsjg njvnjrg kjdnvjwh4it sdkjjgrg jgibrg jkdvsdge" , live: true , case :true},
        {title : "mainv", descriptiom: "Krish Manoj barawnaf fejjg hho o qhg ghohg hgogq hgohg hgqgejhh jvndsjg njvnjrg kjdnvjwh4it sdkjjgrg jgibrg jkdvsdge" , live: true , case :false},
        
    ]


    return(
        <div className="mt-20">
            {products.map((val,index) => <Product val={val} />)}
        </div>
    )
}
export default Products;