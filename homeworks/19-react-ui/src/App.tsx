import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Cards from "./components/Cards/Cards";

export type Avatar = {
  id: string | number;
  url: string;
};

function App() {
  const [avatars, setAvatars] = useState<Avatar[]>([]);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<Avatar[]>([]);

  async function fetchAvatars(url: string) {
    const res = await fetch(url);
    const data = await res.json();

    if (data && data.length > 0) {
      setAvatars(
        data.map(({ id, url }: Avatar) => {
          return {
            id,
            url,
          };
        })
      );
      setLoading(true);
    }
  }

  function getRandomNumber(length: number) {
    return Math.floor(Math.random() * length);
  }

  function handleClick() {
    const randomNumber = getRandomNumber(avatars.length);

    setData((avatar) => [
      ...avatar,
      { ...avatars[randomNumber], id: crypto.randomUUID() },
    ]);
  }

  function handleRefreshAll() {
    setData((currentData) =>
      currentData.map(() => {
        const randomNumber = getRandomNumber(avatars.length);
        return { ...avatars[randomNumber], id: crypto.randomUUID() };
      })
    );
  }

  function handleRefresh(id: string | number) {
    setData((currentData) =>
      currentData.map((avatar) => {
        if (avatar.id === id) {
          const randomNumber = getRandomNumber(avatars.length);
          return { ...avatars[randomNumber], id: crypto.randomUUID() };
        }
        return avatar;
      })
    );
  }

  useEffect(() => {
    document.title = "Functional Avatar App";
  }, []);

  useEffect(() => {
    if (!loading) {
      fetchAvatars("https://tinyfac.es/api/data?limit=50&quality=0");
    }
  }, [loading]);

  return (
    <div className="container">
      <Cards cards={data} onClick={handleClick} onRefresh={handleRefresh} />
      <Button text="Refresh All" onClick={handleRefreshAll} />
    </div>
  );
}

export default App;
