import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import { ICard } from '../../../game/types'

import { DeckBuilder } from './DeckBuilder'

vi.mock('../../../game/config', () => ({
  DECK_SIZE: 5,
  MAX_INSTANCES_PER_CARD: 2,
}))

// NOTE: We cannot use stubs from `src/test-utils/stubs/cards.ts` here because
// that file imports `src/game/cards`, which we are mocking below. This would
// cause a circular dependency.
const { mockCarrot, mockPumpkin, mockWater, mockShovel, mockRain } = vi.hoisted(
  () => ({
    mockCarrot: {
      id: 'carrot',
      name: 'Carrot',
      type: 'CROP',
      waterToMature: 2,
    },
    mockPumpkin: {
      id: 'pumpkin',
      name: 'Pumpkin',
      type: 'CROP',
      waterToMature: 1,
    },
    mockWater: { id: 'water', name: 'Water', type: 'WATER' },
    mockShovel: { id: 'shovel', name: 'Shovel', type: 'TOOL' },
    mockRain: { id: 'rain', name: 'Rain', type: 'EVENT' },
  })
)

vi.mock('../../../game/cards', () => ({
  cropCards: {
    carrot: mockCarrot,
    pumpkin: mockPumpkin,
  },
  waterCards: {
    water: mockWater,
  },
  toolCards: {
    shovel: mockShovel,
  },
  eventCards: {
    rain: mockRain,
  },
}))

describe('DeckBuilder', () => {
  const onDone = vi.fn()

  beforeEach(() => {
    onDone.mockClear()
  })

  test('renders cards in sections', () => {
    const { container } = render(<DeckBuilder onDone={onDone} />)

    // NOTE: Expected order: Crops (sorted by value/water), Water, Tools,
    // Events
    //
    // Pumpkin (1 water) < Carrot (2 water)
    const expectedOrder = ['Pumpkin', 'Carrot', 'Water', 'Shovel', 'Rain']

    const regex = new RegExp(expectedOrder.join('|'))
    const allMatches = screen.getAllByText(regex)
    const textContent = allMatches.map(el => el.textContent)

    const expectedTextContent = [
      'Pumpkin',
      'Carrot',
      'Water',
      'Water',
      'Shovel',
      'Rain',
    ]
    expect(textContent).toEqual(expectedTextContent)

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-fdd6fr-MuiPaper-root"
        >
          <h2
            class="MuiTypography-root MuiTypography-h4 MuiTypography-alignCenter MuiTypography-gutterBottom css-1trk376-MuiTypography-root"
          >
            Select your cards
          </h2>
          <h3
            aria-live="polite"
            class="MuiTypography-root MuiTypography-h6 MuiTypography-alignCenter MuiTypography-gutterBottom css-tcrtuv-MuiTypography-root"
            role="status"
          >
            Total:
            0
             /
            5
          </h3>
          <div
            class="MuiBox-root css-27oi8k"
          >
            <div
              class="MuiBox-root css-0"
            >
              <h5
                class="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom css-1o0ov7z-MuiTypography-root"
              >
                Crops
              </h5>
              <div
                class="MuiBox-root css-5nrxsk"
              >
                <div
                  class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-p5ews7-MuiPaper-root"
                >
                  <div
                    class="Card MuiBox-root css-1lnx0i2"
                  >
                    <div
                      style="transform: none; transform-origin: 50% 50% 0;"
                    >
                      <div
                        aria-label=""
                        class="CardFlipWrapper MuiBox-root css-1nybwua"
                        data-mui-internal-clone-element="true"
                      >
                        <div
                          class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-tj1f4j-MuiPaper-root"
                          data-chromatic="ignore"
                        >
                          <span
                            class="MuiTypography-root MuiTypography-caption css-1ivtvsc-MuiTypography-root"
                          >
                            Pumpkin
                          </span>
                          <div
                            class="MuiBox-root css-a4w1rr"
                          >
                            <img
                              alt="Pumpkin"
                              class="css-1cs2h9x"
                              src="/src/ui/img/cards/pumpkin.png"
                            />
                          </div>
                          <hr
                            class="MuiDivider-root MuiDivider-fullWidth css-1b008ma-MuiDivider-root"
                          />
                          <div
                            class="MuiBox-root css-17uj34z"
                          />
                        </div>
                        <div
                          class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-jzsa0k-MuiPaper-root"
                        >
                          <h2
                            class="MuiTypography-root MuiTypography-h2 css-p6gw6g-MuiTypography-root"
                          >
                            Farmhand Shuffle
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="MuiBox-root css-axw7ok"
                  >
                    <span
                      aria-label="Remove card"
                      class=""
                      data-mui-internal-clone-element="true"
                    >
                      <button
                        aria-label="decrease quantity"
                        class="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-secondary Mui-disabled MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-secondary css-9rrh7h-MuiButtonBase-root-MuiFab-root"
                        disabled=""
                        tabindex="-1"
                        type="button"
                      >
                        <svg
                          aria-hidden="true"
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          data-testid="RemoveIcon"
                          focusable="false"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 13H5v-2h14v2z"
                          />
                        </svg>
                      </button>
                    </span>
                    <h6
                      class="MuiTypography-root MuiTypography-h6 css-esqrk7-MuiTypography-root"
                    >
                      0
                    </h6>
                    <span
                      aria-label="Add card"
                      class=""
                      data-mui-internal-clone-element="true"
                    >
                      <button
                        aria-label="increase quantity"
                        class="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-primary MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-primary css-qize55-MuiButtonBase-root-MuiFab-root"
                        tabindex="0"
                        type="button"
                      >
                        <svg
                          aria-hidden="true"
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          data-testid="AddIcon"
                          focusable="false"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                          />
                        </svg>
                        <span
                          class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                        />
                      </button>
                    </span>
                  </div>
                </div>
                <div
                  class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-p5ews7-MuiPaper-root"
                >
                  <div
                    class="Card MuiBox-root css-1lnx0i2"
                  >
                    <div
                      style="transform: none; transform-origin: 50% 50% 0;"
                    >
                      <div
                        aria-label=""
                        class="CardFlipWrapper MuiBox-root css-1nybwua"
                        data-mui-internal-clone-element="true"
                      >
                        <div
                          class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-tj1f4j-MuiPaper-root"
                          data-chromatic="ignore"
                        >
                          <span
                            class="MuiTypography-root MuiTypography-caption css-1ivtvsc-MuiTypography-root"
                          >
                            Carrot
                          </span>
                          <div
                            class="MuiBox-root css-a4w1rr"
                          >
                            <img
                              alt="Carrot"
                              class="css-1cs2h9x"
                              src="/src/ui/img/cards/carrot.png"
                            />
                          </div>
                          <hr
                            class="MuiDivider-root MuiDivider-fullWidth css-1b008ma-MuiDivider-root"
                          />
                          <div
                            class="MuiBox-root css-17uj34z"
                          />
                        </div>
                        <div
                          class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-jzsa0k-MuiPaper-root"
                        >
                          <h2
                            class="MuiTypography-root MuiTypography-h2 css-p6gw6g-MuiTypography-root"
                          >
                            Farmhand Shuffle
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="MuiBox-root css-axw7ok"
                  >
                    <span
                      aria-label="Remove card"
                      class=""
                      data-mui-internal-clone-element="true"
                    >
                      <button
                        aria-label="decrease quantity"
                        class="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-secondary Mui-disabled MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-secondary css-9rrh7h-MuiButtonBase-root-MuiFab-root"
                        disabled=""
                        tabindex="-1"
                        type="button"
                      >
                        <svg
                          aria-hidden="true"
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          data-testid="RemoveIcon"
                          focusable="false"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 13H5v-2h14v2z"
                          />
                        </svg>
                      </button>
                    </span>
                    <h6
                      class="MuiTypography-root MuiTypography-h6 css-esqrk7-MuiTypography-root"
                    >
                      0
                    </h6>
                    <span
                      aria-label="Add card"
                      class=""
                      data-mui-internal-clone-element="true"
                    >
                      <button
                        aria-label="increase quantity"
                        class="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-primary MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-primary css-qize55-MuiButtonBase-root-MuiFab-root"
                        tabindex="0"
                        type="button"
                      >
                        <svg
                          aria-hidden="true"
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          data-testid="AddIcon"
                          focusable="false"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                          />
                        </svg>
                        <span
                          class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                        />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <hr
                class="MuiDivider-root MuiDivider-fullWidth css-ctpjxq-MuiDivider-root"
              />
            </div>
            <div
              class="MuiBox-root css-0"
            >
              <h5
                class="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom css-1o0ov7z-MuiTypography-root"
              >
                Water
              </h5>
              <div
                class="MuiBox-root css-5nrxsk"
              >
                <div
                  class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-p5ews7-MuiPaper-root"
                >
                  <div
                    class="Card MuiBox-root css-1lnx0i2"
                  >
                    <div
                      style="transform: none; transform-origin: 50% 50% 0;"
                    >
                      <div
                        aria-label=""
                        class="CardFlipWrapper MuiBox-root css-1nybwua"
                        data-mui-internal-clone-element="true"
                      >
                        <div
                          class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-tj1f4j-MuiPaper-root"
                          data-chromatic="ignore"
                        >
                          <span
                            class="MuiTypography-root MuiTypography-caption css-1ivtvsc-MuiTypography-root"
                          >
                            Water
                          </span>
                          <div
                            class="MuiBox-root css-a4w1rr"
                          >
                            <img
                              alt="Water"
                              class="css-1cs2h9x"
                              src="/src/ui/img/cards/watering-can.png"
                            />
                          </div>
                          <hr
                            class="MuiDivider-root MuiDivider-fullWidth css-1b008ma-MuiDivider-root"
                          />
                          <div
                            class="MuiBox-root css-17uj34z"
                          />
                        </div>
                        <div
                          class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-jzsa0k-MuiPaper-root"
                        >
                          <h2
                            class="MuiTypography-root MuiTypography-h2 css-p6gw6g-MuiTypography-root"
                          >
                            Farmhand Shuffle
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="MuiBox-root css-axw7ok"
                  >
                    <span
                      aria-label="Remove card"
                      class=""
                      data-mui-internal-clone-element="true"
                    >
                      <button
                        aria-label="decrease quantity"
                        class="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-secondary Mui-disabled MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-secondary css-9rrh7h-MuiButtonBase-root-MuiFab-root"
                        disabled=""
                        tabindex="-1"
                        type="button"
                      >
                        <svg
                          aria-hidden="true"
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          data-testid="RemoveIcon"
                          focusable="false"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 13H5v-2h14v2z"
                          />
                        </svg>
                      </button>
                    </span>
                    <h6
                      class="MuiTypography-root MuiTypography-h6 css-esqrk7-MuiTypography-root"
                    >
                      0
                    </h6>
                    <span
                      aria-label="Add card"
                      class=""
                      data-mui-internal-clone-element="true"
                    >
                      <button
                        aria-label="increase quantity"
                        class="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-primary MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-primary css-qize55-MuiButtonBase-root-MuiFab-root"
                        tabindex="0"
                        type="button"
                      >
                        <svg
                          aria-hidden="true"
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          data-testid="AddIcon"
                          focusable="false"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                          />
                        </svg>
                        <span
                          class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                        />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <hr
                class="MuiDivider-root MuiDivider-fullWidth css-ctpjxq-MuiDivider-root"
              />
            </div>
            <div
              class="MuiBox-root css-0"
            >
              <h5
                class="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom css-1o0ov7z-MuiTypography-root"
              >
                Tools
              </h5>
              <div
                class="MuiBox-root css-5nrxsk"
              >
                <div
                  class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-p5ews7-MuiPaper-root"
                >
                  <div
                    class="Card MuiBox-root css-1lnx0i2"
                  >
                    <div
                      style="transform: none; transform-origin: 50% 50% 0;"
                    >
                      <div
                        aria-label=""
                        class="CardFlipWrapper MuiBox-root css-1nybwua"
                        data-mui-internal-clone-element="true"
                      >
                        <div
                          class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-tj1f4j-MuiPaper-root"
                          data-chromatic="ignore"
                        >
                          <span
                            class="MuiTypography-root MuiTypography-caption css-1ivtvsc-MuiTypography-root"
                          >
                            Shovel
                          </span>
                          <div
                            class="MuiBox-root css-a4w1rr"
                          >
                            <img
                              alt="Shovel"
                              class="css-1cs2h9x"
                              src="/src/ui/img/cards/shovel.png"
                            />
                          </div>
                          <hr
                            class="MuiDivider-root MuiDivider-fullWidth css-1b008ma-MuiDivider-root"
                          />
                          <div
                            class="MuiBox-root css-17uj34z"
                          />
                        </div>
                        <div
                          class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-jzsa0k-MuiPaper-root"
                        >
                          <h2
                            class="MuiTypography-root MuiTypography-h2 css-p6gw6g-MuiTypography-root"
                          >
                            Farmhand Shuffle
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="MuiBox-root css-axw7ok"
                  >
                    <span
                      aria-label="Remove card"
                      class=""
                      data-mui-internal-clone-element="true"
                    >
                      <button
                        aria-label="decrease quantity"
                        class="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-secondary Mui-disabled MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-secondary css-9rrh7h-MuiButtonBase-root-MuiFab-root"
                        disabled=""
                        tabindex="-1"
                        type="button"
                      >
                        <svg
                          aria-hidden="true"
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          data-testid="RemoveIcon"
                          focusable="false"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 13H5v-2h14v2z"
                          />
                        </svg>
                      </button>
                    </span>
                    <h6
                      class="MuiTypography-root MuiTypography-h6 css-esqrk7-MuiTypography-root"
                    >
                      0
                    </h6>
                    <span
                      aria-label="Add card"
                      class=""
                      data-mui-internal-clone-element="true"
                    >
                      <button
                        aria-label="increase quantity"
                        class="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-primary MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-primary css-qize55-MuiButtonBase-root-MuiFab-root"
                        tabindex="0"
                        type="button"
                      >
                        <svg
                          aria-hidden="true"
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          data-testid="AddIcon"
                          focusable="false"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                          />
                        </svg>
                        <span
                          class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                        />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <hr
                class="MuiDivider-root MuiDivider-fullWidth css-ctpjxq-MuiDivider-root"
              />
            </div>
            <div
              class="MuiBox-root css-0"
            >
              <h5
                class="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom css-1o0ov7z-MuiTypography-root"
              >
                Events
              </h5>
              <div
                class="MuiBox-root css-5nrxsk"
              >
                <div
                  class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-p5ews7-MuiPaper-root"
                >
                  <div
                    class="Card MuiBox-root css-1lnx0i2"
                  >
                    <div
                      style="transform: none; transform-origin: 50% 50% 0;"
                    >
                      <div
                        aria-label=""
                        class="CardFlipWrapper MuiBox-root css-1nybwua"
                        data-mui-internal-clone-element="true"
                      >
                        <div
                          class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-tj1f4j-MuiPaper-root"
                          data-chromatic="ignore"
                        >
                          <span
                            class="MuiTypography-root MuiTypography-caption css-1ivtvsc-MuiTypography-root"
                          >
                            Rain
                          </span>
                          <div
                            class="MuiBox-root css-a4w1rr"
                          >
                            <img
                              alt="Rain"
                              class="css-1cs2h9x"
                              src="/src/ui/img/cards/raincloud.png"
                            />
                          </div>
                          <hr
                            class="MuiDivider-root MuiDivider-fullWidth css-1b008ma-MuiDivider-root"
                          />
                          <div
                            class="MuiBox-root css-17uj34z"
                          />
                        </div>
                        <div
                          class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-jzsa0k-MuiPaper-root"
                        >
                          <h2
                            class="MuiTypography-root MuiTypography-h2 css-p6gw6g-MuiTypography-root"
                          >
                            Farmhand Shuffle
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="MuiBox-root css-axw7ok"
                  >
                    <span
                      aria-label="Remove card"
                      class=""
                      data-mui-internal-clone-element="true"
                    >
                      <button
                        aria-label="decrease quantity"
                        class="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-secondary Mui-disabled MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-secondary css-9rrh7h-MuiButtonBase-root-MuiFab-root"
                        disabled=""
                        tabindex="-1"
                        type="button"
                      >
                        <svg
                          aria-hidden="true"
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          data-testid="RemoveIcon"
                          focusable="false"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 13H5v-2h14v2z"
                          />
                        </svg>
                      </button>
                    </span>
                    <h6
                      class="MuiTypography-root MuiTypography-h6 css-esqrk7-MuiTypography-root"
                    >
                      0
                    </h6>
                    <span
                      aria-label="Add card"
                      class=""
                      data-mui-internal-clone-element="true"
                    >
                      <button
                        aria-label="increase quantity"
                        class="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-primary MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-primary css-qize55-MuiButtonBase-root-MuiFab-root"
                        tabindex="0"
                        type="button"
                      >
                        <svg
                          aria-hidden="true"
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          data-testid="AddIcon"
                          focusable="false"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                          />
                        </svg>
                        <span
                          class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                        />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="MuiBox-root css-1bvc4cc"
          >
            <button
              class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge css-jh47zj-MuiButtonBase-root-MuiButton-root"
              disabled=""
              tabindex="-1"
              type="button"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    `)
  })

  test('enforces max instances per card limit (except Water)', () => {
    render(<DeckBuilder onDone={onDone} />)

    // Add 2 Pumpkins (limit reached)
    const pumpkinAdd = screen.getAllByLabelText('increase quantity')[0]
    fireEvent.click(pumpkinAdd)
    fireEvent.click(pumpkinAdd)

    expect(pumpkinAdd).toBeDisabled()

    // Add 2 Water (limit not reached because Water is exception)
    const waterAdd = screen.getAllByLabelText('increase quantity')[2]
    fireEvent.click(waterAdd)
    fireEvent.click(waterAdd)

    expect(waterAdd).toBeEnabled()
  })

  test('updates total and enables/disables Done button', () => {
    render(<DeckBuilder onDone={onDone} />)

    const doneButton = screen.getByRole('button', { name: 'Done' })

    expect(doneButton).toBeDisabled()
    expect(screen.getByText('Total: 0 / 5')).toBeInTheDocument()

    // Add 1 Pumpkin
    const pumpkinAdd = screen.getAllByLabelText('increase quantity')[0]
    fireEvent.click(pumpkinAdd)

    expect(screen.getByText('Total: 1 / 5')).toBeInTheDocument()
    expect(doneButton).toBeDisabled()

    // Add 1 Carrot
    const carrotAdd = screen.getAllByLabelText('increase quantity')[1]
    fireEvent.click(carrotAdd)

    expect(screen.getByText('Total: 2 / 5')).toBeInTheDocument()
    expect(doneButton).toBeDisabled()

    // Add 3 Water
    const waterAdd = screen.getAllByLabelText('increase quantity')[2]
    fireEvent.click(waterAdd)
    fireEvent.click(waterAdd)
    fireEvent.click(waterAdd)

    expect(screen.getByText('Total: 5 / 5')).toBeInTheDocument()
    expect(doneButton).toBeEnabled()

    // Try to add more (should be disabled because DECK_SIZE reached)
    expect(pumpkinAdd).toBeDisabled()
    expect(carrotAdd).toBeDisabled()
    expect(waterAdd).toBeDisabled()

    // Remove 1 Pumpkin
    const pumpkinRemove = screen.getAllByLabelText('decrease quantity')[0]
    fireEvent.click(pumpkinRemove)

    expect(screen.getByText('Total: 4 / 5')).toBeInTheDocument()
    expect(doneButton).toBeDisabled()
    expect(pumpkinAdd).toBeEnabled()
  })

  test('requires at least one crop', () => {
    render(<DeckBuilder onDone={onDone} />)

    // Add 5 Water cards (Valid deck size, but no crops)
    const waterAdd = screen.getAllByLabelText('increase quantity')[2]
    for (let i = 0; i < 5; i++) {
      fireEvent.click(waterAdd)
    }

    const doneButton = screen.getByRole('button', { name: 'Done' })
    expect(doneButton).toBeDisabled()

    // Remove 1 Water and add 1 Pumpkin
    const waterRemove = screen.getAllByLabelText('decrease quantity')[2]
    fireEvent.click(waterRemove)

    const pumpkinAdd = screen.getAllByLabelText('increase quantity')[0]
    fireEvent.click(pumpkinAdd)

    expect(doneButton).toBeEnabled()
  })

  test('calls onDone with correct deck map', () => {
    render(<DeckBuilder onDone={onDone} />)

    // Add 2 Pumpkins
    const pumpkinAdd = screen.getAllByLabelText('increase quantity')[0]
    fireEvent.click(pumpkinAdd)
    fireEvent.click(pumpkinAdd)

    // Add 3 Water
    const waterAdd = screen.getAllByLabelText('increase quantity')[2]
    fireEvent.click(waterAdd)
    fireEvent.click(waterAdd)
    fireEvent.click(waterAdd)

    const doneButton = screen.getByRole('button', { name: 'Done' })
    fireEvent.click(doneButton)

    expect(onDone).toHaveBeenCalledTimes(1)

    const deckMap = onDone.mock.calls[0][0] as Map<ICard, number>

    expect(deckMap.get(mockPumpkin as ICard)).toBe(2)
    expect(deckMap.get(mockWater as ICard)).toBe(3)
    expect(deckMap.has(mockCarrot as ICard)).toBe(false)
  })
})
