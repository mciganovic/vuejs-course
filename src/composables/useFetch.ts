import { ref, onMounted, watch, type Ref } from 'vue'
import axios, { type AxiosRequestConfig } from 'axios'

export function useFetch<T>(
    url: Ref<string> | string,
    config: AxiosRequestConfig = {},
    immediate = true
) {
    const data = ref<T | null>(null)
    const isLoading = ref(false)
    const error = ref<unknown | null>(null)

    const fetchData = async () => {
        isLoading.value = true
        error.value = null

        try {
            const response = await axios.request<T>({
                url: typeof url === 'string' ? url : url.value,
                ...config
            })
            data.value = response.data
        } catch (err) {
            error.value = err
        } finally {
            isLoading.value = false
        }
    }

    // Auto-fetch on mount
    if (immediate) {
        onMounted(fetchData)
    }

    if (typeof url !== 'string') {
        watch(url, fetchData)
    }

    return {
        data,
        isLoading,
        error,
        refetch: fetchData
    }
}