import AddSet from './AddSet'

const Lift = ({lift, updateLift}) => {
    async function addSet(weight, reps) {
        updateLift(lift._id, {sets: [...lift.sets, `${weight}x${reps}`]})
    }

    async function deleteSet(weight, reps) {
        updateLift(lift._id, {sets: [...lift.sets].slice(0, lift.sets.length-1)})
    }

    return (
        <>
            <h3 className="lift__name">{lift.name}</h3>
            {lift.sets.map(set => (
                <span>{set} </span>
            ))}
            <span><i onClick={deleteSet} className="fa fa-minus"></i></span>
            <AddSet id={lift._id} handleSubmit={addSet} />
        </>
    )
}

export default Lift