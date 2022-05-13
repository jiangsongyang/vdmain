import type { PiniaPluginContext } from 'pinia'
import { useStorage } from '@/hooks'

// pinia state persistence
export const piniaPersistencePlugin = (context: PiniaPluginContext) => {
  const { store } = context
  const { $id } = store

  const { get, set } = useStorage()
  // check local storage
  // If it starts with " VDM- "
  // set it into store
  const initState = get($id)

  // when state change
  // save it into local storage
  store.$subscribe(
    (_, state) => {
      set($id, state)
    },
    { detached: true }
  )

  return {
    ...store.$state,
    ...initState,
  }
}
