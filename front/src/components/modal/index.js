import PropTypes from 'prop-types';

import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '../button';
import * as S from './styles';

export function Modal({
  title, description, cancelButton, confirmButton, closeModal, isDanger, confirmActionDelete,
}) {
  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Container>
        <S.Title isDanger={isDanger}>{title}</S.Title>
        <S.Description>
          {description}
        </S.Description>
        <S.Footer>
          <S.Wrapper>
            <Button type="button" name={cancelButton} variant="link" color="gray" title="cancelar" onClick={closeModal} />
            <Button name={confirmButton} variant="primary" color={isDanger ? 'danger' : 'primary'} title="remover" onClick={confirmActionDelete} />
          </S.Wrapper>
        </S.Footer>
      </S.Container>
    </S.Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cancelButton: PropTypes.string.isRequired,
  confirmButton: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  confirmActionDelete: PropTypes.func.isRequired,
  isDanger: PropTypes.bool,
};

Modal.defaultProps = {
  isDanger: false,
};
