import PropTypes from "prop-types";
import { Mensagem } from "../types/mensagem";

// Criamos uma interface para digitar nossas props de componentes
interface VerMensagemProps {
  mensagem?: Mensagem; // Preste atenção no ? o que nos permite usar o undefined
}

const VerMensagem = ({ mensagem }: VerMensagemProps) =>
  mensagem ? (
    <div id="verMensagem">
      <h3 className="titulo">{mensagem.assunto}</h3>
      <strong>
        {mensagem.remitente.nome} {mensagem.remitente.sobrenome} (
        {mensagem.email})
      </strong>
      <p>{mensagem.texto}</p>
    </div>
  ) : null;

// Continuamos a usar validação de tipos de prop types
VerMensagem.propTypes = {
  mensagem: PropTypes.shape({
    assunto: PropTypes.string.isRequired,
    remitente: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
  }),
};

export default VerMensagem;
