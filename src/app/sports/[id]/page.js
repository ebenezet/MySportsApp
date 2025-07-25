import Image from "next/image";
import Link from "next/link";
import { db } from "@/utils/utilities";
import NotFound from "./not-found";

export default async function IndividualSportPage({ params }) {
  const { id } = await params;

  const singleSport = (
    await db.query(`SELECT * FROM sports WHERE id = $1`, [id])
  ).rows[0];

  if (!singleSport) {
    return NotFound();
  }

  return (
    <div className="individual-sport-page">
      <h3> Film id: {singleSport.id}</h3>

      <p>{singleSport.name}</p>
      <Image
        src={singleSport.cover}
        alt="a sport image"
        width={300}
        height={300}
      />

      <Link href="/sports" className="backtosports">
        Back to the sports list
      </Link>
    </div>
  );
}
