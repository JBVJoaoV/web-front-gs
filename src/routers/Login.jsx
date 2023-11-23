import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate do react-router-dom
import "../styles/login.scss"

function Login() {
  const navigate = useNavigate(); // Inicialize o hook useNavigate

  const [usuario, setUsuario] = useState({
    usuario: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/usuarios");
      if (response.ok) {
        const users = await response.json();

        const user = users.find((u) => u.usuario === usuario.usuario && u.senha === usuario.senha);

        if (user) {
          sessionStorage.setItem('usuarioLogado', JSON.stringify(user));
          navigate('/');
        } else {
          alert("Usuário/senha inválidos");
          setUsuario({
            usuario: '',
            senha: '',
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Login</h1>
        <section className='login'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='idusuario'></label>
              <p>Usuário</p>
              <input
                type="text"
                name="usuario"
                value={usuario.usuario}
                placeholder='Digite seu usuário'
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='idSenha'></label>
              <p>Senha</p>
              <input
                type="password"
                name="senha"
                value={usuario.senha}
                placeholder='Digite sua senha'
                onChange={handleChange}
              />
            </div>
            <button type="submit">Logar</button>
          </form>

        </section>
    </>
  )
}

export default Login;
