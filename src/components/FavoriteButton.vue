<template>
  <button class="favorite-button" @click.stop="toggleFavorite">
    <i
        :class="[
            'fa-heart',
            isFavorite ? 'fa-solid' : 'fa-regular',
            'heart-icon'
          ]"
    ></i>
    {{ isFavorite ? 'Remove from favorites' : 'Add to favorites' }}
  </button>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {useFavorites} from "../composables/useFavorites.ts";
import type {Character} from "../Api/Entities.ts";

const props = defineProps<{
  character: Character
}>()

const favoritesStore = useFavorites();

const isFavorite = computed(() =>
    favoritesStore.favourites.some((el) => el.id === props.character.id)
)

const toggleFavorite = () => {
  if (isFavorite.value) {
    favoritesStore.deleteItem(props.character.id)
  } else {
    favoritesStore.addItem(props.character)
  }
}
</script>

<style scoped>
.favorite-button {
  margin-top: 0.5rem;
  background: none;
  border: none;
  color: #e0245e;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.favorite-button:hover {
  color: #c41c4f;
}

.heart-icon {
  font-size: 1.2rem;
}
</style>