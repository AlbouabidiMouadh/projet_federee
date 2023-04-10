import React from 'react' ;
import Header from '../componenets/Header' ;
import Description from '../componenets/Description' ;
import About from '../componenets/About' ;
import Footer from '../componenets/Footer' ;


const Home = () => {
  return (
    <div style={{margin: 0, padding: 0}}>
        <Header/>
        <Description/>
        <About/>
        <Footer/>

    </div>
  )
}

export default Home