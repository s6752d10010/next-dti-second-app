
import MenuBar from "@/components/MenuBar"
export default async function Page({params}: { params: Promise < { id: string } > }) {
    const { id } = await params;

  return (
    <>
      <MenuBar />
      <h1>student id : {id}</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nam voluptatem exercitationem aperiam aliquid, maiores deserunt illo fugit totam officia, quam soluta? Ullam, maiores excepturi mollitia deserunt ea quod ratione.</p>
    </>
  );
}