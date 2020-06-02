type Category = 'general' | 'leisure' | 'culture' | 'extra' | 'income'
type Interval = 'monthly' | 'yearly'

/** Extend the short versions of Keiko's specific terms. */
export function expand([x]: string): Category | Interval {
  const categoriesMap: Record<string, Category | Interval> = {
    g: 'general',
    l: 'leisure',
    c: 'culture',
    e: 'extra',
    i: 'income',
    m: 'monthly',
    y: 'yearly',
  }

  return categoriesMap[x?.toLowerCase()]
}

/** Convert a string representing a price to negative cents, representing an expense. */
export function toNegCents(n: string): number {
  return -toCents(n)
}

/** Convert a string representing a price to positive cents, representing an income. */
export function toPosCents(n: string): number {
  return toCents(n)
}

function toCents(n: string): number {
  let x
  x = n.replace(',', '.')
  x = Number(x)

  return Math.abs(x) * 100
}
