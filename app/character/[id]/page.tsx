import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const CharacterPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    cache: "no-store",
  });
  const character = await data.json();

  const episodePromises = character.episode.map((ep: string) => fetch(ep));
  const episodes = await Promise.all(episodePromises);
  const episodesData = await Promise.all(episodes.map((ep) => ep.json()));

  return (
    <div className="flex justify-center py-8">
      <div className="font-mono">
        <Avatar className="size-32 mb-4">
          <AvatarImage src={character.image} />
        </Avatar>
        <p className="font-bold">{character.name}</p>
        <p>{character.location.name}</p>
        <p>
          {character.gender} / {character.species} / {character.status}
        </p>
        <ul className="mt-4">
          {episodesData.map((ep) => (
            <li key={ep.name}>
              <Badge>
                {ep.episode} - {ep.name}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterPage;
