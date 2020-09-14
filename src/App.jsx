import React from "react";

import Header from "./components/Header";
import CepSearch from "./components/CepSearch";
import CepPanel from "./components/CepPainel";

const cep = {
  cep: "99150-000",
  logradouro: "Geral",
  bairro: "Geral",
  localidade: "Marau",
  uf: "RS",
};

const App = () => {
  return (
    <>
      <Header title="Busca CEP" />
      <CepSearch />
      <CepPanel {...cep} />
    </>
  );
};
export default App;
