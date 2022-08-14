const Header = ({ user }) => {
    return (
        <>
        <header className="header">
            <h1 className="font-size--header">Lift log</h1>
            <h3>User: {user ? user.username : 'none'}</h3>
        </header>
        <div style={{"height": "100px"}}>

        </div>
        </>
    )
}

export default Header