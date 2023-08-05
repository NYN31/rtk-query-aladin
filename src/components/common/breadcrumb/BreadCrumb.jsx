import { useNavigate } from 'react-router-dom';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { PropTypes } from 'prop-types';

import homeIcon from '../../../assets/icons/homeIcon.svg';
import { BREADCRUMB_DATA } from '../../../constants/breadcrumbConstants';

const BreadCrumb = ({ singlePageBreadcrumbData }) => {
  const navigate = useNavigate();

  function BreadcrumbLinkHandler(addressLink) {
    navigate(addressLink);
  }

  const showTitle = (data, title) => {
    return (
      <Flex direction="row">
        {data === 'Home' && <Image pr={2} w="20px" h="16px" src={homeIcon} />}
        <Text>{title}</Text>
      </Flex>
    );
  };

  function returnBreadcrumb() {
    return singlePageBreadcrumbData.map((data, pos) => {
      return BREADCRUMB_DATA.map((breadcrumb, index) => {
        if (data === breadcrumb.key) {
          const title = breadcrumb.key;
          const url = breadcrumb.value;

          if (pos < singlePageBreadcrumbData.length - 1) {
            return (
              <BreadcrumbItem
                fontSize={['10px', '12px']}
                color="#828282"
                key={index}
              >
                <BreadcrumbLink onClick={() => BreadcrumbLinkHandler(url)}>
                  {showTitle(data, title)}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          }

          return (
            <BreadcrumbItem
              fontSize={['10px', '12px']}
              isCurrentPage
              key={index}
            >
              <BreadcrumbLink>{showTitle(data, title)}</BreadcrumbLink>
            </BreadcrumbItem>
          );
        }
      });
    });
  }

  return (
    <Breadcrumb
      p="6px"
      mt="62px"
      fontWeight="medium"
      fontSize="12px"
      bgColor="#F2F2F2"
      border="1px solid"
      borderColor="#EEEEEE"
      borderRadius="4px"
      w="full"
    >
      {returnBreadcrumb()}
    </Breadcrumb>
  );
};

BreadCrumb.propTypes = {
  singlePageBreadcrumbData: PropTypes.array.isRequired,
};

export default BreadCrumb;
