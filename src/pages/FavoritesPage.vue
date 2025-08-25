<template>
  <Layout>
    <DataStateHandler :data-exists="favourites.length" :is-loading="false" :is-error="false" no-data-message="You haven't added any characters to your favorites yet. Visit the character list to add some!" :back-button-visible="true">
    <div class="container-fluid">
      <div class="card-container">
        <CharacterCard
            v-for="favorite in favourites"
            :key="favorite.id"
            :character="favorite"
        />
      </div>
    </div>
    </DataStateHandler>
  </Layout>
</template>
<script setup lang="ts">
import Layout from "../components/layout/Layout.vue";
import CharacterCard from "../components/CharacterCard.vue";
import {useFavorites} from "../composables/useFavorites.ts";
import {storeToRefs} from "pinia";
import DataStateHandler from "../components/layout/DataStateHandler.vue";

const store = useFavorites()
const { favourites } = storeToRefs(store)
</script>