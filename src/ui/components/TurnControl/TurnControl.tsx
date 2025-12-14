import AccountBalance from '@mui/icons-material/AccountBalance'
import AttachMoney from '@mui/icons-material/AttachMoney'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
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

import { MatchEvent, MatchState, IMatch } from '../../../game/types'
import { assertCurrentPlayer } from '../../../game/types/guards'
import { lookup } from '../../../game/services/Lookup'
import { formatNumber } from '../../../lib/formatting/numbers'
import { useMatchRules } from '../../hooks/useMatchRules'
import { ActorContext } from '../Match/ActorContext'
import { ShellContext } from '../Match/ShellContext'
import { STANDARD_TAX_AMOUNT } from '../../../game/config'
import { Image } from '../Image'
import { getCardImageSrc } from '../Image/Image'

export interface TurnControlProps {
  match: IMatch
}

const playerFundWarningThreshold = STANDARD_TAX_AMOUNT * 2

export const TurnControl = ({ match }: TurnControlProps) => {
  const theme = useTheme()
  const actorRef = ActorContext.useActorRef()
  const { setIsHandInViewport } = useContext(ShellContext)
  const {
    matchState,
    match: { currentPlayerId, sessionOwnerPlayerId },
  } = useMatchRules()

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

  let control: ReactNode = null

  const currentPlayer = currentPlayerId
    ? lookup.getPlayer(match, currentPlayerId)
    : null

  let stateInfo = ''

  switch (matchState) {
    case MatchState.WAITING_FOR_PLAYER_SETUP_ACTION: {
      stateInfo = 'Set up your Field'

      if (currentPlayer && currentPlayer.field.crops.length > 0) {
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
      assertCurrentPlayer(currentPlayerId)

      stateInfo = `${funAnimalName(currentPlayerId)}'s turn`

      break
    }

    case MatchState.PERFORMING_BOT_SETUP_ACTION: {
      assertCurrentPlayer(currentPlayerId)

      stateInfo = `${funAnimalName(currentPlayerId)} is setting their field up`

      break
    }

    case MatchState.PERFORMING_BOT_CROP_WATERING: {
      assertCurrentPlayer(currentPlayerId)

      stateInfo = `${funAnimalName(currentPlayerId)} is watering crops}`

      break
    }

    default:
  }

  const { [sessionOwnerPlayerId]: sessionOwnerPlayer, ...opponents } =
    match.table.players

  if (!sessionOwnerPlayer) {
    throw new Error('Session owner player not found')
  }

  const sessionOwnerPlayerFunds = sessionOwnerPlayer.funds
  const opponentPlayerId = Object.keys(opponents)[0]
  const opponentFunds = opponentPlayerId
    ? lookup.getPlayer(match, opponentPlayerId)?.funds
    : 0

  return (
    <Stack spacing={1}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ color: theme.palette.common.white }}
      >
        <Tooltip title="Your funds" arrow>
          <Stack
            direction="row"
            alignItems="center"
            color={{
              cursor: 'help',
              ...(sessionOwnerPlayerFunds <= playerFundWarningThreshold && {
                color: theme.palette.error.dark,
              }),
            }}
          >
            <AttachMoney
              sx={{
                fontSize: theme.typography.body1.fontSize,
                lineHeight: theme.typography.body1.lineHeight,
              }}
            />
            <Typography>{formatNumber(sessionOwnerPlayerFunds)}</Typography>
          </Stack>
        </Tooltip>
        {match.buffedCrop && (
          <Tooltip
            title={`Sell ${match.buffedCrop.crop.name} cards now for ${match.buffedCrop.multiplier}x value`}
            arrow
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
                  backgroundColor: theme.palette.success.light,
                  outlineColor: theme.palette.success.dark,
                  outlineWidth: 1,
                  outlineStyle: 'solid',
                }}
              />
            </Stack>
          </Tooltip>
        )}
        <Tooltip title="Community funds" arrow>
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            sx={{ cursor: 'help' }}
          >
            <AccountBalance
              sx={{
                fontSize: theme.typography.body1.fontSize,
                lineHeight: theme.typography.body1.lineHeight,
              }}
            />
            <Typography>{formatNumber(match.table.communityFund)}</Typography>
          </Stack>
        </Tooltip>
        {match.nerfedCrop && (
          <Tooltip
            title={`${match.nerfedCrop.crop.name} cards now sell for ${match.nerfedCrop.multiplier}x value`}
            arrow
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
                  backgroundColor: theme.palette.error.light,
                  outlineColor: theme.palette.error.dark,
                  outlineWidth: 1,
                  outlineStyle: 'solid',
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
        <Tooltip
          title={`${funAnimalName(currentPlayerId ?? '')}'s funds`}
          arrow
        >
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              cursor: 'help',
              ...(opponentFunds !== undefined &&
                opponentFunds <= playerFundWarningThreshold && {
                  color: theme.palette.error.dark,
                }),
            }}
          >
            <AttachMoney
              sx={{
                fontSize: theme.typography.body1.fontSize,
                lineHeight: theme.typography.body1.lineHeight,
              }}
            />
            <Typography>
              {opponentFunds !== undefined ? formatNumber(opponentFunds) : ''}
            </Typography>
          </Stack>
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
