import { ref, computed, watch } from 'vue'
import { useFetch } from '../composables/useFetch'
import {API_BASE_URL} from "./constants.ts";
import type {CharactersApiResponse} from "./Entities.ts";

const buildUrl = (page: number, name: string = '', species: string = 'all') => `${API_BASE_URL}/character/?page=${page}&name=${name}&species=${species}`

export const useCharacters = () => {
    const page = ref(1)
    const nameFilter = ref('')
    const selectedSpecies = ref('')
    const speciesOptions = ['all', 'human', 'animal', 'alien']

    const apiUrl = computed(() => buildUrl(page.value, nameFilter.value, selectedSpecies.value));

    const { data, isLoading, error, refetch } = useFetch<CharactersApiResponse>(apiUrl)

    const totalPages = computed(() => data.value?.info.pages || 0)

    const nextPage = () => {
        if (page.value < totalPages.value) {
            page.value++
        }
    }

    const previousPage = () => {
        if (page.value > 1) {
            page.value--
        }
    }

    const search = () => {
        page.value = 1
        refetch()
    }

    const selectSpecies = (specie: string) => {
        selectedSpecies.value = specie === 'all' ? '' : specie
        search()
    }

    watch(page, () => {
        refetch()
    })

    return {
        characters: computed(() => data.value?.results || []),
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
    }
}