import axiosClient from "./../axiosClient";


export async function fetchMealsByIngredient({ commit }, ingredient) {
  const res = await axiosClient.get(`filter.php?i=${ingredient}`);
  commit("setMealsByIngredient", res?.data?.meals || []);
}

export async function fetchMealsByLetter({ commit }, letter) {
  const res = await axiosClient.get(`search.php?f=${letter}`);
  commit("setMealsByLetter", res?.data?.meals || []);
} 

export async function searchMeals({ commit }, keyword) {
  const res = await axiosClient.get(`filter.php?i=${keyword}`);
  commit("setSearchedMeals", res?.data?.meals || []);
}