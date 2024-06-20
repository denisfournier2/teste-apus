import axios from 'axios'
import { Parametros, Escola } from '../types/types';
import { formatQs } from './hooks/formatQueryString';

export const Api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://educacao.dadosabertosbr.org/api/'
})

export async function list(parametros:Parametros): Promise<Array<Escola[]>> {
  const qs = formatQs(parametros)
  const { data: response } = await Api.get(`escolas/buscaavancada?${qs}`)
  return response
}

export async function find(id: number): Promise<void> {
  const { data: response } = await Api.get(`escola/${id}`)
  return response
}
