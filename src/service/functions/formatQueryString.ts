import { Parametros } from "../../types/types";

export const formatQs = (params: Parametros):string => {
    const initial = {
        areaVerde: params.areaVerde ? 1 : '',
        biblioteca: params.biblioteca ? 1 : '',
        cozinha: params.cozinha ? 1 : ''
    }
    
    const qs = `areaVerde=${initial.areaVerde}&biblioteca=${initial.biblioteca}&cozinha=${initial.cozinha}`
    return qs
}
