import React from 'react'

const JsxExamples = () => {

    const user = {
        name: "Gabriel",
        lastName: " Cordeiro"
    };

    function getGreeting(name , lastName) {
      return `Olá ${name}`  
    }

  return (
    <div>
        <h2>Conteúdo que o usuáreio vai ver</h2>
        { /* Listando dados do usuario*/ }
        <p>O nome do usuário é {user.name} {user.lastName}</p>
        <p>{getGreeting(user.name)}</p>

    </div>
  )
}

export default JsxExamples