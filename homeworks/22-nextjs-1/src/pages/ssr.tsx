import AvatarContainer from "@/app/components/AvatarContainer/AvatarContainer";
import { getAvatars } from "@/app/services/avatars";
import style from "./ssr.module.css";
import "./globals.css";

export async function getServerSideProps() {
  const avatars = await getAvatars();

  return {
    props: {
      avatars,
    },
  };
}

export default function SsrPage({ avatars = [] }) {
  return (
    <main className={style.main}>
      <h1>Welcome To The Avatars Page (SSR)</h1>
      <AvatarContainer avatars={avatars} />
    </main>
  );
}
