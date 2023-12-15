/* eslint-disable no-nested-ternary */
import React from 'react';

import { FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import emptyBox from '../../assets/img/empty-box.svg';
import sad from '../../assets/img/sad.svg';

import { Button } from '../button';
import { ContanctInfo } from './Components/ContanctInfo';

import * as S from './styles';

export function ContactsList({
  onToggleOrderBy,
  orderBy,
  contactsData,
  hasError,
  onTryAgain,
  isLoading,
}) {
  const contactNumber = contactsData.length;
  const hasContacts = contactNumber > 0;

  return (
    <S.Container>
      <S.Header justifyContent={
        hasError ? 'flex-end'
          : (
            hasContacts
              ? 'space-between'
              : 'center'
          )
      }
      >
        {(!hasError && hasContacts) && (
          <S.Title>
            {contactNumber}
            {' '}
            {contactNumber === 1 ? 'contato' : 'contatos'}
          </S.Title>
        )}
        <S.CommandLink as={Link} to="/new">
          Novo contato
        </S.CommandLink>
      </S.Header>

      {(contactNumber < 1 && !isLoading) && (
        <S.EmptyListContainer>
          <img src={emptyBox} alt="Empty box" />
          <p>
            Você ainda não tem nenhum contato cadastrado!
            Clique no botão
            {' '}
            <strong>”Novo contato”</strong>
            {' '}
            à cima para cadastrar o seu primeiro!
          </p>
        </S.EmptyListContainer>
      )}

      {hasError && (
        <S.ErrorContainer>
          <img src={sad} alt="Sad" />
          <S.ErrorContent>
            <strong> Ocorreu um erro ao obter os seus contatos!</strong>
            <Button onClick={onTryAgain}>
              Tentar novamente
            </Button>
          </S.ErrorContent>
        </S.ErrorContainer>
      )}

      {!hasError && (
        <S.ListContainer>
          {hasContacts && (
            <S.ButtonContainer>
              <Button
                orderBy={orderBy}
                onClick={onToggleOrderBy}
                variant="link"
                icon={<FiArrowUp size={24} />}
              >
                Nome
              </Button>
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
      )}

    </S.Container>
  );
}
