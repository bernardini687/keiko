export function isEntry(args: string[]): boolean {
  const [x, y, z] = args
  return isCategory(x) && isAmount(y) && isDate(z)
}

export function isRegular(args: string[]): boolean {
  const [x, y, z] = args
  return isCategory(x) && isAmount(y) && isInterval(z)
}

function isCategory(value: string): boolean {
  return /^[glcei]/i.test(value)
}

function isAmount(value: string): boolean {
  return /^-?\d+(?:[.,]\d\d?)?$/.test(value)
}

function isDate(value: string): boolean {
  if (!value) {
    return true
  }

  return /^\d\d?(?:-\d\d?(?:-\d{4})?)?$/.test(value)
}

function isInterval(value: string): boolean {
  return /^[dwmy]/i.test(value)
}
