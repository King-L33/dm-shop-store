/**
 * Paystack loader utility for South African payments
 * This is a singleton to ensure we only load Paystack once.
 */

// Paystack doesn't have a direct SDK like Stripe, but we can create a loader for future use
interface PaystackInstance {
  newTransaction: (options: any) => void;
}

let paystackPromise: Promise<PaystackInstance | null>;

const loadPaystack = (): Promise<PaystackInstance | null> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(null);
      return;
    }

    // Check if Paystack is already loaded
    if ((window as any).PaystackPop) {
      resolve((window as any).PaystackPop);
      return;
    }

    // Load Paystack script
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    script.onload = () => {
      resolve((window as any).PaystackPop || null);
    };
    script.onerror = () => {
      console.error('Failed to load Paystack script');
      resolve(null);
    };

    document.head.appendChild(script);
  });
};

const getPaystack = () => {
  if (!paystackPromise) {
    paystackPromise = loadPaystack();
  }
  return paystackPromise;
};

export default getPaystack;
