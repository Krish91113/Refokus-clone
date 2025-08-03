import React from "react";

function Footer () {
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
                <div className="basis-1/2">
                    <h1 className="text-[11.5rem] font-semibold leading-none tracking-tighter">refokus.</h1>
                </div>
                <div className="basis-1/2 flex gap-4">
                    <div className="basis-1/3">
                        <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
                    {["instagram","twitter","Linkedin"].map((item,index) => <a key={index} className="text-zinc-600 block mt-2 capitalize" href="#">{item}</a>)}
                    </div>
                    <div className="basis-1/3">
                        <h4 className="mb-10 text-zinc-500 capitalize">sitemap</h4>
                    {["Home","Work","Camera", "Contact"].map((item,index) => <a key={index} className="text-white-600 block mt-2 capitalize" href="#">{item}</a>)}
                    </div>
                    <div className="basis-1/2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi ab labore.</p>
                        <button className="bg-violet-800 px-4 py-2 mt-10">Enterprises Partner</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;