import React from "react";

function Footer() {
  return (
    <footer className="py-4 flex flex-col md:flex-row text-center md:text-end space-x-3">
      <p className="hidden md:block text-lg">&copy; 2024</p>
      <a href="#" className="text-lg hover:text-blue-500">Twitter</a>
      <a href="#" className="text-lg hover:text-blue-500">LinkedIn</a>
      <a href="#" className="text-lg hover:text-blue-500">Email</a>
      <a href="#" className="text-lg hover:text-blue-500">RSS feed</a>
      <a href="#" className="text-lg hover:text-blue-500">Add to feed</a>
      <p className="block md:hidden text-lg ">&copy; 2024</p>
    </footer>
  );
}

export default Footer;
