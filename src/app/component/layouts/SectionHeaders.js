export default function SectionHeaders({subHeader,mainHeader}){return(
<>
      <h2 className="text-gray-600 uppercase font-semibold leading-4">
{subHeader}
        </h2>
        <h2 className="text-primary font-bold text-4xl italic">{mainHeader}</h2>
</>

);
}