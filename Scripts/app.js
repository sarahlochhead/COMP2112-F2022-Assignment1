"use strict";
// IFFE
(function () {
    /**
     * This function detects a form submission and saves each input's content to local storage.
     *
     */
    function ContactFormSubmission() {
        // when the submit button is clicked do this function
        $("button[type=submit]").on("click", function () {
            // get all the form inputs (used bootstrap class as there are inputs and a textarea element)    
            let formInputs = $(".form-control");
            // this is base off the work we did in class setting the contactList to local storage
            let counter = 0;
            // for each formInput get the value and put it in local storage as a string
            for (const formInput of formInputs) {
                let formDetail = $(formInput).val();
                localStorage.setItem(counter.toString(), formDetail);
                counter++;
            }
        });
    }
    /**
     * This function is an adaptation of our LoadHeader function
     * It has been modified to also load the content to the About page
     */
    function LoadContent() {
        $.get("./Views/components/header.html", function (html_data) {
            $("header").html(html_data);
            // This is the string variable for the bio 
            let aboutBio = "Hello! Sarah here. I'm a creative problem-solver committed to relationship building, community engagement and education. I'm currently pursuing a diploma from Georgian College in the Interactive Media Design Web program. I have knowledge in a variety of coding languages and research-driven understanding of the benefits of digital literacy. I have over a decade of experience designing and implementing educational programs in public and private sector organizations. I also have teaching experience for learners aged preschool to adult including certifications in program design for children and youth. I'm a seasoned not-for-profit administrator with a demonstrated history of working in the performing arts industry with a BFA and a Master of Arts (MA) focused in Dance from York University. In addition to my current studies at Georgian College, I've successfully completed coding and digital marketing programs at Juno College (formerly HackerYou), Lighthouse Labs, and Camp Tech.";
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
        ContactFormSubmission();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map