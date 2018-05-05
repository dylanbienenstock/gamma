import { Contact } from "../../../gamma/account/account.types";

export interface SectionChange {
	contact: Contact;
	from: string;
	to: string;
}