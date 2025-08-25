<template>
  <div class="character-card" @click="navigateToCharacter">
    <img
        :src="character.image"
        :alt="character.name"
        class="character-image"
    />
    <div class="character-info">
      <h2 class="character-name">
        {{ character.name }}
      </h2>
      <p class="character-species">{{ character.species }}</p>
      <span class="character-status" :class="character.status.toLowerCase()">
        ● {{ character.status }}
      </span>

      <FavoriteButton :character="character" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Character } from '../Api/Entities'
import { useRouter } from "vue-router";
import FavoriteButton from "./FavoriteButton.vue";

const props = defineProps<{
  character: Character
  favorites?: number[]
}>()

const router = useRouter()

const navigateToCharacter = () => {
  router.push(`/character/${props.character.id}`)
}

</script>

<style scoped>
.character-card {
  background: #ffffff;
  border-radius: 12px;
  flex: 1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.character-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

.character-image {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.character-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  text-align: center;
}

.character-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.character-species {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

.character-status {
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 0.3rem;
}

.character-status.alive {
  color: #28a745;
}

.character-status.dead {
  color: #dc3545;
}

.character-status.unknown {
  color: #6c757d;
}

</style>
