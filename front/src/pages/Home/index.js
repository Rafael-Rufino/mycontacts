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
    handleTryAgain,
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
        key={contacts.id}
        hasError={hasError}
        isLoading={isLoading}
        onTryAgain={handleTryAgain}
        onToggleOrderBy={handleToggleOrderBy}
        orderBy={orderBy}
        contacts={contacts}
        contactsData={filteredContacts}
        searchTerm={searchTerm}

      />

    </S.Container>
  );
}
