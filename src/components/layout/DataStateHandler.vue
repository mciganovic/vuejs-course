<<template>
  <div class="wrapper">
    <div v-if="isLoading" class="loading-container">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>

    <!-- Error Handling -->
      <div v-if="isError" class="error-message">
        Ops! Api error: {{ errorMessage || 'An error occurred while loading data.' }}
      </div>

    <!-- Data Slot -->
    <template v-else-if="dataExists">
      <slot />
    </template>

    <!-- No Data -->
    <div v-else class="no-data-message">
      {{ noDataMessage || 'No data available.' }}
    </div>

    <!-- Back Button -->
    <div v-if="backButtonVisible && !dataExists" class="back-button-container">
      <button @click="handleBack" class="back-button">← Back to characters list</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

defineProps<{
  dataExists: boolean
  isLoading: boolean
  errorMessage?: string
  isError: boolean;
  noDataMessage?: string
  backButtonVisible?: boolean
}>()

const router = useRouter()
const handleBack = () => {
  router.push('/characters')
}

</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
  align-content: center;
}

/* Spinner Styles */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-message {
  color: #dc3545;
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
}

.no-data-message {
  color: #6c757d;
  font-style: italic;
  text-align: center;
  margin-top: 1rem;
}

/* Back Button */
.back-button-container {
  margin-top: 2rem;
}

.back-button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
