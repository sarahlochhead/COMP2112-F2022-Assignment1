"use strict";
// IFFE
(function () {
    /**
     * This method saves our data to local storage
     *
     * @param {any[]} contactList
     */
    function SaveContactListData(contactList) {
        let count = 0;
        for (const contact of contactList) {
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
    function LoadContactListData() {
        // create empty Contact Array Container
        let ContactArray = new Array();
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            let newContact = new Contact();
            newContact.fromJSON(localStorage.getItem(key));
            ContactArray.push(newContact);
        }
        return ContactArray;
    }
    /**
     * This function is an adaptation of our LoadHeader function
     * It has been modified to also load the content to the About page
     */
    function LoadContent() {
        $.get("./Views/components/header.html", function (html_data) {
            $("header").html(html_data);
            // This is the string variable for the bio 
            let aboutBio = "Testing this to see if it works";
            switch (document.title) {
                case "About":
                    $("#aboutPage").addClass("active");
                    // Since we are on the About page please load this too
                    $("p").html(`${aboutBio}`);
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
    function LoadFooter() {
        $.get("./Views/components/footer.html", function (html_data) {
            $("footer").html(html_data);
        });
    }
    function Start() {
        console.log("App Started");
        LoadContent();
        LoadFooter();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map