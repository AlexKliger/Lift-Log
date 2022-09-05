import { Route, Routes } from 'react-router-dom'
import EditWorkout from './EditWorkout'
import Log from './log/Log'

const Pages = ({ workouts, setWorkouts, dropdown, setDropdown }) => {
    return (
      <Routes>
        <Route
          path="/"
          element={<Log
                      workouts={workouts}
                      setWorkouts={setWorkouts}
                      dropdown={dropdown}
                      setDropdown={setDropdown}
                  />}
        >
        </Route>
        <Route path="edit">
          <Route
            path=":id"
            element={<EditWorkout
                        workouts={workouts}
                        setWorkouts={setWorkouts}
                    />}
          ></Route>

          <Route
            path="new"
            element={<EditWorkout
                      setWorkouts={setWorkouts}
                    />}
          ></Route>
        </Route>
      </Routes>
    )
}

export default Pages