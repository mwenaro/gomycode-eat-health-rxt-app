import Image from "../Image";

export default function ChefABCComponent() {
  const images = [
    {
      src: "/images/tomato.png",
      alt: "Tomato",
    },
    {
      src: "/images/brocoli.png",
      alt: "Brocoli ",
    },
    {
      src: "images/pear.png",
      alt: "Pear",
    },
    {
      src: "/images/peanuts.png",
      alt: "Pea nuts",
    },
  ];
  return (
    <div className="flex flex-col">
      <div>
        <h3>Chef ABC</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper{" "}
        </p>
      </div>

      <div className="flex justify-between items-center">
        {images.map((img, i) => (
          <Image key={i} {...img} />
        ))}
      </div>
    </div>
  );
}
