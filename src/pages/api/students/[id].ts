import { NextApiRequest, NextApiResponse } from "next";
import { delay } from ".";

export const students: Array<Student> = [
  {
    name: "Bob Smith",
    dob: "1999-11-03",
    registrationNumber: "S002",
    major: "Electrical Engineering",
    gpa: 3.5,
  },
  {
    name: "Catherine Bell",
    dob: "2001-02-24",
    registrationNumber: "S003",
    major: "Mathematics",
    gpa: 3.91,
  },
  {
    name: "Eve White",
    dob: "1999-06-30",
    registrationNumber: "S005",
    major: "Business Administration",
    gpa: 3.45,
  },
  {
    name: "Frank Thomas",
    dob: "2001-01-15",
    registrationNumber: "S006",
    major: "Mechanical Engineering",
    gpa: 3.8,
  },
  {
    name: "Grace Lee",
    dob: "2000-07-19",
    registrationNumber: "S007",
    major: "Computer Science",
    gpa: 3.9,
  },
  {
    name: "Henry Adams",
    dob: "1998-09-05",
    registrationNumber: "S008",
    major: "Civil Engineering",
    gpa: 3.3,
  },
  {
    name: "Isabella Martin",
    dob: "2000-03-14",
    registrationNumber: "S009",
    major: "Physics",
    gpa: 3.6,
  },
  {
    name: "Jack Davis",
    dob: "1999-12-20",
    registrationNumber: "S010",
    major: "Economics",
    gpa: 3.5,
  },
  {
    name: "Karen Lopez",
    dob: "2001-04-28",
    registrationNumber: "S011",
    major: "English Literature",
    gpa: 3.7,
  },
  {
    name: "Liam Taylor",
    dob: "2000-10-22",
    registrationNumber: "S012",
    major: "Computer Engineering",
    gpa: 3.8,
  },
  {
    name: "Mia Hernandez",
    dob: "2000-12-02",
    registrationNumber: "S013",
    major: "Chemistry",
    gpa: 3.4,
  },
  {
    name: "Noah Wilson",
    dob: "1999-01-10",
    registrationNumber: "S014",
    major: "History",
    gpa: 3.2,
  },
  {
    name: "Olivia Clark",
    dob: "2000-07-09",
    registrationNumber: "S015",
    major: "Sociology",
    gpa: 3.6,
  },
  {
    name: "Paul Walker",
    dob: "1998-11-25",
    registrationNumber: "S016",
    major: "Psychology",
    gpa: 3.9,
  },
  {
    name: "Quinn Scott",
    dob: "2001-02-13",
    registrationNumber: "S017",
    major: "Political Science",
    gpa: 3.5,
  },
  {
    name: "Rachel Evans",
    dob: "1999-05-20",
    registrationNumber: "S018",
    major: "Philosophy",
    gpa: 3.3,
  },
  {
    name: "Sam Carter",
    dob: "2000-09-27",
    registrationNumber: "S019",
    major: "Biochemistry",
    gpa: 3.7,
  },
  {
    name: "Tina Allen",
    dob: "1998-03-11",
    registrationNumber: "S020",
    major: "Marketing",
    gpa: 3.4,
  },
  {
    name: "Umar Brooks",
    dob: "1999-08-18",
    registrationNumber: "S021",
    major: "International Relations",
    gpa: 3.6,
  },
  {
    name: "Victoria Garcia",
    dob: "2001-06-29",
    registrationNumber: "S022",
    major: "Art History",
    gpa: 3.8,
  },
  {
    name: "William Foster",
    dob: "1999-10-16",
    registrationNumber: "S023",
    major: "Finance",
    gpa: 3.5,
  },
  {
    name: "Xander Bennett",
    dob: "2000-01-06",
    registrationNumber: "S024",
    major: "Environmental Science",
    gpa: 3.7,
  },
  {
    name: "Yara Mitchell",
    dob: "1998-04-23",
    registrationNumber: "S025",
    major: "Anthropology",
    gpa: 3.4,
  },
  {
    name: "Zoe Edwards",
    dob: "2001-08-31",
    registrationNumber: "S026",
    major: "Geography",
    gpa: 3.5,
  },
  {
    name: "Alex Parker",
    dob: "2000-12-21",
    registrationNumber: "S027",
    major: "Journalism",
    gpa: 3.6,
  },
  {
    name: "Brittany Young",
    dob: "1999-02-02",
    registrationNumber: "S028",
    major: "Nursing",
    gpa: 3.9,
  },
  {
    name: "Chris Rivera",
    dob: "1999-03-27",
    registrationNumber: "S029",
    major: "Music",
    gpa: 3.3,
  },
  {
    name: "Diana Moore",
    dob: "2001-10-12",
    registrationNumber: "S030",
    major: "Theater",
    gpa: 3.4,
  },
  {
    name: "Test Name",
    dob: "2024-09-27",
    registrationNumber: "01242",
    major: "Physics",
    gpa: 3.4,
  },
  {
    name: "OD Test Loan",
    dob: "2024-09-20",
    registrationNumber: "S0053423",
    major: "Arts and Science",
    gpa: 0.23,
  },
];
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await delay(2000);
  const { id } = req.query;

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

    return res.status(200).json(students[studentIndex]);
  }

  if (req.method === "DELETE") {
    students.splice(studentIndex, 1);

    return res.status(204).end();
  }

  return res.status(405).json({ error: "Method not allowed" });
}
