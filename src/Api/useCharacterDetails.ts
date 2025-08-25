import {API_BASE_URL} from "./constants.ts";
import {useFetch} from "../composables/useFetch.ts";
import type {CharacterDetailsApiResponse} from "./Entities.ts";
import {computed} from "vue";

export const useCharacterDetails = (id: string) => {
    const url = `${API_BASE_URL}/character/${id}`;
    const { data, isLoading, error } = useFetch<CharacterDetailsApiResponse>(url)

    return {
        character: computed(() => data.value ?? null),
        isLoading,
        error,
    }
}