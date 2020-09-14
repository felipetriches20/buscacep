import React from "react";

const CepPanel = ({ cep, logradouro, bairro, localidade, uf }) => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <p>CEP: {cep}</p>
        <p>Logradouro: {logradouro}</p>
        <p>Bairro: {bairro}</p>
        <p>Localidade: {localidade}</p>
        <p>UF: {uf}</p>
      </div>
    </div>
  );
};

export default CepPanel;
