export interface Cidade {
  cidade: string;
  regiao: string;
}

export enum TipoPessoa {
  TREINADOR = "TREINADOR",
  ESTUDANTE = "ESTUDANTE",
  PROFESSOR = "PROFESSOR",
}

export interface Pessoas {
  nome: string;
  sobrenome: string;
  tipo: TipoPessoa;
  cidadeDeNascimento: Cidade;
}
