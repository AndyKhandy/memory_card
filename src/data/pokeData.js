import { useEffect, useState } from "react";

export default function usePokeData() {
  const [totalData, setTotalData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPokeData = async (count) => {
    setLoading(true);
    try {
      const randomIDs = await getCountRandomNumbers(count);

      const fetchPromises = randomIDs.map(async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if(!response.ok){
          throw new Error(`Failed to fetch ID ${id}`);
        }
        const { name, sprites } = await response.json();
        return { name, sprites, id };
      });

      const allPokemon = await Promise.all(fetchPromises);
      setTotalData(allPokemon);
    } catch (error) {
      console.log("eror fetching data: ", error);
    } finally {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve("done");
        }, 1000);
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokeData(10);
  }, []);

  return { totalData, loading, setTotalData, fetchPokeData };
}

async function getCountRandomNumbers(count) {
  let seenNumbers = new Set();
  let randomID;

  while (seenNumbers.size != count) {
    randomID = Math.floor(Math.random() * 1020) + 1;
    if (seenNumbers.has(randomID)) {
      continue;
    }
    seenNumbers.add(randomID);
  }
  return [...seenNumbers];
}
