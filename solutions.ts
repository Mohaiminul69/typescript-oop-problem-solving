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
