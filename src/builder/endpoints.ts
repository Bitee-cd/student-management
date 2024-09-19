export const ENDPOINTS = Object.freeze({
  students: {
    base: () => "/students",
    single_student: (id: string) => `/students/${id}` as const,
  },
});

export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL ?? "/api";
export const API_URL =
  process.env.NEXT_PUBLIC_BACKEND_BASE_URL ?? "http://localhost:3000/api";
