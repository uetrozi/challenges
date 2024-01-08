import useSWR from "swr";

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default function MyProducts() {
  const { data, error } = useSWR("/api/products", fetchData);

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>List of all Products</h1>
      <ul>
        {data.map((product) => {
          console.log(product);
          return (
            <li key={product.id}>
              <p>Name: {product.name}</p>
              <p>Category: {product.category}</p>
              <p>Description: {product.description}</p>
              <p>
                Price:
                {product.price}
                {product.currency}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
