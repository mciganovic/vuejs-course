<template>
  <nav class="breadcrumb">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <router-link
            v-if="item.clickable && item.route"
            :to="item.route"
            class="breadcrumb-link"
        >
          {{ item.title }}
        </router-link>

        <span v-else class="breadcrumb-title">
          {{ item.title }}
        </span>

        <span v-if="index < items.length - 1" class="breadcrumb-separator">/</span>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  title: string;
  clickable: boolean
}

defineProps({
  items: {
    type: Array<BreadcrumbItem>,
    required: true,
    default: () => [],
  },
})
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: #6c757d;
}

.breadcrumb ul {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb-link {
  color: #007bff;
  text-decoration: none;
  margin-right: 2px;
}

.breadcrumb-link:hover {
  text-decoration: underline;

}

.breadcrumb-title {
  color: #6c757d;
  font-weight: 500;
  margin-left: -5px;
}

.breadcrumb-separator {
  color: #adb5bd;
}
</style>