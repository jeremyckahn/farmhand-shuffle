import { SHOVEL_CARDS_TO_DRAW } from '../../config'
import { drawCard } from '../../reducers/draw-card'
import { CardType, ITool, ShellNotificationType } from '../../types'
import { assertCurrentPlayer } from '../../types/guards'

export const shovel: ITool = Object.freeze<ITool>({
  type: CardType.TOOL,
  id: 'shovel',
  name: 'Shovel',
  description: `Draw two cards from the deck. If played, skip the card draw at the start of the next turn.`,

  /**
   *  Draws two cards from the deck.
   *
   *  @param match - The current match state.
   *
   *  @returns The updated match state.
   */
  applyEffect: context => {
    let { match } = context
    const { currentPlayerId } = match
    assertCurrentPlayer(currentPlayerId)

    match = drawCard(match, currentPlayerId, SHOVEL_CARDS_TO_DRAW)

    context.shell.triggerNotification({
      type: ShellNotificationType.CARDS_DRAWN,
      payload: {
        howMany: SHOVEL_CARDS_TO_DRAW,
        playerId: currentPlayerId,
      },
    })

    return { ...context, match }
  },

  onStartFollowingTurn: context => {
    return {
      ...context,
      match: {
        ...context.match,
        cardsToDrawAtTurnStart: 0,
      },
    }
  },
})
