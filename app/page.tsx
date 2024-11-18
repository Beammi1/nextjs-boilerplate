'use client';

import { useState } from "react";

const smoothScrollStyle = {
  scrollBehavior: 'smooth',
};

export default function Home() {
  return (
  <html className="scroll-smooth">

      <div className="bg-white h-20 shadow-2xl">
        <div className="bg-white h-20 shadow-2xl overflow-hidden fixed top-0 w-screen">
      {/* nav */}

          <h1 className="inline font-extrabold text-blue-600 pl-6 text-2xl pt-5">Aldthawin</h1>
          <ul className="text-black font-bold flex justify-end space-x-10 pr-20 pb-2">
            <li className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-cyan-400 to-blue-500 duration-300 rounded-md hover:shadow-lg hover:shadow-blue-500/50"><a href="#About me">About me</a></li>
            <li className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-cyan-400 to-blue-500 duration-300 rounded-md hover:shadow-lg hover:shadow-blue-500/50"><a href="#My skills">My skills</a></li>
            <li className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-cyan-400 to-blue-500 duration-300 rounded-md hover:shadow-lg hover:shadow-blue-500/50"><a href="#Contacts">Contacts</a></li>
          </ul>
      </div>
      </div>
        
      {/* info */}
      <section className="bg-gray-200 h-screen">
        <div className="grid grid-rows-2 grid-flow-col gap-2 h-screen">
          <div className="row-span-3 col-span-2 pt-3 text-center">
            <h2 className="font-semibold text-black text-2xl pt-10" id="About me">About me</h2>
            <div className="flex justify-self-center">
              <img className="h-60 w-30 rounded-lg" src="https://i.postimg.cc/L5GmH2zp/download-3.jpg"/>
            </div>
            <div className="font-bold text-xl pt-5 m-3 place-items-center">
              <p>ชื่อ : อรรฐาวิณทฐ์ โดษะนันท์</p>
              <p>ชื่อเล่น : บีม</p>
              <p>เกิดวันที่ 24 กันยายน พ.ศ. 2551 อายุ 16 ปี และตอนนี้กำลังเรียนอยู่ที่โรงเรียนสตรีอ่างทอง</p>
              <p>ผมชอบเล่นเกม, ฟังเพลง, และเรียนรู้สิ่งใหม่ ๆ ที่ท้าทายครับ</p>
            </div>
          </div>
          <div className="row-span-3 border-l-4 border-gray-300 pt-3 text-center">
            <h2 className="font-semibold text-black text-2xl pt-2" id="SKills">My skills</h2>
            <div className="grid grid-rows-2 grid-flow-col gap-4 justify-items-center">
              <img className="h-24 w-24" src="https://i.postimg.cc/pVmyDMqL/Other-html-5-icon.png"/>
              <img className="h-24 w-24" src="https://i.postimg.cc/Lsk88H9x/68747470733a2f2f63646e342e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6c6f676f732d332f313831.webp"/>
              <img className="h-24 w-24" src="https://i.postimg.cc/4dB4pBht/canva.png"/>
              <img className="h-24 w-24" src="https://i.postimg.cc/rpZYW4ws/css3-512.webp"/>
            </div>
          </div>
        </div>  
      </section>

      {/* contacts */}  
      <section className="bg-gray-300 h-24"> 
        <span>
          <h3 className="font-semibold text-black text-2xl pt-2 text-center" id="Contacts">Contacts</h3>
          <div className="text-center">
            <a href="https://www.facebook.com/profile.php?id=100011744655061" target="_blank" className="m-3 font-semibold hover:text-sky-500">Facebook</a>
            <a href="https://www.instagram.com/08_bmm?igsh=aXVmMzJnM2p4enZu" target="_blank" className="m-3 font-semibold hover:text-sky-500">Instagram</a>
            <a href="https://www.tiktok.com/@starris112?_t=8rATL6g8crw&_r=1" target="_blank" className="m-3 font-semibold hover:text-sky-500">Tiktok</a>
          </div>
        </span>
      </section>
  </html>
  );
}