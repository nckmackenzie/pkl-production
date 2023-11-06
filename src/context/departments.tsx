import { getToken, url } from '@/lib/utils';
import { DepartmentResponse } from '@/services';
import { createContext, useEffect, useState, useContext } from 'react';

interface DepartmentContextProps {
  departments: DepartmentResponse[] | [];
}

const DepartmentContext = createContext<DepartmentContextProps>({
  departments: [],
});

export function DepartmentsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [departments, setDepartments] = useState<DepartmentResponse[] | []>([]);

  useEffect(function () {
    fetch(url + '/departments', {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + getToken()?.token },
    })
      .then(res => res.json())
      .then(data => setDepartments(data.data));
  }, []);

  return (
    <DepartmentContext.Provider value={{ departments }}>
      {children}
    </DepartmentContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDepartments() {
  const context = useContext(DepartmentContext);
  if (context === undefined)
    throw new Error('DepartmentsContext used outside Context');
  return context;
}
