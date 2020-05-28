type Category = 'general' | 'leisure' | 'culture' | 'extra' | 'income'

export function expandCategory(x: string): Category {
  const categoryMap: Record<string, Category> = {
    g: 'general',
    l: 'leisure',
    c: 'culture',
    e: 'extra',
    i: 'income',
  }

  return categoryMap[x.toLowerCase()]
}

export function shiftDecimal() {}
