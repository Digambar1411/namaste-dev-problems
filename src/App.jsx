import './App.css'
import ChipsInput from './problems/ChipInput/ChipsInput'
import InputFocus from './problems/InputFocus'
import RecipeFilterApp from './problems/FilterRecipes/filter'
import ContactForm from './problems/ContactForm/ContactForm'
import PasswordStrength from './problems/PasswordStrength'
import Accordion from './problems/Accordion/Accordion'
import { items } from './problems/Accordion/items'
function App() {

  return (
    <>
      {/* <InputFocus /> */}
      {/* <ChipsInput /> */}
      {/* <RecipeFilterApp />; */}
      {/* <ContactForm /> */}
      {/* <PasswordStrength /> */}
      <Accordion items={items}/>

    </>
  )
}

export default App
