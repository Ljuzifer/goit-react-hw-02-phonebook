export const Filter = ({ nameFilter, onChange }) => {
  return (
    <input
      type="text"
      value={nameFilter}
      onChange={e => onChange(e.target.value)}
    />
  );
};
