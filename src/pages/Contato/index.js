const Contato = () =>{

    return(
        <div class="container border pb-5">
          <h1>PÁGINA DE CONTATO</h1>
          <hr/>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nome Completo</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Informe seu nome completo"/>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Telefone</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Informe seu telefone"/>
          </div>


          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Informe seu email"/>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Em que podemos ajudar?</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="button" class="btn btn-success">Enviar Contato</button>

        </div>
    )
}

export default Contato;