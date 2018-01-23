const faker = require("faker");

module.exports = () => {
    const User = {
        firstName: "Lion",
        id: "ID",
        lastName: "'O",
        permissions: ["a", "b", "c"],
        schoolName: "Thundercat School",
    };

    return {
        faker: [faker.hacker.phrase()],
        user: User
    };
};