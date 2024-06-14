import {
  render,
  fireEvent,
  screen,
  cleanup,
  act,
} from "@testing-library/react";
import TableComponent from "../molecules/Table";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  render(<TableComponent />);
});

describe("Given I use the Table Component in my App", () => {
  describe("When I render Table Component with customized informations", () => {
    test("Then, it should render the table correctly", () => {
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

    test("Then, it should render the table with the correct number of rows and columns", () => {
      const rows = screen.getAllByTestId("table-row");
      expect(rows.length).toEqual(10);
    });

    test("Then, it should filter the table when the global filter is changed", () => {
      const input = screen.getByTestId("globalFilter");
      act(() => {
        fireEvent.change(input, { target: { value: "Yoyo" } });
      });
      expect(screen.getByText("Yoyo")).toBeInTheDocument();
    });

    test("Then, it should sort the table when a column header is clicked", async () => {
      const header = screen.getByText("First name");
      await act(async () => {
        fireEvent.click(header);
      });
      const arrowIcon = screen.getAllByTestId("arrow-icon");
      expect(arrowIcon[0]).toHaveTextContent("🔼");
    });

    test("Then, it should paginate the table when the page size is changed", () => {
      const selectElement = screen.getByTestId("paginationSelect");
      act(() => {
        fireEvent.change(selectElement, { target: { value: "20" } });
      });
      expect(screen.getByText("Showing 1 to 20 of 20")).toBeInTheDocument();
      const rows = screen.getAllByTestId("table-row");
      expect(rows.length).toEqual(20);
    });

    test("Then, it should navigate to the next page when the next button is clicked", () => {
      const button = screen.getByRole("button", { name: "Next" });
      act(() => {
        fireEvent.click(button);
      });
      expect(screen.getByText("Showing 11 to 20 of 20")).toBeInTheDocument();
    });

    test("Then, it should navigate to the previous page when the previous button is clicked", () => {
      const buttonNext = screen.getByRole("button", { name: "Next" });
      act(() => {
        fireEvent.click(buttonNext);
      });
      expect(screen.getByText("Showing 11 to 20 of 20")).toBeInTheDocument();
      const buttonPrevious = screen.getByRole("button", { name: "Previous" });
      act(() => {
        fireEvent.click(buttonPrevious);
      });
      expect(screen.getByText("Showing 1 to 10 of 20")).toBeInTheDocument();
    });
  });
});
