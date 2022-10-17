class Contact {
    // private instance members (fields)
    fullName;
    contactNumber;
    emailAddress;
    subjectLine;
    messageText;
    // public properties (getters and setters)
    get FullName() {
        return this.fullName;
    }
    set FullName(name) {
        this.fullName = name;
    }
    get ContactNumber() {
        return this.contactNumber;
    }
    set ContactNumber(contactNumber) {
        this.contactNumber = contactNumber;
    }
    get EmailAddress() {
        return this.emailAddress;
    }
    set EmailAddress(emailAddress) {
        this.emailAddress = emailAddress;
    }
    get SubjectLine() {
        return this.subjectLine;
    }
    set SubjectLine(subjectLine) {
        this.subjectLine = subjectLine;
    }
    get MessageText() {
        return this.messageText;
    }
    set MessageText(messageText) {
        this.messageText = messageText;
    }
    // constructor
    /**
     * Creates an instance of Contact.
     *
     * @param {string} [fullName="unknown name"]
     * @param {string} [contactNumber="no contact number"]
     * @param {string} [emailAddress="unknown email address"]
     * @param {string} [messageText="no message"]
     * @memberof Contact
     */
    constructor(fullName = "unknown name", contactNumber = "no contact number", emailAddress = "unknown email address", messageText = "no message") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
        this.messageText = messageText;
    }
    // public methods
    /**
     *This method overrides the built in toString method for the Contact class.
     *Formatted to give what we need from the contact form
     *
     * @return {*}  {string}
     * @memberof Contact
     */
    toString() {
        let outputString = "";
        outputString += `Message From: ${this.FullName}\n`;
        outputString += `Email Address: ${this.EmailAddress}\n`;
        outputString += `Contact Number: ${this.ContactNumber}\n`;
        outputString += `Message: ${this.MessageText}`;
        return outputString;
    }
    /**
     * This method converts class Data Members to a comma-separated list compatible with JSON - SERIALIZE
     *
     * @return {*}  {string}
     * @memberof Contact
     */
    toJSON() {
        return `${this.FullName},${this.ContactNumber},${this.EmailAddress},${this.MessageText}`;
    }
    /**
     * This method reads data from a comma separated list and assigns it to class Data Members - DESERIALIZE
     *
     * @param {string} data
     * @memberof Contact
     */
    fromJSON(data) {
        let stringArray = data.split(",");
        this.FullName = stringArray[0];
        this.ContactNumber = stringArray[1];
        this.EmailAddress = stringArray[2];
        this.MessageText = stringArray[4];
    }
}
//# sourceMappingURL=contact.js.map