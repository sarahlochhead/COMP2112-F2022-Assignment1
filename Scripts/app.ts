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

    function LoadHeader(): void
    {
        $.get("./Views/components/header.html", function(html_data)
        {
            $("header").html(html_data);
            
           switch(document.title)
           {
            case "About":
                $("#aboutPage").addClass("active");
                break;
            case "Projects":
                $("#projectsPage").addClass("active");
                break;
            case "Services":
                $("#servicesPage").addClass("active");
                break;
            case "Contact":
                $("#contactPage").addClass("active");
                break;        
           }
               
        });
    }

    function LoadAbout(): void
    {
        let aboutTitle = "About"
        let aboutBio = "Testing this to see if it works"
        $("#aboutPage h1").html(`${aboutTitle}`);
        $("#aboutPage p").html(`${aboutBio}`);
    }

    function LoadFooter(): void
    {
        $.get("./Views/components/footer.html", function(html_data)
        {
            $("footer").html(html_data);
        });
    }
    
    function Start()
    {
        console.log("App Started");

        LoadHeader();
        LoadAbout();
        LoadFooter();

    }

    window.addEventListener("load", Start);

})();