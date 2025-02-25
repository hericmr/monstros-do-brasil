import L from "leaflet";

// Cria uma animação de brilho e pulsação customizada
const createIcon = (url, color, animate = false) =>
  new L.DivIcon({
    className: `group`,
    html: `
      <div class="relative ${animate ? 'animate-[breathing_3s_infinite]' : ''}">
        <img src="${url}" class="w-[80px] h-[120px] drop-shadow-md">
      </div>
    `,
    iconSize: [80, 120],
    iconAnchor: [10, 120],
    popupAnchor: [1, -14],
  });

// Criando ícones com animação para o monstro e estáticos para os outros
export const blueIcon = createIcon(
  "https://raw.githubusercontent.com/hericmr/monstros-do-brasil/refs/heads/main/public/fotos/ipupiara.png", 
  "blue", 
  true // Ativando animação apenas para este ícone
);
export const greenIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png", "green");
export const yellowIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png", "yellow");
export const redIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png", "red");
export const violetIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png", "violet");
export const blackIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png", "black");
export const orangeIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png", "orange");
