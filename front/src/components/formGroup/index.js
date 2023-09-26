import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styles';

export function FormGroup({ children, error }) {
  return (
    <S.Container>
      {children}
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
}

FormGroup.prototype = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};

FormGroup.defaultProps = {
  error: null,
};
