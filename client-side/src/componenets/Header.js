import React from 'react'

const Header = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    margin: 0,
    padding: 0,
    backgroundColor: "#4E6E81"
  }
  const welcomeStyle = {
    marginTop: 10,
    marginLeft: 40,
    fontSize: 50,
  }
  const listStyle = {
    display: "flex",
    margin: 20,
  }
  const itemStyle = {
    fontSize: 25,
    textDecoration: "none",
    listStyleType: "none",
    padding: 10,
    color: "#FCFFE7"
    
  }
  return (
    <div style={containerStyle}>
        <h1 style={welcomeStyle}>Welcome</h1>
        <ul style={listStyle}>
          <li style={itemStyle}><a style={itemStyle} href='/'>Home</a></li>
          <li style={itemStyle}><a style={itemStyle} href='/'>About</a></li>
          <li style={itemStyle}><a style={itemStyle} href='/'>Services</a></li>
          <li style={itemStyle}><a style={itemStyle} href='/'>Contact Us</a></li>
        </ul>

    </div>
  )
}

export default Header