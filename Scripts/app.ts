"use strict";
// IFFE
(function()
{
    /**
     * Function loads data asynchronously from a URL. 
     * Calls callback function when the data is done loading
     *
     * @param {string} method
     * @param {string} url
     * @param {function} callback
     */
    function LoadData(method: string , url: string, callback: Function):void
    {
        // create object
        let XHR = new XMLHttpRequest();

        // request
        XHR.open(method, url);

        // send request
        XHR.send();

        // event listener
        XHR.addEventListener("readystatechange", function(){
            if((XHR.status == 200) && (XHR.readyState == 4))
            {
                callback(XHR.responseText); 
            }

        });
    }

    function Start()
    {
        console.log("App Started");

        // LoadData("GET", "./Data/contacts.json", function(XHR){
        //     console.log(XHR);
        // });
        $.getJSON("./Data/contacts.json", function(DataSource){
            console.log(DataSource.ContactList[0]);
        });
    }

    window.addEventListener("load", Start);

})();