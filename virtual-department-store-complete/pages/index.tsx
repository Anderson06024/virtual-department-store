
import Link from "next/link";
import { floors } from "../data/floors";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">歡迎來到線上百貨公司</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {floors.map((floor) => (
          <Link key={floor.id} href={`/floor/${floor.id}`}>
            <div className="p-4 bg-white rounded shadow hover:bg-blue-100 cursor-pointer">
              <h2 className="text-xl font-semibold">{floor.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
