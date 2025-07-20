import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number, deleteContact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  }

  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button id={id} onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
