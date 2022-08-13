import { useCallback } from 'react'
import AddSet from './AddSet'

const Lift = ({lift, updateLift, deleteLift}) => {
    const addSet = useCallback((weight, reps) => {
        updateLift(lift._id, {sets: [...lift.sets, `${weight}x${reps}`]})
    }, [])

    const deleteSet = useCallback(() => {
        updateLift(lift._id, {sets: [...lift.sets].slice(0, lift.sets.length-1)})
    }, [])

    return (
        <li className="lift">
            <i className="fa fa-trash" onClick={() => deleteLift(lift._id)}></i>
            <h3 className="lift__name font-size--large">{lift.name}</h3>
            <div className="lift__sets">
            {lift.sets.map(set => (
                <span>{set}</span>
            ))}
                {lift.sets.length > 0 && <span><i onClick={deleteSet} className="fa fa-minus"></i></span>}
            </div>
            <AddSet handleSubmit={addSet} />
        </li>
    )
}

export default Lift