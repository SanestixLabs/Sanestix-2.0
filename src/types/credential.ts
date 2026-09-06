export interface Credential {
  id: string;
  internName: string;
  role: string;
  department: string;
  programName: string;
  startDate: string;
  endDate: string;
  issueDate: string;
  status: 'Active' | 'Completed' | 'Revoked';
  verificationCount: number;
}
