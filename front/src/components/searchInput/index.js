import React from 'react';

import * as S from './styles';

export function SearchInput() {
  return (
    <S.Container>
      <input
        type="text"
        placeholder="Pesquisar pelo nome"
      />
    </S.Container>
  );
}
