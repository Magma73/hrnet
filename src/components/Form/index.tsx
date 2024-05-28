import React, { useState, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { addEmployeeInfos } from "../../slices/employeeInfos";
import states from "../../data/states";
import { store } from "../../store/store";
import InputWithLabel from "../../components/InputWithLabel";
import Fieldset from "../../components/Fieldset";
import DatePickerComponent from "../../components/DatePicker";
import SelectComponent from "../../components/SelectInput";
import styles from "./EmployeeForm.module.css";
import { createPortal } from "react-dom";

const Modal = lazy(() => import("../../components/Modal"));

interface State {
  abbreviation: string;
  name: string;
}

interface Option {
  value: string;
  label: string;
}
///**
//* Function component Employee Form - Represent the Form Component
//* @returns {JSX.Element} The rendered Employee Form  component.
//*/
const EmployeeForm = () => {
  const dispatch = useDispatch();

  // State variables using useState hook
  const [startDateBirth, setStartDateBirth] = useState(null);
  const [startDateEntry, setStartDateEntry] = useState<Date | null>(null);
  const [selectedOption, setSelectedOption] = useState<Date | null>(null);
  const [selectedOptionDepartement, setSelectedOptionDepartement] =
    useState(null);
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
    const employeeData: { [key: string]: any } = {};

    for (let [key, value] of data.entries()) {
      if (!value.trim()) {
        setFormError(`Please fill out the form`);
        return;
      }
      employeeData[key] = value;
    }
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
        type="date"
        minDate={minDate}
        maxDate={maxDate}
        selectedDate={startDateBirth}
        onChange={(date) => setStartDateBirth(date)}
      />
      <DatePickerComponent
        htmlFor="start-date"
        label="Start Date"
        id="start-date"
        name="start-date"
        type="date"
        minDate={minStartDate}
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
          type="text"
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
        type="text"
        defaultValue={selectedOptionDepartement}
        onChange={setSelectedOptionDepartement}
        options={optionsDepartement}
        placeholder="Sales"
      />
      {formError && <p>{formError}</p>}

      <button className={styles.btn} type="submit">
        Save
      </button>


      {showModal &&
        createPortal(
          <Suspense>
          <Modal
            onClose={closeModal}
            customModal={styles.modalContent}
            customContainerInformations={styles.containerInformations}
            customTitle={styles.title}
            customBtnClose={styles.btnClose}
            customIconClose={styles.picture}
            title="Employee Created"
            titleClose="Close"
          />
           </Suspense>,
          document.body
        )}

    </form>
  );
};

export default EmployeeForm;
