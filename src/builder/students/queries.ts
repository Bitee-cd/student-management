import { useQuery } from "@tanstack/react-query";

import { students_requests_builder } from "./requests";

export function useGetAllStudents({ search, page, pageSize }: QueryParams) {
  return useQuery({
    queryKey: students_requests_builder.get_all.get({
      page,
      pageSize,
      search,
    }),
    queryFn: () =>
      students_requests_builder.use().get_all({ page, pageSize, search }),
  });
}

export function useGetSingleStudent(student_id: string) {
  return useQuery({
    queryKey: students_requests_builder.get_single_student.get(student_id),
    queryFn: () =>
      students_requests_builder.use().get_single_student(student_id),
    enabled: !!student_id,
  });
}
