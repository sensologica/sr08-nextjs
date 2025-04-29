import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardTitle } from "./ui/card";
import { Character } from "@/types/types";

export const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <>
      <Link href={`character/${character.id}`}>
        <Card className="items-center p-4 h-full">
          <Avatar className="size-16">
            <AvatarImage src={character.image} />
          </Avatar>
          <CardTitle className="font-mono text-center">
            {character.name}
          </CardTitle>
        </Card>
      </Link>
    </>
  );
};
