import { Link } from 'react-router-dom'

const DropdownContent = () => (
  <nav>
    <h1>This is dropdown content.</h1>
  </nav>
)

const Header = ({ user, logout, dropdown, setDropdown, theme, setTheme }) => {

  return (
    <>
    <header className="header color-bg--secondary">
      <h1 className="header__title font-size--header">Lifter's Log</h1>

      <nav>
        <Link to="/edit/new">
          <i className="fa fa-plus color-font--primary font-size--large"></i>
        </Link>
        <i onClick={() => setDropdown({...dropdown, visible: !dropdown.visible, content: <DropdownContent />})} className="dropdown-toggle fa fa-ellipsis-v font-size--large"></i>
      </nav>
    </header>

    <div style={{"height": "100px"}}>

    </div>
    </>
  )
}



export default Header