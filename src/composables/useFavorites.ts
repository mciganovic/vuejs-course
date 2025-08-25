import { defineStore } from "pinia";
import { ref } from "vue";
import type { Character } from "../Api/Entities.ts";

export const useFavorites = defineStore(
    'favourites',
    () => {
        const favourites = ref<Character[]>([])

        const addItem = (item: Character) => {
            favourites.value.push(item)
        }

        const  deleteItem = (id: number) => {
            favourites.value = favourites.value.filter((el) => el.id !== id)
        }

        return {
            favourites,
            addItem,
            deleteItem,
        }
    },
    { persist: true }
)