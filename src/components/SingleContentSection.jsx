import "./SingleContentSection.css";

function SingleContentSection({ title, description, img }) {
  return (
    <div class="relative block w-screen h-screen flex flex-col bg-black p-10 pt-16 pb-16 items-center">
      
      <h2 class="font-playfair text-2xl text-white">{title}</h2>
      
      <hr className="soft-line"/>

      <p class="font-montserrat text-white">{description}</p>

      <img alt="none" src={img} class='w-fit m-10'/>

    </div>
  );
}

export default SingleContentSection;
