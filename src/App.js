import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import { Switch,Route,Redirect } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
const App=()=>{
    return(
        <>
                 <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/service" component={Service} />
                    <Route exact path="/contact" component={Contact} />
                    <Redirect to="/" />
                </Switch>
                <Footer/>
                </>
    )
}
export default App;


// if else condition

// const FavS=()=>{
// if (series==="netflix") {
//         return <Netflix/>
// }
// else{
//         return <Amazon/>
// }
// }

