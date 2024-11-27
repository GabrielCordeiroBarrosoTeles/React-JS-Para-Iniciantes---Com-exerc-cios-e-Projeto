import React from 'react'

const PropsExample = ({nome,idade}) => {
  return (
    <div>
        <h3>Olá {nome}</h3>
        <p>Eu tenho {idade} anos</p>
    </div>
  )
}
export default PropsExample;
