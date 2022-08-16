import Dropdown from './Dropdown.js'

const Header = ({user, logout, dropdownVisible, setDropdownVisible }) => {
  return (
    <>
    <header className="header">
      <h1 className="font-size--header">Lifter's Log</h1>

      <Dropdown
        visible={dropdownVisible}
        user={user}
        logout={logout}
      />

      <i onClick={() => {setDropdownVisible(!dropdownVisible)}} className="dropdown-toggle fa fa-ellipsis-v font-size--large"></i>
    </header>
    <div style={{"height": "100px"}}>

    </div>
    </>
  )
}

export default Header