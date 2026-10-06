import ProductParent from './components/ProductParent/ProductParent.jsx'
import TeamParent from './components/TeamParent/TeamParent.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {
  return (
    <div className="container py-4">
      <ProductParent />
      <TeamParent />
      <div className="row g-3 mt-3">
        <div className="col-md-6"><About /></div>
        <div className="col-md-6"><Contact /></div>
      </div>
    </div>
  )
}
export default App