import React from 'react';

import ReactDOM from 'react-dom';

import * as S from './styles';

export function Loader() {
  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Spinner />
    </S.Overlay>,
    document.getElementById('loader-root'),
  );
}
