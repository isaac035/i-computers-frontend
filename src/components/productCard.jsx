export default function ProductCard(props) {
  console.log("Rendering ProductCard");
  console.log("ProductCard is rendered");
  return (
    <div className="bg-red-400 w-48 h-[330.5px]">
      <img src={props.image} />
      <h1>{props.name}</h1>
      <p>{props.price}</p>
    </div>
  );
}
