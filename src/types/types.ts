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
  cozinha: number
  patioVerde: number
  biblioteca: number
  banheiro: number
  salas: number
  horta: number
  professores: number
  veiculo: number
  enfermaria: number
}

export interface ICardList {
  key: string
  value: boolean | string | number
}
