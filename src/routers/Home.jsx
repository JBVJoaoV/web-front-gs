import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/home.scss"

function Home() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    setUsuarioLogado(usuario);
  }, []); 

  const handleLogout = () => {
    sessionStorage.removeItem('usuarioLogado');
    navigate('/login'); 
  }

  return (
    <>
      <h1>HOME</h1>
      {usuarioLogado && (
        <div className='usuarionome'>
          <p> Usuário: {usuarioLogado.usuario}</p>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
      )}
      <main>
        <section>
          <div>
            <img className = "img1 "src="src/assets/Monitor-cardiaco.jpg" alt="erro" />
          </div>
          <div className="divp1">
            <div className='titulo'>
                <h1>HealthVigil</h1>
            </div>
            <div className='apresentacao'> 
                <h3>Nossa solução é baseada na visão de que o monitoramento de hábitos pode transformar a saúde de um indivíduo, sendo assim, monitoramos a saúde dos nossos usuários usando diversas ferramentas.</h3>
                
            </div>
            
          </div>
          <div className='divp2'>
            <h3>Mais informações</h3>
          </div>
        </section>
        <aside>
          <div className="text1">
            <h3>O que é a solução?</h3>
            <p>Nossa solução solução inclui um programa que calcula o IMC (Índice de Massa Corporal ), nível de sedentarismos, tempo de sono, além de registrar os dados fornecidos pelo usuário, para que dessa forma, o usuário possa ter acesso a esses diagnósticos para que assim ele possa adaptar seus hábitos e deixá-los mais saudáveis, além disso contamos também com um hardware que mede o oxigênio do sangue e os batimentos, para alertar qualquer anomalia.</p>
          </div>
          <div className="text2">
            <h3>O que ela fará?</h3>
            <p>Ela servirá para monitorar o paciente, para que ele possa ter ciência de como está o seu estado de saúde e possa monitorar a sua melhora e evolução, além de ser avisado caso algum dos dados mostre uma alteração para a saúde do usuário, como um sobrepeso, um alto nível de sedentarismo, pressão baixa, etc. Sendo assim, um sistema de monitoramento que ajuda o usuário a acompanhar sua saúde.</p>
          </div>
          <div className="text3">
            <h3>Como funcionará.</h3>
            <p>Ele funcionará de forma simples, o programa para registar, calcular e informar os dados relacionados à saúde do usuário é desenvolvido na linguagem Python, e será usado para esses propósitos já citados, tendo funções como, calcular IMC, nível de sedentarismos, quanto tempo de sono a pessoa teve e quão longe ela está do tempo aceito como padrão (8 horas). Além disso há a aplicação de edge computing, que deve monitorar sinais cardíacos do usuário (oxigênio e batimentos), e avisa caso algo esteja alterado.</p>
          </div>
        </aside>
      </main>
      <h1 className='titulo2'>Nossas Vantagens</h1>
      <section className='vantagem'>
          <div className='vantagens'>
              <h1>MONITORAMENTO INTEGRAL</h1>
              <h3>Com o monitor cardíaco no pulso, enquanto carregado, ele fornecerá um monitoramento em tempo integral dos sinais cardíacos.</h3>
          </div>
          <div className='vantagens'>
              <h1>MAIOR VISIBILIDADE DO PROGRESSO</h1>
              <h3>Com a aplicação em Python o usuário pode ver melhor o seu progresso, uma vez que ele pode alterar os dados dele (como o peso) sempre que tiver uma alteração, podendo ver o seu progresso e como essa mudança pode afetar coisas como o IMC dele.</h3>
          </div>
          <div className='vantagens'>
              <h1>EFICIENTE E ECONÔMICA</h1>
              <h3>Essa solução possui uma grande vantagem por ser um monitoramento feito pelo usuário e para ele mesmo, tendo assim um baixo custo para operar ele, alem de um baixo custo para produzir.</h3>
          </div>
      </section>

    </>
  );
}

export default Home;
