import PropTypes from 'prop-types';

import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '../button';
import * as S from './styles';

export function Modal({
  title, description, cancel, confirm, closeModal, isDanger,
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
            <Button type="button" name={cancel} variant="link" color="gray" title="cancelar" onClick={closeModal} />
            <Button name={confirm} variant="primary" color={isDanger ? 'danger' : 'primary'} title="remover" />
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
  cancel: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  isDanger: PropTypes.bool,
};

Modal.defaultProps = {
  isDanger: false,
};
