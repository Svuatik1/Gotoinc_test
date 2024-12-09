interface Data {
  name: string;
  age: number;
  city: string;
  country: string;
}

const data: Data[] = [
  { name: "Alice", age: 25, city: "New York", country: "USA" },
  { name: "Bob", age: 30, city: "Los Angeles", country: "USA" },
  { name: "Charlie", age: 25, city: "London", country: "UK" },
  { name: "David", age: 35, city: "New York", country: "USA" },
  { name: "Eve", age: 35, city: "Paris", country: "France" },
];

function groupBy(data: Data[], property: string | Function | string[]) {
  switch (typeof property) {
    case "string":
      return data.reduce((result, item) => {
        const groupKey = item[property];
        result[groupKey] = (result[groupKey] || []).concat(item);
        return result;
      }, {});

    case "object":
      if (!Array.isArray(property)) {
        console.error("Invalid property: must be an array of keys");
        return {};
      }
      return data.reduce((result, item) => {
        const path = property.map((key) => item[key]);
        const lastKey = path.pop();

        let current = result;
        path.forEach((key) => {
          current = current[key] ??= {};
        });

        (current[lastKey] ??= []).push(item);

        return result;
      }, {});

    case "function":
      return data.reduce((result, item) => {
        const key = property(item);
        result[key] = (result[key] || []).concat(item);
        return result;
      }, {});

    default:
      console.error(
        "Invalid property type: must be string, array, or function"
      );
      return {};
  }
}
