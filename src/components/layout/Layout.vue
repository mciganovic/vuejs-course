<template>
    <header>
      <nav class="navbar">
        <div class="nav-container">
          <div class="menu-items">
            <RouterLink class="navbar-brand" to="/">Characters</RouterLink>
            <RouterLink class="nav-link" to="/favourites">Favourites</RouterLink>
          </div>
          <div class="favourites-icon">
            <RouterLink class="nav-link" to="/favourites">
              <i class="fa-regular fa-heart"></i>
               {{ favourites.length }}
            </RouterLink>
          </div>
        </div>
      </nav>
    </header>
    <div class="content">
      <slot />
    </div>
</template>

<script setup lang="ts">
  import { useFavorites } from "../../composables/useFavorites.ts";
  import { storeToRefs } from 'pinia'

  const store = useFavorites()
  const { favourites } = storeToRefs(store)
</script>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  background-color: #343a40;
  width: 100%;
  padding: 1rem 0;
}

.nav-container {
  display: flex;
  align-items: center;
  padding: 0 1rem;
}

.menu-items {
  display: flex;
  gap: 2rem;
  flex: 1;
  margin-left: 1rem;
}

.navbar-brand {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.nav-link {
  color: #fff;
  opacity: 0.7;
}

.nav-link:hover {
  opacity: 1;
}

.favourites-icon i {
  font-size: 1.2rem;
  color: #fff;
}
.content {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem 0;
}
</style>
<script setup lang="ts">
</script>