import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/atoms/button"
import { Container } from "../../components/atoms/container"
import { Actions } from "../../components/molecules/actions"
import * as S from "./styles"

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

  return (
    <Container>
      <S.Content>
        <Actions />
      </S.Content>
    </Container>
  )
}
