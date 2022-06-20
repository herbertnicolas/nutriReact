import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import './style.css';

function App() {
  const [nutri, setNutri] = useState([]);
  
  useEffect(()=>{           //funciona como o componentDidMount()
    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      
      fetch(url)
      .then((r)=> r.json())     //se sucesso na requisição, pego o resultado da requisiçao "r" e transformo em .json
      .then((json)=>{           //jogo o array de elementos do json dentro da useState do nutri
        console.log(json);
        setNutri(json);
      })
    }

    loadApi();
  },[]);

  return (
    <div className="container">
      {nutri.map((item)=>{
        return(
          <article key={item.id} className="post">
            <strong className="titulo">
              {item.titulo}
            </strong>
            <img src={item.capa} alt={item.titulo} className="capa"></img>
            <p className="subtitulo">
              {item.subtitulo}
            </p>
            <a className="botao">Acessar</a>
          </article>
      )})}
    </div>
  );
}

export default App;
