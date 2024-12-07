'use client';

import { useState } from "react";

export default function page() {
  return (
    <div>
      <div className="flex h-screen">
        <div className=" bg-white w-1/6">
          <img className="w-24 justify-self-center pt-4" src="https://i.postimg.cc/pdz7wBZR/unnamed.png"/>
                  <h1 className="text-center text-blue-800 font-extrabold text-lg pb-2 border-b-2 border-gray-300">ระบบจัดเก็บข้อมูล<br/>โรงเรียนสตรีอ่างทอง</h1>
                  <div className="flex justify-center">
                <img className="w-6 pt-4" src="https://i.postimg.cc/Cxz9Nq6H/group-24dp-5-F6368-FILL0-wght400-GRAD0-opsz24.png"/>
                <p className="ml-2 pt-4 text-mg text-gray-500">จัดการรายชื่อนักเรียน</p>
              </div>
            </div>
          {/* โปรไฟล์ */}
          <div className=" bg-white w-5/6">
            <div className="grid grid-rows-1 grid-flow-col gap-1">
              <section className="col-span-2 h-14 border-b-2 border-gray-300">
                <div className="flex justify-self-end pr-4 pt-5">Profile</div>
              </section>
            </div>
          </div>
      </div>
    </div>
);
}