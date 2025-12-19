import { DeckBuilder } from '../../components/DeckBuilder'

export const BuildDeck = () => {
  return (
    <DeckBuilder
      onDone={deck => {
        console.log('Deck selected:', deck)
      }}
    />
  )
}
