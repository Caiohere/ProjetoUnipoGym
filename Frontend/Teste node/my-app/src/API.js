import { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/users";

function ApiComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Erro ao buscar dados");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
        <h2>Lista de Usuários</h2>
        <ul>
            {data.slice(0, 10).map((item) => (
            <li key={item.id}>
                <strong>{item.name}</strong>
                <p>Email: {item.email}</p>
                <p>Phone: {item.phone}</p>
            </li>
            ))}
        </ul>
    </div>
  );
}

export default ApiComponent;

