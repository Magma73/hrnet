// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   employees: [],
// };

// const employeeInfos = createSlice({
//   name: 'employee',
//   initialState,
//   reducers: {
//     addEmployeeInfos: (state, action) => {
//       state.employees.push(action.payload);
//     },
//   },
// });

// const { reducer, actions } = employeeInfos;

// export const { addEmployeeInfos } = actions;
// export default reducer;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Définir le type pour une information sur un employé
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

// Définir le type pour l'état initial
interface EmployeeState {
  employees: EmployeeInfo[];
}

// Initialiser l'état initial
const initialState: EmployeeState = {
  employees: [],
};

// Créer le slice
const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployeeInfos: (state, action: PayloadAction<EmployeeInfo>) => {
      state.employees.push(action.payload);
    },
  },
});

// Exporter les actions et le reducer
export const { addEmployeeInfos } = employeeSlice.actions;
export default employeeSlice.reducer;
