import Dropdown from './Dropdown.js'

const Header = ({ user, logout, dropdownVisible, setDropdownVisible, theme, setTheme }) => {
  return (
    <>
    <header className="header color-bg--secondary">
      <h1 className="header__title color-font--secondary font-size--header">Lifter's Log</h1>

      <Dropdown
        visible={dropdownVisible}
        user={user}
        logout={logout}
        theme={theme}
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