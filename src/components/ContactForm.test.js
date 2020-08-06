import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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

	// simulating user inputs
	fireEvent.change(inputFirstName, { target: { value: "Christian" } });
	fireEvent.change(inputLastName, { target: { value: "Bautista" } });
	fireEvent.change(inputEmail, { target: { value: "christian-bautista@lambdastudents.com" } });
	fireEvent.change(inputMessage, { target: { value: "Test Message." } });

	screen.debug();
});
