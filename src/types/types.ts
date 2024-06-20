export interface Parametros {
  areaVerde?: boolean
  biblioteca?: boolean
  cozinha?: boolean
}

export interface Escola {
  cod?: number
  nome?: string
  cidade?: string
  estado?: string
  nota?: number
  nota2?: number
  idebAF?: number
  idebAI?: number
}

export interface ICard {
  nome?: string
  nomeMunicipio?: string
  siglaUf?: string
}

export interface ICardList {
  key: string
  value: boolean | string | number
}

export interface ICardColor {
  numero: string
  fundo: string
  fundoNumero: string
}
