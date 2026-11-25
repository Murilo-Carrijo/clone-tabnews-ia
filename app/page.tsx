import ConfettiBurst from "./components/Confetti";

async function getTotalContents(): Promise<number | null> {
  try {
    const response = await fetch(
      "https://www.tabnews.com.br/api/v1/contents?per_page=1&strategy=new",
      { next: { revalidate: 300 } },
    );

    const total = response.headers.get("x-pagination-total-rows");
    return total ? Number(total) : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const total = await getTotalContents();

  return (
    <>
      <ConfettiBurst />
      <main>
        <h1>Em Construção</h1>
        <p>
          Estamos neste exato momento reconstruindo o TabNews, um lugar na
          internet para quem trabalha com tecnologia e precisa consumir
          conteúdos com valor concreto.
        </p>
        {total !== null && (
          <p className="total">
            <strong>{total.toLocaleString("pt-BR")}</strong> conteúdos publicados
            no TabNews.
          </p>
        )}
        <a href="https://www.tabnews.com.br" target="_blank" rel="noreferrer">
          Visitar o site oficial
        </a>
      </main>
    </>
  );
}
