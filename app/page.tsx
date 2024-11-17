'use client';

import { useState } from "react";

export default function Home() {
  return (
    <div>
      <div className="bg-white h-24 shadow-2xl">
      {/* nav */}
        <h1 className="font-extrabold text-blue-600 pl-6 text-2xl pt-5 ">Aldthawin</h1>
        <ul className="text-black font-bold flex justify-end space-x-10 pr-20 pb-2">
          <p className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-cyan-400 to-blue-500 duration-300 rounded-md hover:shadow-lg hover:shadow-blue-500/50"><a href="">About me</a></p>
          <p className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-cyan-400 to-blue-500 duration-300 rounded-md hover:shadow-lg hover:shadow-blue-500/50"><a href="">My skills</a></p>
          <p className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-cyan-400 to-blue-500 duration-300 rounded-md hover:shadow-lg hover:shadow-blue-500/50"><a href="">Contacts</a></p>
        </ul>
        </div>
      {/* info */}
      <section className="bg-gray-200 h-screen">
        <div className="grid grid-rows-2 grid-flow-col gap-2 h-screen">
          <div className="row-span-3 col-span-2 pt-3 text-center">
            <h2 className="font-semibold text-black text-2xl pt-2">About me</h2>
            <p>ชื่อ : อรรฐาวิณทฐ์ โดษะนันท์</p>
            <p>ชื่อเล่น : บีม</p>
            <img className="h-60 rounded-full place-items-center" src="https://i.postimg.cc/L5GmH2zp/download-3.jpg"/>
            <p></p>
          </div>
          <div className="row-span-3 border-l-4 border-gray-300 pt-3 text-center">
          </div>
        </div>  
      </section>  
      {/* contacts */}  
      <section className="bg-gray-300 h-24"> 
        <span>
          
        </span>
      </section>
    </div>
  );
}