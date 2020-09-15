import React, { useState } from "react";

import Header from "./components/Header";
import CepSearch from "./components/CepSearch";
import CepPanel from "./components/CepPainel";

// const cep = {};

const App = () => {
  let [cep, setCep] = useState({
    cep: "",
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
  });

  return (
    <>
      <Header title="Busca CEP" />
      <CepSearch setCep={setCep} />
      <CepPanel {...cep} />
    </>
  );
};
export default App;
