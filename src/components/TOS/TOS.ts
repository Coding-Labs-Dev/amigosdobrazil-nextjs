export interface Props {
  template: string;
  data: {
    name: string;
    cpf: string;
    address_residential_address: string;
    address_residential_complement: string;
    address_residential_number: number;
    address_residential_neigh: string;
    address_residential_city: string;
    address_residential_district: string;
    address_residential_zip: string;
    title: string;
    departure: Date;
  };
}
