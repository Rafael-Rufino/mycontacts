import PropTypes from 'prop-types';

import React from 'react';

import { Link } from 'react-router-dom';

import { FiEdit, FiInstagram, FiTrash } from 'react-icons/fi';

import * as S from './styles';

export function ContanctInfo({
  name, midia, email, phone,
}) {
  return (
    <S.Card>
      <S.Wrapper>
        <S.UserInfo>
          <strong>{name}</strong>
          <small>
            <FiInstagram size={20} />
            {midia}
          </small>
        </S.UserInfo>
        <S.WrapperDescrition>
          <S.Description>{email}</S.Description>
          <S.Description>{phone}</S.Description>
        </S.WrapperDescrition>
      </S.Wrapper>

      <S.Actions>
        <S.ButtonEdit as={Link} to="/edit/123">
          <FiEdit size={24} title="Editar" />
        </S.ButtonEdit>
        <S.ButtonTrash type="button" title="Excluir">
          <FiTrash size={24} />
        </S.ButtonTrash>
      </S.Actions>
    </S.Card>
  );
}

ContanctInfo.prototype = {
  name: PropTypes.string.isRequired,
  midia: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
