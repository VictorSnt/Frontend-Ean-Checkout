import { MainCard } from "./components/MainCard.style";
import { OrcamentoCard } from "./components/OrcamentoCard.style";
import { Layout } from "./components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { Orcamento } from "./interfaces/Orcamento";



function App() {
  
  return (
    <Layout>
      <MainCard/>
    </Layout>
  );
  
}

export default App;
