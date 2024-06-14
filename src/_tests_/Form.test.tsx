import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import {
  screen,
  render,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmployeeForm from "../molecules/Form";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  render(
    <Provider store={store}>
      <Suspense>
        <EmployeeForm />
      </Suspense>
    </Provider>
  );
});

describe("Given I am on the Home Page", () => {
  describe("When the form is rendered", () => {
    test("Then it should display all form fields and a submit button", () => {
      expect(screen.getByLabelText("First Name")).toBeInTheDocument();
      expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
      expect(screen.getByLabelText("Date of Birth")).toBeInTheDocument();
      expect(screen.getByLabelText("Start Date")).toBeInTheDocument();
      expect(screen.getByLabelText("Street")).toBeInTheDocument();
      expect(screen.getByLabelText("City")).toBeInTheDocument();
      expect(screen.getByLabelText("State")).toBeInTheDocument();
      expect(screen.getByLabelText("Zip Code")).toBeInTheDocument();
      expect(screen.getByLabelText("Department")).toBeInTheDocument();

      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveTextContent("Save");

      const formFieldsTextBox = screen.getAllByRole("textbox");
      expect(formFieldsTextBox.length).toBe(6);

      const formFieldsNumberBox = screen.getAllByRole("spinbutton");
      expect(formFieldsNumberBox.length).toBe(1);

      const formFieldsComboBox = screen.getAllByRole("combobox");
      expect(formFieldsComboBox.length).toBe(2);
    });
  });
  describe("When I do not enter form fields and I submit the form", () => {
    test("Then, it displays an error message", async () => {
      const buttonElement = screen.getByRole("button");
      fireEvent.click(buttonElement);
      await waitFor(() => {
        expect(
          screen.getByText(/Please fill out the form/i)
        ).toBeInTheDocument();
      });
    });
  });
  describe("When I enter form fields and I submit the form", () => {
    test("Then, it render the form with custom fields and displays the modal", async () => {
      fireEvent.change(screen.getByLabelText("First Name"), {
        target: { value: "John" },
      });
      fireEvent.change(screen.getByLabelText("Last Name"), {
        target: { value: "Doe" },
      });
      fireEvent.change(screen.getByLabelText("Date of Birth"), {
        target: { value: "1990-01-01" },
      });
      fireEvent.change(screen.getByLabelText("Start Date"), {
        target: { value: "2020-01-01" },
      });
      fireEvent.change(screen.getByLabelText("Street"), {
        target: { value: "123 Main St" },
      });
      fireEvent.change(screen.getByLabelText("City"), {
        target: { value: "Anytown" },
      });
      fireEvent.change(screen.getByLabelText("State"), {
        target: { value: "Alaska" },
      });
      fireEvent.change(screen.getByLabelText("Zip Code"), {
        target: { value: "12345" },
      });
      fireEvent.change(screen.getByLabelText("Department"), {
        target: { value: "Marketing" },
      });

      expect(screen.getByLabelText("First Name")).toHaveValue("John");
      expect(screen.getByLabelText("Last Name")).toHaveValue("Doe");
      expect(screen.getByLabelText("Date of Birth")).toHaveValue("01/01/1990");
      expect(screen.getByLabelText("Start Date")).toHaveValue("2020-01-01");
      expect(screen.getByLabelText("Street")).toHaveValue("123 Main St");
      expect(screen.getByLabelText("City")).toHaveValue("Anytown");
      expect(screen.getByLabelText("State")).toHaveValue("Alaska");
      expect(screen.getByLabelText("Zip Code")).toHaveValue(Number(12345));
      expect(screen.getByLabelText("Department")).toHaveValue("Marketing");

      const buttonElement = screen.getByRole("button");
      userEvent.click(buttonElement);
      expect(screen.queryByText(/Please fill out the form/i)).toBeNull();
    });
  });
});
