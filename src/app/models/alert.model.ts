export type Alert = {
  id?: string;
  userId: string;
  clientId?: string;
  emergencyType: string;
  description: string;
  isResolved: boolean;
  isActive: boolean;
  timeStamp: string;
};
