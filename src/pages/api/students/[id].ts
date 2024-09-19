import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { delay } from ".";

const studentsFilePath = path.join(process.cwd(), "data", "students.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await delay(2000);
  const { id } = req.query;

  const students = JSON.parse(fs.readFileSync(studentsFilePath, "utf8"));

  const studentIndex = students.findIndex(
    (student: Student) => student.registrationNumber === id
  );

  if (studentIndex === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  if (req.method === "GET") {
    return res.status(200).json(students[studentIndex]);
  }

  if (req.method === "PUT") {
    const { name, dob, major, gpa } = req.body;

    if (!name || !dob || !major || typeof gpa !== "number") {
      return res.status(400).json({ error: "Invalid data" });
    }

    students[studentIndex] = {
      ...students[studentIndex],
      name,
      dob,
      major,
      gpa,
    };

    fs.writeFileSync(studentsFilePath, JSON.stringify(students, null, 2));

    return res.status(200).json(students[studentIndex]);
  }

  if (req.method === "DELETE") {
    students.splice(studentIndex, 1);

    fs.writeFileSync(studentsFilePath, JSON.stringify(students, null, 2));

    return res.status(204).end(); // No content
  }

  return res.status(405).json({ error: "Method not allowed" });
}
