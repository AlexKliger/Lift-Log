const Header = ({ user, logout }) => {
    return (
        <>
        <header className="header">
            <h1 className="font-size--header">Lift log</h1>
            <h3>User: {user ? user.username : 'none'}</h3>
            {user && <button onClick={logout}>Logout</button>}
        </header>
        <div style={{"height": "100px"}}>

        </div>
        </>
    )
}

export default Header