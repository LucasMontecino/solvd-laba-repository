import style from "./ButtonRefresh.module.css";

export default function ButtonRefresh({
  refreshAllAvatars,
}: {
  refreshAllAvatars: () => void;
}) {
  return (
    <button onClick={refreshAllAvatars} className={style.btnRefreshAll}>
      Refresh All Avatars
    </button>
  );
}
