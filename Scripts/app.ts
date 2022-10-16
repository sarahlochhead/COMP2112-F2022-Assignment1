"use strict";
// IFFE
(function()
{
    function Start()
    {
        console.log("App Started");

        let contactList;

        $.getJSON("./Data/contacts.json", function(DataSource){
            // Get your data from the DataSource
            contactList = DataSource.ContactList;

            let count = 0;


            for (const contact of contactList) 
            {
                let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress, contact.SubjectLine, contact.MessageText);
                localStorage.setItem(count.toString(), newContact.toJSON());
                count++;
                // maybe this is where the action to send the info via email to me goes?
            }

            let keys = Object.keys(localStorage);
            for (let key of keys) 
            {
                let newContact = new Contact(localStorage.getItem(key));
                newContact.fromJSON(localStorage.getItem(key));    
                console.log(newContact.toString());       
            }

        });

    }

    window.addEventListener("load", Start);

})();