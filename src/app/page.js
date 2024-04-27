import Header from "./component/layouts/Header";
import Hero from "./component/layouts/Hero";
import HomeMenu from "./component/layouts/HomeMenu";
import SectionHeaders from "./component/layouts/SectionHeaders";

export default function Home() {
  return (
<> 
<Header />
<Hero/>
<HomeMenu/>

<section className="text-center my-16">
  <SectionHeaders subHeader={'Our Story'}
                  mainHeader={'About Us'} />
<div className="max-w-2xl mx-auto mt-4 text-gray-500 flex flex-col gap-4" >
<p >
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi magna,
 posuere non hendrerit quis, luctus vitae odio. Sed ut est sed risus molestie efficitur. 
 Duis condimentum sit amet lorem sit amet malesuada. Maecenas sed hendrerit ligula. Curabitur leo lorem, varius eget sapien ut, ornare sollicitudin neque. Mauris fermentum libero et consectetur condimentum. Nam commodo sagittis congue. Morbi tortor ipsum, hendrerit 
eleifend pulvinar ac, fringilla eu est. Donec a finibus lorem.
</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi magna,
 posuere non hendrerit quis, luctus vitae odio. Sed ut est sed risus molestie efficitur. 
 Duis condimentum sit amet lorem sit amet malesuada. Maecenas sed hendrerit ligula. Curabitur leo lorem, varius eget sapien ut, ornare sollicitudin neque. Mauris fermentum libero et consectetur condimentum. Nam commodo sagittis congue. Morbi tortor ipsum, hendrerit 
eleifend pulvinar ac, fringilla eu est. Donec a finibus lorem.
</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi magna,
 posuere non hendrerit quis, luctus vitae odio. Sed ut est sed risus molestie efficitur. 
 
</p>
</div>
<section className="text-center my-16">
<SectionHeaders subHeader={'Don\'t hesitate us'}
                  mainHeader={'Contact Us'} />
<div className="my-4">
<a className="text-4xl " href="tel:+49777888222">+49 777 888 222 </a>
  
  </div></section>
</section>
<footer className="border-t p-8 text-center text-gray-500">
&copy; 2024 All Rights reserved
</footer>
</> 
 );
}
