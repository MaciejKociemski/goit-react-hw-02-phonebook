import css from './FilterByName.module.css';
import PropTypes from 'prop-types';
export const FilterByName = ({ filter, onChangeInput }) => {
  return (
    <>
      <label className={css.label}>
        Find contacts by name
        <br />
        <input
          className={css.input}
          onChange={onChangeInput}
          value={filter}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};

FilterByName.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};
