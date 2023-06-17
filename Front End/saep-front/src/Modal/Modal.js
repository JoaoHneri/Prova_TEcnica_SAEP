import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import './Modal.css'

const Modal = () => {
  const { id } = useParams();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData(id);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3333/alocacao/${id}`);
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <Link to={`/`}>
            <h1 className="text-3xl font-bold mb-4">
              <BiHomeAlt />
            </h1>
          </Link>
          <h1 className="flex flex-col text-3xl font-bold mb-4 content-center items-center">
            Área {id}
          </h1>
          {tableData.length == 0 ? (
            <h1 className="text-2xl font-bold text-gray-800">
              Não Possui Automoveis Nessa Área
            </h1>
          ) : (
            <table className="w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Modelo</th>
                  <th className="border border-gray-300 px-4 py-2">Preço</th>
                  <th className="border border-gray-300 px-4 py-2">Qntd</th>
                  <th className="border border-gray-300 px-4 py-2">Vender</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item) => (
                  <tr key={id}>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.modelo}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.preco}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.quantidade}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 ">
                      <Link
                        to={`/concessionaria/${item.modelo}/${item.id}/${item.area}`}
                      >
                        <button className="botao hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Vender
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
