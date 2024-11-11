import React from "react";

function Hero() {
  return (
    <div className="grid lg:grid-rows-4 md:grid-rows-8 grid-rows-8 grid-flow-col h-[500px] gap-1 -z-10">
      <a
        href="#"
        className="row-span-4 :row-span-4 border w-full relative overflow-hidden"
      >
        <img
          src="https://images.tokopedia.net/img/KRMmCm/2024/3/21/007d8a06-a374-4d5f-8cd6-b35a2772d6b8.jpg"
          alt=""
          className="w-full h-full object-cover brightness-50 transform duration-500 hover:scale-110"
        />
        <div className="absolute bottom-2 p-5 lg:text-xl md:text-xs text-white text-sm">
          Persiapan IFW 2024? Tokopedia Fashion Market x Indonesia Fashion Week
          Punya Kejutan Bua...
        </div>
      </a>
      <a href="#" className="border row-span-2 relative overflow-hidden">
        <img
          src="https://images.tokopedia.net/img/KRMmCm/2023/8/23/de714108-8126-4458-8efc-ba57023fbf74.jpg"
          alt=""
          className="w-full h-full object-cover brightness-50 transform duration-500 hover:scale-110"
        />
        <div className="absolute bottom-1 p-5  lg:text-xl md:text-xs text-white text-sm">
          Brand fesyen THENBLANK ciptakan peluang dalam negeri bersama Tokopedia
        </div>
      </a>
      <div
        href="#"
        className="grid grid-col-1 grid-flow-col gap-1 border row-span-2"
      >
        <a href="#" className="col-span-1 border relative overflow-hidden">
          <img
            src="https://images.tokopedia.net/img/KRMmCm/2023/8/21/0b782512-f8ff-49b4-8fc6-81364d662e4d.jpg"
            alt=""
            className="w-full h-full object-cover brightness-50 transform duration-500 hover:scale-125"
          />
          <div className="absolute bottom-1  p-4 lg:text-xl md:text-xs text-white text-sm">
            Implementasi AI di Tokopedia, dari Gudang Pintar
          </div>
        </a>
        <a href="#" className="col-span-1 border relative overflow-hidden">
          <img
            src="https://images.tokopedia.net/img/KRMmCm/2023/7/24/c88c2aa0-528a-436f-b279-2bf3df8db674.jpg"
            alt=""
            className="w-full h-full object-cover brightness-50 transform duration-500 hover:scale-125"
          />
          <div className="absolute bottom-1 p-4 lg:text-xl md:text-xs text-white text-sm">
            CPO Tokopedia Berbagi Cara menerapkan Data...
          </div>
        </a>
      </div>
    </div>
  );
}

export default Hero;
