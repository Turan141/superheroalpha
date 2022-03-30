import { useEffect, useState } from "react";

export const Superhero = () => {
  const [superhero, setSuperHero] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      let jsonApi = await fetch(
        "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
      );
      let parseApi = await jsonApi.json();
      setSuperHero(parseApi);
    };
    getApi();
  }, []);

  const heroCard = superhero.map((hero) => {
    return (
      <>
        <li>{hero.name}</li>
        <img src={hero.images.xs} alt="heroavatar" />
      </>
    );
  });

  return <>{superhero ? heroCard : null}</>;
};
