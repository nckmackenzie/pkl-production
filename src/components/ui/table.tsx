import { cn } from '@/lib/utils';
import { createContext, useContext } from 'react';

type TableProviderState = {
  columns: string;
};

interface RowProps {
  children: React.ReactNode;
  clickable?: boolean;
  onClick?: () => void;
}

const initialState: TableProviderState = {
  columns: '',
};

const TableContext = createContext<TableProviderState>(initialState);

type TableProps = {
  columns: string;
  children: React.ReactNode;
};

function Table({ columns, children }: TableProps) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div role="table" className="border rounded overflow-hidden text-sm">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  const { columns } = useContext(TableContext);
  return (
    <header
      role="row"
      className={cn(
        'py-4 px-6 bg-secondary border-b uppercase font-semibold tracking-wide text-primary grid items-center transition-none gap-x-6',
        ''
      )}
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </header>
  );
}

function Row({ children, clickable, onClick }: RowProps) {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      onClick={onClick}
      className={cn(
        'grid gap-x-6 transition-none items-center py-3 px-6 border-b last:border-b-0',
        clickable && 'cursor-pointer transition-colors hover:bg-secondary'
      )}
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

type BodyProps<T> = {
  data: T[];
  render: (item: T) => React.ReactNode;
};

function Body<T>({ data, render }: BodyProps<T>) {
  if (!data.length)
    return (
      <div className="text-base font-medium text-center m-6">
        No data to show at the moment
      </div>
    );

  return <section className="my-2">{data.map(render)}</section>;
}

function Footer({ children }: { children: React.ReactNode }) {
  return (
    <footer className="flex bg-secondary justify-center p-3 empty:hidden">
      {children}
    </footer>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
