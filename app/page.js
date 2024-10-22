import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col text-center mt-10">
      <h1 className="font-bold text-5xl mb-4 font-sans ">The Recipe Vault</h1>
      <p className="font-semibold text-xl mb-4">Your go-to resource for delicious, easy-to-follow recipes.</p>

      <Link href={"/recepies-list"} className="font-medium text-purple-600 dark:text-purple-500 hover:underline">Explore our recipes</Link>
      
    </div>
  );
}
