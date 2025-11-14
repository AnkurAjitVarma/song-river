import { createFileRoute } from '@tanstack/react-router'
import Employee from "../../components/Employee.tsx";

export const Route = createFileRoute('/employees/$employeeId')({
  component: Employee,
})
