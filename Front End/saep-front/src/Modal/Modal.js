import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {BiHomeAlt} from 'react-icons/bi'

const Modal = () => {
const {id} = useParams();
console.log(id)
const [tableData, setTableData] = useState([]);


  useEffect(() => {
    fetchData(id);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3333/alocacao/${id}`);
      const data = await response.json();
      setTableData(data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


    
  return (
    <div>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <Link to={`/`}>
            <h1 className="text-3xl font-bold mb-4"><BiHomeAlt/></h1>
        </Link>
        <h1 className="flex flex-col text-3xl font-bold mb-4 content-center items-center">Área {id}</h1>

        <table className="w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Modelo</th>
              <th className="border border-gray-300 px-4 py-2">Preço</th>
              <th className="border border-gray-300 px-4 py-2">Vender</th>
            </tr>
          </thead>
          <tbody>
          {tableData.map((item) => (
            <tr
            key={id}>
            <td className="border border-gray-300 px-4 py-2">{item.modelo}</td>
              <td className="border border-gray-300 px-4 py-2">{item.preco}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Vender
                </button>
              </td>
          </tr>
        ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    
  );
};

export default Modal;