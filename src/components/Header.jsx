import Link from "next/link";




export default function Header() {
  return (
    <header>
         <h1>SportsBlog</h1>
         <div>
            <nav className="nav-links" >
             <Link href="/" className="navelement">Home</Link> |
              <Link href="/profile">Profile</Link> |
             <Link href="/sports" className="navelement">Sports</Link> |
              <Link href="/sports/add-sport" className="navelement" >Add a Sport</Link>
           </nav>
         </div>
    </header>
    
  );
}