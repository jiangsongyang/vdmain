import type { AxiosRequestConfig } from 'axios'

import { getBaseRequest } from './base'

export const createBaseRequest = (options: AxiosRequestConfig) => {
  return getBaseRequest(options)
}

/**
 * How to use it
 *
 * const { data , loading } = await useRequest( API , options )
 *
 *
 * ---------------------------------------------
 * If the incoming manual option
 * the hook will not be called immediately
 * but to wait when call ` run ` function
 *
 * ---------------------------------------------
 * for example  :
 *
 * const { loading, run } = useRequest( API , {
 *    manual: true
 * })
 *
 * ...
 *
 * const { data , loading } = await run()
 */
export const useRequest = () => {
  // const finalOptions = { ...options }
}
