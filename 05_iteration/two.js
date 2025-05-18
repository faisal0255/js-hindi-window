// for each loop on array..

const myCoding = [
    {
        langName : "Python",
        langFileName : "py"
    },
    {
        langName : "JavaScript",
        langFileName : "js"
    },
    {
        langName : "C++",
        langFileName : "cpp"
    },
  
]

myCoding.forEach ( ( item ) => {
 // console.log(item.langName);
});

const books = [             
    {
        title : 'Book one',
        genre : 'History',
        publish : '1985',
        edition : '2004'
    },
    {
        title : 'Book two',
        genre : 'Science',
        publish : '1990',
        edition : '2006'
    },
    {
        title : 'Book three',
        genre : 'Biology',
        publish : '1998',
        edition : '2009'
    },
    {
        title : 'Book four',
        genre : 'History',
        publish : '1980',
        edition : '2005'
    },
    {
        title : 'Book five',
        genre : 'science',
        publish : '1999',
        edition : '2008'
    },
    {
        title : 'Book six',
        genre : 'Biology',
        publish : '1986',
        edition : '2010'
    },
    {
        title : 'Book seven',
        genre : 'History',
        publish : '2000',
        edition : '2015'
    },
    {
        title : 'Book eight',
        genre : 'Science',
        publish : '1998',
        edition : '2013'
    },
    {
        title : 'Book nine',
        genre : 'History',
        publish : '2001',
        edition : '2018'
    },
   
];

const userBooks = books.filter( (bk) => {            // picking data from database using filter function...
    return bk.genre === "History" && bk.edition >= 2006;
});
// console.log(userBooks);

