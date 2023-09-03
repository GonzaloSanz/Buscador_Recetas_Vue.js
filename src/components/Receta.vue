<script setup>
import { useBebidasStore } from '../stores/bebidas';

const bebidas = useBebidasStore();

defineProps({
    receta: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="border shadow-lg rounded-md">
        <div class="overflow-hidden">
            <img class="hover:scale-125 transition-transform hover:rotate-1 duration-200" :src="receta.strDrinkThumb"
                :alt="'Imagen de ' + receta.strDrink" />
        </div>

        <div class="p-5">
            <h2 class="text-2xl font-bold text-gray-900"> {{ receta.strDrink }}</h2>

            <button 
                type="button" 
                class="rounded-md bg-orange-400 hover:bg-orange-500 transition-colors mt-5 w-full p-3 font-bold text-white"
                @click="bebidas.seleccionarBebida(receta.idDrink)"
                >
                
                Ver Receta
            </button>
        </div>
    </div>
</template>