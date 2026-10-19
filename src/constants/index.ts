// Values must match the `department` field in MOCK_SUBJECTS exactly,
// because the list page applies the selection as an `eq` filter.
export const DEPARTMENTS = [
    "Computer Science",
    "Software Engineering",
    "Graphic Design",
] as const;

export type Department = (typeof DEPARTMENTS)[number];

export const DEPARTMENT_OPTIONS = [
    { value: "all", label: "All departments" },
    ...DEPARTMENTS.map((department) => ({
        value: department,
        label: department,
    })),
];