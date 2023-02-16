
import './Header.css';

import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <div className='leftsideHeader'>
            <ul>
              <li></li>
              <li>Tutorials</li>
              <li>References</li>
              <li>Exercises</li>
              <li>Sign Up</li>
            </ul>
          </div>
          <div className='rightsideHeader'>
          <ul>
              <li><button className='btn btn-pro'>Pro</button></li>
              <li><button className='btn btn-getCertified'>Get Certified</button></li>
              <li><button className='btn btn-createWebsite'>Create Website</button></li>
              <li><button className='btn btn-logIn'>Log in</button></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}



