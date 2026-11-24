const items = [
  "Ovo",
  "Legumes",
  "Frango",
  "Pão",
  "Refrigerante 0",
  "Filtro de papel",
  "Diabo verde",
];

export default function Home() {
  return (
    <>
      <h1>Lista de Mercado</h1>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
