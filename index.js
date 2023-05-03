// const argv = require("yargs").argv;
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    case "get":
      const contactById = await contacts.getContactById(id);
      return console.log(contactById);

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);

    case "remove":
      const deletedContact = await contacts.removeContact(id);
      return console.log(deletedContact);

    case "update":
      const updatedContact = await contacts.updateContact(
        id,
        name,
        email,
        phone
      );
      console.log(updatedContact);
  }
};

// SHOW ALL
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "vza2RIzNGIwutCVCs4mCL" });

// ADD
// invokeAction({
//   action: "add",
//   name: "Alex Filp",
//   email: "test@gmail.com",
//   phone: "(501) 223-2356",
// });

// UPDATE
// invokeAction({
//   action: "update",
//   id: "RAp11rGgcoejx9g7VQJr5",
//   name: "Alex Filp",
//   email: "test@gmail.com",
//   phone: "(501) 777-7777",
// });

// REMOVE
// invokeAction({ action: "remove", id: "rsKkOQUi80UsgVPCcLZZW" });
