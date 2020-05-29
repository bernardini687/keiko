type Category = 'general' | 'leisure' | 'culture' | 'extra' | 'income'

export function expand([x]: string): Category {
  const categoryMap: Record<string, Category> = {
    g: 'general',
    l: 'leisure',
    c: 'culture',
    e: 'extra',
    i: 'income',
  }

  return categoryMap[x?.toLowerCase()]
}

export function toNegativeCents(n: string) {
  const toAbsFixed = Math.abs(Number(n.replace(',', '.'))).toFixed(2)
  return -Number(toAbsFixed) * 100
}
