import { ref, reactive, onMounted, computed } from "vue";
import { defineStore } from "pinia";
import clienteAxios from '../../config/axios';
import { useModalStore } from './modal'

export const useBebidasStore = defineStore("bebidas", () => {
  const categorias = ref([]);
  const busqueda = reactive({
    nombre: '',
    categoria: ''
  });
  const recetas = ref([]);
  const receta = ref({});
  const modal = useModalStore();

  /*
    API: https://www.thecocktaildb.com/api.php
  */
  onMounted(async () => {
    await clienteAxios('/list.php?c=list')
      .then(respuesta => {
        categorias.value = respuesta.data.drinks;
      })
      .catch(error => console.log(error));
  });

  const obtenerRecetas = async () => {
    await clienteAxios(`/filter.php?c=${busqueda.categoria}&i=${busqueda.nombre}`)
      .then(respuesta => {
        recetas.value = respuesta.data.drinks;
      })
      .catch(error => console.log(error));
  }

  const seleccionarBebida = async (id) => {
    await clienteAxios(`/lookup.php?i=${id}`)
      .then(respuesta => {
        receta.value = respuesta.data.drinks[0];

        // Mostrar el modal
        modal.handleClickModal();
      })
      .catch(error => console.log(error));
  }

  const noRecetas = computed(() => recetas.value.length === 0);

  return {
    categorias,
    busqueda,
    obtenerRecetas,
    recetas,
    receta,
    seleccionarBebida,
    noRecetas
  };
});
