import L from "leaflet";

const createIcon = (url, color) =>
  new L.DivIcon({
    className: `monster-icon`,
    html: `
      <div class="relative animate-[monster-pulse_2s_infinite]">
        <img src="${url}" 
             class="w-[40px] h-[66px] 
                    border-2 border-blue-900 
                    rounded-full 
                    rotate-[20deg]
                    transition-all
                    [filter:drop-shadow(0_0_8px_#0066ff)_drop-shadow(0_0_3px_#0066ff)]">
        <div class="absolute inset-0 bg-blue-400 rounded-full mix-blend-screen opacity-30"></div>
      </div>
    `,
    iconSize: [40, 66],
    iconAnchor: [20, 66],
    popupAnchor: [0, -70],
  });

export const blueIcon = createIcon(
  "https://github.com/hericmr/monstros-do-brasil/blob/main/public/fotos/Captura_de_imagem_20250224_124603-removebg-preview.png?raw=true",
  "blue"
);
export const greenIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png", "green");
export const yellowIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png", "yellow");
export const redIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png", "red");
export const violetIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png", "violet");
export const blackIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png", "black");
export const orangeIcon = createIcon("https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png", "orange");
