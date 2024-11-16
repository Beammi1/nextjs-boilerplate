'use client';

import { useState } from "react";

export default function Home() {
  return (
    <div>
    <section className="bg-white h-24">
      {/* nav */}
        <h1 className="font-extrabold text-blue-600 pl-6 text-2xl pt-5 ">Aldthawin</h1>
        <ul className="text-black font-bold flex justify-end space-x-10 pr-20 pb-2">
          <p className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-cyan-400 to-blue-500 duration-300 rounded-md shadow-sm"><a href="">About me</a></p>
          <p className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-cyan-400 to-blue-500 duration-300 rounded-md shadow-sm"><a href="">My skills</a></p>
          <p className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-cyan-400 to-blue-500 duration-300 rounded-md shadow-sm"><a href="">Contacts</a></p>
        </ul>
        
      </section>
      
      {/* info */}
      <section className="bg-gray-200 h-screen border-t-8 border-white shadow-2xl">
        
      </section>
    </div>
  );
}