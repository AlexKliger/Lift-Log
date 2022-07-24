import AddSet from './AddSet'

const Lift = ({lift, updateLift, deleteLift}) => {
    async function addSet(weight, reps) {
        updateLift(lift._id, {sets: [...lift.sets, `${weight}x${reps}`]})
    }

    async function deleteSet(weight, reps) {
        updateLift(lift._id, {sets: [...lift.sets].slice(0, lift.sets.length-1)})
    }

    return (
        <li className="lift">
            <i className="fa fa-trash" onClick={deleteLift}></i>
            <h3 className="lift__name">{lift.name}</h3>
            {lift.sets.map(set => (
                <span>{set} </span>
            ))}
            <span><i onClick={deleteSet} className="fa fa-minus"></i></span>
            <AddSet id={lift._id} handleSubmit={addSet} />
        </li>
    )
}

export default Lift