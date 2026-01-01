import {
  PlayerOutOfFundsError,
  PlayerOutOfCropsError,
  MatchStateCorruptError,
  GameStateCorruptError,
  FieldFullError,
  FieldEmptyError,
  InvalidCardIndexError,
  InvalidCardError,
  InvalidIdError,
  PlayerNotFoundError,
  PlayerAbortError,
  UnimplementedError,
} from '../errors'

describe('Rules/errors', () => {
  const playerId = 'player-123'
  const message = 'Something went wrong'

  describe('PlayerOutOfFundsError', () => {
    it('should create an error with the correct message and playerId', () => {
      const error = new PlayerOutOfFundsError(playerId)

      expect(error.message).toBe(
        `[PlayerOutOfFundsError] Player ${playerId} is out of funds.`
      )
      expect(error.playerId).toBe(playerId)
    })
  })

  describe('PlayerOutOfCropsError', () => {
    it('should create an error with the correct message', () => {
      const error = new PlayerOutOfCropsError(playerId)

      expect(error.message).toBe(
        `[PlayerOutOfCropsError] Player ${playerId} is out of crop cards to play.`
      )
    })
  })

  describe('MatchStateCorruptError', () => {
    it('should create an error with the correct message', () => {
      const error = new MatchStateCorruptError(message)

      expect(error.message).toBe(`[MatchStateCorruptError] ${message}`)
    })
  })

  describe('GameStateCorruptError', () => {
    it('should create an error with the correct message', () => {
      const error = new GameStateCorruptError(message)

      expect(error.message).toBe(`[GameStateCorruptError] ${message}`)
    })
  })

  describe('FieldFullError', () => {
    it('should create an error with the correct message', () => {
      const error = new FieldFullError(playerId)

      expect(error.message).toBe(
        `[FieldFullError] Player ${playerId} has no room in the field.`
      )
    })
  })

  describe('FieldEmptyError', () => {
    it('should create an error with the correct message', () => {
      const error = new FieldEmptyError(playerId)

      expect(error.message).toBe(
        `[FieldEmptyError] Player ${playerId} has no crops in the field.`
      )
    })
  })

  describe('InvalidCardIndexError', () => {
    it('should create an error with the correct message', () => {
      const cardIdx = 5
      const error = new InvalidCardIndexError(cardIdx, playerId)

      expect(error.message).toBe(
        `[InvalidCardIndexError] Card index ${cardIdx} is out of bounds for player ${playerId}.`
      )
    })
  })

  describe('InvalidCardError', () => {
    it('should create an error with the correct message', () => {
      const error = new InvalidCardError(message)

      expect(error.message).toBe(`[InvalidCardError] ${message}`)
    })
  })

  describe('InvalidIdError', () => {
    it('should create an error with the correct message', () => {
      const error = new InvalidIdError(message)

      expect(error.message).toBe(`[InvalidIdError] ${message}`)
    })
  })

  describe('PlayerNotFoundError', () => {
    it('should create an error with the correct message', () => {
      const error = new PlayerNotFoundError(playerId)

      expect(error.message).toBe(
        `[PlayerNotFoundError] Player ${playerId} not found.`
      )
    })
  })

  describe('PlayerAbortError', () => {
    it('should create an error with the correct message', () => {
      const error = new PlayerAbortError()

      expect(error.message).toBe(
        `[PlayerAbortError] The player cancelled the operation.`
      )
    })
  })

  describe('UnimplementedError', () => {
    it('should create an error with the correct message', () => {
      const error = new UnimplementedError(message)

      expect(error.message).toBe(`[UnimplementedError] ${message}`)
    })
  })
})
