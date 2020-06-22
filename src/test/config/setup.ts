import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

// The following are shims for jsdom to emulate browser functionality

// Define document.domain
Object.defineProperty(document, 'domain', {
  value: 'http://amigosdobrazil.test',
});

// Fail in tests on console calls
const failOnConsole = (functionName: string, fn: any) => {
  (console as any)[functionName] = (...args: any[]) => {
    fn.apply(console, args);
    const message = args[0];
    throw message instanceof Error ? message : new Error(message);
  };
};

/* eslint-disable */
failOnConsole('log', console.log);
failOnConsole('error', console.error);
/* eslint-ensable */

// Fail in tests unhandled promise rejection
process.on('unhandledRejection', reason => {
  throw new Error(`unhandledRejection: ${reason}`);
});
