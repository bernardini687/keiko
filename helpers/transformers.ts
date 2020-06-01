type Category = 'general' | 'leisure' | 'culture' | 'extra' | 'income'
type Interval = 'daily' | 'weekly' | 'monthly' | 'yearly'

/** Extend the short versions of Keiko's specific terms. */
export function expand([x]: string): Category | Interval {
  const categoriesMap: Record<string, Category | Interval> = {
    g: 'general',
    l: 'leisure',
    c: 'culture',
    e: 'extra',
    i: 'income',
    d: 'daily',
    w: 'weekly',
    m: 'monthly',
    y: 'yearly',
  }

  return categoriesMap[x?.toLowerCase()]
}

/** Convert a string representing a price to negative cents, representing an expense. */
export function toNegCents(n: string) {
  return -Number(toCents(n)) * 100
}

/** Convert a string representing a price to positive cents, representing an income. */
export function toPosCents(n: string) {
  return Number(toCents(n)) * 100
}

function toCents(n: string) {
  let x
  x = n.replace(',', '.')
  x = Number(x)

  return Math.abs(x).toFixed(2)
}
