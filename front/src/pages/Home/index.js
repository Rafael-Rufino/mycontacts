import { ContactsList } from '../../components/contactsList';
import { Loader } from '../../components/loader';
import { SearchInput } from '../../components/searchInput';

import * as S from './styles';
import UseHome from './useHome';

export function Home() {
  const {
    contacts,
    isLoading,
    searchTerm,
    orderBy,
    filteredContacts,
    handleToggleOrderBy,
    handleChangeSearch,
    hasError,
    loadContacts,
  } = UseHome();

  const hasContacts = contacts.length > 0;

  return (
    <S.Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <SearchInput
          type="text"
          placeholder="Pesquisar pelo nome"
          value={searchTerm}
          onChange={handleChangeSearch}
        />
      )}

      <ContactsList
        hasError={hasError}
        isLoading={isLoading}
        key={contacts.id}
        onTryAgain={loadContacts}
        onToggleOrderBy={handleToggleOrderBy}
        orderBy={orderBy}
        contactsData={filteredContacts}
      />

    </S.Container>
  );
}
