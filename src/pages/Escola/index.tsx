import { useEffect, useState } from "react";
import { Container } from "../../components/atoms/container";
import { find } from "../../service/api";
import { Card } from "../../components/molecules/card";
import {ICard } from "../../types/types";
import * as S from './styles';
import { Search } from "../../components/atoms/search";
import { formatInfoForCard } from "../../service/functions/formatArray";

export default function Escola(props: { cod: number | undefined }) {

  const idEscola = location.pathname.split('/')[2]
  const [escola, setEscola] = useState<ICard>({})
  const [loading, setLoading] = useState<boolean>(false)
  const [cardList, setCardList] = useState<ICard[]>()

  const handleEscola = async (id:string) => {
    try {
      setLoading(true)
      const req = await find(id)
      setEscola(req)
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleEscola(idEscola)
  }, [])

  useEffect(() => {
    const cards = formatInfoForCard(escola)
    setCardList(cards)
  }, [escola])

  return (
    <Container>
      <Search escola={escola.nome} />
      <S.Title>{escola.nome}</S.Title>
      <S.Subtitle>{`Cidade: ${escola.nomeMunicipio} - ${escola.siglaUf}`}</S.Subtitle>
      <S.Cards>
        {cardList?.map(card => (
          <Card key={card.key} color={1} info={card.key} value={card.value} />
        ))}
      </S.Cards>
    </Container>
  )
}
