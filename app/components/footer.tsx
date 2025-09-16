import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-black text-white text-center py-6 shadow-lg">
      <div className="container mx-auto">
        <p className="text-lg font-bold hover:text-gray-300 transition-colors duration-300">
          © 2025 frannzg
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          {/* Opcional: Puedes añadir iconos de redes sociales aquí */}
          {/* <a href="#" className="hover:text-gray-300 transition-colors duration-300">
            GitHub
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;