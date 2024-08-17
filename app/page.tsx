import Card from "./_component/card/Card";

export default function Home() {
  const apiData = [
    {
      id: 1,
      title: "title",
      price: 50,
    },
    { id: 2, title: "title", price: 80 },
    { id: 3, title: "title", price: 120 },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      {apiData.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
}
