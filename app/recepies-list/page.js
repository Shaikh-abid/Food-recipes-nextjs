import RecepiesList from "../components/RecepiesList";

async function fetchRecepiesData() {
  const recepiesData = await fetch("https://dummyjson.com/recipes");
  const res = await recepiesData.json();
  return res;
}

export default async function recepiesList() {
  const allRecepies = await fetchRecepiesData();
  return <RecepiesList allRecepies={allRecepies}/>;
}
