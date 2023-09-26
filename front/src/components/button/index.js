import PropTypes from 'prop-types';

import React from 'react';

import * as S from './styles';

export function Button({
  name, icon, variant, ...rest
}) {
  return (
    <S.ContainerButton variant={variant} {...rest}>
      <S.TextButton>{name}</S.TextButton>
      {icon && (
        <S.IconButton>{icon}</S.IconButton>
      )}
    </S.ContainerButton>
  );
}

Button.prototype = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element,
  variant: PropTypes.oneOf(['primary', 'outline', 'link']),
};

Button.defaultProps = {
  variant: 'primary',
  icon: null,
};
