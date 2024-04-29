import Link from "next/link";

export default function Header()
{
    return(
        <header className="flex items-center justify-between">
  <Link className="text-primary font-semibold text-2xl" href={'/'}>St Pizza
    </Link>
    <nav className="flex gap-8 items-center text-gray-400 font-semibold">
      <Link href={'/'}>Home</Link>
      <Link href={''}>Menu</Link>
      <Link href={''}>About</Link>
      <Link href={''}>Contact</Link>
      


    </nav>

    <nav className="flex gap-4 items-center text-gray-400 font-semibold" >
    <Link href={'/login'} className="btn-primary rounded-full mt-1  px-4 py-1">Login</Link>
    <Link href={'./register'} className=" bg-primary  btn-primary rounded-full mt-1 text-white px-4 py-1">Register</Link>
    </nav>
    </header>
    );
}