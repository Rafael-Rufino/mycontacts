import { ContactsList } from '../../components/contactsList';
import { Loader } from '../../components/loader';
import { SearchInput } from '../../components/searchInput';

import MagnifierQuestion from '../../assets/img/magnifier-question.svg';
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
        key={contacts.id}
        hasError={hasError}
        isLoading={isLoading}
        onTryAgain={loadContacts}
        onToggleOrderBy={handleToggleOrderBy}
        orderBy={orderBy}
        contactsData={filteredContacts}
        contacts={contacts}
      />

      {(hasContacts && filteredContacts.length < 1) && (
        <S.SearchNotFoundContainer>
          <img src={MagnifierQuestion} alt="Magnifier question" />
          <span>
            Nenhum resultado foi encontrado para
            <strong>
              {` "${searchTerm}" `}
              .
            </strong>
          </span>
        </S.SearchNotFoundContainer>
      )}

    </S.Container>
  );
}
