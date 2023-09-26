import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Button } from '../button';

import { ContanctInfo } from './Components/ContanctInfo';

import * as S from './styles';

export function ContactsList() {
  const numbers = 3;
  return (
    <S.Container>
      <S.Header>
        <S.Title>
          {numbers}
          {' '}
          Contatos
        </S.Title>
        <S.CommandLink as={Link} to="/new">Novo contato</S.CommandLink>
      </S.Header>
      <S.ListContainer>
        <S.ButtonContainer>
          <Button variant="link" name="Nome" icon={<FiArrowUp size={24} />} />
        </S.ButtonContainer>
        <ContanctInfo
          name="Rafael Rufino"
          midia="instagram"
          email="rafael@gmail.com"
          phone="(84) 981684917"
        />
      </S.ListContainer>
    </S.Container>
  );
}
