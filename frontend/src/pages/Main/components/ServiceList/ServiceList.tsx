import { Service } from '../index';
import { IService } from '../Service/ServiceContainer';

export interface IServiceListProps {
  data: IService[];
}

export function ServiceList({ data }: IServiceListProps) {
  return (
    <div>
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
