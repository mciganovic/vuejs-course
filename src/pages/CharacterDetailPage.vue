<template>
  <Layout>
    <DataStateHandler
        :dataExists="!!character"
        :isLoading="isLoading"
        :isError="!!error"
        :errorMessage="error?.message"
        noDataMessage="No character details found."
        backButtonVisible="true"
    >
    <div v-if="character" class="character-detail">
      <Breadcrumb :items="breadcrumbItems" />

      <img :src="character.image" alt="character" class="character-image" />

      <div class="character-info">
        <h2>{{ character.name }}</h2>
        <p>{{ character.species }} - {{ character.status }}</p>
        <p>Last known location: <strong>{{ character.location.name }}</strong></p>
        <p>First seen in episode: <strong>{{ character.episode[0] }}</strong></p>

        <FavoriteButton :character="character" />
      </div>
    </div>
    </DataStateHandler>
  </Layout>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {useCharacterDetails} from "../Api/useCharacterDetails.ts";
import FavoriteButton from "../components/FavoriteButton.vue";
import Layout from "../components/layout/Layout.vue";
import Breadcrumb from "../components/layout/Breadcrumb.vue";
import DataStateHandler from "../components/layout/DataStateHandler.vue";

import {computed} from "vue";

const route = useRoute()

const {isLoading, error, character} = useCharacterDetails((route.params.id ?? '') as string)

const breadcrumbItems = computed(() => [
  { title: 'Characters', route: '/characters', clickable: true },
  { title: character.value?.name ?? '', clickable: false },
])

</script>

<style scoped>
.character-detail {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.character-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
}

.character-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.character-info h2 {
  margin: 0;
  font-size: 1.8rem;
  color: #333;
}

.character-info p {
  margin: 0;
  font-size: 1rem;
  color: #555;
}
</style>