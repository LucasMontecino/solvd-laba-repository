import { api } from "../http";

const getAvatars = () =>
  api({
    url: "https://tinyfac.es/api/data?limit=5&quality=0",
    method: "GET",
  });

const addAvatar = () =>
  api({
    url: "https://tinyfac.es/api/data?limit=1&quality=0",
    method: "GET",
  });

export { getAvatars, addAvatar };
