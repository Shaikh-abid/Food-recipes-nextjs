import SingleRecipes from "@/app/components/SingleRecipes";

async function fetchRecepiesById(id) {
  const recepiesData = await fetch(`https://dummyjson.com/recipes/${id}`);
  const res = await recepiesData.json();
  return res;
}

export default async function Recepies({ params }) {
  const data = await fetchRecepiesById(params.recepies)
  console.log(data)
  return <SingleRecipes data={data}/>;
}
