import {Subjects} from "@/types";

export const MOCK_SUBJECTS: Subjects[] = [
    {
        id: 1,
        code: "CSC301",
        name: "Data Structures and Algorithms",
        department: "Computer Science",
        description:
            "Covers arrays, linked lists, trees, graphs, sorting and searching, with an emphasis on analyzing time and space complexity.",
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        code: "MATH310",
        name: "Web Application Development",
        department: "Software Engineering",
        description:
            "Introduces modern frontend and backend development, including component-based UIs, REST APIs, and database integration.",
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        code: "ENG205",
        name: "Visual Communication and Branding",
        department: "Graphic Design",
        description:
            "Explores typography, color theory, and layout principles to build cohesive brand identities across print and digital media.",
        createdAt: new Date().toISOString()
    },
];