export interface JobProps {
  id: number;
  createdAt: string;
  numberOfPositions: number;
  companyName: string;
  title: string;
  area: string;
  description: string;
  skills: string;
  slug: string;
  totalHires: number;
  flagCode: string;
  location: string;
  relocate: string;
  salaryFrom: number;
  salaryTo: number;
  currency: string;
  jobType: string;
  canApply: boolean;
}
