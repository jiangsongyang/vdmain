import { STORAGE_PUBLIC_SYMBOL } from '@/constant'

export const useStorage = () => {
  const get = (key: string) => {
    const res = localStorage.getItem(`${STORAGE_PUBLIC_SYMBOL}${key}`)
    return res ? JSON.parse(res) : null
  }

  const set = (key: string, value: any) => {
    localStorage.setItem(
      `${STORAGE_PUBLIC_SYMBOL}${key}`,
      JSON.stringify(value)
    )
  }

  return {
    get,
    set,
  }
}
