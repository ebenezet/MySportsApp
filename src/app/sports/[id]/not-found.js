import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Something went wrong ...</h2>
      <p>Apologies, we could not find the page your requested</p>
      <Link href="/">Return to the homepage</Link>
    </div>
  );
}
