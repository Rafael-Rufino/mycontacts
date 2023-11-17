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
  } = UseHome();

  return (
    <S.Container>
      <Loader isLoading={isLoading} />
      <SearchInput
        type="text"
        placeholder="Pesquisar pelo nome"
        value={searchTerm}
        onChange={handleChangeSearch}
      />
      <ContactsList
        key={contacts.id}
        onToggleOrderBy={handleToggleOrderBy}
        orderBy={orderBy}
        contactsData={filteredContacts}
      />
    </S.Container>
  );
}
