export function rubAmount(amount) {
  const n = Number(amount)
  if (Number.isNaN(n)) return '—'
  return `${n.toLocaleString('ru-RU')}\u00A0₽`
}
