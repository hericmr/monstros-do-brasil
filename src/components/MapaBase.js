import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

const isMobile = () => {
  return window.innerWidth <= 768; // Define mobile para telas menores que 768px
};

const MapaBase = ({ children }) => {
  const [ufData, setUfData] = useState(null); // Estado para armazenar o GeoJSON

  useEffect(() => {
    // Carregar o arquivo GeoJSON
    fetch("/monstros-do-brasil/uf.json")
      .then((response) => response.json())
      .then((data) => setUfData(data))
      .catch((error) => console.error("Erro ao carregar o arquivo GeoJSON:", error));
  }, []);

  // Define coordenadas e zoom baseados no dispositivo
  const defaultPosition = isMobile() ? [-13.98, -16.36] : [-13.97, -16.29];
  const defaultZoom = isMobile() ? 4 : 4; // Ajuste do zoom para mobile

  return (
    <div className="h-screen w-screen overflow-hidden">
      <MapContainer
        center={defaultPosition}
        zoom={defaultZoom}
        className="h-full w-full"
        attributionControl={true} // Ativa o controle de atribuição padrão do Leaflet
      >
        {/* TileLayer com o mapa de fundo */}
        <TileLayer
          url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="&copy;  &mdash; Desenvolvido por <a href='https://hericmr.github.io/me/portuguese' target='_blank' rel='noopener noreferrer'>Heric Moura</a> e <a href='https://br.linkedin.com/in/leandrofadelli/pt?original_referer=https%3A%2F%2Fwww.google.com%2F' target='_blank' rel='noopener noreferrer'>Leandro Fadelli</a>"
        />

        {/* Exibir o GeoJSON quando os dados estiverem carregados */}
        {ufData && (
          <GeoJSON
            data={ufData}
            style={{
              color: "#000000", // 
              weight: 1, // Borda fina
              opacity: 0.5, // Opacidade da borda
              fillColor: "rgba(61, 120, 101, 0.2)", // Preenchimento suave e transparente
              fillOpacity: 0.4, // Opacidade do preenchimento
            }}
          />
        )}

        {/* Conteúdo adicional do mapa (marcadores, camadas, etc.) */}
        {children}
      </MapContainer>
    </div>
  );
};

export default MapaBase;
