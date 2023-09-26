import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/pageHeader';

export function NewContact() {
  return (
    <>
      <PageHeader name="voltar" title="Novo Contato" icon={<FiArrowLeft size={20} />} />
      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
}
