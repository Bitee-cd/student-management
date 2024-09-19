import { useMutation, useQueryClient } from "@tanstack/react-query";

import { students_requests_builder } from "./requests";

export function useCreateStudent() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: students_requests_builder.use().create_student,
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: students_requests_builder.get_all.get(),
      });
    },
  });
}
export function useEditStudent() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: students_requests_builder.use().edit_student,
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: students_requests_builder.get_all.get(),
      });
    },
  });
}
export function useDeleteStudent() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: students_requests_builder.use().delete_student,
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: students_requests_builder.get_all.get(),
      });
    },
  });
}
