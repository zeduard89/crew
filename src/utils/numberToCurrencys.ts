const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export const numberToUSD = (number: number): string => {
  return USDollar.format(number)
}
