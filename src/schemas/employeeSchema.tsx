import { z } from "zod";

export const employeeSchema = z.object({
    id: z.number().int(),
    firstName: z.string(),
    lastName: z.string(),
    jobTitle: z.string(),
    teamName: z.string(),
    imageFilePath: z.string(),
    badgeIds: z.array(z.number().int()),
});

export const loaderDataSchema = z.array(employeeSchema);

export type Employee = z.infer<typeof employeeSchema>;

export type LoaderData = z.infer<typeof loaderDataSchema>;