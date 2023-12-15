import React, { useRef, useState } from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

import useErrors from '../../hooks/useErrors';
import formatPhone from '../../utils/formatPhone';
import isEmailValid from '../../utils/isEmailValid';
import { Button } from '../button';
import { FormGroup } from '../formGroup';
import { Input } from '../input';
import { Select } from '../select';

export function ContactForm({ buttonLabel }) {
  // uncontrolled
  const phoneRef = useRef(null);
  // controlled
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const {
    setError, removeError, getErrorMessageByFieldName, errors,
  } = useErrors();
  const isFormValid = (name && errors.length === 0);

  const handleNameChange = (event) => {
    setName(event.target.value);

    if (!event.target.value) {
      setError({
        field: 'name',
        message: 'Nome é obrigatório',
      });
    } else {
      removeError('name');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({
        field: 'email',
        message: 'E-mail é inválido',
      });
    } else {
      removeError('email');
    }
  };

  const handlePhoneChange = () => {
    const inputValue = phoneRef.current.value;
    const formattedValue = formatPhone(inputValue);

    phoneRef.current.value = formattedValue;

    return formattedValue;
  };

  const handleSelectCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email,
      name,
      category,
      phone: formatPhone(phoneRef.current.value),

    };

    console.log(data);
  };

  return (
    <S.Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          name="nome"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Nome *"
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={getErrorMessageByFieldName('email')}
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="E-mail"
        />
      </FormGroup>

      <FormGroup>
        <Input
          name="phone"
          type="tel"
          ref={(input) => {
            phoneRef.current = input;
          }}
          onChange={handlePhoneChange}
          placeholder="Telefone"
          maxLength="15"
        />
      </FormGroup>

      <FormGroup>
        <Select name="categoria" value={category} onChange={handleSelectCategoryChange}>
          <option value="">Selecione uma categoria</option>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
          <option value="linkedin">Linkedin</option>
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button variant="primary" type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </S.ButtonContainer>

    </S.Form>
  );
}

ContactForm.prototype = {
  buttonLabel: PropTypes.string.isRequired,
};
