<script setup lang="ts">
import { useCharacters } from '../Api/useGetCharacters'
import CharacterCard from '../components/CharacterCard.vue'
import Layout from "../components/layout/Layout.vue";
import { capitalize } from "@vue/shared";
import DataStateHandler from "../components/layout/DataStateHandler.vue";

const {
  characters,
  isLoading,
  error,
  page,
  totalPages,
  nameFilter,
  selectedSpecies,
  speciesOptions,
  nextPage,
  previousPage,
  search,
  selectSpecies
} = useCharacters()

</script>

<template>
  <Layout>
    <header class="header">
      <div class="filters">
        <button
            v-for="specie in speciesOptions"
            :key="specie"
            type="button"
            class="filter-tab"
            :class="{ active: specie === selectedSpecies || specie === 'all' && selectedSpecies === '' }"
            @click="selectSpecies(specie)"
        >
          {{ capitalize(specie)  }}
        </button>
      </div>

      <div class="search">
        <input
            type="text"
            placeholder="Search by name..."
            v-model="nameFilter"
            class="search-input"
        />
        <button class="search-button" @click="search">Search</button>
      </div>
    </header>

    <DataStateHandler :data-exists="characters && characters.length > 1" :is-loading="isLoading" :is-error="!!error" :error-message="error?.message">
    <div class="card-container">
      <CharacterCard
          v-for="character in characters"
          :key="character.id"
          :character="character"
      />
    </div>

    <div class="pagination-wrapper">
      <nav>
        <ul class="pagination">
          <li :class="{ 'disabled': page === 1 }">
            <button @click="previousPage" :disabled="page === 1">
              <i class="fas fa-chevron-left"></i>
            </button>
          </li>
          <li>
            <span>{{ page }} / {{ totalPages }}</span>
          </li>
          <li :class="{ 'disabled': page === totalPages }">
            <button @click="nextPage" :disabled="page === totalPages">
              <i class="fas fa-chevron-right"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
    </DataStateHandler>

  </Layout>
</template>


<style scoped>
.header {
  position: absolute;
  max-width: 1200px;
  width: 100%;
  top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.filters {
  display: flex;
  flex-wrap: wrap;
}

.filter-tab {
  color: #007bff;
  cursor: pointer;
  border-radius: 0;
  transition: background-color 0.2s, color 0.2s;
}

.filter-tab:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.filter-tab:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.filter-tab.active,
.filter-tab:hover {
  background-color: #007bff;
  color: white;
}

.search {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}

.search-input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 200px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #007bff;
}

.search-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.search-button:hover {
  background-color: #0056b3;
}
.card-container{
  margin-top: 4rem;
}
.pagination-wrapper {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
}

.pagination {
  list-style: none;
  display: flex;
  gap: 0.5rem;
  padding: 0;
}

.pagination li {
  display: flex;
  align-items: center;
}

.pagination button {
  padding: 0.5rem 1rem;
  border: 1px solid #292a2a;
  background-color: #414141;
  color: #007bff;
  cursor: pointer;
  border-radius: 0.25rem;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s;
}

.pagination button:hover {
  background-color: #c2c2c2;
}

.pagination button:disabled,
.pagination .disabled button {
  color: #6c757d;
  background-color: #2d2d2d;
  border-color: #2c2c2c;
  cursor: not-allowed;
}

.pagination span {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #a0adb7;
}

</style>
