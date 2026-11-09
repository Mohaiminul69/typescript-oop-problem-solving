const multiplyValue = (value: number, multiplier: number = 2): number =>
  value * multiplier;

type InputValue = string | number | boolean;
type ProcessedValue = string | number;

const processInput = (input: InputValue): ProcessedValue => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }

  if (typeof input === "number") {
    return input * 10;
  }

  return input ? "Active" : "Inactive";
};

type Coordinate = readonly [number, number, string];

const formatCoordinate = (coordinate: Coordinate): string => {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const combined: T[] = [];

  for (const array of arrays) {
    combined.push(...array);
  }

  return combined;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] =>
  courses.filter(
    (course: Course): boolean =>
      course.isPublished && course.students >= minStudents,
  );

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] =>
  items.map((item: T): T[K] => item[key]);

class Employee {
  protected name: string;
  private baseSalary: number;
  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = (age: number): Promise<string> =>
  new Promise<string>((resolve, reject): void => {
    if (age >= 18) {
      setTimeout((): void => resolve("Access Granted"), 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
