"use strict";
// IFFE
(function () {
    function Start() {
        console.log("App Started");
        $.getJSON("./Data/contacts.json", function (DataSource) {
            console.log(DataSource.ContactList[0]);
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map