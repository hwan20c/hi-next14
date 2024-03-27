import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies : ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getvideos(id: string) {
  console.log(`Fetching movies : ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("start fetching");
  // 따로 따로 결과값을 받게 해서 비동기 적으로 수행할 수 있게 만들어주는것이다. -> 그렇지 않으면 앞에 fetching을 기다려야 하기 때문에 앞에가 끝나지 않으면 뒤에 fetching이 진행이 안되기 때문이다.
  const [movie, viedos] = await Promise.all([getMovie(id), getvideos(id)]);
  console.log("end fetching");
  return <h1>{movie.title}</h1>;
}
