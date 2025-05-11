
import { useRouter } from "next/router";
import { floors } from "../../data/floors";

export default function FloorPage() {
  const router = useRouter();
  const { floorId } = router.query;
  const floor = floors.find((f) => f.id === parseInt(floorId as string));

  if (!floor) return <div>找不到樓層</div>;

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">{floor.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {floor.stores.map((store, index) => (
          <a
            key={index}
            href={store.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-white rounded shadow hover:shadow-lg hover:bg-green-50"
          >
            <h2 className="text-lg font-semibold">{store.name}</h2>
            <p className="text-sm text-gray-500">前往 Shopee 店鋪</p>
          </a>
        ))}
      </div>
    </main>
  );
}
