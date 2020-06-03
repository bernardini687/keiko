const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

/** TODO */
export function formatDate(d: Date): string {
  return days[d.getDay()] + ' ' + d.getDate()
}

/** TODO */
export function formatAmt(n: number): string {
  return (n / 100).toFixed(2).replace('.', ',')
}

/** TODO */
export function formatPct(n: number): string {
  return Math.round(n).toFixed(0) + '%'
}
