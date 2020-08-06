import React from "react";
import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", () => {
	render(<ContactForm />);
});

test("Adds user info when user filled out form and submitted,.", () => {
	// renders the contact form
	render(<ContactForm />);

	// form input query
	const inputFirstName = screen.getByLabelText(/first name/i);
	const inputLastName = screen.getByLabelText(/last name/i);
	const inputEmail = screen.getByLabelText(/email/i);
	const inputMessage = screen.getByLabelText(/message/i);
});
