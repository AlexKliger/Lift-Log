import AddWorkout from "./AddWorkout"

const Header = ({requests}) => {
    return (
        <header className="header">
            <h1 className="font-size--header">Lift log</h1>
            <AddWorkout handleSubmit={requests.createWorkout} />
        </header>
    )
}

export default Header