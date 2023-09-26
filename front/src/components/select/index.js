import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styles';

export function Select({ children, ...rest }) {
  return (
    <S.ContainerSelect {...rest}>
      {children}
    </S.ContainerSelect>
  );
}

Select.prototype = {
  children: PropTypes.node.isRequired,
};
