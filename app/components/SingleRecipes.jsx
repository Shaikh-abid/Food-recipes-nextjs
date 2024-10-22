import Link from "next/link";

const SingleRecipes = ({ data }) => {
  return (
    <>
      <h1 className="text-4xl font-sans font-extrabold text-center mb-10">
        Recipes detail guide.
      </h1>
      <main className="w-full lg:pt-10 lg:pl-52 sm:pt-5 sm:pl-5 flex">
        <div className="lg:w-[20%] sm:w-32">
          <img src={data.image} alt={data.name} className="rounded-md" />
          <h1 className="font-bold mt-5 text-xl mb-2 font-sans text-green-200">
            Tags.
          </h1>
          {data.tags.map((tag) => (
            <li key={tag} className="text-base">
              {tag}
            </li>
          ))}
        </div>

        <div className="w-[60%] ml-16 flex flex-col">
          <h1 className="font-bold text-3xl font-sans text-zinc-200">
            {data.name}
          </h1>
          <h2 className="mt-5 font-semibold text-lg text-yellow-300">
            Ingredients.
          </h2>
          {data.ingredients.map((ingredient) => (
            <li key={ingredient} className="text-base">
              {ingredient}
            </li>
          ))}
          <h2 className="mt-5 font-semibold text-lg text-red-300">
            Instructions.
          </h2>
          {data.instructions.map((instruction) => (
            <li key={instruction} className="text-base">
              {instruction}
            </li>
          ))}
        </div>
      </main>
     
    </>
  );
};

export default SingleRecipes;
