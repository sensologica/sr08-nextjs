import { CharacterCard } from "@/components/CharacterCard";
import { Character } from "@/types/types";

export default async function Home() {
  const data = await fetch("https://rickandmortyapi.com/api/character", {
    next: { revalidate: 60 },
  });
  const characters = await data.json();

  return (
    <div className="h-dvh flex justify-center items-center">
      <ul className="grid grid-cols-4 gap-[16px]">
        {characters.results.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </div>
  );
}
