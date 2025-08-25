<template>
  <Layout>
    <div class="container-fluid">
      <div class="card-container">
        <CharacterCard
            v-for="favorite in favourites"
            :key="favorite.id"
            :character="favorite"
        />
      </div>
    </div>
  </Layout>
</template>
<script setup lang="ts">
import Layout from "../components/layout/Layout.vue";
import CharacterCard from "../components/CharacterCard.vue";
import {useFavorites} from "../composables/useFavorites.ts";
import {storeToRefs} from "pinia";

const store = useFavorites()
const { favourites } = storeToRefs(store)
</script>