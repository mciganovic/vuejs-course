export interface ApiInfo {
    count: number
    pages: number
    next: string | null
    prev: string | null
}

export interface CharacterLocation {
    name: string
    url: string
}

export interface Character {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: CharacterLocation
    location: CharacterLocation
    image: string
    episode: string[]
    url: string
    created: string
}

export interface CharactersApiResponse {
    info: ApiInfo
    results: Character[]
}

export type CharacterDetailsApiResponse = Character