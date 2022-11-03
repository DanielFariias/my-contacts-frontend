/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Link } from 'react-router-dom';

import { Loader } from '../../components/Loader';
import { Button } from '../../components/shared/Button';

import { Arrow } from '../../assets/images/icons/Arrow';
import { Edit } from '../../assets/images/icons/Edit';
import { Trash } from '../../assets/images/icons/Trash';
import { Sad } from '../../assets/images/icons/Sad';
import { EmptyBox } from '../../assets/images/icons/EmptyBox';
import { MagnifierQuestion } from '../../assets/images/icons/MagnifierQuestion';

import {
  Card,
  Container,
  EmptyListContainer,
  ErrorContainer,
  Header,
  InputSearchContainer,
  ListHeader,
  SearchNotFoundContainer,
} from './styles';
import ContactsService from '../../services/ContactsService';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    // contact.name.toUpperCase().startsWith(searchTerm.toUpperCase())
    contact.name.toUpperCase().includes(searchTerm.toUpperCase())
  )), [contacts, searchTerm]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      setContacts(contactsList);
      setHasError(false);
    } catch (error) {
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

  function handleChangeSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {(contacts.length > 0 && !hasError) && (
        <InputSearchContainer>
          <input
            type="text"
            placeholder="Search contact by name..."
            value={searchTerm}
            onChange={handleChangeSearchTerm}
          />
        </InputSearchContainer>
      )}

      <Header
        justifyContent={(
          hasError
            ? 'flex-end'
            : (
              contacts.length > 0
                ? 'space-between'
                : 'center'
            )
          )}
      >
        {(!hasError && contacts.length > 0) && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contact' : ' contacts'}
          </strong>
        )}

        <Link to="/new">New Contact</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <Sad />
          <div className="details">
            <strong> Ocorreu um erro ao obter os seus contatos!</strong>
            <Button type="button" onClick={handleTryAgain}>
              Tente novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {
        !hasError && (
          <>
            {(contacts.length < 1 && !isLoading) && (
            <EmptyListContainer>
              <EmptyBox />
              <p>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão <strong>”Novo contato”</strong> à cima
                para cadastrar o seu primeiro!
              </p>
            </EmptyListContainer>
            )}

            {(contacts.length > 0 && filteredContacts.length < 1) && (
              <SearchNotFoundContainer>
                <MagnifierQuestion />
                <span>Nenhum resultado foi encontrado para <strong>”{searchTerm}”</strong></span>
              </SearchNotFoundContainer>
            )}

            {
              filteredContacts.length > 0 && (
                <ListHeader orderBy={orderBy}>
                  <button type="button" className="sort-button" onClick={handleToggleOrderBy}>
                    <span>Name</span>
                    <Arrow />
                  </button>
                </ListHeader>
              )
            }

            {filteredContacts.map((contact) => (
              <Card key={contact.id}>
                <div className="info">
                  <div className="contact-name">
                    <strong>{contact.name}</strong>
                    {contact.category_name && <small>{contact.category_name}</small>}
                  </div>
                  <span>{contact.email}</span>
                  <span>{contact.phone && (contact.phone)}</span>
                </div>

                <div className="actions">
                  <Link to={`/edit/${contact.id}`}>
                    <Edit />
                  </Link>

                  <button
                    type="button"
                    onClick={() => (contact)}
                  >
                    <Trash />
                  </button>
                </div>
              </Card>
            ))}
          </>
        )
      }
    </Container>
  );
}
