import { useCallback, useState } from 'react'
import AddSet from '../AddSet'
import { updateLift } from '../../util/api'

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
        <div className="lift__sets">
          <ul className="lift__set-list">
            {lift.sets.map((set, key) => (
            <li key={key}>
              <span>{set.weight}</span>
              <span className="font-size--extra-small"> lb. x</span>
              <span>{set.reps}</span>
            </li>
            ))}

          </ul>
          {lift.sets.length > 0 &&
          <span className="lift__delete-set"><i onClick={deleteSet} className="fa fa-minus color-font--primary"></i></span>
          } 
        </div>

        <AddSet handleSubmit={addSet} />
      </div>
      }
    </li>
  )
}

export default Lift