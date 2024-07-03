
import Logo from '../../img/img1.svg'
import "./style.css"
import { Link } from "react-router-dom";

const Home = () =>{

  return(
      <main class="d-flex flex-wrap">
        <div class="col-6 mt-5 border-end d-flex justify-content-center align-items-center">
          <img src={Logo} alt="Logo"/>
        </div>

        <div class="d-flex flex-column align-items-center justify-content-center mt-5 col-6 mx-auto text-center">
            <h1>Nexus DevWorks</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sYxLuYutupA?si=lgyJ7pUh0AKratgr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>Explore nosso site para encontrar soluções que vão além das expectativas. 
            Com uma equipe dedicada de especialistas em Desenvolvimento Web,
            estamos aqui para simplificar e transformar a forma que sua empresa é vista.</p>
            <button class="mt-3"><Link to='/Service' style={{ textDecoration: 'none',  color: 'white'}}>Acessar Serviço</Link></button>
        </div>

    
      </main>
  )
}

export default Home;