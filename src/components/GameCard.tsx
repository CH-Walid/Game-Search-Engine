import { type Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" mb={2}>
          <HStack my="4px">
            {game.platforms.map(({ platform }) => {
              return <PlatformIcon key={platform.id} platform={platform} />;
            })}
          </HStack>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"} >{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
