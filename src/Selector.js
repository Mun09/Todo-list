import { useState } from "react";
import CheckItem from "./Checkitem.js";

function TextInput({ setValue }) {
  const [checkset, setCheckset] = useState([]);
  const arr = ["High", "Middle", "Low"];
  const keys = [...Array(arr.length).keys()];

  const Checkhandler = (id, checked) => {
    if(checked) {
      checkset.push(id);
      if(checkset.length > 1) {
        setCheckset([checkset[1]]);
      } else {setCheckset(checkset);}
      setValue(arr[id]);
    } else if(!checked && checkset.includes(id)) {
      checkset.splice(checkset.indexOf(id), 1);
      setCheckset(checkset);
    }
  }

  return (
    <div>
      {
        keys.map((key) => {
          return <CheckItem key={key} id={key} name={arr[key]} Checkhandler={Checkhandler} Checkset={checkset}></CheckItem>
        })
      }
    </div>
  );
}

export default TextInput;