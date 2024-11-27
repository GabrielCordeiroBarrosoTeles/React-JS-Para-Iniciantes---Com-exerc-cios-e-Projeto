// Componente Pai
import './App.css'

// Importar o componente filho
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import PropsExample from './components/PropsExample'

function App() {

  return (
      <div>
        {/* Utilizando o componentre importado no JSX */}

        <FunctionalComponent />
        <ClassComponent />
        <PropsExample nome = "Gabriel Cordeiro" idade = {19} />
        
      </div>
  )
}

export default App
