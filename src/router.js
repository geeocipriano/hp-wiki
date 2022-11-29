import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Characters from './views/Characters.vue'
import Spells from './views/Spells.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/characters',
        name: 'characters',
        component: Characters
    },
    {
        path: '/spells',
        name: 'spells',
        component: Spells
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router