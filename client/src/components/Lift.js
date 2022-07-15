import AddSet from './AddSet'

const Lift = ({lift, updateLift}) => {
    async function addSet(set) {
        updateLift(lift._id, {sets: [...lift.sets, set]})
    }

    async function deleteSet(set) {
        updateLift(lift._id, {sets: [...lift.sets].slice(0, lift.sets.length-1)})
    }

    return (
        <>
            <h3>{lift.name}</h3>
            {lift.sets.map(set => (
                <span>{set} </span>
            ))}
            <span><i onClick={deleteSet} className="fa fa-minus"></i></span>
            <AddSet id={lift._id} handleSubmit={addSet} />
        </>
    )
}

export default Lift