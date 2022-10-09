function Todofilter({ setFiltering_key }) {
  const filterhandler = (e) => {
    e.preventDefault();
    setFiltering_key(e.target.value);
  }

  return (
  <>
    <label htmlFor="select-filter">Filter by "Importance"</label>
    <select name="select-filter" id="select-filter" onChange={filterhandler}>
      <option value="All">All</option>
      <option value="Low">Low</option>
      <option value="Middle">Middle</option>
      <option value="High">High</option>
    </select>
  </>
  )
}

export default Todofilter;