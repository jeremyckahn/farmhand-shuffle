const numberFormatter = new Intl.NumberFormat(undefined, {
  style: 'decimal',
  useGrouping: true, // Enables grouping with commas
}).format.bind(null)

export const formatNumber = (num: number) => {
  return numberFormatter(num)
}
