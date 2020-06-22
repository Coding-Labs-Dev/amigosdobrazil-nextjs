import * as yup from 'yup';

import {
  Props,
  CheckoutData,
  ParsedCheckoutData,
} from '~/components/CheckoutInput/CheckoutInput';

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(6, 'Digite seu nome completo')
    .required('Digite o seu nome'),
  cpf: yup.string().required('Digite o seu CPF'),
  rg: yup.string().required('Digite o seu RG'),
  dob: yup.string().required('Digite a sua Data de Nascimento'),
  nationality: yup
    .string()
    .min(3, 'Digite a sua Nacionalidade')
    .required('Digite a sua Nacionalidade'),
  maritalstatus: yup.string(),
  profession: yup.string(),
  email: yup
    .string()
    .email('E-mail inválido')
    .required('Digite o seu e-mail'),
  phone: yup.string(),
  mobile: yup.string().required('Digite o seu celular'),
  address_residential_address: yup
    .string()
    .min(5, 'Digite o seu endereço completo')
    .max(100, 'Digite até 100 caractéres')
    .required('Digite o seu endereço'),
  address_residential_complement: yup
    .string()
    .min(5, 'Digite o complemento')
    .max(100, 'Digite até 100 caractéres')
    .required('Digite o complemento'),
  address_residential_number: yup
    .number()
    .min(0)
    .max(99999, 'Valor acima do permitido')
    .required('Digite o número'),
  address_residential_neigh: yup
    .string()
    .min(3, 'Digite o bairro')
    .max(100, 'Digite até 100 caractéres')
    .required('Digite o bairro'),
  address_residential_city: yup
    .string()
    .min(5, 'Digite a cidade')
    .max(100, 'Digite até 100 caractéres')
    .required('Digite a cidade'),
  address_residential_district: yup
    .string()
    .min(2, 'Digite o estado')
    .max(100, 'Digite até 100 caractéres')
    .required('Digite o estado'),
  address_residential_zip: yup
    .string()
    .min(9, 'CEP inválido')
    .max(9, 'CEP inválido')
    .required('Digite o CEP'),
  address_commercial_address: yup.string(),
  address_commercial_complement: yup.string(),
  address_commercial_number: yup.string(),
  address_commercial_neigh: yup.string(),
  address_commercial_city: yup.string(),
  address_commercial_district: yup.string(),
  address_commercial_zip: yup.string(),
});

export const creditCardSchema = yup.object().shape({
  cardHolder: yup
    .string()
    .min(6, 'Digite o nome como no cartão')
    .required('Este campo é obrigtório'),
  expDate: yup
    .string()
    .length(5, 'Data inválida')
    .required('Este campo é obrigtório'),
  creditCardNumber: yup
    .string()
    .required('Este campo é obrigtório'),
  cvv: yup
    .string()
    .required('Este campo é obrigtório'),
});

export const personalData: Props[] = [
  {
    label: 'Nome como no passaporte',
    placeholder: 'Digite seu nome',
    name: 'name',
    required: true,
    size: {
      lg: 6,
    },
  },
  {
    label: 'CPF',
    placeholder: 'Digite o seu CPF',
    name: 'cpf',
    required: true,
    type: 'number',
    size: {
      md: 6,
      lg: 3,
    },
  },
  {
    label: 'RG',
    placeholder: 'Digite o seu RG',
    name: 'rg',
    required: true,
    size: {
      md: 6,
      lg: 3,
    },
  },
  {
    label: 'Data de Nascimento',
    placeholder: 'DD/MM/AAAA',
    name: 'dob',
    required: true,
    size: {
      md: 6,
      lg: 3,
    },
  },
  {
    label: 'Nacionalidade',
    placeholder: 'Digite a sua nacionalidade',
    name: 'nationality',
    required: true,
    size: {
      md: 6,
      lg: 3,
    },
  },
  {
    label: 'Estado Civil',
    placeholder: 'Digite seu estado civil',
    name: 'maritalstatus',
    size: {
      md: 6,
      lg: 3,
    },
  },
  {
    label: 'Profissão',
    placeholder: 'Digite a sua profissão',
    name: 'profession',
    size: {
      md: 6,
      lg: 3,
    },
  },
  {
    label: 'E-mail',
    placeholder: 'Digite o seu e-mail',
    name: 'email',
    required: true,
    size: {
      md: 6,
    },
  },
  {
    label: 'Telefone Fixo',
    placeholder: '(00) 0000-0000',
    name: 'phone',
    type: 'number',
    size: {
      md: 3,
    },
  },
  {
    label: 'Telefone Celular',
    placeholder: '(00) 00000-0000',
    name: 'mobile',
    type: 'number',
    required: true,
    size: {
      md: 3,
    },
  },
];

export const residentialAddress: Props[] = [
  {
    label: 'Endereço Residencial',
    placeholder: 'Digite o seu endereço',
    name: 'address_residential_address',
    required: true,
    size: {
      md: 8,
      lg: 6,
    },
  },
  {
    label: 'Complemento',
    placeholder: 'Casa, apartamento, etc',
    name: 'address_residential_complement',
    required: true,
    size: {
      md: 4,
      lg: 4,
    },
  },
  {
    label: 'Número',
    placeholder: 'Número da casa, apartamento, etc',
    name: 'address_residential_number',
    required: true,
    type: 'number',
    size: {
      md: 3,
      lg: 2,
    },
  },
  {
    label: 'Bairro',
    placeholder: 'Digite o bairro',
    name: 'address_residential_neigh',
    required: true,
    size: {
      md: 4,
      lg: 3,
    },
  },
  {
    label: 'Cidade',
    placeholder: 'Digite a cidade',
    name: 'address_residential_city',
    required: true,
    size: {
      md: 5,
      lg: 3,
    },
  },
  {
    label: 'Estado',
    placeholder: 'Digite o estado',
    name: 'address_residential_district',
    required: true,
    size: {
      md: 4,
      lg: 2,
    },
  },
  {
    label: 'CEP',
    placeholder: 'Digite o CEP',
    name: 'address_residential_zip',
    required: true,
    type: 'number',
    size: {
      md: 4,
      lg: 2,
    },
  },
];

export const commercialAddress: Props[] = [
  {
    label: 'Endereço Comercial',
    placeholder: 'Digite o seu endereço',
    name: 'address_commercial_address',
    size: {
      md: 8,
      lg: 6,
    },
  },
  {
    label: 'Complemento',
    placeholder: 'Casa, apartamento, etc',
    name: 'address_commercial_complement',
    size: {
      md: 4,
      lg: 4,
    },
  },
  {
    label: 'Número',
    placeholder: 'Número da casa, apartamento, etc',
    name: 'address_commercial_number',
    type: 'number',
    size: {
      md: 3,
      lg: 2,
    },
  },
  {
    label: 'Bairro',
    placeholder: 'Digite o bairro',
    name: 'address_commercial_neigh',
    size: {
      md: 4,
      lg: 3,
    },
  },
  {
    label: 'Cidade',
    placeholder: 'Digite a cidade',
    name: 'address_commercial_city',
    size: {
      md: 5,
      lg: 3,
    },
  },
  {
    label: 'Estado',
    placeholder: 'Digite o estado',
    name: 'address_commercial_district',
    size: {
      md: 4,
      lg: 2,
    },
  },
  {
    label: 'CEP',
    placeholder: 'Digite o CEP',
    name: 'address_commercial_zip',
    type: 'number',
    size: {
      md: 4,
      lg: 2,
    },
  },
];

// export const ParseCheckoutFields = async (
//   checkoutData: CheckoutData
// ): ParsedCheckoutData => {
//   const creditCardToken = '';
//   const creditCard = {
//     token: creditCardToken,
//     installment: {
//       quantity:
//     }
//   };
//   const sender = {
//     hash: '',
//     name: checkoutData.name,
//     email: checkoutData.email,
//     phone: {
//       areaCode: checkoutData.mobile.substr(0, 2),
//       phone: checkoutData.mobile.substr(2),
//     },
//     documents: {
//       document: {
//         type: 'CPF',
//         value: checkoutData.cpf,
//       },
//     },
//   };

//   return {
//     reference: 'AMIGOS-DO-BRAZIL',

//     sender,
//     shipping: {
//       addressRequired: false,
//     }
//   }
// };
