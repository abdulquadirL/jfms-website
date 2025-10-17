// types.ts
export interface ServiceItem {
  id: string;
  serviceType: string; // e.g., "Plowing", "Harvesting"
  amount: number;
}

export interface Farm {
  id: string;
  size: number; // in hectares or acres
  services: ServiceItem[];
}

export interface Farmer {
  id: string;
  tempId: string; // For temporary/session use
  name: string;
  farms: Farm[];
  phone_number: string;
  email: string;
}

// Helper function to calculate total for a farmer
export const calculateTotalDue = (farmer: Farmer): number => {
  return farmer.farms.reduce((farmTotal, farm) => {
    const farmSum = farm.services.reduce((serviceTotal, service) => serviceTotal + service.amount, 0);
    return farmTotal + farmSum;
  }, 0);
};