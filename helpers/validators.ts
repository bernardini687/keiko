/** Verify the given arguments are okay for an _Entry_ record. */
export function isEntry([cat, amt, date]: string[]): boolean {
  return isCategory(cat) && isAmount(amt) && isDate(date)
}

/** Verify the given arguments are okay for a _Regular_ record. */
export function isRegular([cat, amt, date]: string[]): boolean {
  return isCategory(cat) && isAmount(amt) && isInterval(date)
}

function isCategory(value: string): boolean {
  return /^[glcei]/i.test(value)
}

function isAmount(value: string): boolean {
  return /^-?\d+(?:[.,]\d\d?)?$/.test(value)
}

function isDate(value: string): boolean {
  if (!value) {
    // a date is optional
    return true
  }

  return /^\d\d?(?:-\d\d?(?:-\d{4})?)?$/.test(value)
}

function isInterval(value: string): boolean {
  return /^[dwmy]/i.test(value)
}
