// Enfoque reutilizable
function Input({ label, value, onChange, labelId, type, isRequired }) {
  return (
    <div>
      <label htmlFor={labelId}> {label} </label>
      <input required={isRequired ? true : false} type={type} value={value} onChange={onChange} id={labelId} name={labelId} />
    </div>
  );
}

export default Input