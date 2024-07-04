
import dev1 from '../../img/dev1.png'
import dev2 from '../../img/dev2.png'
import dev3 from '../../img/dev3.png'
import dev4 from '../../img/dev4.png'
import dev5 from '../../img/dev5.png'

import "./style.css"

const Equipe = () =>{

  return(
      <main class="pt-5 mt-5">
        <ul class="cards">
            <li>
              <a href class="card">
                <img src={dev1} class="card__image" alt="" />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                    <img class="card__thumb" src={dev1} alt="" />
                    <div class="card__header-text">
                      <h3 class="card__title">Vinicius Silva</h3>            
                      <span class="card__status">Desenvolvedora Frontend</span>
                    </div>
                  </div>
                  <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
              </a>      
            </li>
            <li>
              <a href class="card">
                <img src={dev2} class="card__image" alt="" />
                <div class="card__overlay">        
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                    <img class="card__thumb" src={dev2} alt="" />
                    <div class="card__header-text">
                      <h3 class="card__title">João Felipe</h3>
                      <span class="card__status">Desenvolvedor Backend</span>
                    </div>
                  </div>
                  <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
              </a>
            </li>
            <li>
              <a href class="card">
                <img src={dev3} class="card__image" alt="" />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                    <img class="card__thumb" src={dev3} alt="" />
                    <div class="card__header-text">
                      <h3 class="card__title">Ana Lara</h3>
                      <span class="card__status">Administrador de banco de dados</span>
                    </div>
                  </div>
                  <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
              </a>
            </li>
            <li>
              <a href class="card">
                <img src={dev4} class="card__image" alt="" />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                    <img class="card__thumb" src={dev4} alt="" />
                    <div class="card__header-text">
                      <h3 class="card__title">Sandra Serra</h3>
                      <span class="card__status">Análista de Redes</span>
                    </div>          
                  </div>
                  <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
              </a>
            </li>    

            <li>
              <a href class="card">
                <img src={dev5} class="card__image" alt="" />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                    <img class="card__thumb" src={dev5} alt="" />
                    <div class="card__header-text">
                      <h3 class="card__title">Sávio Pires</h3>
                      <span class="card__status">Análista de Redes</span>
                    </div>          
                  </div>
                  <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
              </a>
            </li>   
          </ul>
      </main>
  )
}

export default Equipe;