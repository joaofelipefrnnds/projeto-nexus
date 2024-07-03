
import Logo from '../../img/img1.svg'
import "./style.css"
const Home = () =>{

  return(
      <main class="d-flex">
        <div class="col-6">
          <img src={Logo} alt="Logo"/>
        </div>
        <div  class="text-center mt-5 col-6 text-center" >
          <h1>Nexus DevWorks</h1>
          <p>Explore nosso site para encontrar soluções que vão além das expectativas. 
          Com uma equipe dedicada de especialistas em Desenvolvimento Web,
          estamos aqui para simplificar e transformar a forma que sua empresa é vista.</p>
          <button>Acessar Serviço</button>
        </div>
      </main>
  )
}

export default Home;