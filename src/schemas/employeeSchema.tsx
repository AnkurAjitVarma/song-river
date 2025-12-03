import { z } from "zod";

export const badgeSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    imageFilePath: z.string(),
});

export const badgeDetailsSchema = z.object({
    badgeDetails: z.array(badgeSchema),
});

export const searchResultSchema = z.object({
    id: z.number().int(),
    firstName: z.string(),
    lastName: z.string(),
    jobTitle: z.string(),
    teamName: z.string(),
    imageFilePath: z.string(),
    badgeIds: z.array(z.number().int()),
});

export const loaderDataSchema = z.array(searchResultSchema);

export const employeeSchema = z.intersection(searchResultSchema, badgeDetailsSchema);

export type Badge = z.infer<typeof badgeSchema>;

export type Employee = z.infer<typeof employeeSchema>;

export type LoaderData = z.infer<typeof loaderDataSchema>;

export type SearchResult = z.infer<typeof searchResultSchema>;