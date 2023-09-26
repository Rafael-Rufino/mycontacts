import React, { forwardRef } from 'react';

import * as S from './styles';

export const Input = forwardRef((props, ref) => (
  <S.ContainerInput ref={ref} {...props} />
));
