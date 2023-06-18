import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <div className="boxContainer">
      <div className="box flex items-center justify-center h-screen">
        <div>
          <h1 className="flex items-center justify-center mb-10 text-8xl font-bold text-prime">
            Áreas
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((id) => {
              let className = `quadrado w-40 h-40 rounded-lg mx-2 flex items-center justify-center text-dark text-2xl font-bold`;

              if (id === 3 || id === 5 || id === 6 || id === 11) {
                className = `quadCinza w-40 h-40 rounded-lg mx-2 flex items-center justify-center text-dark text-2xl font-bold`;
              }

              return (
                <Link to={`/alocacao/${id}`} key={id}>
                  <div className={className}>{id}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
