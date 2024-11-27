import React from 'react'

const JsxExamples = () => {

    const user = {
        name: "Gabriel",
        lastName: " Cordeiro"
    };

    function getGreeting(name , lastName) {
      return `Olá ${name}`  
    }

    const userIsLoggedIn = true;

    const userRole = "admin";

    const users = [
        {id: 1, name: "Gabriel"},
        {id: 2, name: "João"},
        {id: 3, name: "Pedro"},
    ]
  return (
    <div>
        <h2>Conteúdo que o usuáreio vai ver</h2>
        { /* Listando dados do usuario*/ }
        <p>O nome do usuário é {user.name} {user.lastName}</p>
        <p>{getGreeting(user.name)}</p>

        {/* Diferenças do HTML*/}
        <div className='teste'>
            <button onClick={()=> alert("Teste")}>Clique em mim</button>   
            <br/>
            <br/>
            <input type="text" placeholder='Digite algo' />

            {/* Renderização Condicional */}

            {userIsLoggedIn ? (
                <p>Caso: está Logado</p>
            ) : (
                <p>Caso: não está Logado</p>
            ) }

            <p>{userRole === "admin" && "Você é um admin"}</p>

            {/* Renderização de listas */}
            <div>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.id} - {user.name}
                        </li>
                    ))}
                </ul>
            </div>
        
        </div>
    </div>
  )
}

export default JsxExamples