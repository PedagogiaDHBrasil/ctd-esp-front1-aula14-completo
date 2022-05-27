import { useState } from "react";
import ListadoMensajes from "./components/ListarMensagens";
import VerMensagem from "./components/VerMensagem";
import { mensagens } from "./data/mensagens";

import "./styles.css";
import { Mensagem } from "./types/mensagem";

export default function App() {
  // Tipamos nosso useState
  const [mensagem, setMensagem] = useState<Mensagem>();

  const selecionarMensagem = (id: number): void =>
    setMensagem(mensagens.find((m) => m.id === id));

  return (
    <div className="App">
      <h1>Caixa de entrada</h1>
      <div id="caixaDeEntrada">
        <ListadoMensajes
          mensagem={mensagens}
          selecionarMensagem={selecionarMensagem}
        />
        <VerMensagem mensagem={mensagem} />
      </div>
    </div>
  );
}
