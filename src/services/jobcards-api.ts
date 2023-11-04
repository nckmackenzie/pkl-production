import { supabase } from '@/supabase/supabase';

type Hours = {
  carving: number | null;
  cnc: number | null;
  finishing: number | null;
  joinery: number | null;
  machinery: number | null;
  polishing: number | null;
  sanding: number | null;
  upholstery: number | null;
  yard: number | null;
};

type Details = {
  client: string;
  jobcardNo: string;
  raisedDate: string;
  salesPerson: string;
  subject: string;
  value: number | null;
};

type Create = {
  details: Details;
  hours: Hours;
};

export async function createJobcard({ details, hours }: Create) {
  const { data, error } = await supabase
    .from('jobcards')
    .insert([details])
    .select();

  if (error) throw new Error(error.message);

  const { error: hoursError } = await supabase
    .from('jobcard_hours')
    .insert([{ jobCardId: data[0].id, ...hours }]);

  if (hoursError) {
    await supabase.from('jobcards').delete().eq('id', data[0].id);
    throw new Error(hoursError.message);
  }

  return data;
}

export async function getJobCards() {
  const { data, error } = await supabase.rpc('raw-sql', {
    query: 'SELECT * FROM jobcards',
  });

  console.log(data);

  return data;
}
