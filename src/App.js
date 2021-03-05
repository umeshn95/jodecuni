import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Aboutus from './component/Aboutus';
import Appinfo from './component/Appinfo';
import Contactus from './component/Contactus';
import Counsell from './component/Counsell';
import Footer from './component/Footer';
import Home from './component/Home';
import How from './component/How';
import Navbar from './component/Navbar';
import Ourmentor from './component/Ourmentor';
import Ourteachp from './component/Ourteachp';
import { Payment } from './component/Payment';
import Proceed from './component/Proceed';
import { Register } from './component/Register';
import Review from './component/Review';
import Scratch from './component/Scratch';
import Why from './component/Why';
import React,{useEffect} from 'react'
import Login from './component/Login';
import Signup from './component/Signup';
import Phillosophy from './component/Phillosophy';
import Contactcodejuni from './component/Contactcodejuni';
import Schools from './component/Schools';
import Ourstory from './component/Ourstory';
import Codingchamp from './component/Codingchamp';



function App() {


  
  useEffect(()=>{
    console.log(window.scrollY)

  })
     



 
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
<Route exact path='/'>
  
  <Navbar></Navbar>
  <Home></Home>
  {/* <Footer></Footer> */}
</Route>
<Route exact path='/home' ><Navbar></Navbar>
<Home></Home>

</Route>
<Route exact path='/aboutus'><Aboutus></Aboutus></Route>
<Route exact path='/mentor'><Ourmentor></Ourmentor></Route>
<Route exact path='/courses'><Navbar></Navbar><Appinfo></Appinfo><Scratch></Scratch><Counsell></Counsell></Route>
<Route exact path='/how'><How></How></Route>
<Route exact path='/whycode'><Why></Why></Route>
<Route exact path='/ourteachp'><Ourteachp></Ourteachp></Route>
<Route exact path='/contact'><Contactus></Contactus></Route>
<Route exact path='/review'> <Review></Review></Route>
<Route exact path='/proceed' ><Proceed></Proceed></Route>
<Route exact path='/checkout'><Payment></Payment></Route>
<Route exact path='/register'><Register></Register></Route>
<Route exact path='/login'> <Login></Login></Route>
<Route exact path='/signup'><Signup></Signup></Route>
<Route exact path='/phillosophy'><Phillosophy></Phillosophy></Route>
<Route exact path='/contactjuni'><Contactcodejuni></Contactcodejuni></Route>
<Route exact path='/school'><Schools></Schools></Route>
<Route exact path='/ourstory'><Ourstory></Ourstory></Route>
<Route exact path='/champ'><Codingchamp></Codingchamp></Route>
      </Switch>
 


    </div>
    </BrowserRouter>
  );
}

export default App;
