import React, { useState } from 'react';

import * as S from './styles';

import { ContactsList } from '../../components/contactsList';
import { Modal } from '../../components/modal';
import { SearchInput } from '../../components/searchInput';

export function Home() {
  const name = 'Rafael Rufino';
  const [isModalVisible, setIsModalVisible] = useState(false);
  const isCloseModal = () => setIsModalVisible(false);
  return (
    <S.Container>
      {/* <Loader /> */}
      <SearchInput />
      {isModalVisible && (
        <Modal
          title={`Tem Certeza que deseja remover o contato "${name}"?`}
          description="Essa ação não poderá ser desfeita!"
          cancel="Cancelar"
          confirm="Deletar"
          closeModal={isCloseModal}
          isDanger
        />
      )}
      <ContactsList />
    </S.Container>
  );
}
