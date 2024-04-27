import Link from "next/link";

export default function Header()
{
    return(
        <header className="flex items-center justify-between">
  <Link className="text-primary font-semibold text-2xl" href={''}>St Pizza
    </Link>
    <nav className="flex gap-8 items-center text-gray-400 font-semibold">
      <Link href={'/'}>Home</Link>
      <Link href={''}>Menu</Link>
      <Link href={''}>About</Link>
      <Link href={''}>Contact</Link>
      <button href={''} className="bg-green-600 btn-primary rounded-full mt-1 text-white px-4 py-1">Login</button>


    </nav>
    </header>
    );
}