import React, { useState, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { addEmployeeInfos } from "../../slices/employeeInfos";
import states from "../../data/states";
import { store } from "../../store/store";
import InputWithLabel from "../../atoms/InputWithLabel";
import Fieldset from "../../atoms/Fieldset";
import DatePickerComponent from "../../atoms/DatePicker";
import SelectComponent from "../../atoms/SelectInput";
import styles from "./EmployeeForm.module.css";

const ModalComponent = lazy(() => import("../Modal"));

interface State {
  abbreviation: string;
  name: string;
}

interface Option {
  value: string;
  label: string;
}

/**
* Function component Employee Form - Represent the Form Component
*/
const EmployeeForm = () => {
  const dispatch = useDispatch();

  // State variables using useState hook
  const [startDateBirth, setStartDateBirth] = useState<Date | null>(null);
  const [startDateEntry, setStartDateEntry] = useState<Date | null>(null);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [selectedOptionDepartement, setSelectedOptionDepartement] = useState<Option | null>(null);
  const [formError, setFormError] = useState("");

  // Other constants for date calculations and options
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 70);

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);
  
  const minStartDate = new Date();
  minStartDate.setDate(minStartDate.getDate());

  const optionsStates = states.map((state: State) => ({
    value: state.abbreviation,
    label: state.name,
  }));

  const optionsDepartement: Option[] = [
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Legal", label: "Legal" },
  ];

  // Functions for the modal
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const employeeData: { [key: string]: string } = {};

    // Check if the form is valid
    for (const [key, value] of data.entries()) {
      let valueAsString: string;
      if (typeof value === "string") {
          valueAsString = value;
      } else if (value instanceof File) {
          valueAsString = value.name;
      } else {
          valueAsString = String(value); 
      }

      if (!valueAsString.trim()) {
          setFormError(`Please fill out the form`);
          return;
      }
      employeeData[key] = valueAsString;
    }

    // Remove the error message if the form is valid
    setFormError("");

    // Dispatch redux action with employee datas
    dispatch(addEmployeeInfos(employeeData));
    localStorage.setItem("employeeData", JSON.stringify(store.getState()));
    openModal();
  };

  return (
    <form
      className={styles.form}
      id="myForm"
      name="myForm"
      onSubmit={handleSubmit}
    >
      <InputWithLabel
        htmlFor="first-name"
        label="First Name"
        id="first-name"
        name="first-name"
        type="text"
        autoComplete="username"
      />
      <InputWithLabel
        htmlFor="last-name"
        label="Last Name"
        id="last-name"
        name="last-name"
        type="text"
      />
      <DatePickerComponent
        htmlFor="date-of-birth"
        label="Date of Birth"
        id="date-of-birth"
        name="date-of-birth"
        minDate={minDate}
        maxDate={maxDate}
        react-datepicker
        selectedDate={startDateBirth}
        onChange={(date) => setStartDateBirth(date)}
      />
      <DatePickerComponent
        htmlFor="start-date"
        label="Start Date"
        id="start-date"
        name="start-date"
        minDate={minStartDate }
        selectedDate={startDateEntry}
        onChange={(date) => setStartDateEntry(date)}
      />
      <Fieldset legend="Address">
        <InputWithLabel
          htmlFor="street"
          label="Street"
          id="street"
          name="street"
          type="text"
        />
        <InputWithLabel
          htmlFor="city"
          label="City"
          id="city"
          name="city"
          type="text"
        />
        <SelectComponent
          htmlFor="state"
          label="State"
          inputId="state"
          name="state"
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={optionsStates}
          placeholder="Alabama"
        />
        <InputWithLabel
          htmlFor="zip-code"
          label="Zip Code"
          id="zip-code"
          name="zip-code"
          type="number"
        />
      </Fieldset>

      <SelectComponent
        htmlFor="department"
        label="Department"
        inputId="department"
        name="department"
        defaultValue={selectedOptionDepartement}
        onChange={setSelectedOptionDepartement}
        options={optionsDepartement}
        placeholder="Sales"
      />
      {formError && <p>{formError}</p>}

      <button className={styles.btn} type="submit">
        Save
      </button>

      <Suspense fallback={<div>Loading</div>}>
        <ModalComponent showModal={showModal} closeModal={closeModal}/>
      </Suspense>

    </form>
  );
};

export default EmployeeForm;
