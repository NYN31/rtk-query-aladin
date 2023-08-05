import Select from 'react-select';

import PropTypes from 'prop-types';

const SearchableSelect = ({
  register,
  supervisors,
  supervisorName,
  handleSupervisorSearch,
}) => {
  return (
    <Select
      //{...register('selectedSupervisor')}
      placeholder="Select Supervisor"
      defaultValue={supervisorName}
      onChange={handleSupervisorSearch}
      options={supervisors}
      isSearchable={true}
    />
  );
};

SearchableSelect.propTypes = {
  register: PropTypes.func.isRequired,
  supervisors: PropTypes.array.isRequired,
  supervisorName: PropTypes.string.isRequired,
  handleSupervisorSearch: PropTypes.func.isRequired,
};

export default SearchableSelect;
