import { useState } from "react"

const Header = ({user, logout, dropdownVisible, setDropdownVisible }) => {
  return (
    <>
    <header className="header">
      <h1 className="font-size--header">Lifter's Log</h1>

      <div className={`dropdown ${dropdownVisible ? "": "dropdown--hidden"}`}>
        <h3 className="font-size--large">User: {user ? user.username : 'none'}</h3>
        {user && <button onClick={logout}>Logout</button>}
      </div>

      <i onClick={() => {setDropdownVisible(!dropdownVisible)}} className="dropdown-toggle fa fa-ellipsis-v font-size--large"></i>
    </header>
    <div style={{"height": "100px"}}>

    </div>
    </>
  )
}

export default Header