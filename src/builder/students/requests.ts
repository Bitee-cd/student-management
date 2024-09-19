import { createBuilder } from "@ibnlanre/portal";
import { ENDPOINTS } from "../endpoints";
import { _axios } from "@/lib/axios";

export const students_requests_builder = createBuilder({
  get_all: (params: Record<string, unknown>) =>
    _axios.get(ENDPOINTS.students.base(), { params }),
  create_student: (payload: Student) =>
    _axios.post(ENDPOINTS.students.base(), payload),
  edit_student: ({
    payload,
    student_id,
  }: {
    payload: Student;
    student_id: string;
  }) => _axios.put(ENDPOINTS.students.single_student(student_id), payload),

  delete_student: ({ student_id }: { student_id: string }) =>
    _axios.delete(ENDPOINTS.students.single_student(student_id)),
  get_single_student: (student_id: string) =>
    _axios.get(ENDPOINTS.students.single_student(student_id)),
});
