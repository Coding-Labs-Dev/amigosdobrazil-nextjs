/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
export interface GetPaymentMethods {
  error: boolean | object;
  paymentMethods: object;
}

export interface PaymentMethodData {
  name: string;
  displayName: string;
  status: string;
  code: number;
  images: {
    SMALL?: {
      size: 'small',
      path: string;
    },
    MEDIUM?: {
      size: 'medium',
      path: string;
    },
  }
}

export interface PaymentMethodBoleto {
  name: 'BOLETO';
  options: {
    BOLETO: PaymentMethodData;
  }
}

export interface Installment {
  quantity: number;
  installmentAmount: number;
  totalAmount: number;
  interestFree: boolean;
}

class PagSeguroClient {
  readonly _production: boolean;

  readonly _url: string;

  constructor() {
    this._production = process.env.NODE_ENV === 'production';

    this._url = this._production
      ? 'https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js'
      : 'https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = this._url;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  get isProduction(): boolean {
    return this._production;
  }

  get pagSeguroURL(): string {
    return this._url;
  }

  async createSession(token: string): Promise<void> {
    try {
      await (<any>window).PagSeguroDirectPayment.setSessionId(token);
    } catch (error) {
      console.error(error);
    }
  }

  async getPaymentMethods(amount?: number): Promise<any> {
    return new Promise((resolve, reject) => {
      (<any>window).PagSeguroDirectPayment.getPaymentMethods({
        amount,
        success: (result: any) => resolve(result),
        error: (error: any) => reject(error),
      });
    });
  }

  async getCreditCardBrand(bin: number): Promise<any> {
    return new Promise((resolve, reject) => {
      (<any>window).PagSeguroDirectPayment.getBrand({
        cardBin: bin,
        success: (result: any) => resolve(result),
        error: (error: any) => reject(error),
      });
    });
  }

  async getCreditCardToken({
    cardNumber,
    brand,
    cvv,
    expirationMonth,
    expirationYear,
  }: {
    cardNumber: string;
    brand: string;
    cvv: string;
    expirationMonth: string;
    expirationYear: string;
  }): Promise<any> {
    return new Promise((resolve, reject) => {
      (<any>window).PagSeguroDirectPayment.createCardToken({
        cardNumber,
        brand,
        cvv,
        expirationMonth,
        expirationYear,
        success: (result: any) => resolve(result),
        error: (error: any) => reject(error),
      });
    });
  }

  async getInstallments(amount: number, maxInstallmentNoInterest: number, brand?: string): Promise<void> {
    return new Promise((resolve, reject) => {
      (<any>window).PagSeguroDirectPayment.getInstallments({
        amount,
        maxInstallmentNoInterest,
        brand,
        success: (result: any) => resolve(result),
        error: (error: any) => reject(error),
      });
    });
  }

  async getSenderHash(): Promise<string> {
    return new Promise((resolve, reject) => {
      (<any>window).PagSeguroDirectPayment.onSenderHashReady((response: {
        status: string;
        message: string;
        senderHash: string;
      }) => {
        if (response.status === 'error') reject(response.message);
        resolve(response.senderHash);
      });
    });
  }
}

export default PagSeguroClient;
