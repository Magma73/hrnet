import { MemoryRouter } from "react-router-dom";
import { screen, cleanup, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Home from "../pages/Home";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </MemoryRouter>
  );
});

describe("Given I visit the application and I am on the Home Page", () => {
  describe("When the page loads", () => {
    test("Then it should render the title H1 HR Net in the Home page", () => {
      const title1 = screen.getByRole("heading", { level: 1 });
      expect(title1).toHaveTextContent("HR Net");
    });
    test("Then it should render the title H2 Create Employee in the Home page", () => {
      const title1 = screen.getByRole("heading", { level: 2 });
      expect(title1).toHaveTextContent("Create Employee");
    });

    test('Then it should render the link "View Current Employees" in the Home page', () => {
      const linkElement = screen.getByRole("link");
      expect(linkElement).toHaveTextContent("View Current Employees");
    });
  });

  describe("When the page finished to load", () => {
    test("Then it should render the form in the Home page", async () => {
      const firstNameInputElement = await waitFor(() =>
        screen.getByLabelText("First Name")
      );
      const lastNameInputElement = await waitFor(() =>
        screen.getByLabelText("Last Name")
      );
      const dateBirthInputElement = await waitFor(() =>
        screen.getByLabelText("Date of Birth")
      );
      const startDateInputElement = await waitFor(() =>
        screen.getByLabelText("Start Date")
      );
      const streetInputElement = await waitFor(() =>
        screen.getByLabelText("Street")
      );
      const cityInputElement = await waitFor(() =>
        screen.getByLabelText("City")
      );
      const stateInputElement = await waitFor(() =>
        screen.getByLabelText("State")
      );
      const zipCodeInputElement = await waitFor(() =>
        screen.getByLabelText("Zip Code")
      );
      const departmentInputElement = await waitFor(() =>
        screen.getByLabelText("Department")
      );

      expect(firstNameInputElement).toBeInTheDocument();
      expect(lastNameInputElement).toBeInTheDocument();
      expect(dateBirthInputElement).toBeInTheDocument();
      expect(startDateInputElement).toBeInTheDocument();
      expect(streetInputElement).toBeInTheDocument();
      expect(cityInputElement).toBeInTheDocument();
      expect(stateInputElement).toBeInTheDocument();
      expect(zipCodeInputElement).toBeInTheDocument();
      expect(departmentInputElement).toBeInTheDocument();

      const buttonElement = await waitFor(() => screen.getByRole("button"));
      expect(buttonElement).toBeInTheDocument();

      const formFieldsTextBox = screen.getAllByRole("textbox");
      expect(formFieldsTextBox.length).toBe(6);

      const formFieldsNumberBox = screen.getAllByRole("spinbutton");
      expect(formFieldsNumberBox.length).toBe(1);

      const formFieldsComboBox = screen.getAllByRole("combobox");
      expect(formFieldsComboBox.length).toBe(2);

    });
  });
});
