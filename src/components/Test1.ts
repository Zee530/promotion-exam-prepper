// const test1 = ['What year did Nigeria gain Independence?',
//                 'Who is the current Head of State?',
//                 "What is the country's main source of income "
// ]

const test1 = [{
    index: '1',
    question:'What year did Nigeria gain Independence?',
    options: [
        { answer:'1959', isCorrect: false, value: '0' },
        { answer:'1960', isCorrect: true, value: '1' },
        { answer:'1961', isCorrect: false, value: '2' },
        { answer:'1962', isCorrect: false, value: '3' }        
    ]
},
{
    index: '2',
    question:'Who is the current Head of State?',
    options: [
        { answer:'Muhammadu Buhari', isCorrect: true, value: '0' },
        { answer:'Bola Tinubu', isCorrect: false, value: '1' },
        { answer:'Rabiu Kwankwaso', isCorrect: false, value: '2' },
        { answer:'Atiku Abubakar', isCorrect: false, value: '3' }        
    ]
},
{
    index: '3',
    question:"What is the country's main source of income",
    options: [
        { answer:'Cocoa', isCorrect: false, value: '0' },
        { answer:'Gold', isCorrect: false, value: '1' },
        { answer:'Crude Oil', isCorrect: true, value: '2' },
        { answer:'Plutomium', isCorrect: false, value: '3' }        
    ]
},
]

export default test1