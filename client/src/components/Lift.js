const Lift = ({lift}) => {
    return (
        <li>
            <h3>{lift.name}</h3>
            {lift.sets.map(set => (
                <span>{set} </span>
            ))}
            <form>
                <input type="text"></input>
                <input type="submit" value="+"></input>
            </form>
        </li>
    )
}

export default Lift