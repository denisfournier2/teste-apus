import { ICardList } from "../../types/types"


const formatBoolean = (val: any) => {
  if (typeof val === "boolean") {
    	if (val) {
        return 1
      } else {
        return 0
      }
  } else {
    return val
  }
}

export const formatInfoForCard = (obj: Object):ICardList[] => {
    const listaAtributos:ICardList[] = []
    for (const [key, value] of Object.entries(obj)) {
      listaAtributos.push({key: key, value: formatBoolean(value)})
    }

    return listaAtributos
}
