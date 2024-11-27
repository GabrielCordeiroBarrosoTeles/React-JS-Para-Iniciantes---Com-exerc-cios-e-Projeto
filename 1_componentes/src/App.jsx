// Componente Pai
import './App.css'

// Importar o componente filho
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'

function App() {

  return (
      <div>
        {/* Utilizando o componentre importado no JSX */}
        <FunctionalComponent />
        <ClassComponent />
      </div>
  )
}

export default App
