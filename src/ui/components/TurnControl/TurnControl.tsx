import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import useTheme from '@mui/material/styles/useTheme'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { funAnimalName } from 'fun-animal-names'
import { ReactNode, useContext } from 'react'

import { STANDARD_TAX_AMOUNT } from '../../../game/config'
import { lookup } from '../../../game/services/Lookup'
import { MatchStateCorruptError } from '../../../game/services/Rules/errors'
import {
  BotTurnActionState,
  IMatch,
  MatchEvent,
  MatchState,
} from '../../../game/types'
import { formatNumber } from '../../../lib/formatting/numbers'
import { pixelFrameSx, surfaceOutline } from '../../../lib/styling/pixel'
import { useMatchRules } from '../../hooks/useMatchRules'
import { Image } from '../Image'
import { getCardImageSrc } from '../Image/Image'
import {
  AccountBalanceIcon as AccountBalance,
  AttachMoneyIcon as AttachMoney,
  KeyboardArrowDownIcon as KeyboardArrowDown,
  KeyboardArrowUpIcon as KeyboardArrowUp,
} from '../PixelIcon'
import { ActorContext } from '../Match/ActorContext'
import { ShellContext } from '../Match/ShellContext'
import { genericOpponentPlayerLabel } from '../constants'

export interface TurnControlProps {
  match: IMatch
  useGenericPlayerLabels?: boolean
}

const playerFundWarningThreshold = STANDARD_TAX_AMOUNT * 2

export const TurnControl = ({
  match,
  useGenericPlayerLabels = false,
}: TurnControlProps) => {
  const theme = useTheme()
  const actorRef = ActorContext.useActorRef()
  const { setIsHandInViewport } = useContext(ShellContext)
  const {
    matchState,
    botTurnActionState,
    match: { currentPlayerId, sessionOwnerPlayerId },
  } = useMatchRules()

  // Only ever read below while it's the non-session-owner's turn (see
  // PERFORMING_BOT_TURN_ACTION / PERFORMING_BOT_SETUP_ACTION), so it's safe
  // to always resolve to the opponent label when generic labels are on.
  const currentPlayerName = useGenericPlayerLabels
    ? genericOpponentPlayerLabel
    : funAnimalName(currentPlayerId ?? '')

  const handleCompleteSetup = () => {
    actorRef.send({ type: MatchEvent.PROMPT_BOT_FOR_SETUP_ACTION })
  }

  const handleEndTurn = () => {
    actorRef.send({ type: MatchEvent.START_TURN })
  }

  const handleCancelWatering = () => {
    actorRef.send({ type: MatchEvent.OPERATION_ABORTED })
    setIsHandInViewport(true)
  }

  const handleCancelCardPositioning = () => {
    actorRef.send({ type: MatchEvent.OPERATION_ABORTED })
    setIsHandInViewport(true)
  }

  let control: ReactNode = null

  const currentPlayer = currentPlayerId
    ? lookup.getPlayer(match, currentPlayerId)
    : null

  let stateInfo = ''

  switch (matchState) {
    case MatchState.CHOOSING_CARD_POSITION: {
      stateInfo = 'Select a position in the field'

      if (currentPlayer?.id === match.sessionOwnerPlayerId) {
        control = (
          <Button onClick={handleCancelCardPositioning} color="warning">
            Cancel placement
          </Button>
        )
      }

      break
    }

    case MatchState.WAITING_FOR_PLAYER_SETUP_ACTION: {
      stateInfo = 'Set up your Field'

      if (currentPlayer && currentPlayer.field.cards.length > 0) {
        control = <Button onClick={handleCompleteSetup}>Complete setup</Button>
      }

      break
    }

    case MatchState.WAITING_FOR_PLAYER_TURN_ACTION: {
      stateInfo = 'Your turn'

      if (currentPlayer && currentPlayer.id === match.sessionOwnerPlayerId) {
        control = <Button onClick={handleEndTurn}>End turn</Button>
      }

      break
    }

    case MatchState.PLAYER_WATERING_CROP: {
      stateInfo = 'Select a crop to water'

      if (currentPlayer && currentPlayer.id === match.sessionOwnerPlayerId) {
        control = (
          <Button onClick={handleCancelWatering} color="warning">
            Cancel watering
          </Button>
        )
      }

      break
    }

    case MatchState.PERFORMING_BOT_TURN_ACTION: {
      stateInfo = `${currentPlayerName}'s turn`

      // NOTE: Refines the general stateInfo above with a more specific one,
      // if applicable.
      switch (botTurnActionState) {
        case BotTurnActionState.PLAYING_CROPS:
        case BotTurnActionState.PLACING_CROP: {
          stateInfo = `${currentPlayerName} is planting crops`

          break
        }

        case BotTurnActionState.WATERING_CROPS:
        case BotTurnActionState.WATERING_CROP: {
          stateInfo = `${currentPlayerName} is watering crops`

          break
        }

        case BotTurnActionState.HARVESTING_CROPS:
        case BotTurnActionState.HARVESTING_CROP: {
          stateInfo = `${currentPlayerName} is harvesting crops`

          break
        }

        case BotTurnActionState.PLAYING_EVENTS: {
          stateInfo = `${currentPlayerName} is playing Event cards`

          break
        }

        case BotTurnActionState.PLAYING_TOOLS: {
          stateInfo = `${currentPlayerName} is playing Tool cards`

          break
        }

        default:
      }

      break
    }

    case MatchState.PERFORMING_BOT_SETUP_ACTION: {
      stateInfo = `${currentPlayerName} is setting their field up`

      break
    }

    default:
  }

  const { [sessionOwnerPlayerId]: sessionOwnerPlayer, ...opponents } =
    match.table.players

  if (!sessionOwnerPlayer) {
    throw new MatchStateCorruptError('Session owner player not found')
  }

  const sessionOwnerPlayerFunds = sessionOwnerPlayer.funds
  const opponentPlayerId = Object.keys(opponents)[0]
  const opponentFunds = opponentPlayerId
    ? lookup.getPlayer(match, opponentPlayerId)?.funds
    : 0
  const opponentName = useGenericPlayerLabels
    ? genericOpponentPlayerLabel
    : funAnimalName(opponentPlayerId ?? '')

  // NOTE: A Paper-colored "pill" (like the state Accordion below it) so the
  // funds stay legible against whatever background Match is shown on, rather
  // than relying on the ambient text color contrasting with it.
  const getFundsPillSx = (funds?: number) => ({
    ...pixelFrameSx({ outline: surfaceOutline(theme) }),
    backgroundColor: theme.palette.background.paper,
    color:
      funds !== undefined && funds <= playerFundWarningThreshold
        ? theme.palette.error.dark
        : theme.palette.text.primary,
    cursor: 'help',
    // NOTE: MUI's Chip pads an icon asymmetrically (a small left margin, a
    // negative right one) and its label by 12px on each side, which leaves
    // the icon-plus-text group visibly right-of-center. Spelled out here so
    // the group has equal space on both sides instead.
    justifyContent: 'center',
    '& .MuiChip-icon': {
      color: 'inherit',
      fontSize: theme.typography.body1.fontSize,
      ml: 1,
      mr: 0.5,
    },
    '& .MuiChip-label': {
      fontSize: theme.typography.body1.fontSize,
      pl: 0,
      pr: 1,
      textAlign: 'center',
    },
  })

  return (
    <Stack spacing={1}>
      <Stack
        direction="row"
        justifyContent="space-between"
        // NOTE: A small minimum gap so the pills never touch (the community
        // funds pill grows with the pot, and the buff/nerf pills only show
        // sometimes), kept tight so all five still fit a ~360px-wide phone
        // in one row. If they ever don't, they wrap onto a second row
        // rather than running off the screen.
        gap="0.25rem"
        flexWrap="wrap"
        // No color set here - CSS inheritance passes this through from
        // whatever ancestor sets one (Match's own root Container, by
        // default, sets it to white for the standalone/default look). A
        // host embedding Match can override that from the outside via
        // Match's own consumer-facing `sx` prop, without this component
        // needing to know or care that it's embedded.
      >
        <Tooltip title="Your funds">
          <Chip
            icon={<AttachMoney />}
            label={formatNumber(sessionOwnerPlayerFunds)}
            sx={getFundsPillSx(sessionOwnerPlayerFunds)}
          />
        </Tooltip>
        {match.buffedCrop && (
          <Tooltip
            title={`Sell ${match.buffedCrop.crop.name} cards now for ${match.buffedCrop.multiplier}x value`}
          >
            <Stack direction="row" alignItems="center">
              <Chip
                color="success"
                icon={<KeyboardArrowUp />}
                label={
                  <Image
                    src={getCardImageSrc(match.buffedCrop.crop)}
                    sx={{
                      imageRendering: 'pixelated',
                      filter: `drop-shadow(0 0 5px ${theme.palette.common.white})`,
                    }}
                  />
                }
                sx={{
                  ...pixelFrameSx({ outline: theme.palette.success.dark }),
                  backgroundColor: theme.palette.success.light,
                }}
              />
            </Stack>
          </Tooltip>
        )}
        <Tooltip title="Community funds">
          <Chip
            icon={<AccountBalance />}
            label={formatNumber(match.table.communityFund)}
            sx={getFundsPillSx()}
          />
        </Tooltip>
        {match.nerfedCrop && (
          <Tooltip
            title={`${match.nerfedCrop.crop.name} cards now sell for ${match.nerfedCrop.multiplier}x value`}
          >
            <Stack direction="row" alignItems="center">
              <Chip
                sx={{
                  flexDirection: 'row-reverse',
                  '& .MuiSvgIcon-root': {
                    ml: -0.75,
                    mr: 0.75,
                  },
                  '& .MuiChip-label': {
                    pr: 1,
                  },
                  ...pixelFrameSx({ outline: theme.palette.error.dark }),
                  backgroundColor: theme.palette.error.light,
                }}
                color="error"
                icon={<KeyboardArrowDown />}
                label={
                  <Image
                    src={getCardImageSrc(match.nerfedCrop.crop)}
                    sx={{
                      imageRendering: 'pixelated',
                      filter: `drop-shadow(0 0 5px ${theme.palette.common.black})`,
                    }}
                  />
                }
              />
            </Stack>
          </Tooltip>
        )}
        <Tooltip title={`${opponentName}'s funds`}>
          <Chip
            icon={<AttachMoney />}
            label={
              opponentFunds !== undefined ? formatNumber(opponentFunds) : ''
            }
            sx={getFundsPillSx(opponentFunds)}
          />
        </Tooltip>
      </Stack>
      <Accordion
        sx={{
          width: 1,
          mb: 2,
          borderRadius: `${theme.shape.borderRadius}px`,
          '&.Mui-expanded': {
            // NOTE: Prevents the accordion from moving down when it expands
            mt: 1,
          },
        }}
        expanded={control !== null}
      >
        <AccordionSummary
          sx={{
            '&:hover:not(.Mui-disabled)': {
              cursor: 'default',
            },
            '& .MuiAccordionSummary-content': { justifyContent: 'center' },
          }}
        >
          <Typography
            variant="h6"
            component="h1"
            textAlign="center"
            fontWeight="normal"
          >
            {stateInfo}
          </Typography>
        </AccordionSummary>
        <AccordionActions sx={{ justifyContent: 'center' }}>
          {control}
        </AccordionActions>
      </Accordion>
    </Stack>
  )
}
