import PropTypes from 'prop-types';
import React from 'react';
import Spinner from '../spinner';
import * as S from './styles';

export function FormGroup({ children, error, isLoading }) {
  return (
    <S.Container>
      <S.FormItem>
        {children}
        {isLoading && (
          <S.Loader>
            <Spinner size={16} />
          </S.Loader>
        )}
      </S.FormItem>
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
}

FormGroup.prototype = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

FormGroup.defaultProps = {
  error: null,
  isLoading: false,
};
