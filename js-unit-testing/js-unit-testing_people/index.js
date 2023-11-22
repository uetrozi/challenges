export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => person.firstName + " " + person.lastName);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age == age);
}

export function getPeopleNamesOlderThan(people, age) {
  const peopleOlderThan = people
    .filter((person) => {
      return person.age > age;
    })
    .map((person) => {
      return person.firstName + " " + person.lastName;
    });
  return peopleOlderThan;
}

export function getPeopleByLastName(people, lastName) {
  return people.filter((person) => person.lastName == lastName);
}

export function findPersonById(people, id) {
  return people.find((person) => person.id == id);
}

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age);
}

export function getFullNamesSortedByAge(people) {
  const peopleSorted = people
    .slice()
    .sort((a, b) => {
      const ageA = a.age;
      const ageB = b.age;

      if (ageA < ageB) {
        return -1;
      }
      if (ageA > ageB) {
        return 1;
      }
      return 0;
    })
    .map((person) => {
      return person.firstName + " " + person.lastName;
    });
  return peopleSorted;
}
