import { useRouter } from "next/router";
import useSWR from "swr";

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default function Details() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetchData);

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Product Details</h1>
      <p>ID: {id}</p>
      <p>Name: {data.name}</p>

      <p>Category: {data.category}</p>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price}
        {data.currency}
      </p>
    </div>
  );
}
