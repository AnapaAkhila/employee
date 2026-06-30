const getEmployees = (req, res) => {
    const employees = [
        {
            id: 1,
            name: "Akhila",
            department: "DevOps"
        },
        {
            id: 2,
            name: "Ramya",
            department: "Cloud"
        },
        {
            id: 3,
            name: "Priya",
            department: "Backend"
        }
    ];

    res.json(employees);
};

const healthCheck = (req, res) => {
    res.status(200).json({
        status: "UP"
    });
};

module.exports = {
    getEmployees,
    healthCheck
};