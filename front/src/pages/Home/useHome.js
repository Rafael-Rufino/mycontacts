import { useEffect, useMemo, useState } from 'react';
import ContactsService from '../../services/ContactsService';

const UseHome = () => {
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
        const contactsList = await ContactsService.listContacts(orderBy);
        setContacts(contactsList);
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

  return {
    isLoading,
    searchTerm,
    orderBy,
    filteredContacts,
    handleToggleOrderBy,
    handleChangeSearch,
    contacts,
  };
};

export default UseHome;
