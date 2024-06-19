import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/atoms/button"
import { Container } from "../../components/atoms/container"
import { Actions } from "../../components/molecules/actions"
import * as S from "./styles"
import { Lista } from "../../components/molecules/lista"
import { Escola } from "../../types/types"

export default function Home() {
  const navigation = useNavigate()

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
        <Lista escolas={mock} />
      </S.Content>
    </Container>
  )
}
