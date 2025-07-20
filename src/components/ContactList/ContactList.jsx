import Contact from "./Contact";
import css from "./ContactList.module.css"
import { useSelector } from "react-redux";

const ContactList = () => {

  const contacts = useSelector((state) => state.contact.items);
  const filter = useSelector((state) => state.filters.value);
  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

   return (
    <>
      {filteredContacts.length === 0 ? (<p >No matches found</p>) : 
        (<ul >
            {filteredContacts.map((contact) => (
              <li key={contact.id}>
                <Contact contact={contact} />
              </li>
            ))}
          </ul>
        )
      }
    </>
  );
};

export default ContactList;