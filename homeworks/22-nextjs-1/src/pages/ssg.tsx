import AvatarContainer from "@/app/components/AvatarContainer/AvatarContainer";
import { getAvatars } from "@/app/services/avatars";
import style from "./ssg.module.css";
import "./globals.css";

export async function getStaticProps() {
  const avatars = await getAvatars();

  return {
    props: {
      avatars,
    },
  };
}

export default function SsgPage({ avatars = [] }) {
  return (
    <main className={style.main}>
      <h1>Welcome To The Avatars Page (SSG)</h1>
      <AvatarContainer avatars={avatars} />
    </main>
  );
}
