import React from 'react'
import { Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Home from './Home'
import About from './About'

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true}></Route>
      <Route path={["/about", "/info"]}component={About}></Route>
    </div>
  )
}

export default App
