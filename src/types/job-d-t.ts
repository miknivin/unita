export interface JobPost {
  _id: string;
  company: {
    _id: string;
    name: string;
    website?: string;
  };
  jobTitle: string;
  jobLocation: string;
  salaryRange?: {
    min?: number;
    max?: number;
  };
  jobDescription: string;
  keyResponsibilities: string[];
  requiredSkillsAndQualifications: string[];
  benefits?: string[];
  status: "Open" | "Closed";
  applicationDeadline: string;
  createdAt: string;
  updatedAt: string;
}
