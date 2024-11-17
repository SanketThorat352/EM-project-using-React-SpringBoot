import axios from 'axios'
const EMPLOYEE_SAPI_BASE_URL= "http://localhost:9090/employees"
class EmployeeService{
    saveEmployee(employee){
        return axios.post(EMPLOYEE_SAPI_BASE_URL,employee)
    }
}
export default new EmployeeService();