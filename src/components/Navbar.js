import React from "react";

const Navbar = ({ onTitleClick }) => {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-green-900/80 backdrop-blur-md text-white h-16"
      role="banner"
    >
      <div className="container mx-auto px-4 py-1 flex flex-wrap items-center justify-between">
        
        {/* Logo e título */}
        <div className="flex items-center gap-2">
          <img
            src="/monstros-do-brasil/favicon.ico"
            alt="Ícone do mapa"
            className="h-6 sm:h-8 w-auto"
          />
          <div className="cursor-pointer" onClick={onTitleClick}>
            <h1 className="text-base sm:text-lg md:text-2xl font-bold tracking-wide">
              Atlas do Invisível 
            </h1>
            <h2 className="text-sm font-light tracking-wide">
              Criaturas fantásticas do Brasil
            </h2>
          </div>
        </div>

        {/* Logo da Unifesp */}
        <a 
          href="https://www.unifesp.br/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center"
        >
          <img
            src="/monstros-do-brasil/logo.png"
            alt="Logo da Unifesp"
            className="h-8 sm:h-10 w-auto object-contain"
          />
          <p className="text-xs tracking-wide font-serif mt-1">
            Artes das trevas
          </p>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
