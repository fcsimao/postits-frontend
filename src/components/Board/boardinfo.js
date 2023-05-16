import { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import H1 from '../typography/h1'
import Subtitle from '../typography/subtitle'
import BoardList from './boardList'
import { store, CONSTANTS } from '../../contexts/board'
import APIClient from '../../utils/APIClient'
import Button from '../Buttons/button'
import axios from 'axios'

function BoardInfo ({ board }) {
  const { state, dispatch } = useContext(store)
  const [cookie, setCookie] = useCookies (['authorization'])
  const [savedCards, setSavedCards] = useState(false)
  useEffect(() => {
    dispatch({
      type: CONSTANTS.SET_BOARD,
      payload: board
    })
  }, [board])

  useEffect(() => {
    APIClient(cookie.authorization)
  }, [])

  const handleSaveCards = () => {
    const cards = state.data.reduce((result, column) => {
      column.cards.forEach(card => {
        result.push({
          id: card.id,
          text: card.text
        })
      })
      return result
    }, []);

    axios.post('/board/cards', {
      boardId: board._id,
      cards
    }).then(response => {
      setSavedCards(true)
    }).catch(error => {
      console.error(error)
    })
  }
  
  return (
    <>
      <H1>{state.name}</H1>
      <Subtitle>{state.assunto}</Subtitle>
      <Button type="submit" onClick={handleSaveCards}>Salvar Cards</Button>
      <BoardList />
    </>
  )
}

export default BoardInfo