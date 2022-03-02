import { SUPER_ADMIN, ADMIN, HR, PM, DEVELOPER, DESIGNER, TRAINEE, QA, BDE } from "./constants";

export const statusOptions = [{
    value: 1,
    display: 'Active',
}, {
    value: 0,
    display: 'InActive',
}];

export const genderOptions = [{
    value: 0,
    display: 'Male',
}, {
    value: 1,
    display: 'Female',
}, {
    value: 2,
    display: 'Other',
}];

export const maritalStatusOptions = [{
    value: 0,
    display: 'Un-married',
}, {
    value: 1,
    display: 'Married',
}, {
    value: 2,
    display: 'Divorced',
}];

export const projectStatusOptions = ['Active', 'Hold', 'Completed', 'Closed', 'Archieved'];
export const projectTypeOptions = ['Fixed', 'Hourly', 'Contract'];
export const taskStatusOptions = ['Created', 'Active', 'Started', 'Paused', 'Completed', 'Archieved'];
export const priorityOptions = ['Very Low', 'Low', 'Normal', 'High', 'Very High'];
export const taskTypeOptions = ['Feature', 'Bug', 'Design', 'Other'];
export const serviceTicketTypeOptions = ['Hardware', 'Software', 'Other'];
export const serviceTicketStatusOptions = ['Open', 'Closed'];
export const leaveStatusOptions = ['Applied', 'Approved', 'Rejected'];
export const leaveTypeOptions = ['Full', 'Half'];
export const internalNonProject = ['Internal', 'Non', 'Client'];

export const strtotime = () => {
    return (Date.parse(new Date()) / 1000);
}

export const adminRoles = () => {
    return [SUPER_ADMIN, ADMIN];
}

export const managementRoles = () => {
    return [SUPER_ADMIN, ADMIN, HR];
}

export const employeeRoles = () => {
    return [PM, DEVELOPER, DESIGNER, QA, BDE, TRAINEE];
}

export const allRoles = () => {
    return [SUPER_ADMIN, ADMIN, HR, PM, DEVELOPER, DESIGNER, QA, BDE, TRAINEE];
}