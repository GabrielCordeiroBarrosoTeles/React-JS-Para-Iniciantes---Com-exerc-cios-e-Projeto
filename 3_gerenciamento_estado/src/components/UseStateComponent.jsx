import React, { useState } from 'react'

// useState = hooks 

// Sempre que vamos alterar o valor de algo => useState
// Se é somente leitura => var, state

const UseStateComponent = () => {

    // Variavel de Consulta, e uma de alteração, inicio o hoock
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount( (prevCount => prevCount + 1));
        // setCount(count + 1);
        console.log(count)
    }

    const [ user, setUser] = useState({
        name: "Gabriel",
        age: 19,
        hobbies: ["Leitura","Programação"],
    })

    const updateUserAge = () => {
        setUser( (prevUser) =>  (
            {
                ...prevUser,
                age: prevUser.age + 1,

            }
        ))
    }

  return (
    <div>
        <h2>Contador</h2>
        <p>Vc clicou {count} vezes</p>
        <button onClick={increment}>Incrementrar</button>

        <p>Nome: {user.name} e idade {user.age}</p>

        <button onClick={updateUserAge}>Incrementar Idade</button>
    </div>
  )
}

export default UseStateComponent