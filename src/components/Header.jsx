import Link from "next/link";




export default function Header() {
  return (
    <header className="flex flex-row gap-30 mt-2  bg-amber-100" >
      <h1 className="flex font-bold text-3xl ">SportsBlog</h1>
      <div>
        <nav className="flex font-bold gap-12 mt-1.5 " >
          <Link href="/" className="flex border-0.8 border-black rounded-1xl bg-amber-400 underline hover:bg-green-500 hover:no-underline">Home</Link> |
          <Link href="/profile" className="flex border-0.8 border-black rounded-1xl bg-amber-400 underline hover:bg-green-500 hover:no-underline" >Profile</Link> |
          <Link href="/sports" className="flex border-0.8 border-black rounded-1xl bg-amber-400 underline hover:bg-green-400 hover:no-underline" >Sports</Link> |
          <Link href="/sports/add-sport" className="flex border-0.8 border-black rounded-1xl bg-amber-400 underline hover:bg-green-500 hover:no-underline" >Add a Sport</Link>
        </nav>
      </div>
    </header>

  );
}