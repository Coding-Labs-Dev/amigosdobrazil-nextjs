import { IconType } from 'react-icons';

export interface Props {
  name: string;
  type?: 'text' | 'number' | 'select' | 'hidden';
  value?: string;
  options?: {
    value?: string;
    options: Array<{ value: string; label: string }>;
    label: string;
  }[];
  defaultValue?: { value: string; label: string };
  label: string;
  placeholder: string;
  required?: boolean;
  size?: {
    xs?: number;
    md?: number;
    lg?: number;
  };
  onFocus?: function;
  maxLength?: number;
  disabled?: boolean;
}

export interface ContainerProps {
  error?: boolean;
}

export interface Address {
  address: string;
  complement: string;
  number: string;
  neigh: string;
  city: string;
  district: string;
  zip: string;
}

export interface CreditCardFormData {
  cardHolder: string;
  expDate: string;
  creditCardNumber: string;
  cvv: string;
  brand: string;
  installments: {
    installment: {
      quantity: number;
      installmentAmount: number;
      totalAmount: number;
      interestFree: boolean;
    }
    value: string;
    label: string;
  };
}

export interface CheckoutFormData {
  name: string;
  cpf: string;
  rg: string;
  dob: string;
  nationality: string;
  maritalstatus: string;
  profession: string;
  email: string;
  phone: string;
  mobile: string;
  tos: boolean;
  address: {
    residential: {
      address: string;
      complement: string;
      number: string;
      neigh: string;
      city: string;
      district: string;
      zip: string;
    };
    commercial: {
      address: string;
      complement: string;
      number: string;
      neigh: string;
      city: string;
      district: string;
      zip: string;
    };
  };
}

export interface CheckoutData {
  name: string;
  cpf: string;
  rg: string;
  dob: sring;
  nationality: string;
  maritalstatus: string;
  preofession: string;
  email: SVGAnimatedString;
  phone: string;
  mobile: string;
  tos: boolean;
  payment: {
    creditCard: {
      cardHolder: string;
      expDate: string;
      creditCardNumber: string;
      cvv: string;
    };
    installment: {
      quantity: number;
      value: string;
    };
  };
  address: {
    residential: Address;
    comercial: Address;
  };
}

export interface ParsedCheckoutData {
  payment: {
    mode: 'default';
    currency: 'BRL';
    reference?: string;
    method: 'creditCard';
    creditCard: {
      token: string;
      installment: {
        quantity: number;
        value: string;
        noInterestInstallmentQuantity: number;
      };
      holder: {
        name: string;
        documents: {
          document: {
            type: 'CPF' | 'CNPJ';
            value: string;
            birthDate: string;
          };
        };
        phone: {
          areaCode: string;
          number: string;
        };
      };
    };
    billingAddress: {
      street: string;
      number: string;
      district: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
      complement: string;
    };
    receiver: {
      email: string;
    };
    sender: {
      hash: string;
      name: string;
      email: string;
      phone: {
        areaCode: string;
        number: string;
      };
      documents: {
        document: {
          type: 'CPF' | 'CNPJ';
          value: string;
        };
      };
    };
    items: {
      item: {
        id: string;
        description: string;
        quantity: number;
        amount: string;
      };
    }[];
    shipping: {
      addressRequired: boolean;
      address?: {
        street: string;
        number: number;
        complement: string;
        district: string;
        city: string;
        state: string;
        country: 'BRL';
        postalCode: string;
      };
      type?: 1 | 2 | 3;
      cost?: string;
    };
    extraAmount?: string;
    notificationURL?: string;
  };
}
