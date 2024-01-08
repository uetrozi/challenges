import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default function RandomCharacter() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (!data && !error) return <div>Loading...</div>;

  if (error) return <div>Error fetching data</div>;
  console.log(data);

  return (
    <div>
      <h1>Random Character</h1>

      <p>
        Name: {data.firstName} {data.lastName}
      </p>
      <p>Twitter: {data.twitterName}</p>
      <p>Geohash: {data.geohash}</p>
    </div>
  );
}
