import React from 'react';

import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import * as S from './styles';

export function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }
  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Spinner />
    </S.Overlay>,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
