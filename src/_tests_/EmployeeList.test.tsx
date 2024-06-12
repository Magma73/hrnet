import { Suspense } from "react";
import { MemoryRouter } from "react-router-dom";
import { screen, cleanup, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import EmployeeList from "../pages/EmployeeList";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Suspense>
          <EmployeeList />
        </Suspense>
      </Provider>
    </MemoryRouter>
  );
});

describe("Given I visit the application and I am on the EmployeeList Page", () => {
  describe("When the page loads", () => {
    test("Then it should render the title H1 Current Employees in the EmployeeList page", () => {
      const title1 = screen.getByRole("heading", { level: 1 });
      expect(title1).toHaveTextContent("Current Employees");
    });

    test('Then it should render the link "Home Page" in the EmployeeList  page', () => {
      const linkElement = screen.getByRole("link");
      expect(linkElement).toHaveTextContent("Home");
    });
  });

  describe("When the page finished to load", () => {
    test("Then it should render the Table in the EmployeeList page", async () => {
      const table = await waitFor(() => screen.getByRole("table"));
      expect(table).toBeInTheDocument();

      expect(screen.queryByText(/Show /i)).toBeInTheDocument();
      expect(screen.getByText("Search :")).toBeInTheDocument();
      expect(screen.getByTestId("paginationSelect")).toBeInTheDocument();
      expect(screen.getByRole("combobox")).toBeInTheDocument();
      expect(screen.getByText("First name")).toBeInTheDocument();
      expect(screen.getByText("Last name")).toBeInTheDocument();
      expect(screen.getByText("Date of birth")).toBeInTheDocument();
      expect(screen.getByText("Start date")).toBeInTheDocument();
      expect(screen.getByText("Street")).toBeInTheDocument();
      expect(screen.getByText("City")).toBeInTheDocument();
      expect(screen.getByText("State")).toBeInTheDocument();
      expect(screen.getByText("Zip code")).toBeInTheDocument();
      expect(screen.getByText("Department")).toBeInTheDocument();
      expect(screen.getByText("Showing 1 to 10 of 20")).toBeInTheDocument();
      expect(screen.getByText("Previous")).toBeInTheDocument();
      expect(screen.getByText("Next")).toBeInTheDocument();
    });
  });
});
