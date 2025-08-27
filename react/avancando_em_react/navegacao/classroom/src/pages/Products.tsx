import { useSearchParams } from "react-router";
import { useNavigate } from "react-router";

export function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const navigate = useNavigate();

  return (
    <div>
      <a href="/">Voltar</a>

      <h1>Produtos</h1>

      {category && (
        <span>
          Categoria <strong>{category}</strong>
        </span>
      )}

      <div className="cards">
        <a onClick={() => navigate("/details/1")}>Produto 1</a>
        <a onClick={() => navigate("/details/2")}>Produto 2</a>
        <a onClick={() => navigate("/details/3")}>Produto 3</a>
      </div>
    </div>
  );
}
