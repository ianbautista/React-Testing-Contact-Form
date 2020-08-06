import React from "react";
import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", () => {
	render(<ContactForm />);
});

test("Adds user info when user filled out form and submitted,.", () => {
	render(<ContactForm />);
});
