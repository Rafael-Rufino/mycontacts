import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import ContactsService from '../../services/http/ContactsService';

const UseHome = () => {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter(
    (contact) => (
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  ), [contacts, searchTerm]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  function handleTryAgain() {
    loadContacts();
  }

  return {
    isLoading,
    searchTerm,
    orderBy,
    filteredContacts,
    handleToggleOrderBy,
    handleChangeSearch,
    handleTryAgain,
    contacts,
    hasError,
  };
};

export default UseHome;
