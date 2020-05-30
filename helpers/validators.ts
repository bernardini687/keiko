export function isEntry(args: string[]): boolean {
  const [x, y, z] = args
  return category(x) && amount(y) && date(z)
}

export function regular() {}

function category(value: string): boolean {
  return /^[glcei]/i.test(value)
}

function amount(value: string): boolean {
  return /^-?\d+(?:[.,]\d\d?)?$/.test(value)
}

function date(value: string): boolean {
  if (!value) {
    return true
  }

  return /^\d\d?(?:-\d\d?(?:-\d{4})?)?$/.test(value)
}
