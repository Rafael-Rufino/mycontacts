import { useEffect, useMemo, useState } from 'react';

import { ContactsList } from '../../components/contactsList';
import { Loader } from '../../components/loader';
import { SearchInput } from '../../components/searchInput';

import delay from '../../utils/delay';

import * as S from './styles';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => contacts.filter(
    (contact) => (
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  ), [contacts, searchTerm]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setIsLoading(true);
        const data = await fetch(`http://localhost:3333/contacts?orderBy=${orderBy}`);
        await delay(500);
        const response = await data.json();
        setContacts(response);
      } catch (error) {
        throw new Error('Error', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, [orderBy]);

  const handleToggleOrderBy = async () => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  };

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value);
  };

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
