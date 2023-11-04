import * as z from 'zod';

export const JOBCARDS: JobCard[] = [
  {
    id: 1,
    jobcardNo: '12345',
    client: 'Test Client 1',
    description: '2 no 3 seater sofa',
    cumulativeHrs: 120,
    hoursInProduction: 56,
    currentDepartment: 'joinery',
    startedOn: new Date('2023-08-12'),
    status: 'ongoing',
    salesPerson: 'Eunice',
  },
  {
    id: 2,
    jobcardNo: '12346',
    client: 'Test Client 2',
    description: '1 no. console mirror with wrought iron features',
    cumulativeHrs: 156,
    hoursInProduction: 24,
    currentDepartment: 'machinery',
    startedOn: new Date('2023-08-16'),
    status: 'ongoing',
    salesPerson: 'Donna',
  },
  {
    id: 3,
    jobcardNo: '12347',
    client: 'Test Client 2',
    description: '2 no winta bedside cabinets',
    cumulativeHrs: 88,
    hoursInProduction: 72,
    currentDepartment: 'upholstery',
    startedOn: new Date('2023-08-16'),
    status: 'paused',
    salesPerson: 'Julie',
  },
  {
    id: 4,
    jobcardNo: '12348',
    client: 'Test Client 3',
    description: '1 no. shinda foot rest',
    cumulativeHrs: 120,
    hoursInProduction: 130,
    currentDepartment: 'finishing',
    startedOn: new Date('2023-08-10'),
    status: 'completed',
    completedDate: new Date('2023-08-24'),
    salesPerson: 'Moni',
  },
  {
    id: 5,
    jobcardNo: '12349',
    client: 'Test Client 4',
    description: '2 no. armchairs',
    cumulativeHrs: 96,
    hoursInProduction: 33,
    currentDepartment: 'carving',
    startedOn: new Date('2023-08-29'),
    status: 'ongoing',
    salesPerson: 'Vir',
  },
  {
    id: 6,
    jobcardNo: '12350',
    client: 'Test Client 5',
    description: '1 no ottoman',
    cumulativeHrs: 144,
    hoursInProduction: 60,
    currentDepartment: 'sanding',
    startedOn: new Date('2023-08-24'),
    status: 'ongoing',
    salesPerson: 'Eunice',
  },
  {
    id: 7,
    jobcardNo: '12351',
    client: 'Test Client 1',
    description: '1 no. 3 seater sofa',
    cumulativeHrs: 124,
    hoursInProduction: 120,
    currentDepartment: 'finishing',
    startedOn: new Date('2023-08-30'),
    status: 'ongoing',
    salesPerson: 'Donna',
  },
  {
    id: 8,
    jobcardNo: '12352',
    client: 'Test Client 7',
    description: '1 no. study desk',
    cumulativeHrs: 160,
    hoursInProduction: 56,
    currentDepartment: 'joinery',
    startedOn: new Date('2023-08-30'),
    status: 'ongoing',
    salesPerson: 'Julie',
  },
  {
    id: 9,
    jobcardNo: '12353',
    client: 'Test Client 10',
    description: '1 no. chaise lounge',
    cumulativeHrs: 144,
    hoursInProduction: 72,
    currentDepartment: 'polishing',
    startedOn: new Date('2023-08-23'),
    status: 'paused',
    salesPerson: 'Moni',
  },
  {
    id: 10,
    jobcardNo: '12354',
    client: 'Test Client 4',
    description: '1 no. bespoke office desk',
    cumulativeHrs: 200,
    hoursInProduction: 12,
    currentDepartment: 'yard',
    startedOn: new Date('2023-09-12'),
    status: 'ongoing',
    salesPerson: 'Vir',
  },
  {
    id: 11,
    jobcardNo: '12355',
    client: 'Test Client 4',
    description: 'quarter round (windows)',
    cumulativeHrs: 56,
    hoursInProduction: 48,
    currentDepartment: 'finishing',
    startedOn: new Date('2023-09-01'),
    status: 'completed',
    completedDate: new Date('2023-09-14'),
    salesPerson: 'Eunice',
  },
  {
    id: 12,
    jobcardNo: '12356',
    client: 'Panesar',
    description: '1 no. coffee table',
    cumulativeHrs: 120,
    hoursInProduction: 88,
    currentDepartment: 'sanding',
    startedOn: new Date('2023-09-01'),
    status: 'ongoing',
    salesPerson: 'Donna',
  },
  {
    id: 13,
    jobcardNo: '12357',
    client: 'Test Client 2',
    description: 'wine cellar',
    cumulativeHrs: 62,
    hoursInProduction: 64,
    currentDepartment: 'finishing',
    startedOn: new Date('2023-09-06'),
    status: 'completed',
    completedDate: new Date('2023-09-13'),
    salesPerson: 'Julie',
  },
  {
    id: 14,
    jobcardNo: '12358',
    client: 'Test Client 2',
    description: '4 no. chest of drawers',
    cumulativeHrs: 96,
    hoursInProduction: 48,
    currentDepartment: 'carving',
    startedOn: new Date('2023-09-06'),
    status: 'completed',
    salesPerson: 'Vir',
  },
  {
    id: 15,
    jobcardNo: '12359',
    client: 'Test Client x',
    description: '4 no. chest of drawers',
    cumulativeHrs: 120,
    hoursInProduction: 56,
    currentDepartment: 'upholstery',
    startedOn: new Date('2023-09-12'),
    status: 'ongoing',
    salesPerson: 'Eunice',
  },
  {
    id: 16,
    jobcardNo: '12360',
    client: 'Test Client 12',
    description: '4 no. dinning chairs',
    cumulativeHrs: 180,
    hoursInProduction: 68,
    currentDepartment: 'carving',
    startedOn: new Date('2023-09-12'),
    status: 'ongoing',
    salesPerson: 'Donna',
  },
  {
    id: 17,
    jobcardNo: '12361',
    client: 'Test Client 1',
    description: 'Winta bed',
    cumulativeHrs: 210,
    hoursInProduction: 212,
    currentDepartment: 'finishing',
    startedOn: new Date('2023-09-14'),
    status: 'ongoing',
    salesPerson: 'Julie',
  },
  {
    id: 18,
    jobcardNo: '12362',
    client: 'Test Client 4',
    description: 'Tripod Dining Table',
    cumulativeHrs: 180,
    hoursInProduction: 96,
    currentDepartment: 'polishing',
    startedOn: new Date('2023-09-14'),
    status: 'ongoing',
    salesPerson: 'Vir',
  },
  {
    id: 19,
    jobcardNo: '12363',
    client: 'Test Client 4',
    description: 'Lady Console',
    cumulativeHrs: 96,
    hoursInProduction: 12,
    currentDepartment: 'machinery',
    startedOn: new Date('2023-09-14'),
    status: 'ongoing',
    salesPerson: 'Moni',
  },
];

export const formSchema = z.object({
  jobcardNo: z
    .string()
    .nonempty('Field is required')
    .length(5, 'Invalid Job Card No'),
  subject: z.string().nonempty('Field is required'),
  client: z.string().nonempty('Field is required'),
  salesPerson: z.string().nonempty('Field is required'),
  raisedDate: z.date({ required_error: 'Field is required' }),
  yard: z.coerce.number().min(1, 'Cannot be less than 1').optional(),
  value: z.coerce.number().min(0, 'Cannot be less than 1').optional(),
  machinery: z.coerce.number().min(1, 'Cannot be less than 1').optional(),
  joinery: z.coerce.number().min(1, 'Cannot be less than 1').optional(),
  carving: z.coerce.number().min(1, 'Cannot be less than 1').optional(),
  sanding: z.coerce.number().min(1, 'Cannot be less than 1').optional(),
  polishing: z.coerce.number().min(1, 'Cannot be less than 1').optional(),
  upholstery: z.coerce.number().min(1, 'Cannot be less than 1').optional(),
  finishing: z.coerce.number().min(1, 'Cannot be less than 1').optional(),
  cnc: z.coerce.number().min(1, 'Cannot be less than 1').optional(),
});

export const FILTEROPTIONS: Options[] = [
  // { value: 'all', label: 'All' },
  { value: 'ongoing', label: 'Ongoing' },
  { value: 'paused', label: 'Paused' },
  { value: 'completed', label: 'Completed' },
];

export const TASKS: Task[] = [
  {
    id: 1,
    jobcardNo: '12345',
    staff: '9070',
    staffs: ['employee 1'],
    hrsTaken: 24,
    hrsAssigned: 36,
  },
  {
    id: 2,
    jobcardNo: '12346',
    staff: '9070',
    staffs: ['employee 1'],
    hrsTaken: 4,
    hrsAssigned: 44,
  },
  {
    id: 3,
    jobcardNo: '12347',
    staff: '9070',
    staffs: ['employee 1'],
    hrsTaken: 26,
    hrsAssigned: 48,
  },
  {
    id: 4,
    jobcardNo: '12349',
    staff: '9071',
    staffs: ['employee 2', 'employee 3'],
    hrsTaken: 48,
    hrsAssigned: 88,
  },
  {
    id: 5,
    jobcardNo: '12350',
    staff: '9072',
    staffs: ['employee 4'],
    hrsTaken: 48,
    hrsAssigned: 44,
  },
  {
    id: 6,
    jobcardNo: '12352',
    staff: '9076',
    staffs: ['employee 1'],
    hrsTaken: 24,
    hrsAssigned: 28,
  },
  {
    id: 7,
    jobcardNo: '12353',
    staff: '9070',
    staffs: ['employee 6', 'employee 7'],
    hrsTaken: 48,
    hrsAssigned: 56,
  },
  {
    id: 8,
    jobcardNo: '12354',
    staff: '9054',
    staffs: ['employee 8'],
    hrsTaken: 33,
    hrsAssigned: 24,
  },
  {
    id: 9,
    jobcardNo: '12355',
    staff: '9070',
    staffs: ['employee 1'],
    hrsTaken: 33,
    hrsAssigned: 24,
  },
  {
    id: 10,
    jobcardNo: '12356',
    staff: '9067',
    staffs: ['employee 3'],
    hrsTaken: 2,
    hrsAssigned: 48,
  },
  {
    id: 11,
    jobcardNo: '12357',
    staff: '9070',
    staffs: ['employee 1'],
    hrsTaken: 38,
    hrsAssigned: 36,
  },
  {
    id: 12,
    jobcardNo: '12359',
    staff: '9056',
    staffs: ['employee 6'],
    hrsTaken: 12,
    hrsAssigned: 48,
  },
  {
    id: 13,
    jobcardNo: '12360',
    staff: '9057',
    staffs: ['employee 11'],
    hrsTaken: 36,
    hrsAssigned: 44,
  },
  {
    id: 14,
    jobcardNo: '12361',
    staff: '9057',
    staffs: ['employee 13', 'employee 2'],
    hrsTaken: 26,
    hrsAssigned: 24,
  },
  {
    id: 15,
    jobcardNo: '12362',
    staff: '9057',
    staffs: ['employee 9'],
    hrsTaken: 12,
    hrsAssigned: 36,
  },
  {
    id: 16,
    jobcardNo: '12363',
    staff: '9056',
    staffs: ['employee 10'],
    hrsTaken: 36,
    hrsAssigned: 44,
  },
];
