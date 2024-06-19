import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/atoms/button"
import { Container } from "../../components/atoms/container"
import { Actions } from "../../components/molecules/actions"
import * as S from "./styles"
import { Lista } from "../../components/molecules/lista"
import { Escola, Parametros } from "../../types/types"
import { list } from "../../service/api"

export default function Home() {
  const navigation = useNavigate()
  const [escolas, setEscolas] = useState<Escola[]>([])

  // const handleCreate = async (body: ) => {
  //   try {
  //     if (body) {
  //       const requisition = await create({
  //         name: body.name,
  //         type1: body.types[0].type.name,
  //         type2: body.types[1]?.type?.name ? body.types[1].type.name : 'Não possui',
  //         height: `${body.height}`,
  //         weight: `${body.weight}`,
  //         sprite: body.sprites.front_default
  //       })
  //       setLoading(true)
  //       setSucess(true)
  //     } else {
  //       setError(true)
  //     }
  //   } catch (error) {
  //     setError(true)
  //   } finally {
  //     setLoading(false)
  //   }
  // }
  const handleList = async (param:Parametros) => {
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
      escolas.push(formatEscola)
    })
  }

  useEffect(() => {
    handleList({ areaVerde: true, biblioteca: true, cozinha: true })
  }, [])

  useEffect(() => {
    console.log(escolas)
  }, [escolas])

  const mock:Escola[] = [
    {cod: 1, nome:"escola", cidade:"Taubate", estado:"SP", nota:1},
    {cod: 2, nome:"escola2", cidade:"Taubate2", estado:"SP", nota:2},
    {cod: 3, nome:"escola3", cidade:"Taubate3", estado:"SP", nota:3},
    {cod: 4, nome:"escola4", cidade:"Taubate4", estado:"SP", nota:4}
  ]

  return (
    <Container>
      <S.Content>
        <Actions />
        <Lista escolas={escolas} />
      </S.Content>
    </Container>
  )
}
