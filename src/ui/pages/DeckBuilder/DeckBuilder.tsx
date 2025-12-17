import { DeckBuilder as DeckBuilderComponent } from '../../components/DeckBuilder'

export const DeckBuilder = () => {
  return (
    <DeckBuilderComponent
      onDone={(deck) => {
        console.log('Deck selected:', deck)
      }}
    />
  )
}
