import { useCallback } from 'react'
import AddSet from './AddSet'
import { updateLift } from '../util/api'

const Lift = ({lift, setWorkouts, deleteLift}) => {
  const addSet = useCallback(async (weight, reps) => {
    const body = {sets: [...lift.sets, `${weight}x${reps}`]}
    setWorkouts(await updateLift(lift._id, body))
  }, [lift])

  const deleteSet = useCallback(async () => {
    const body = {sets: [...lift.sets].slice(0, lift.sets.length-1)}
    setWorkouts(await updateLift(lift._id, body))
  }, [lift])

  return (
    <li className="lift">
      <div className="lift__header">
        <i className="fa fa-trash font-size--large" onClick={() => deleteLift(lift._id)}></i>
        <h3 className="lift__name font-size--large">{lift.name}</h3>
      </div>
      <div className="lift__sets">
      {lift.sets.map((set, key) => (
        <span key={key}>{set}</span>
      ))}
        {lift.sets.length > 0 && <span><i onClick={deleteSet} className="fa fa-minus color-font--primary"></i></span>}
      </div>

      <AddSet handleSubmit={addSet} />
    </li>
  )
}

export default Lift