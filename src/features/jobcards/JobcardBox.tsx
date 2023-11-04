import { useState } from 'react';
import Table from '@/components/ui/table';
import Pagination from '@/components/ui/pagination';
import JobCardStat from './JobCardStat';
import JobCardActions from './JobCardActions';
import { JOBCARDS } from './constants';
import JobCardRow from './JobCardRow';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { getJobCards } from '@/services/jobcards-api';

export default function JobcardBox() {
  const [jobCard, setJobCard] = useState<JobCard | null>();
  const [searchParams] = useSearchParams();
  const { data } = useQuery({ queryFn: getJobCards, queryKey: ['job-cards'] });
  searchParams.get('status') || 'all';
  // const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  // const filtered = JOBCARDS.filter(jobcard => {
  //   if (filteredStatus === 'all') return true;
  //   return jobcard.status === filteredStatus;
  // });

  // const start = (page - 1) * PAGE_SIZE;
  // const end = page * PAGE_SIZE;
  // const paginated = filtered.slice(start, end);

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
          {/* <Table.Body
            data={paginated}
            render={jobcard => (
              <JobCardRow
                key={jobcard.id}
                jobcard={jobcard}
                onJobcardChange={setJobCard}
              />
            )}
          />
          <Table.Footer>
            <Pagination count={filtered.length} />
          </Table.Footer> */}
        </Table>
      </div>
    </div>
  );
}
