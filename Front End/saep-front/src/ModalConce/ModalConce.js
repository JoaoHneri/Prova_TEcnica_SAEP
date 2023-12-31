import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';
import './ModalConce.css'

const ModalConce = () => {
const [concessionaria, setConcessionaria] =useState([]);
const [clientes, setClientes] = useState([]);
const {modelo,id, area} = useParams();
const MySwal = withReactContent(Swal)
const Navigate = useNavigate();
const getConcessionaria = async () => {
    try {
      const response = await fetch(`http://localhost:3333/concessionaria/${id}/${area}`);
      const data = await response.json();
      setConcessionaria(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getClientes = async () => {
    try {
      const response = await fetch(`http://localhost:3333/clientes`);
      const data = await response.json();
      setClientes(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    useEffect(() => {
        getConcessionaria();
        getClientes();
      }, [id]);
      
    const VendaUpdate = async () => {
        try {
          const response = await fetch(`http://localhost:3333/quantidade/${id}`);
          const data = await response.json();
        } catch (error) {
          console.error('Error fetching data:', error);
          MySwal.fire({
            title: "Erro!",
            text: "O automovel não foi vendido com sucesso",
            icon: "success",
            confirmButtonText: "Ok",
            didOpen: () => {
              // `MySwal` is a subclass of `Swal` with all the same instance & static methods
              MySwal.stopTimer();
            },
        });
        }
    }

    const redirect = async () => {
        VendaUpdate();
        MySwal.fire({
            title: "Vendido!",
            text: "Automovel Vendido com sucesso",
            icon: "success",
            confirmButtonText: "Ok",
            didOpen: () => {
              // `MySwal` is a subclass of `Swal` with all the same instance & static methods
              MySwal.stopTimer();
            },
          });
          Navigate("/");
    };



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none boxContainer" >
      <div className="relative w-auto max-w-3xl mx-auto my-6 w-full">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3  className="text-2xl font-semibold">{modelo}</h3>
          <Link to={'/'}>
          <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              
            >
              <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </Link>
          </div>
          <div className="relative p-6 flex-auto">
            <div className="mb-4">
              <label htmlFor="clients" className="block text-gray-700 font-bold mb-2">
                Clientes
              </label>
              <select id="clients" name="clients" className="w-full border border-gray-300 p-2 rounded-lg">
                {clientes.map((cliente) => (
                  <option key={cliente.id} value={cliente.id}>{cliente.clientes}</option>  
                )
                )}
              </select>
            </div>
            <div>
              <label htmlFor="dealership" className="block text-gray-700 font-bold mb-2">
                Concessionarias
              </label>
              <select id="dealership" name="dealership" className="w-full border border-gray-300 p-2 rounded-lg">
                {concessionaria.map((conce) => (
                    <option key={conce.id} value={conce.concessionaria}>{conce.concessionaria}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            <button
              className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 btn"
              type="button"
              style={{ transition: 'all .15s ease' }}
              onClick={redirect}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConce;