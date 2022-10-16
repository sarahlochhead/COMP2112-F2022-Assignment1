"use strict";
// IFFE
(function () {
    function Start() {
        console.log("App Started");
        let contactList;
        $.getJSON("./Data/contacts.json", function (DataSource) {
            // Get your data from the DataSource
            contactList = DataSource.ContactList;
            for (const contact of contactList) {
                let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress, contact.SubjectLine, contact.MessageText);
                console.log(newContact.toString());
                // maybe this is where the action to send the info via email to me goes?
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map