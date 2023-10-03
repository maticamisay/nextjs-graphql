import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-500 p-6 mt-12 w-full">
      <div className="container mx-auto text-center">
        <div className="mb-4 flex justify-center">
          <a href="https://www.linkedin.com/in/mati-camisay" target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover:text-blue-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/maticamisay" target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover:text-blue-300">
            <FaGithub size={24} />
          </a>
        </div>
        <p className="text-white">Derechos Reservados, Mi Proyecto 2023.</p>
      </div>
    </footer>
  );
};

export default Footer;
