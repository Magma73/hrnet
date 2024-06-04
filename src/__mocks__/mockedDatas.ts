const mockData = [
    {
        "first-name": "Yoyo",
        "last-name": "Doe",
        "start-date": "01/01/2023",
        "department": "Engineering",
        "date-of-birth": "05/15/1999",
        "street": "456 Main Street",
        "city": "Anytown",
        "state": "NY",
        "zip-code": "12345"
    },
    {
        "first-name": "Janis",
        "last-name": "Doe",
        "start-date": "02/01/2010",
        "department": "Marketing",
        "date-of-birth": "10/20/1982",
        "street": "256 Oups Street",
        "city": "Motorville",
        "state": "CA",
        "zip-code": "56321"
    },
    {
        "first-name": "Michael",
        "last-name": "Smith",
        "start-date": "12/15/2021",
        "department": "Sales",
        "date-of-birth": "03/10/1988",
        "street": "789 Oak Avenue",
        "city": "Smalltown",
        "state": "TX",
        "zip-code": "67890"
    },
    {
        "first-name": "Emily",
        "last-name": "Johnson",
        "start-date": "03/20/2022",
        "department": "Human Resources",
        "date-of-birth": "08/25/1992",
        "street": "321 Maple Lane",
        "city": "Villageton",
        "state": "FL",
        "zip-code": "13579"
    },
    {
        "first-name": "Christopher",
        "last-name": "Brown",
        "start-date": "04/05/2022",
        "department": "Engineering",
        "date-of-birth": "06/30/1987",
        "street": "567 Pine Street",
        "city": "Metroville",
        "state": "WA",
        "zip-code": "24680"
    },
    {
        "first-name": "Sarah",
        "last-name": "Miller",
        "start-date": "05/12/2022",
        "department": "Marketing",
        "date-of-birth": "09/05/1991",
        "street": "890 Cedar Street",
        "city": "Suburbia",
        "state": "IL",
        "zip-code": "97531"
    },
    {
        "first-name": "David",
        "last-name": "Wilson",
        "start-date": "06/28/2022",
        "department": "Sales",
        "date-of-birth": "04/18/1989",
        "street": "654 Birch Lane",
        "city": "Townsville",
        "state": "MI",
        "zip-code": "80246"
    },
    {
        "first-name": "Jessica",
        "last-name": "Martinez",
        "start-date": "07/10/2022",
        "department": "Human Resources",
        "date-of-birth": "12/30/1990",
        "street": "123 Elm Street",
        "city": "Cityville",
        "state": "OH",
        "zip-code": "45783"
    },
    {
        "first-name": "John",
        "last-name": "Doe",
        "start-date": "01/01/2022",
        "department": "Engineering",
        "date-of-birth": "05/15/1990",
        "street": "123 Main Street",
        "city": "Anytown",
        "state": "NY",
        "zip-code": "12345"
    },
    {
        "first-name": "Jane",
        "last-name": "Doe",
        "start-date": "02/01/2022",
        "department": "Marketing",
        "date-of-birth": "10/20/1985",
        "street": "456 Elm Street",
        "city": "Otherville",
        "state": "CA",
        "zip-code": "54321"
    },
    {
        "first-name": "Alice",
        "last-name": "Smith",
        "start-date": "12/15/2021",
        "department": "Sales",
        "date-of-birth": "03/10/1988",
        "street": "789 Oak Avenue",
        "city": "Smalltown",
        "state": "TX",
        "zip-code": "67890"
    },
    {
        "first-name": "Melissa",
        "last-name": "Perez",
        "start-date": "01/10/2023",
        "department": "Marketing",
        "date-of-birth": "06/15/1988",
        "street": "789 Oak Avenue",
        "city": "Downtown",
        "state": "NY",
        "zip-code": "97533"
    },
    {
        "first-name": "Ryan",
        "last-name": "Torres",
        "start-date": "02/15/2023",
        "department": "Sales",
        "date-of-birth": "07/20/1995",
        "street": "456 Maple Street",
        "city": "Uptown",
        "state": "TX",
        "zip-code": "80248"
    },
    {
        "first-name": "Kevin",
        "last-name": "Lopez",
        "start-date": "10/25/2022",
        "department": "Sales",
        "date-of-birth": "03/30/1985",
        "street": "987 Cedar Lane",
        "city": "Midtown",
        "state": "TX",
        "zip-code": "80247"
    },
    {
        "first-name": "Amanda",
        "last-name": "Hernandez",
        "start-date": "11/30/2022",
        "department": "Human Resources",
        "date-of-birth": "04/10/1987",
        "street": "654 Pine Avenue",
        "city": "Outskirts",
        "state": "FL",
        "zip-code": "45784"
    },
    {
        "first-name": "Jason",
        "last-name": "Gonzalez",
        "start-date": "12/05/2022",
        "department": "Engineering",
        "date-of-birth": "05/25/1994",
        "street": "321 Elm Lane",
        "city": "Countryside",
        "state": "CA",
        "zip-code": "13580"
    },
    {
        "first-name": "Alma",
        "last-name": "Martinez",
        "start-date": "09/10/2020",
        "department": "Human Resources",
        "date-of-birth": "14/30/1992",
        "street": "123 Elm Street",
        "city": "Cityville",
        "state": "OH",
        "zip-code": "45783"
    },
    {
        "first-name": "Daniel",
        "last-name": "Garcia",
        "start-date": "08/15/2022",
        "department": "Engineering",
        "date-of-birth": "01/20/1986",
        "street": "456 Oak Street",
        "city": "Downtown",
        "state": "CA",
        "zip-code": "24681"
    },
    {
        "first-name": "Emma",
        "last-name": "Rodriguez",
        "start-date": "09/20/2022",
        "department": "Marketing",
        "date-of-birth": "02/15/1993",
        "street": "789 Maple Street",
        "city": "Uptown",
        "state": "NY",
        "zip-code": "97532"
    },
    {
        "first-name": "David",
        "last-name": "Guetta",
        "start-date": "11/28/2019",
        "department": "Sales",
        "date-of-birth": "04/18/1997",
        "street": "984 Birch Lane",
        "city": "DownTownsville",
        "state": "MI",
        "zip-code": "86246"
    },
];


export default mockData;