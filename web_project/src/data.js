const courseData = [{
        name: "General",
        data: {
            undergraduate: [5, 1, 5, 20, 25],
            graduate: [4, 1, 5, 20, 20],
            other: [1, 2, 3, 1, 5],
        },
    },
    {
        name: "Material",
        data: {
            undergraduate: [15, 10, 15, 20, 25],
            graduate: [4, 1, 5, 7, 20],
            other: [6, 2, 3, 4, 5],
        },
    },
    {
        name: "Usefulness",
        data: {
            undergraduate: [5, 10, 15, 20, 25],
            graduate: [4, 1, 5, 7, 20],
            other: [1, 2, 3, 4, 5],
        },
    },
    {
        name: "Work Load",
        data: {
            undergraduate: [5, 10, 15, 20, 25],
            graduate: [4, 1, 5, 7, 20],
            other: [1, 2, 3, 4, 5],
        },
    },
];
const instructorData = [{
        name: "General",
        data: {
            undergraduate: [5, 1, 5, 20, 25],
            graduate: [4, 1, 5, 20, 20],
            other: [1, 2, 3, 1, 5]
        },
    },
    {
        name: "Responsive",
        data: {
            undergraduate: [5, 10, 15, 20, 25],
            graduate: [4, 1, 5, 7, 20],
            other: [1, 2, 3, 4, 5]
        },
    },
    {
        name: "Expressive",
        data: {
            undergraduate: [5, 10, 15, 20, 25],
            graduate: [4, 1, 5, 7, 20],
            other: [1, 2, 3, 4, 5]
        },
    },
];
const commentData = [{
        userName: "Leopold James Fitz",
        status: "graduate",
        date:"6,5,2020",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.A scelerisque purus semper eget duis. Lectus magna fringillaurna porttitor rhoncus. Convallis posuere morbi leo urnamolestie at. Eget egestas purus viverra accumsan in nisl nisiscelerisque eu. Sagittis id consectetur purus ut faucibuspulvinar elementum integer enim. A diam sollicitudin tempor ideu nisl nunc mi ipsum",
    },
    {
        userName: "Jemma Anne Simmons",
        status: "graduate",
        date:"6,5,2020",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.A scelerisque purus semper eget duis. Lectus magna fringillaurna porttitor rhoncus. Convallis posuere morbi leo urnamolestie at. Eget egestas purus viverra accumsan in nisl nisiscelerisque eu. Sagittis id consectetur purus ut faucibuspulvinar elementum integer enim. A diam sollicitudin tempor ideu nisl nunc mi ipsum",
    },
    {
        userName: "Hermione Jane Granger",
        status: "undergraduate",
        date:"6,15,2020",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.A scelerisque purus semper eget duis. Lectus magna fringillaurna porttitor rhoncus. Accumsan in nisl nisiscelerisque eu. Sagittis id consectetur purus ut faucibuspulvinar elementum integer enim. A diam sollicitudin tempor ideu nisl nunc mi ipsum",
    },
    {
        userName: "Aemon Targaryen",
        status: "other",
        date:"3,21,2018",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.A scelerisque purus semper eget duis. Lectus magna fringillaurna porttitor rhoncus. Accumsan in nisl nisiscelerisque eu. Sagittis id consectetur purus ut faucibuspulvinar elementum integer enim. A diam sollicitudin tempor ideu nisl nunc mi ipsum",
    },
    {
        userName: "Galadriel",
        status: "other",
        date:"5,1,1999",
        comment: "Lnsectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.A scelerisque purus semper eget duis. faucibuspulvinar elementum integer enim. A diam sollicitudin tempor ideu nisl nunc mi ipsum",
    },
];

const data = {
    info: {
        title: "Introduction to Algorithm and its Happy Companions",
        department: "COMP",
        number: "0160",
        subnumber: "00",
        instructor: ["Tyrion"],
        semester: ["Fall"],
        year: ["2020"],
    },
    comment: commentData,
    course: courseData,
    instructor: instructorData,
};

export default data;
