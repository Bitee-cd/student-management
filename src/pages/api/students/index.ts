import { NextApiRequest, NextApiResponse } from "next";
import { students } from "./[id]";

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await delay(2000);
  if (req.method === "GET") {
    const { search = "", page = 1, pageSize = 5 } = req.query;

    const pageNumber = parseInt(page as string) || 1;
    const pageSizeNumber = parseInt(pageSize as string) || 5;

    // Search logic: filter students by name or registration number
    const filteredStudents = students.filter(
      (student: Student) =>
        student.name.toLowerCase().includes((search as string).toLowerCase()) ||
        student.registrationNumber
          .toLowerCase()
          .includes((search as string).toLowerCase()) ||
        student.gpa.toString().includes(search as string)
    );

    const totalCount = filteredStudents.length;
    const paginatedStudents = filteredStudents.slice(
      (pageNumber - 1) * pageSizeNumber,
      pageNumber * pageSizeNumber
    );

    return res.status(200).json({
      data: paginatedStudents,
      totalCount,
      page: pageNumber,
      pageSize: pageSizeNumber,
    });
  }

  if (req.method === "POST") {
    const { name, dob, registrationNumber, major, gpa } = req.body;

    if (
      !name ||
      !dob ||
      !registrationNumber ||
      !major ||
      typeof gpa !== "number"
    ) {
      return res.status(400).json({ error: "Invalid data" });
    }

    const studentExists = students.find(
      (student: Student) => student.registrationNumber === registrationNumber
    );

    if (studentExists) {
      return res.status(400).json({
        error: "Student with this registration number already exists",
      });
    }

    const newStudent = { name, dob, registrationNumber, major, gpa };
    students.push(newStudent);

    return res.status(201).json(newStudent);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
