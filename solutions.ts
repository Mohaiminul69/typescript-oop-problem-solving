const multiplyValue = (value: number, multiplier: number = 2): number =>
  value * multiplier;

type processInputType = (input: string | number | boolean) => string | number;

const processInput: processInputType = (input) => {
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
