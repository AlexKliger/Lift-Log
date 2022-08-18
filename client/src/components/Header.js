import Dropdown from './Dropdown.js'

const Header = ({ user, logout, dropdownVisible, setDropdownVisible, setTheme }) => {
  return (
    <>
    <header className="header bg-color--secondary">
      <h1 className="font-size--header font-color--tertiary">Lifter's Log</h1>

      <Dropdown
        visible={dropdownVisible}
        user={user}
        logout={logout}
        setTheme={setTheme}
      />

      <i onClick={() => {setDropdownVisible(!dropdownVisible)}} className="dropdown-toggle fa fa-ellipsis-v font-size--large"></i>
    </header>
    <div style={{"height": "100px"}}>

    </div>
    </>
  )
}

export default Header