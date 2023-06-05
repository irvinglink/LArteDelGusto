import './HeroCard.css'

function HeroCard ({title, description, btn_text}) {


    return (

        <div className="reservation-container">

        <h2 class="font-bold font-montserrat mb-2">{title}</h2>
        
        <hr class="border-1 w-full"/>

        <p class="font-extralight font-montserrat text-center m-2">
          {description}
        </p>
        
        <footer className="reserve-btn">
          <a href="# ">{btn_text}</a>
        </footer>

      </div>

    );
}


export default HeroCard;