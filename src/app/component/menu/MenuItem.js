import Image from "next/image";

export default function MenuItem(){
    return(
        <div className="bg-gray-200 p-4 rounded-lg text-center justify-center hover:shadow-xl hover:shadow-black/25 hover:bg-white " >
      <div className="text-center ">
        <Image src={'/images.png'} width={'250'} height={'195'} alt={'pizza'} className="max-h-auto max-w-24 block mx-auto "/>
        </div>
        <h2 className="font-semibold text-xl my-3">Pepperoni Pizza</h2>
        <p className="text-gray-400 text-sm"> lorem ipusum dans et an dallop var es di aliera</p>
        <button className="bg-primary mt-4 text-white px-6 py-2 rounded-full">Add to Cart $23.00</button>
      </div>
    );
}