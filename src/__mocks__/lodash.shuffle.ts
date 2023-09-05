// NOTE: For the sake of predictable testing, "shuffled" cards are reversed
// instead of randomly shuffled.
export default function shuffle(arr: any[]) {
  return arr.slice().reverse()
}
