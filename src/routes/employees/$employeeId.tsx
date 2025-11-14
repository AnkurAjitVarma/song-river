import {createFileRoute} from '@tanstack/react-router'
import Employee from "../../components/Employee.tsx";

const API_BASE = import.meta.env.VITE_API_BASE

export const Route = createFileRoute('/employees/$employeeId')({
  component: Employee,
  loader: async ({ params }) => {
      const response = await fetch(`${API_BASE}/employees/${params.employeeId}`)
      return await response.json()
  }
})
