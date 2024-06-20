import { useEffect, useState } from "react"
import { Container } from "../../components/atoms/container"
import { Actions } from "../../components/molecules/actions"
import * as S from "./styles"
import { Lista } from "../../components/molecules/lista"
import { Escola, Parametros } from "../../types/types"
import { list } from "../../service/api"

export default function Home() {
  const [escolas, setEscolas] = useState<Escola[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [parametros, setParametros] = useState<Parametros>({ areaVerde: false, biblioteca: false, cozinha: false })

  const handleList = async (param:Parametros) => {
    const arr:Escola[] = []
    try {
      setLoading(true)
      const req = await list(param)
      req[1].map(escola => {
        const formatEscola = {
          cod: escola.cod,
          nome: escola.nome,
          cidade: escola.cidade,
          estado: escola.estado,
          nota: escola.idebAF,
          nota2: escola.idebAI
        }
        arr.push(formatEscola)
      })
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setEscolas(arr)
      setLoading(false)
    }
  }

  useEffect(() => {
    setEscolas([])
    handleList(parametros)
  }, [parametros])

  return (
    <Container>
      <S.Content>
        <Actions parametros={parametros} setParametros={setParametros} />
        <Lista loading={loading} escolas={escolas} />
      </S.Content>
    </Container>
  )
}
