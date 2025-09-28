
import MenuBar from "@/components/MenuBar"
export default function Page({params}: { params: { id: string } }) {
    const { id } = params;

  return (
    <>
      <MenuBar />
      <h1>student id : {id}</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nam voluptatem exercitationem aperiam aliquid, maiores deserunt illo fugit totam officia, quam soluta? Ullam, maiores excepturi mollitia deserunt ea quod ratione.</p>
    </>
  );
}