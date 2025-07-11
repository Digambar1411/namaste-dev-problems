import './App.css'
import ChipsInput from './problems/ChipInput/ChipsInput'
import InputFocus from './problems/InputFocus'
import RecipeFilterApp from './problems/FilterRecipes/filter'
import ContactForm from './problems/ContactForm/ContactForm'
import PasswordStrength from './problems/PasswordStrength'
import Accordion from './problems/Accordion/Accordion'
import { items } from './problems/Accordion/items'
import Products from './problems/ProductStore/Products'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'
import Navbar from './problems/ProductStore/Navbar'
import ProductDetails from './problems/ProductStore/ProductDetails'
import Home from './problems/ProductStore/Home'
import TodoList from './problems/Todos/todo'
import SortableList from './problems/ContactForm/SortableList/SortList'
function App() {

  return (
    <>
      {/* <InputFocus /> */}
      {/* <ChipsInput /> */}
      {/* <RecipeFilterApp />; */}
      {/* <ContactForm /> */}
      {/* <PasswordStrength /> */}
      {/* <Accordion items={items}/> */}
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter> */}
      {/* <TodoList /> */}
      <SortableList />

    </>
  )
}

export default App
