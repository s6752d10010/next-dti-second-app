//rfc
//np
import MenuBar from "@/components/MenuBar"
import MenuMajor from "@/components/MenuMajor";
import { Itim ,Bungee} from "next/font/google";

const itim = Itim({
  subsets: ["thai"],
  weight: ["400"],
  variable: "--font-itim",
});
const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungee",
});
export default function Page() {
  return (
    <>
      <MenuBar />
      <h1 className={`${itim.className}text-center`}>สาขาวิชา</h1>
      <MenuMajor />
      <hr />
      <p className={`${bungee.className}`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum dolor corrupti facilis iusto tenetur vel nisi! Culpa, fuga soluta, accusamus corrupti reiciendis ullam beatae libero temporibus sunt autem illum maiores.
         </p>
    </>
  );
}