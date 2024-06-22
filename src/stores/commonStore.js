import { defineStore } from 'pinia'

export const useCommonStore = defineStore('useCommonStore', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
    }
  },
})