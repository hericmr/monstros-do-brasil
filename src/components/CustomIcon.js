import L from "leaflet";

// Cria uma animação de brilho e pulsação customizada
const createIcon = (url, color, animate = false) =>
  new L.DivIcon({
    className: `group`,
    html: `
      <div class="relative ${animate ? 'animate-[breathing_3s_infinite]' : ''}">
        <div class="relative overflow-hidden">
          <img src="${url}" class="w-[80px] h-[80px] drop-shadow-md animate-breathing">
        </div>
        <div class="absolute bottom-0 left-0 right-0 h-[40px] bg-transparent">
          <!-- Aqui pode adicionar algo, como um detalhe do pé ou apenas deixá-lo fixo -->
        </div>
      </div>
    `,
    iconSize: [80, 120],
    iconAnchor: [40, 120],
    popupAnchor: [1, -14],
  });

// Criando ícones com animação para o monstro e estáticos para os outros
export const blueIcon = createIcon(
  "https://github.com/hericmr/monstros-do-brasil/blob/main/public/fotos/ipupiara.png?raw=true", 
  "blue", 
  true // Ativando animação apenas para este ícone
);
export const greenIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png", "green");
export const yellowIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png", "yellow");
export const redIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png", "red");
export const violetIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png", "violet");
export const blackIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png", "black");
export const orangeIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png", "orange");
