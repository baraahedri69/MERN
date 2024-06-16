const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 8000;

// Function to create a new user
const createUser = () => {
    return {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
};

// Function to create a new company
const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
};

// Route to get a new user
app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

// Route to get a new company
app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

// Route to get a new user and a new company
app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({ user: newUser, company: newCompany });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});