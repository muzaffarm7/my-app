import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Card from './Components/Card';
import Footer from './Components/Footer';



function App() {
  return (
    
    <>

    <Navbar/>
    <Carousel />
    <div className="container">
    <div className="row">
    <h1 className="text-center pt-3">Services</h1>

    <Card description="Java is a high level, robust, object-oriented and secure programming language." image = "https://img.flaticon.com/icons/png/512/226/226777.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"/> 
    <Card description="HTML is the standard markup language for creating Web pages" image = "https://img.favpng.com/8/11/21/computer-icons-html5-scalable-vector-graphics-portable-network-graphics-png-favpng-KWMYsYqVjZRbTzzHayktFf9Pv.jpg"/> 
    <Card description="CSS is the language we use to style a Web page." image = "https://www.seekpng.com/png/detail/80-803527_html5-css3-and-javascript-logos-html5-logo-png.png"/> 
    <Card description="JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web." image = "https://w7.pngwing.com/pngs/803/54/png-transparent-javascript-programming-language-ajax-world-wide-web-angle-text-logo.png" /> 
    <Card description="Python is a popular programming language. Python can be used on a server to create web applications." image = "https://e7.pngegg.com/pngimages/698/341/png-clipart-python-programming-language-computer-programming-basic-saintgermainenlaye-text-logo.png" /> 
    <Card description="React is a JavaScript library for building user interfaces. React is used to build single page applications.React allows us to create reusable UI components." image = "https://quintagroup.com/cms/js/js-image/react.js-logo.png/@@images/image.png" /> 
    </div>
    </div>
    <Footer />
    </>
    
  );
}

export default App;
