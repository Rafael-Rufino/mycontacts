import React from 'react';

import { FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Button } from '../button';
import { ContanctInfo } from './Components/ContanctInfo';

import * as S from './styles';

export function ContactsList({
  onToggleOrderBy, orderBy, contactsData,
}) {
  const contactNumber = contactsData.length;
  const hasContacts = contactNumber > 0;

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          {contactNumber}
          {' '}
          {contactNumber === 1 ? 'contato' : 'contatos'}
        </S.Title>
        <S.CommandLink as={Link} to="/new">
          Novo contato
        </S.CommandLink>
      </S.Header>
      <S.ListContainer>
        {hasContacts && (
          <S.ButtonContainer>
            <Button
              orderBy={orderBy}
              onClick={onToggleOrderBy}
              variant="link"
              name="Nome"
              icon={<FiArrowUp size={24} />}
            />
          </S.ButtonContainer>
        )}

        {contactsData.map((contact) => (
          <ContanctInfo
            key={contact.id}
            id={contact.id}
            name={contact.name}
            midia={contact.category_name}
            email={contact.email}
            phone={contact.phone}
            nameConfirme={contact.name}
          />
        ))}
      </S.ListContainer>
    </S.Container>
  );
}
