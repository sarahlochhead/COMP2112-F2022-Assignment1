"use strict";
// IFFE
(function()
{
    /**
     * This method saves our data to local storage
     *
     * @param {any[]} contactList
     */
    function SaveContactListData(contactList: any[]):void
    {
        let count = 0;
        for (const contact of contactList) 
        {
            let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress, contact.SubjectLine, contact.MessageText);
            localStorage.setItem(count.toString(), newContact.toJSON());
            count++;
            // maybe this is where the action to send the info via email to me goes?
        }
    }

    /**
     * This method reads data from local storage and returns a contact array
     *
     * @return {*}  {Contact[]}
     */
    function LoadContactListData(): Contact[]
    {
        // create empty Contact Array Container
        let ContactArray = new Array<Contact>();

        let keys = Object.keys(localStorage);
        for (let key of keys) 
        {
            let newContact = new Contact();
            newContact.fromJSON(localStorage.getItem(key));    
            ContactArray.push(newContact); 

        }

        return ContactArray;
    }
    
    function Start()
    {
        console.log("App Started");

        $.getJSON("./Data/contacts.json", function(DataSource){
            // Get your data from the DataSource
            let contactList:any[] = DataSource.ContactList;

            SaveContactListData(contactList);

            let ContactArray = LoadContactListData();

            for (const contact of ContactArray) 
            {
                console.log(contact.toString());
            }


        });

    }

    window.addEventListener("load", Start);

})();