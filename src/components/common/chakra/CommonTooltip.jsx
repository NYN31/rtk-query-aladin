import React from 'react';

import { Tooltip } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CommonTooltip = ({ children, label, disabled }) => {
  return (
    <Tooltip
      hasArrow
      label={label}
      isDisabled={disabled}
      cursor="pointer"
      bg="#FFFFFF"
      color="#4F4F4F"
      borderRadius="5px"
    >
      {children}
    </Tooltip>
  );
};

CommonTooltip.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};

export default CommonTooltip;
