import style from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {

  return (
    <div className={style.mainContainer}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox  />
      <ContactList  />
    </div>
  );
}

export default App;
