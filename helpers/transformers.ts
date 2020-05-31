type Category = 'general' | 'leisure' | 'culture' | 'extra' | 'income'
type Interval = 'daily' | 'weekly' | 'monthly' | 'yearly'

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

export function toNegativeCents(n: string) {
  let x
  x = n.replace(',', '.')
  x = Number(x)
  x = Math.abs(x).toFixed(2)

  return -Number(x) * 100
}
