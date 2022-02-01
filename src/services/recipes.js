import http from "./http";

const complex_search_api_endPoint = `/complexSearch`;
const information_api_endPoint = `/information`;

export async function getRecipes(limit, offset) {
  const param = `?number=${limit}&offset=${offset}`;

  const { data } = await http.get(`${complex_search_api_endPoint}${param}`);
  return data;
}

export async function getRecipeById(id) {
  const { data } = await http.get(`/${id}${information_api_endPoint}`);
  return data;
}

export default {
  getRecipes,
  getRecipeById,
};
