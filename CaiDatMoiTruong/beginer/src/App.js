import { useState } from 'react'
import './App.css'
import Clock from './Clock'
import BareInput from './BareInput'
import Layout from './Layout'
import BareButton from './BareButton'
import LoginControl from './LoginControl'
import CorrectlyState from './CorrectlyState'
import ProductList from './ProductList/ProductList'
import Form from './Form/Form'
import UncontrolledComponent from './Form/UncontrolledComponent'
import Calculator from './Calculator/Calculator'

function App() {
  // const [name, setName] = useState('Casio')
  return (
    <div className='App'>
      {/* <button onClick={() => setName('Apple')}>Change Name</button>
      <Clock name={name} /> */}

      {/* <Layout>
        <h1>Hello</h1>
        <BareInput type='' value='100' id='123' autoFocus onChange={() => {}} />
        <BareButton />
      </Layout> */}
      {/* <LoginControl isLoggedIn={false} /> */}
      {/* <CorrectlyState /> */}
      {/* <ProductList /> */}
      {/* <Form /> */}
      {/* <UncontrolledComponent /> */}
      <Calculator />
    </div>
  )
}

export default App
