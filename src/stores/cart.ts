import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as { id: number; name: string; quantity: number }[], // Ejemplo de estructura
  }),
  getters: {
    itemCount(state) {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },
  },
  actions: {
    addItem(item: { id: number; name: string; quantity: number }) {
      this.items.push(item)
    },
    removeItem(id: number) {
      this.items = this.items.filter((item) => item.id !== id)
    },
  },
})
