export type Alert = {
  id: string;
  userId: string;
  clientId: string;
  emergencyType: number;
  description: string;
  isResolved: boolean;
  isActive: boolean;
  timeStamp: string;
};
