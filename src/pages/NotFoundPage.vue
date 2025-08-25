<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <button @click="handleBack" class="back-button">← Back to characters list</button>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
const router = useRouter()
const handleBack = () => {
  router.push('/characters')
}

</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}
</style>