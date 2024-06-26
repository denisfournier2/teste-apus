import axios from 'axios'
import { Parametros, Escola } from '../types/types';
import { formatQs } from './functions/formatQueryString';

export const Api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://educacao.dadosabertosbr.org/api/'
})

export async function list(parametros:Parametros): Promise<Array<Escola[]>> {
  const qs = formatQs(parametros)
  const { data: response } = await Api.get(`escolas/buscaavancada?${qs}`)
  return response
}

export async function find(id: string): Promise<any> {
  const { data: response } = await Api.get(`escola/${id}`)
  return response
}
