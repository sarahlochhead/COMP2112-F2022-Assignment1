class Contact
{
    // private instance members (fields)
    private fullName: string;
    private contactNumber: string;
    private emailAddress: string;
    private subjectLine: string;
    private messageText: string;

    // public properties (getters and setters)
    get FullName():string
    {
        return this.fullName;
    }

    set FullName(name: string)
    {
        this.fullName = name;
    }

    get ContactNumber():string
    {
        return this.contactNumber;
    }

    set ContactNumber(contactNumber: string)
    {
        this.contactNumber = contactNumber;
    }

    get EmailAddress():string
    {
        return this.emailAddress;
    }

    set EmailAddress(emailAddress: string)
    {
        this.emailAddress = emailAddress;
    }

    get SubjectLine():string
    {
        return this.subjectLine;
    }

    set SubjectLine(subjectLine: string)
    {
        this.subjectLine = subjectLine;
    }

    get MessageText():string
    {
        return this.messageText;
    }

    set MessageText(messageText: string)
    {
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
    constructor(fullName: string = "unknown name", contactNumber: string = "no contact number", emailAddress: string = "unknown email address", subjectLine: string = "no subject", messageText: string = "no message")
    {
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
    public toString(): string
    {
        let outputString = "";
        outputString += `Subject: ${this.SubjectLine}\n`;
        outputString += `Message From: ${this.FullName}\n`;
        outputString += `Email Address: ${this.EmailAddress}\n`;
        outputString += `Contact Number: ${this.ContactNumber}\n`;
        outputString += `Message: ${this.MessageText}`;
        return outputString;
    }

    // private methods
}