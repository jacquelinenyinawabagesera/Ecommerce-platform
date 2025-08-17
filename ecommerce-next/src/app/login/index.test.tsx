import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignIn from ".";


jest.mock("next/link", () => {
  return ({ children, ...props }: any) => <a {...props}>{children}</a>;
});


jest.mock("next/image", () => (props: any) => {
  return <img {...props} />;
});

jest.mock("../shared-components/SignUpHeader", () => ({
  Header: () => <header data-testid="signup-header" />,
}));
jest.mock("../shared-components/Footer", () => ({
  Footer: () => <footer data-testid="footer" />,
}));

describe("SignIn Page", () => {
  it("renders Header and Footer", () => {
    render(<SignIn />);
    expect(screen.getByTestId("signup-header")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders the login form with inputs and button", () => {
    render(<SignIn />);
    expect(screen.getByPlaceholderText(/Email or Phone Number/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Log In/i })).toBeInTheDocument();
  });

  it("renders 'Forget Password?' button", () => {
    render(<SignIn />);
    expect(screen.getByRole("button", { name: /Forget Password/i })).toBeInTheDocument();
  });

  it("renders the create account link", () => {
    render(<SignIn />);
    expect(screen.getByRole("link", { name: /Create account/i })).toBeInTheDocument();
  });

  it("shows the login heading and description", () => {
    render(<SignIn />);
    expect(screen.getByRole("heading", { name: /Log in to Exclusive/i })).toBeInTheDocument();
    expect(screen.getByText(/Enter your details below/i)).toBeInTheDocument();
  });

  it("allows input of email and password", () => {
    render(<SignIn />);
    const emailInput = screen.getByPlaceholderText(/Email or Phone Number/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "mypassword" } });

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("mypassword");
  });

  it("calls handleSubmit and logs form data when form is submitted", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<SignIn />);
    const emailInput = screen.getByPlaceholderText(/Email or Phone Number/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const submitButton = screen.getByRole("button", { name: /Log In/i });

    fireEvent.change(emailInput, { target: { value: "user@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "pass123" } });
    fireEvent.click(submitButton);

    expect(logSpy).toHaveBeenCalledWith("Form submitted:", {
      name: "",
      email: "user@email.com",
      password: "pass123",
    });

    logSpy.mockRestore();
  });
});