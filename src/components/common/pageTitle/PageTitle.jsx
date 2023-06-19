import React from 'react';

import { Text, useMediaQuery } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function PageTitle({ title }) {
  const [isLargerThan1024px] = useMediaQuery('(max-width: 1024px)');

  return (
    <Text
      fontSize={!isLargerThan1024px ? '24px' : '16px'}
      fontWeight="300"
      lineHeight="28px"
      my="16px"
    >
      {title}
    </Text>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
