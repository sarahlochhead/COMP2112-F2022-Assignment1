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
     * @param {string} [subjectLine="no subject"]
     * @param {string} [messageText="no message"]
     * @memberof Contact
     */
    constructor(fullName = "unknown name", contactNumber = "no contact number", emailAddress = "unknown email address", subjectLine = "no subject", messageText = "no message") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
        this.SubjectLine = subjectLine;
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
        outputString += `Subject: ${this.SubjectLine}\n`;
        outputString += `Message From: ${this.FullName}\n`;
        outputString += `Email Address: ${this.EmailAddress}\n`;
        outputString += `Contact Number: ${this.ContactNumber}\n`;
        outputString += `Message: ${this.MessageText}`;
        return outputString;
    }
}
//# sourceMappingURL=contact.js.map