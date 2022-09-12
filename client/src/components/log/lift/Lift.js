import { useCallback, useState } from 'react'
import AddSet from './../../AddSet'
import LiftBody from './LiftBody'
import { updateLift } from '../../../util/api'

const Lift = ({lift, setWorkouts, deleteLift}) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const addSet = useCallback(async (weight, reps) => {
    const body = {sets: [...lift.sets, {weight: weight, reps: reps}]}
    setWorkouts(await updateLift(lift._id, body))
  }, [lift])

  const deleteSet = useCallback(async () => {
    const body = {sets: [...lift.sets].slice(0, lift.sets.length-1)}
    setWorkouts(await updateLift(lift._id, body))
  }, [lift])

  return (
    <li className="lift">
      <div className="lift__header">
        <i
          className={`fa fa-angle-${isCollapsed ? 'down' : 'up'} font-size--large`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        ></i>

        <h3 className="lift__name font-size--large">{lift.name}</h3>

        <i
          className="fa fa-trash font-size--large"
          onClick={() => deleteLift(lift._id)}
        ></i>
      </div>

      {!isCollapsed &&
      <div>
        <LiftBody lift={lift} deleteSet={deleteSet} />
        <AddSet handleSubmit={addSet} />
      </div>
      }
    </li>
  )
}

export default Lift