import { Pessoas } from "./pessoas";

export interface Mensagem {
  id: number;
  remitente: Pessoas;
  email: string;
  assunto: string;
  data: string;
  texto: string;
}
