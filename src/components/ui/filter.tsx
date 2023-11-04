import { useSearchParams } from 'react-router-dom';
import { Button } from './button';

type Options = {
  label: string;
  value: string;
};

type FilterProps = {
  filterKey: string;
  options: Options[];
};

export default function Filter({ options, filterKey }: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTab = searchParams.get(filterKey) || options.at(0)?.value;

  function handleClick(value: string) {
    searchParams.set(filterKey, value);
    if (searchParams.get('page')) searchParams.set('page', '1');
    setSearchParams(searchParams);
  }
  return (
    <div className="p-1 border rounded flex gap-1 items-center">
      {options.map(option => (
        <Button
          key={option.value}
          variant={selectedTab === option.value ? 'secondary' : 'ghost'}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
