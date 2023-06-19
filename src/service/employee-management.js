import Service from './index';

const EMPLOYEE_SEARCH_PATH = '/employee';

export default class EmployeeManagement {
    static async findEmployees(page = 0, size = 10) {
        const params = new URLSearchParams({
            page: page,
            size: size,
        }).toString();

        return Service.get(`${EMPLOYEE_SEARCH_PATH}/list?${params}`, {
            data: {},
        }).then(response => response.data);
    }

    static async addEmployee(payload) {
        return Service.post(`${EMPLOYEE_SEARCH_PATH}`, payload).then(
            response => response.data
        );
    }

    static async updateEmployee(payload) {
        return Service.put(`${EMPLOYEE_SEARCH_PATH}`, payload).then(
            response => response.data
        );
    }

    static async getEmployeeDetails(employeeId) {
        const params = new URLSearchParams({
            employeeId: employeeId,
        }).toString();

        return Service.get(`${EMPLOYEE_SEARCH_PATH}?${params}`).then(
            response => response.data
        );
    }

    static async getEmployeesByName(name, page = 0, size = 10) {
        const params = new URLSearchParams({
            name: name,
            page: page,
            size: size,
        }).toString();

        return Service.get(`${EMPLOYEE_SEARCH_PATH}/search?${params}`, {
            data: {},
        }).then(response => response.data);
    }

    static async getLeaveDetails(id, from, to) {
        const params = new URLSearchParams({
            employeeId: id,
            from,
            to,
        }).toString();

        return Service.get(
            `${EMPLOYEE_SEARCH_PATH}/report/leave?${params}`
        ).then(response => response.data);
    }

    static async getAttendanceDetails(id, from, to) {
        const params = new URLSearchParams({
            employeeId: id,
            from,
            to,
        }).toString();

        return Service.get(
            `${EMPLOYEE_SEARCH_PATH}/report/attendance?${params}`
        ).then(response => response.data);
    }

    static async getAllDesignation() {
        return Service.get(`${EMPLOYEE_SEARCH_PATH}/designation/all`).then(
            response => response.data
        );
    }
}
