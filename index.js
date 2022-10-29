const express = require('express');
const app=express();
app.use(express.json());

const customers = [
    {custId: 1, customerName: 'Sarah',email: 'sarah@gmail.com',mobileNo:'6538263287',city: 'Bangalore'},
    {custId: 2, customerName: 'John',email: 'john@gmail.com',mobileNo:'9852748955',city: 'Mumbai'},
    {custId: 3, customerName: 'Noah',email: 'noah@gmail.com',mobileNo:'9966452846',city: 'Pune'}
];

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/customers', (req, res) => {
    res.send(customers);
});

app.post('/api/customers', (req, res) => {
    const customer = {
        custId: customers.length+1,
        customerName: req.body.customerName,
        email: req.body.email,
        mobileNo: req.body.mobileNo,
        city: req.body.city
    };
    customers.push(customer);
    res.send(customer);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));