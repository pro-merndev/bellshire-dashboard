import * as z from 'zod';

export const profileSchema = z.object({
 
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
