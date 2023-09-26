import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/pageHeader';

export function EditContact() {
  return (
    <>
      <PageHeader name="voltar" title="Editar Rafael Rufino" icon={<FiArrowLeft size={20} />} />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}
