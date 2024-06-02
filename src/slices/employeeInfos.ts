import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EmployeeInfo {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
}

interface EmployeeState {
  employees: EmployeeInfo[];
}

const initialState: EmployeeState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployeeInfos: (state, action: PayloadAction<EmployeeInfo>) => {
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployeeInfos } = employeeSlice.actions;
export default employeeSlice.reducer;
