import { Avatar } from "@/app/lib/definitions";

const api = async ({
  url,
  method = "GET",
}: {
  url: string;
  method: string;
}) => {
  const req = await fetch(url, { method });
  const res = await req.json();
  if (!req.ok) {
    throw new Error(res.error);
  }

  const data = res.map((item: Avatar) => {
    return {
      id: crypto.randomUUID(),
      url: item.url,
    };
  });

  return data;
};

export { api };
