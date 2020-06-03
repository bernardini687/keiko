export function percentage(partial: number, tot: number) {
  if (tot === 0) {
    return tot
  }
  return (100 * partial) / tot
}

export function startOfMonth(): Date {
  const now = new Date()
  const SOM = new Date(now.getFullYear(), now.getMonth(), 1, 2)
  console.log('SOM::', SOM)
  return SOM
}

export function todayOfDays(): [number, number] {
  const now = new Date()
  return [
    now.getDate(),
    new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(),
  ]
}
