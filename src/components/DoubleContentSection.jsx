import "./DoubleContentSection.css";

function DoubleContentSection({ title, description, img, direction}) {
  
    
  return (
    <div class="relative block w-screen h-5/6 bg-black">
      <div class={`flex ${direction==='left' ? 'flex-row' : 'flex-row-re'}`}> 

        <div className="left-container">
          <img src={img} alt="none"/>
        </div>

        <div className="right-container">
          <h2 class="font-montserrat text-2xl text-center">{title}</h2>

          <hr className="soft-line" />

          <p class="font-montserrat">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default DoubleContentSection;
