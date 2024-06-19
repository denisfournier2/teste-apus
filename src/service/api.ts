import axios from 'axios'
import { Parametros, Escola } from '../types/types';

export const Api = axios.create({
  baseURL: 'http://educacao.dadosabertosbr.org/api/'
})

export async function list(parametros:Parametros): Promise<Escola[]> {
  const { data: response } = await Api.get(`aaa`)
  return response
}

export async function find(id: number): Promise<void> {
  const { data: response } = await Api.get(`escola/${id}`)
  return response
}
