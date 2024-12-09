'use client';

export default function Home() {
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
              <div><img className="grid justify-self-end mr-22 pt-1 size-10 rounded-full" src="https://i.postimg.cc/PJYb59mq/94dd17300b4b6897d88071c4f42e0b80.jpg"/></div>
            </section>
          </div>
          {/* ส่วนข้อมูล */}
            <section>
              <span className="inline-flex pl-10">
                  <h1 className="text-blue-600 pt-2 font-semibold text-xl hover:underline underline-offset-4 decoration-2 pr-3">จัดการรายชื่อนักเรียน</h1>
                    <img className="w-6 h-4 mt-2" src="https://i.postimg.cc/bJvFL4sh/arrow-forward-ios-24dp-5-F6368-FILL0-wght400-GRAD0-opsz24.png"/>
                  <h1 className="text-blue-600 pt-2 font-semibold text-xl hover:underline underline-offset-4 decoration-2 pl-3">สร้างรายชื่อนักเรียน</h1>
              </span>       
                  <p className="pt-4 pb-2 pl-10 text-sm text-gray-500 font-bold">ข้อมูลเบื้องต้น</p>
                  {/* ข้อมูลย่อย */}
                  <div className="grid grid-cols-2 gap-4 pl-10">
                    <div>
                      <input id="Firstname" className="bg-gray-200 rounded-md h-10 w-4/6 outline-none tracking-wider" placeholder="กรุณากรอกชื่อ" type="text"/>
                    </div>
                    <div>
                      <input id="Lastname" className="bg-gray-200 rounded-md h-10 w-4/6 outline-none tracking-wider" placeholder="กรุณากรอกนามสกุล" type="text"/>
                    </div>
                    <div>
                      <input id="Phonenumber" className="bg-gray-200 rounded-md h-10 w-4/6 outline-none tracking-wider" placeholder="กรุณากรอกเบอร์โทรศัพท์" type="text"/>
                    </div>
                    <div>
                      <input id="Email" className="bg-gray-200 rounded-md h-10 w-4/6 outline-none tracking-wider" placeholder="กรุณากรอกอีเมล" type="email"/>
                    </div>
                    <div>
                      <input id="Address" className="bg-gray-200 rounded-md h-10 w-4/6 outline-none tracking-wider" placeholder="กรุณากรอกที่อยู่" type="text"/>
                    </div>
                  </div>
            </section>
            <section>
              <p className="pt-10 pb-2 pl-10 text-sm text-gray-500 font-bold">ชั้นเรียน</p>
                <div className="grid grid-row-2 gap-4 pl-10">
                  <div>
                    <select name="ชั้นปี" id="Class"className="bg-gray-200 rounded-md h-10 w-2/6 outline-none">
                      <option>กรุณาเลือกชั้นปี</option>
                        <option>ชั้นปีที่1</option>
                          <option>ชั้นปีที่2</option>
                            <option>ชั้นปีที่3</option>
                          <option>ชั้นปีที่4</option>
                        <option>ชั้นปีที่5</option>
                      <option>ชั้นปีที่6</option>
                    </select> 
                  </div>
                <div>
                    <select name="ห้องที่" id="Class"className="bg-gray-200 rounded-md h-10 w-2/6 outline-none">
                    <option>กรุณาเลือกห้อง</option>
                      <option>ห้องที่1</option>
                        <option>ห้องที่2</option>
                          <option>ห้องที่3</option>
                            <option>ห้องที่4</option>
                              <option>ห้องที่5</option>
                                <option>ห้องที่6</option>
                                  <option>ห้องที่7</option>
                                    <option>ห้องที่8</option>
                                  <option>ห้องที่9</option>
                                <option>ห้องที่10</option>
                              <option>ห้องที่11</option>
                            <option>ห้องที่12</option>
                          <option>ห้องที่13</option>
                        <option>ห้องที่14</option>
                      <option>ห้องที่15</option>
                    </select> 
                  </div>
                </div>
            </section>
            <section>
              <div className="pl-10 pt-10 border-t-2 border-gray-300 mt-10">
                <label>หมายเหตุ<textarea className="bg-gray-200 rounded-md h-24 w-2/6 outline-none flex justify-start pt-2 tracking-wider resize-none" placeholder="กรุณากรอกหมายเหตุ"></textarea></label>
                
              <label className="inline-grid items-center cursor-pointer">
                <label>สถานะใช้งาน</label>
              <input type="checkbox" value="" className="sr-only peer"></input>
                <div className="pl-10 relative w-14 h-7 bg-gray-200 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
              </div>
            </section>
            <section>
              <div className="pl-10">
                <button className="text-blue-700 rounded-xl w-28 h-8 ring ring-blue-700 ring-offset-0 hover:bg-blue-700 hover:text-white text-bold">
                  บันทึก
                </button>
                <button className="text-blue-700 rounded-xl w-28 h-8 ring ring-blue-700 ring-offset-0 hover:bg-blue-700 hover:text-white m-10 text-bold">
                  ย้อนกลับ
                </button>
              </div>
            </section>
        </div>
      </div>
    </div>
  );
}     