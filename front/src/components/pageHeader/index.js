import PropTypes from 'prop-types';

import React from 'react';

import { Link } from 'react-router-dom';

import * as S from './styles';

export function PageHeader({ name, icon, title }) {
  return (
    <S.Container>
      <Link to="/">
        <S.Icon>{icon}</S.Icon>
        <S.Name>{name}</S.Name>
      </Link>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}

PageHeader.prototype = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
