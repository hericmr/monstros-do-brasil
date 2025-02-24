import React from "react";

const Navbar = ({ onTitleClick = () => {} }) => {
  return (
    // No componente Navbar.js
<header className="fixed top-0 left-0 right-0 z-50 bg-green-900/80 backdrop-blur-md text-white h-16"> 
      <div className="container mx-auto px-4 py-1 flex items-center justify-between">
        {/* Logo e título */}
        <div className="flex items-center">
          <img
            src="/cartografiasocial/favicon.ico"
            alt="Ícone do mapa"
            className="h-6 sm:h-8 w-auto mr-2"
            aria-label="Ícone do mapa"
          />
          <h1
            className="text-base sm:text-lg md:text-2xl font-bold tracking-wide cursor-pointer"
            onClick={() => {
              window.location.href = '/cartografiasocial?panel=sobre-o-site';
            }}
          >
            Atlas do Invisível - criaturas fantásticas do Brasil e onde habitam
          </h1>
        </div>

        {/* Logo da Unifesp */}
        <a href="https://www.unifesp.br/" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col items-center text-center">
            <img
              src="/cartografiasocial/logo.png"
              alt="Logo da Unifesp"
              className="h-8 sm:h-10 w-auto object-contain"
              aria-label="Logo da Unifesp"
            />
            <p className="text-xs tracking-wide font-serif mt-1">
              Serviço Social
            </p>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
