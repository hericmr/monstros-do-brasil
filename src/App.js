import React, { useState, useEffect } from "react";
import PublicGoogleSheetsParser from 'public-google-sheets-parser';
import MapaSantos from "./components/MapaSantos";
import Navbar from "./components/Navbar";
import PainelInformacoes from "./components/PainelInformacoes";

// Função para buscar os dados da planilha do Google Sheets
const fetchDataPoints = async () => {
  const spreadsheetId = '1XE5EE3zcUtA5ALhmevSfluBc-y8Q-JYsU0QWb3t5QKE';
  const parser = new PublicGoogleSheetsParser(spreadsheetId);
  return await parser.parse();
};

// Componente de tela de carregamento
const LoadingScreen = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-green-900 text-white">
    <div className="relative">
      {/* Spinner Animado */}
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <img src="/monstros-do-brasil/favicon.ico" alt="Ícone de carregamento" className="w-8 h-8" />
      </div>
    </div>
    <p className="mt-4 text-lg font-semibold animate-pulse">Carregando dados...</p>
  </div>
);

const App = () => {
  const [dataPoints, setDataPoints] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para formatar os dados da planilha
  const formatData = (dataPoints) => {
    return dataPoints.map((e) => {
      e.links = e.links && typeof e.links === 'string' ? e.links.split(";").map((l) => {
        let [texto, url] = l.split(':');
        return { texto: texto || "Sem título", url: url || "#" };
      }) : [];

      e.imagens = e.imagens && typeof e.imagens === 'string' ? e.imagens.split(",") : [];
      e.audioUrl = e.audio && typeof e.audio === 'string' ? e.audio.split(",") : [];
      e.titulo = e.titulo || "Título não disponível";  
      e.descricao = e.descricao || "Sem descrição";  

      // Extraindo latitude e longitude da coluna 'localizacao'
      if (e.localizacao && typeof e.localizacao === 'string') {
        const [lat, lng] = e.localizacao.split(',').map(coord => parseFloat(coord.trim()));
        if (!isNaN(lat) && !isNaN(lng)) {
          e.latitude = lat;
          e.longitude = lng;
        } else {
          e.latitude = null;
          e.longitude = null;
        }
      } else {
        e.latitude = null;
        e.longitude = null;
      }

      // Formatando descricao_detalhada para exibir corretamente no site
      if (e.descricao_detalhada) {
        e.descricao_detalhada = e.descricao_detalhada
          .replace(/\n/g, "<br>") 
          .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") 
          .replace(/\*(.*?)\*/g, "<i>$1</i>"); 
      }

      return e;
    });
  };

  // Efeito para inicializar o aplicativo
  useEffect(() => {
    const initializeApp = async () => {
      try {
        let dataPoints = await fetchDataPoints();
        dataPoints = formatData(dataPoints);
        setDataPoints(dataPoints);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  // Exibe a tela de carregamento enquanto os dados estão sendo buscados
  if (loading) {
    return <LoadingScreen />;
  }

  // Exibe uma mensagem de erro caso ocorra algum problema
  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        <p>Erro ao carregar os dados:</p>
        <p className="text-sm">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  // Renderiza o aplicativo
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <MapaSantos dataPoints={dataPoints} />
        <PainelInformacoes dataPoints={dataPoints} />
      </main>
    </div>
  );
};

export default App;
