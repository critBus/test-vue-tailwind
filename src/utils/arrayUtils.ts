export function splitList<T>(list: T[]): [T[], T[]] {
  if (list.length === 0) return [[], []]
  if (list.length === 1) return [list, []]
  const mid = Math.ceil(list.length / 2)
  return [list.slice(0, mid), list.slice(mid)]
}
