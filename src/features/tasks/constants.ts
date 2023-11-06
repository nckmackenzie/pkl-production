import * as z from 'zod';

export const formSchema = z.object({
  jobcard: z.string().nonempty('Field is required'),
  department: z.string().nonempty('Field is required'),
  startdate: z.date({ required_error: 'Field is required' }),
  starttime: z.string().nonempty('Field is required'),
  staff: z.string(),
  comments: z.string().optional(),
});
