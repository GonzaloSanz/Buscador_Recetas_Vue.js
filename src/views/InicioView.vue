<script setup>
import { useBebidasStore } from '../stores/bebidas';
import Receta from '../components/Receta.vue';

const bebidas = useBebidasStore();
</script>

<template>
    <div class="mx-5 md:mx-auto">
        <h1 class="text-6xl font-extrabold">Recetas</h1>

        <p v-if="bebidas.noRecetas" class="my-10 text-center text-2xl">No se han encontrado resultados</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-10 gap-10">
            <Receta v-for="receta in bebidas.recetas" :key="receta.idDrink" :receta="receta" />
        </div>
    </div>
</template>