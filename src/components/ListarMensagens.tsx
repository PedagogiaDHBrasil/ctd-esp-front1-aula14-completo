import PropTypes from "prop-types";
import { Mensagem } from "../types/mensagem";

// Criamos uma interface para tipar nossas props de componentes
interface ListarMensagensProps {
  mensagem: Mensagem[];
  selecionarMensagem: (id: number) => void;
}

const ListarMensagens = ({
  mensagem = [],
  selecionarMensagem,
}: ListarMensagensProps) => (
  <div id="listarMensagens">
    {mensagem.map((mensagem) => (
      <div onClick={() => selecionarMensagem(mensagem.id)} key={mensagem.id}>
        <strong>
          De: {mensagem.remitente.nome} {mensagem.remitente.sobrenome}
        </strong>
        <p>Assunto: {mensagem.assunto}</p>
        <small> {mensagem.data}</small>
      </div>
    ))}
  </div>
);

// Seguimos utilizando la validación de prop types
ListarMensagens.propTypes = {
  mensagens: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      remitente: PropTypes.string.isRequired,
      asunto: PropTypes.string.isRequired,
      fecha: PropTypes.string.isRequired,
    })
  ),
};

export default ListarMensagens;
