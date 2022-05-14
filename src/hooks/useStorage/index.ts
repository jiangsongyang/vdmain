import { STORAGE_PUBLIC_SYMBOL } from '@/constant'

export const useStorage = () => {
  const get = (key: string) => {
    const res = localStorage.getItem(`${STORAGE_PUBLIC_SYMBOL}${key.toUpperCase()}`)
    return res ? JSON.parse(res) : null
  }

  const set = (key: string, value: any) => {
    localStorage.setItem(`${STORAGE_PUBLIC_SYMBOL}${key.toUpperCase()}`, JSON.stringify(value))
  }

  const remove = (key: string) => {
    localStorage.removeItem(`${STORAGE_PUBLIC_SYMBOL}${key.toUpperCase()}`)
  }

  return {
    get,
    set,
    remove
  }
}
