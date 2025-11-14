import {createFileRoute} from '@tanstack/react-router'
import Employee from "../../components/Employee.tsx";

export const Route = createFileRoute('/employees/$employeeId')({
  component: Employee,
  loader: async ({ params }) => {
      const response = await fetch(`http://localhost:3030/employees/${params.employeeId}`)
      return await response.json()
  }
})
