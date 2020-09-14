import React from "react";

const CepSearch = () => {
  return (
    <form className="p-2">
      <div className="form-group">
        <label for="cep">Informe um Cep:</label>
        <input type="tel" className="form-control" id="cep" />
      </div>
      <button type="submit" className="btn btn-primary">
        Buscar
      </button>
    </form>
  );
};

export default CepSearch;
