const LiftBody = ({lift, deleteSet}) => {
  return (
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
  )
}

export default LiftBody