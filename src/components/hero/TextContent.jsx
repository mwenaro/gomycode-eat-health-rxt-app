import Button from "../Button";
export default function TextContent() {
  return (
    <div className="flex flex-col gap-10 py-12 ">
      {/* Heading */}
      <h1 className="text-4xl font-bold">A place you eat healthy</h1>
      {/* paragrapg */}
      <p className="max-w-lg text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
        libero risus semper habitant arcu eget. Et integer facilisi eget. Lorem
        ipsum dolor.
      </p>
      {/*  */}
      <Button className="rounded-[30px] text-2xl ml-0">Explore the Menu</Button>

    </div>
  );
}
