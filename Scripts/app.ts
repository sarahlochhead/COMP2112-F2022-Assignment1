/**
* File Name: app.ts
* Author's Name: Sarah Lochhead
* Website Name: Sarah lochhead - Web Developer
* File Description: All the functions for this project reside in this file
*/

"use strict";
// IFFE
(function()
{

    /**
     * This function detects a form submission and saves each input's content to local storage. 
     *
     */
    function ContactFormSubmission(): void
    {
        // when the submit button is clicked do this function
       $("button[type=submit]").on("click", function( ){
        // get all the form inputs (used bootstrap class as there are inputs and a textarea element)    
        let formInputs = $(".form-control");
            // this is base off the work we did in class setting the contactList to local storage
            let counter = 0
            // for each formInput get the value and put it in local storage as a string
            for (const formInput of formInputs) {
                let formDetail = $(formInput).val()
                localStorage.setItem(counter.toString(), formDetail)
                counter++
            }
       }); 
    }

    /**
     * This function is an adaptation of our LoadHeader function
     * It has been modified to also load the content to the About page
     */
    function LoadContent(): void
    {
        $.get("./Views/components/header.html", function(html_data)
        {
            $("header").html(html_data);

            // This is the string variable for the bio 
            let aboutBio = "Hello! Sarah here. I'm a creative problem-solver committed to relationship building, community engagement and education. I'm currently pursuing a diploma from Georgian College in the Interactive Media Design Web program. I have knowledge in a variety of coding languages and research-driven understanding of the benefits of digital literacy. I have over a decade of experience designing and implementing educational programs in public and private sector organizations. I also have teaching experience for learners aged preschool to adult including certifications in program design for children and youth. I'm a seasoned not-for-profit administrator with a demonstrated history of working in the performing arts industry with a BFA and a Master of Arts (MA) focused in Dance from York University. In addition to my current studies at Georgian College, I've successfully completed coding and digital marketing programs at Juno College (formerly HackerYou), Lighthouse Labs, and Camp Tech."

            // This is an array of string with the project description text
            let projectTexts = ["This project was created for Interface Design Using CSS (COMP1054) in the Winter 2022 semester at Georgian College. It is a CSS recreation of the iconic April 1992 Sassy magazine cover of Kurt Cobain and Courtney Love.", "This project was created for Client-Side JavaScript (COMP1073) in the Winter 2022 semester at Georgian College. It playfully emulates a classic toy - the Mattel See 'N' Sat Storymaker for a desktop view.", "This project was created for Intro to Web Programming using PHP (COMP1006) in the Winter 2022 semester at Georgian College. This web application allows members of a audition adjudication panel to anonymously enter their casting suggestions.","This project was created for Interface Design Using CSS (COMP1054) in the Winter 2022 semester at Georgian College. It is an example of a single product page design for a web store."];  

           switch(document.title)
           {
            case "About":
                $("#aboutPage").addClass("active");
                // Since we are on the About page please load this too
                $("p").html(`${aboutBio}`);
                break;
            case "Projects":
                $("#projectsPage").addClass("active");
                //Since we are on the Projects page please iterate through the array of projectTexts and pump them in.
                let count = 0
                for (const projectText of projectTexts) {
                    $(".desc").html(`${projectText}`)
                    count++
                }
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
        LoadContent();
        LoadFooter();
        ContactFormSubmission();
    }

    window.addEventListener("load", Start);

})();