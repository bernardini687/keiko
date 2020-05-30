type Category = 'general' | 'leisure' | 'culture' | 'extra' | 'income'

export function expand([x]: string): Category {
  const categoriesMap: Record<string, Category> = {
    g: 'general',
    l: 'leisure',
    c: 'culture',
    e: 'extra',
    i: 'income',
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
