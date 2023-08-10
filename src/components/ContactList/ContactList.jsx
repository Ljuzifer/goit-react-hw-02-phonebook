import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, contactDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactItem details={contact} onDelete={contactDelete} />
        </li>
      ))}
    </ul>
  );
};
