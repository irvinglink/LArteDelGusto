import "./SingleContentSection.css";

function SingleContentSection({ title, description, img }) {
  return (
    <div class="relative block w-screen h-screen flex flex-col bg-black p-10 pt-32 items-center">
      
      <h2 class="font-playfair text-2xl text-white">{title}</h2>
      <hr class='border-white w-1/2 mt-4 mb-4'/>
      <p class="font-montserrat text-white">{description}</p>

      <img alt="No Image" src={img} class='w-1/2 m-10'/>

    </div>
  );
}

export default SingleContentSection;
