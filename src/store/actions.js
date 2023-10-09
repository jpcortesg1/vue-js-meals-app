import axiosClient from "./../axiosClient";

export async function searchMeals({ commit }, keyword) {
  const res = await axiosClient.get(`search.php?s=${keyword}`);
  commit("setSearchedMeals", res?.data?.meals || []);
}
