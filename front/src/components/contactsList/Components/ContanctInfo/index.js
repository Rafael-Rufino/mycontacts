import PropTypes from 'prop-types';

import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { FiEdit, FiInstagram, FiTrash } from 'react-icons/fi';
import { Modal } from '../../../modal';

import * as S from './styles';

export function ContanctInfo({
  id,
  name,
  midia,
  email,
  phone,
  nameConfirme,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const isCloseModal = () => setIsModalVisible(false);

  const isOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleDeleteContact = async () => {
    try {
      await fetch(`http://localhost:3333/contacts/${id}`, {
        method: 'DELETE',
      });
      isCloseModal();
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleEditContact = async () => { };
  return (
    <S.Card>
      <S.Wrapper>
        <S.UserInfo>
          <strong>{name}</strong>
          {midia && (
            <small>
              <FiInstagram size={20} />
              {midia}
            </small>
          )}
        </S.UserInfo>
        <S.WrapperDescrition>
          <S.Description>{email}</S.Description>
          <S.Description>{phone}</S.Description>
        </S.WrapperDescrition>
      </S.Wrapper>
      {isModalVisible && (
        <Modal
          title={`Tem Certeza que deseja remover o contato "${nameConfirme}"?`}
          description="Essa ação não poderá ser desfeita!"
          cancelButton="Cancelar"
          confirmButton="Deletar"
          closeModal={isCloseModal}
          confirmActionDelete={handleDeleteContact}
          isDanger
        />
      )}
      <S.Actions>
        <S.ButtonEdit as={Link} to={`/edit/${id}`} onClick={handleEditContact}>
          <FiEdit size={24} title="Editar" />
        </S.ButtonEdit>
        <S.ButtonTrash type="button" title="Excluir" onClick={isOpenModal}>
          <FiTrash size={24} />
        </S.ButtonTrash>
      </S.Actions>
    </S.Card>
  );
}

ContanctInfo.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  midia: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  nameConfirmet: PropTypes.string.isRequired,
};
