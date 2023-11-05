import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import Table from '@/components/ui/table';
import Pagination from '@/components/ui/pagination';
import JobCardStat from './JobCardStat';
import JobCardActions from './JobCardActions';
import JobCardRow from './JobCardRow';

import { PAGE_SIZE } from '@/lib/utils';
import { getJobCards } from '@/services/jobcards-api';

export default function JobcardBox() {
  const [jobCard, setJobCard] = useState<JobCard | null>();
  const [searchParams] = useSearchParams();
  const { data } = useQuery({ queryFn: getJobCards, queryKey: ['job-cards'] });
  const filteredStatus = searchParams.get('status') || 'ongoing';
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const filtered = data
    ? data.filter(jobcard => jobcard.status === filteredStatus)
    : [];

  const start = (page - 1) * PAGE_SIZE;
  const end = page * PAGE_SIZE;
  const paginated = filtered.slice(start, end);

  return (
    <div className="space-y-4">
      {jobCard ? (
        <JobCardStat jobcard={jobCard} onJobcardChange={setJobCard} />
      ) : (
        <JobCardActions />
      )}
      <div>
        <Table columns="0.5fr 1fr 2fr 1fr 0.5fr">
          <Table.Header>
            <div>Job Card No</div>
            <div>Client</div>
            <div>Description</div>
            <div>Cumulative Hrs</div>
            <div>Status</div>
          </Table.Header>
          <Table.Body
            data={paginated}
            render={jobcard => (
              <JobCardRow key={jobcard.id} jobcard={jobcard} />
            )}
          />
          <Table.Footer>
            <Pagination count={filtered.length} />
          </Table.Footer>
        </Table>
      </div>
    </div>
  );
}
