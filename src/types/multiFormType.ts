import { z } from 'zod';

// Define the schema for basic information (Step 1)
export const basicInfoSchema = z.object({
    fullName: z.string().min(1, { message: 'Full Name is required' }),
    // Changed minimum phone number length to 10 for better international validity (adjust if needed)
    phoneNumber: z.string().min(10, { message: 'Phone Number is required and should be valid (at least 10 digits)' }),
    location: z.string().min(1, { message: 'Location is required' }),
    shortBio: z.string().max(400, { message: 'Short Bio cannot exceed 400 characters' }).optional().or(z.literal('')),
});

// Define the schema for talents (Step 2)
export const talentsSchema = z.object({
    skillsOffered: z.array(z.string()).min(1, { message: 'Please add at least one skill you offer' }),
});

// Define the schema for desired skills (Step 3)
export const wantedSkillsSchema = z.object({
    skillsWanted: z.array(z.string()).min(1, { message: 'Please add at least one skill you want' }),
});

// Define the schema for the final step (Step 4)
export const almostThereSchema = z.object({
    profilePhoto: z.any().optional(), // File object is not directly validated by Zod for type, handled by custom logic.
    portfolioUrl: z.string().url({ message: 'Please enter a valid URL' }).optional().or(z.literal('')),
});

// Combine all schemas into a single main form schema
export const multiStepFormSchema = z.intersection(
    basicInfoSchema,
    z.intersection(
        talentsSchema,
        z.intersection(
            wantedSkillsSchema,
            almostThereSchema
        )
    )
);

// Define the TypeScript type from the combined Zod schema
export type FormData = z.infer<typeof multiStepFormSchema>;

// Define the type for Zod validation errors
export type FormErrors = z.ZodIssue[];