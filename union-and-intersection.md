# Example of Combining Union and Intersection Types in TypeScript

## Union Types

A union is useful when a type can have different values.

```ts
type PaymentMethod = "card" | "mobile" | "cash";

let method: PaymentMethod = "card";

method = "crypto"; // Error: not part of the union
```

## Intersection Types

An intersection merges several types into one. The final object must have every property from each type.

```ts
type HasId = { id: number };
type HasTimestamps = { createdAt: Date; updatedAt: Date };

type BaseRecord = HasId & HasTimestamps;
```

## Using Both Together

Imagine a payment system where every payment shares some common fields, but card and mobile banking payments need different details.

```ts
type CardPayment = { method: "card"; cardNumber: string };
type MobilePayment = { method: "mobile"; phone: string };

type Payment = BaseRecord & { amount: number } & (CardPayment | MobilePayment);
```

The intersection makes sure every payment has an `id`, timestamps and an `amount`. The union lets each payment be either card or mobile. The brackets around the union are important, because `&` is applied before `|`. Without them, TypeScript would allow a mobile payment with no `id`, timestamps or `amount`.
