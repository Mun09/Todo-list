function Dateinput({ setValue }) {
  const bettertoday = (d) => {
    d = String(d);
    let l = d.length;
    if(l===1) return "0"+d;
    return d;
  }
  const today = new Date();
  const day = bettertoday(today.getDate());
  const month = bettertoday(today.getMonth()+1);
  const year = today.getFullYear();
  const min_day = year + '-' + month + '-' + day + 'T00:00';
  const max_day = (year+1) + '-' + month + '-' + day + 'T00:00';

  return(
    <>
      <input type="datetime-local" min={min_day} max={max_day} onChange={(e) => {
        setValue(e.target.value);
      }} ></input>
    </>
  )
}

export default Dateinput;