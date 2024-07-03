import "./style.css"

const Footer = () =>{

    return (
      <footer class="fixed-bottom">
      <div class="container-footer">
          <div class="row-footer">
          
              <div class="footer-col">
                  <h4>Empresa</h4>
                  <ul>
                      <li><a href="#"> Quem somos </a></li>
                      <li><a href=""> nossos serviços </a></li>
                     
                  </ul>
              </div>

              <div class="footer-col">
                  <h4>Obter ajuda</h4>
                  <ul>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Suporte</a></li>
                      <li><a href="#">Sugestões</a></li>
                      
                  </ul>
              </div>

              <div class="footer-col">
                  <h4>Linhas de Desenvolvimento</h4>
                  <ul>
                      <li><a href="#">Desenvolvimento Frontend</a></li>
                      <li><a href="#">Desenvolvimento Backend</a></li>
                      <li><a href="#">Gestão de Banco de Dados</a></li>

                      
                  </ul>
              </div>
      
              <div class="footer-col">
                  <h4>Se subescreva!</h4>
                  <div class="form-sub">
                      <form>
                          <input type="email" placeholder="Digite o seu e-mail" required/>
                          <button>subscrever</button>
                      </form>
                  </div>

                  <div class="medias-socias">
                      <a href="#"> <i class="fa fa-facebook"></i> </a>
                      <a href="#"> <i class="fa fa-instagram"></i> </a>
                      <a href="#"> <i class="fa fa-twitter"></i> </a>
                      <a href="#"> <i class="fa fa-linkedin"></i> </a>
                  </div>

              </div>
          
          </div>
      </div>
  </footer>

    )
}

export default Footer;