// patients.js
const patients = [
    { id: 1, name: "John Doe", age: 30, disease: "Cold" },
    { id: 2, name: "Jane Smith", age: 45, disease: "Flu" },
    { id: 3, name: "Alice Johnson", age: 50, disease: "Diabetes" },
    { id: 4, name: "Bob Brown", age: 35, disease: "Cold" },
    { id: 5, name: "Charlie Davis", age: 40, disease: "Flu" }
];

const getPatients = () => patients;

const getPatientsByDisease = (disease) => {
    return patients.filter(patient => patient.disease.toLowerCase() === disease.toLowerCase());
};

module.exports = { getPatients, getPatientsByDisease };
