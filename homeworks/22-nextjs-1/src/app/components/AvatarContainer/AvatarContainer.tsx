import { FaPlus } from "react-icons/fa";
import style from "./AvatarContainer.module.css";
import AvatarTile from "../AvatarTile/AvatarTile";
import { useState } from "react";
import { addAvatar as fetchNewAvatar } from "@/app/services/avatars";
import ButtonRefresh from "../ButtonRefresh/ButtonRefresh";
import { Avatar } from "@/app/lib/definitions";

export default function AvatarContainer({ avatars: initialAvatars = [] }) {
  const [avatars, setAvatars] = useState<Avatar[]>(initialAvatars);

  const addAvatar = async () => {
    const newAvatar = await fetchNewAvatar();
    setAvatars((prevAvatars) => [...prevAvatars, newAvatar[0]]);
  };

  const refreshAvatar = async (id: string) => {
    const newAvatar = await fetchNewAvatar();
    const updateAvatars = avatars.map((avatar) =>
      avatar.id === id ? { ...avatar, url: newAvatar[0].url } : avatar
    );
    setAvatars(updateAvatars);
  };

  const refreshAllAvatars = async () => {
    const newAvatars = await Promise.all(
      avatars.map(async (avatar) => {
        const newAvatar = await fetchNewAvatar();
        return {
          ...avatar,
          url: newAvatar[0].url,
        };
      })
    );

    setAvatars(newAvatars);
  };

  return (
    <>
      <div className={style.avatarContainer}>
        {avatars.map((avatar) => (
          <AvatarTile
            url={avatar.url}
            key={avatar.id}
            onRefresh={() => refreshAvatar(avatar.id)}
          />
        ))}
        <button onClick={addAvatar} className={style.btnAdd}>
          <FaPlus size={"10em"} color="#02cc67" />
        </button>
      </div>
      <ButtonRefresh refreshAllAvatars={refreshAllAvatars} />
    </>
  );
}
