
// 'use client';

// import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
// import { Farmer } from '../types';

// interface CheckoutProps {
//   farmer: Farmer;
//   totalAmount: number;
// }

// export default function CheckoutButton({ farmer, totalAmount }: CheckoutProps) {
//   // Generate unique transaction reference
//   const generateReference = () => {
//     return `FM_${farmer.tempId}_${Date.now()}`;
//   };

//   const config = {
//     public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY!, 
//     tx_ref: generateReference(),
//     amount: totalAmount,
//     currency: 'NGN', 
//     payment_options: 'card,mobilemoney,ussd',
//     customer: {
//       email: 'farmer@example.com',
//       name: farmer.name,
//       phone_number: farmer.phone, 
//     },
//     customizations: {
//       title: 'Farm Mechanization Services',
//       description: `Payment for services rendered to ${farmer.name}`,
//       logo: 'https://jsfmc.org.ng/logo.png',
//     },
//   };

//   const handleFlutterPayment = useFlutterwave(config);

//   const handlePayment = () => {
//     handleFlutterPayment({
//       callback: (response) => {
//         console.log('Payment Response:', response);
        
//         // Handle successful payment
//         if (response.status === 'completed') {
//           // redirect to success page or update UI
//           alert('Payment Successful! Reference: ' + response.transaction_id);
          
//         }
        
//         closePaymentModal();
//       },
//       onClose: () => {
//         // Handle when modal is closed
//         console.log('Payment modal closed');
//       },
//     });
//   };

//   return (
//     <button
//       onClick={handlePayment}
//       className="ml-3 inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//       disabled={totalAmount <= 0}
//     >
//       Pay ₦{totalAmount.toLocaleString()} 
//     </button>
//   );
// }

// components/FlutterwaveCheckout.tsx
'use client';

import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { Farmer } from '../types';

interface CheckoutProps {
  farmer: Farmer;
  totalAmount: number;
}

export default function Checkout({ farmer, totalAmount }: CheckoutProps) {
  const generateReference = () => {
    return `FM_${farmer.tempId}_${Date.now()}`;
  };

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY!,
    tx_ref: generateReference(),
    amount: totalAmount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      phone: farmer.phone_number,
      name: farmer.name,
      email: farmer.email
    },
    customizations: {
      title: 'Farm Mechanization Services',
      description: `Payment for services rendered to ${farmer.name}`,
      logo: 'https://your-company-logo.com/logo.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handlePayment = () => {
    handleFlutterPayment({
      callback: (response) => {
        console.log('Payment Response:', response);
        if (response.status === 'completed') {
          alert('Payment Successful! Reference: ' + response.transaction_id);
        }
        closePaymentModal();
      },
      onClose: () => {
        console.log('Payment modal closed');
      },
    });
  };

  return (
    <button
      onClick={handlePayment}
      className="ml-3 inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      disabled={totalAmount <= 0}
    >
      Pay ₦{totalAmount.toLocaleString()} with Flutterwave
    </button>
  );
}