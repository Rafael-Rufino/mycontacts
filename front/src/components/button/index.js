import PropTypes from 'prop-types';

import React from 'react';

import * as S from './styles';

export function Button({
  icon,
  variant,
  orderBy,
  children,
  ...rest
}) {
  return (
    <S.ContainerButton variant={variant} {...rest}>
      {children}
      {icon && (
        <S.IconButton orderBy={orderBy}>{icon}</S.IconButton>
      )}
    </S.ContainerButton>
  );
}

Button.prototype = {
  icon: PropTypes.element,
  variant: PropTypes.oneOf(['primary', 'outline', 'link']),
  children: PropTypes.node.isRequired,
  orderBy: PropTypes.string.isRequired,
};

Button.defaultProps = {
  variant: 'primary',
  icon: null,
};
