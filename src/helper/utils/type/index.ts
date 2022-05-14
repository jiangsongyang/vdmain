/**
 * get target type
 * @param tar
 * @returns
 */
export const getType = (tar: any) => {
  if (tar === null || tar === undefined) {
    return typeof tar
  }
  return Object.prototype.toString.call(tar).slice(8, -1).toLowerCase()
}

export const isBoolean = (tar: unknown) => {
  return getType(tar) === 'boolean'
}
