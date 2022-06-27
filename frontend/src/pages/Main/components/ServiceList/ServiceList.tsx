import { IServiceListProps } from 'interfaces';
import { Service, AddNewService } from '../index';

export function ServiceList({ data }: IServiceListProps) {
  return (
    <div>
      <AddNewService />
      {data.map((service, index) => (
        <Service
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          {...service}
        />
      ))}
    </div>
  );
}
