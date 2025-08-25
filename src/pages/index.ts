import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import CharacterListPage from './CharacterListPage.vue'
import CharacterDetailPage from './CharacterDetailPage.vue'
import FavoritesPage from './FavoritesPage.vue'
import NotFoundPage from './NotFoundPage.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: () => {
            return {
                path: '/characters'
            }
        }
    },
    {
        path: '/characters',
        component: CharacterListPage
    },
    {
        path: '/character/:id',
        component: CharacterDetailPage
    },
    {
        path: '/favourites',
        component: FavoritesPage
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundPage,
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router