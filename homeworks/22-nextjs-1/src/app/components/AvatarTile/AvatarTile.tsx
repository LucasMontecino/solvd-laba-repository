import Image from "next/image";
import style from "./AvatarTile.module.css";
import { IoReload } from "react-icons/io5";

type AvatarTile = {
  url: string;
  onRefresh: () => void;
};

export default function AvatarTile({ url, onRefresh }: AvatarTile) {
  return (
    <div onClick={onRefresh} className={style.avatar}>
      <Image
        loader={() => url}
        unoptimized
        src={url}
        alt="random-avatar"
        className={style.img}
        width={240}
        height={240}
      />
      <IoReload className={style.overlay} size={"10em"} color="#02cc67" />
    </div>
  );
}
