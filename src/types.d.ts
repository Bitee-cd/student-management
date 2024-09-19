type Student = {
  name: string;
  dob: Date | string;
  registrationNumber: string;
  major: string;
  gpa: number;
};
type QueryParams = {
  search?: string;
  page: number;
  pageSize: number;
};
type AxiosErrorResponse = {
  error?: string;
};
