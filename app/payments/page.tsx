
// 'use client';

// import { useState } from 'react';
// import { Farmer } from '@/types';
// import Checkout from '@/components/Checkout';

// export default function PaymentPage() {
//   const [tempId, setTempId] = useState('');
//   const [farmer, setFarmer] = useState<Farmer | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSearch = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     try {
//       const response = await fetch(`/api/farmer?tempId=${encodeURIComponent(tempId)}`);
//       if (!response.ok) {
//         if (response.status === 404) {
//           throw new Error('Farmer not found. Please check your Ref Id.');
//         }
//         throw new Error('Failed to fetch farmer data.');
//       }
//       const farmerData: Farmer = await response.json();
//       setFarmer(farmerData);
//     } catch (err: any) {
//       setError(err.message);
//       setFarmer(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const totalDue = farmer ? farmer.farms.reduce((total, farm) => {
//     return total + farm.services.reduce((farmTotal, service) => farmTotal + service.amount, 0);
//   }, 0) : 0;

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center">
//           <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Service Payment Portal
//           </h1>
//           <p className="mt-3 text-xl text-gray-500">
//             Pay for your farm mechanization services
//           </p>
//         </div>

//         {/* Search Form */}
//         <div className="mt-10">
//           <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
//             <div className="flex-grow">
//               <label htmlFor="tempId" className="block text-sm font-medium text-gray-700">Enter your Ref Id</label>
//               <input
//                 type="text"
//                 id="tempId"
//                 value={tempId}
//                 onChange={(e) => setTempId(e.target.value)}
//                 required
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="e.g., TEMP_001"
//               />
//             </div>
//             <div className="flex items-end">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full sm:w-auto inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-gray-500 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
//               >
//                 {loading ? 'Searching...' : 'Search'}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Error Message */}
//         {error && (
//           <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
//             {error}
//           </div>
//         )}

//         {/* Farmer Details and Services */}
//         {farmer && (
//           <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
//             <div className="px-4 py-5 sm:px-6">
//               <h3 className="text-lg leading-6 font-medium text-gray-900">Services Rendered</h3>
//               <p className="mt-1 max-w-2xl text-sm text-gray-500">Details and total amount due for {farmer.name}.</p>
//             </div>
//             <div className="border-t border-gray-200">
//               <dl>
//                 {farmer.farms.map((farm) => (
//                   <div key={farm.id} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                     <dt className="text-sm font-medium text-gray-500">Farm {farm.id} ({farm.size} ha)</dt>
//                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                       <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
//                         {farm.services.map((service) => (
//                           <li key={service.id} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
//                             <div className="w-0 flex-1 flex items-center">
//                               <span className="ml-2 flex-1 w-0 truncate">
//                                 {service.serviceType}
//                               </span>
//                             </div>
//                             <div className="ml-4 flex-shrink-0">
//                               <span className="font-medium text-gray-900">${service.amount}</span>
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     </dd>
//                   </div>
//                 ))}
//                 <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                   <dt className="text-sm font-medium text-gray-500">Total Amount Due</dt>
//                   <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     <span className="text-2xl font-bold">${totalDue}</span>
//                   </dd>
//                 </div>
//               </dl>
//             </div>
//           </div>
//         )}

//         {/* Checkout Button */}
//         {farmer && (
//           <div className="mt-8 flex justify-end">
//             <Checkout farmer={farmer} totalAmount={totalDue} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// app/page.tsx
'use client';

import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import { Farmer } from '@/types';
import Checkout from '@/components/Checkout';

export default function PaymentPage() {
  const [refId, setRefId] = useState('');
  const [farmer, setFarmer] = useState<Farmer | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock API function - replace with real API call
  const fetchFarmerByRefId = async (refId: string): Promise<Farmer> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock data - replace with actual API call
    const mockFarmers: { [key: string]: Farmer } = {
      'FARM001': {
        id: "1",
        tempId: "FARM001",
        phone_number: "123-456-7890",
        name: "Ciroma Adekunle",
        email: "ciromaadekunle@example.com",
        farms: [
          {
            id: "farm_1",
            size: 5.5,
            services: [
              { id: "serv_1", serviceType: "Plowing", amount: 250 },
              { id: "serv_2", serviceType: "Seeding", amount: 150 },
            ],
          },
        ],
      },
      'FARM002': {
        id: "2",
        tempId: "FARM002",
        name: "Mariam Nnamdi",
        phone_number: "987-654-3210",
        email: "mariam.nnamdi@example.com",
        farms: [
          {
            id: "farm_2",
            size: 8,
            services: [
              { id: "serv_3", serviceType: "Harvesting", amount: 400 },
            ],
          },
        ],
      },
    };

    const foundFarmer = mockFarmers[refId];
    if (!foundFarmer) {
      throw new Error('Farmer not found with the provided Ref ID');
    }
    
    return foundFarmer;
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!refId.trim()) return;

    setLoading(true);
    setError('');
    setFarmer(null);

    try {
      const farmerData = await fetchFarmerByRefId(refId);
      setFarmer(farmerData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const totalDue = farmer ? farmer.farms.reduce((total:any, farm:any) => {
    return total + farm.services.reduce((farmTotal:any, service:any) => farmTotal + service.amount, 0);
  }, 0) : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Farm Mechanization Services Payment
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Enter your Ref ID to view and pay for services rendered
          </p>
        </div>

        {/* Search Form */}
        <div className="mt-10 bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Find Your Invoice
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Enter the Ref ID provided to you to retrieve your service details.</p>
            </div>
            <form onSubmit={handleSearch} className="mt-5 sm:flex sm:items-center">
              <div className="w-full sm:max-w-xs">
                <label htmlFor="refId" className="sr-only">
                  Ref ID
                </label>
                <input
                  type="text"
                  name="refId"
                  id="refId"
                  value={refId}
                  onChange={(e) => setRefId(e.target.value.toUpperCase())}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 border"
                  placeholder="Enter your Ref ID (e.g., FARM001)"
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                disabled={loading || !refId.trim()}
                className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Searching...
                  </>
                ) : (
                  'Search'
                )}
              </button>
            </form>

            {/* Error Message */}
            {error && (
              <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Farmer Details and Services */}
        {farmer && (
          <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Service Details for {farmer.name}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Ref ID: {farmer.tempId}
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                {farmer.farms.map((farm:any) => (
                  <div key={farm.id} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Farm ID: {farm.id} | Farm Size: ({farm.size} hectares)
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                        {farm.services.map((service: { id: Key | null | undefined; serviceType: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; amount: { toLocaleString: () => string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }; }) => (
                          <li key={service.id} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                            <div className="w-0 flex-1 flex items-center">
                              <span className="ml-2 flex-1 w-0 truncate font-medium">
                                {service.serviceType}
                              </span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <span className="font-medium text-gray-900">
                                ₦{service.amount.toLocaleString()}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Total Amount Due
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="text-2xl font-bold text-green-600">
                      ₦{totalDue.toLocaleString()}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        )}

        {/* Checkout Button */}
        {farmer && (
          <div className="mt-8 flex justify-end">
            <Checkout farmer={farmer} totalAmount={totalDue} />
          </div>
        )}
      </div>
    </div>
  );
}