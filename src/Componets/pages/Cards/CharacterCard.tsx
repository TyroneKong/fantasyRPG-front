import { useQuery } from "react-query";
import axios from "axios";
import { CharacterType } from "Types/characterType";
import Frodo from "../../../assets/card-images/frodo.webp";
import Characterimg1 from "../../../assets/card-images/04k3you4687a1.webp";
import Characterimg2 from "../../../assets/card-images/1d44zq6a687a1.webp";
import Characterimg3 from "../../../assets/card-images/2d3fxq0y587a1.webp";
import Characterimg4 from "../../../assets/card-images/56dtremz587a1.webp";
import Characterimg5 from "../../../assets/card-images/5ine2yg1687a1.webp";
import Characterimg6 from "../../../assets/card-images/6l40gmh0687a1.webp";
import Characterimg7 from "../../../assets/card-images/dfh0thc9687a1.webp";
import Characterimg8 from "../../../assets/card-images/gbtj7b66687a1.webp";
import Characterimg9 from "../../../assets/card-images/hv1vghsa687a1.webp";
import Characterimg10 from "../../../assets/card-images/ios5iiz6687a1.webp";
import Characterimg11 from "../../../assets/card-images/maf5sc08687a1.webp";
import Characterimg12 from "../../../assets/card-images/n5busyd5687a1.webp";
import Characterimg13 from "../../../assets/card-images/ot6rjbhw587a1.webp";
import Characterimg14 from "../../../assets/card-images/v18mpz54687a1.webp";
import Characterimg15 from "../../../assets/card-images/v4b2z5qy587a1.webp";
import Characterimg16 from "../../../assets/card-images/zavctrg3687a1.webp";
import Characterimg17 from "../../../assets/card-images/zo75edj2687a1.webp";

import { Image, Card, CardBody, Flex } from "@chakra-ui/react";

const CharacterImages = [
  Frodo,
  Characterimg17,
  Characterimg1,
  Characterimg2,
  Characterimg3,
  Characterimg4,
  Characterimg5,
  Characterimg6,
  Characterimg7,
  Characterimg8,
  Characterimg9,
  Characterimg10,
  Characterimg11,
  Characterimg12,
  Characterimg13,
  Characterimg14,
  Characterimg15,
  Characterimg16,
];

type types = {
  id: number;
  name: string;
  strength: number;
  intelligence: number;
  defence: number;
  class: string;
};

const controller = new AbortController();

const CharacterCard = () => {
  async function getAllCharacters(signal?: AbortSignal) {
    const response = await axios.get<CharacterType<types>>(
      "/api/Character/GetAll",
      {
        signal,
        headers: { "Content-Type": "application/json" },
      }
    );

    return response.data;
  }
  // controller.abort();

  const { data: characters } = useQuery(["characters"], ({ signal }) =>
    getAllCharacters(signal)
  );

  const allCharacters = characters?.data;

  return (
    <Flex p={4} direction={{ base: "column", md: "row" }} wrap="wrap">
      {CharacterImages?.map((character) => (
        <Card border="solid red">
          <CardBody>
            <Image src={character} boxSize="200px" alt="character" />
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};

export default CharacterCard;
