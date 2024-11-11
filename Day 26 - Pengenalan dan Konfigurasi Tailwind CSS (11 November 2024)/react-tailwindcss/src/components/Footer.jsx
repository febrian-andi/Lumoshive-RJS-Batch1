import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-200 text-gray-500 py-8 mt-8">
      <div className="mx-auto lg:flex lg:justify-between text-sm text-center lg:text-left mx-auto lg:px-24">
        <p>&copy; 2009-2024, PT Tokopedia</p>
        <nav>
          <ul className="md:flex mt-4 md:mt-0 justify-center lg:justify-end space-x-4">
            <li>
              <a href="#" className="hover:text-green-500">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Pusat Penjual
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Mobile Apps
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Mitra
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Karir
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Tokopedia Care
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                B@B Digital
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
