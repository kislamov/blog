import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { BrowserRouter as Router, Route, useHistory, Routes } from "react-router-dom";
import {useState, useEffect} from "react"

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Nav/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='post' element={<NewPost/>}/>
                    <Route path='post/:id' element={<PostPage/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='*' element={<Missing/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
