import { useState, useEffect } from "react";

function Checkitem({id, name, Checkhandler, Checkset}) {
  const [ischecked, setIsChecked] = useState(Checkset.includes(id));

  useEffect(() => {
    setIsChecked(Checkset.includes(id));
  }, [Checkset]);

  const isCheckhandler = (e) => {
    setIsChecked(!ischecked);
    Checkhandler(id, e.target.checked)
  }

  return (
    <div>
      <input type="checkbox" id={name} checked={ischecked} onChange={isCheckhandler}></input>
      <label htmlFor={name}>{name}</label>
    </div>
  )
}

export default Checkitem