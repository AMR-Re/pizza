import Image from "next/image";

export default function RegisterPage(){return(
   <section className="mt-8">
<h1 className="text-primary text-center text-2xl ">Register</h1>
<form className="block max-w-xs mx-auto ">
   <input type="email" placeholder="email"/>
   <input type="password" placeholder="passowrd"/>
   <button type="submit" className="btn-primary">Register</button>

   <div className="my-4 text-center text-gray-500">
      Or Login with Provider
</div>

   <button className="flex gap-4 my-2 justify-center">
      <Image src={'/google.png'} alt={"sign in with google"} width={"24"} height={"32"}/>
       Sign in with Google</button>

</form>
   </section>
);}