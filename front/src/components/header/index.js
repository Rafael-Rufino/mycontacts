import React from 'react';

import { Logo } from '../logo';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <Logo width="201px" />
    </S.Container>
  );
}
