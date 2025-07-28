import Link from "next/link";
import { db } from "@/utils/utilities";
import { Suspense } from "react";
import NewSportButton from "@/components/NewSportButton";

async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export default async function SportsPage({ searchParams }) {
  await delay(7000);

  const query = await searchParams;
  const sports = (await db.query(`SELECT * FROM sports`)).rows;
  console.log(sports);

  if (query.sortBy == "asc") {
    //Sort sports in ascending order by name
    sports.sort((a, b) => {
      console.log(a, b);
      return a.name.localeCompare(b.name);
    });
    //Sort sports in descending order by name
  } else if (query.sortBy == "desc") {
    sports.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }

  return (
    <div className="flex flex-col items-center gap-6 bg-green-300 h-85">
      <h2 className="myfilms">Most played sports in the world ... </h2>
      <div className="flex gap-20 font-bold">
        <Link href="/sports?sortBy=asc">Sort Asc</Link>
        <Link href="/sports?sortBy=desc">Sort Desc</Link>
        <Link href="/sports">Reset Sort</Link>
      </div>
      <Suspense fallback={<p>Page loading ...</p>}>
        <ul>
          {sports.map((sport) => (
            <div key={sport.id} className="films-container">
              <Link href={`/sports/${sport.id}`}>{sport.name}</Link>
            </div>
          ))}
        </ul>
      </Suspense>
      <h4 className="flex flex-col items-center">
        Fancy Adding a sport to the database?
        <Link href="/sports/add-sport" className="clickme">
          <NewSportButton />
        </Link>
      </h4>{" "}
    </div>
  );
}
