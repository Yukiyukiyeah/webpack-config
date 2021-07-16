import "../styles/index.scss"

import Recipes from './Recipes'

const App = () => {
    return(
       <div>
           <section className="hero"></section>
           <main>
               <section>
                   <h1>Oh hi, React</h1>
               </section>
           </main>
           <Recipes />
       </div>
    )
}

export default App
