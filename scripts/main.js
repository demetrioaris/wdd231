document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
});



const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

function output(courses) {
    const boxCourse = document.querySelector('.boxCourse');
    courses.forEach((course) => {
        let courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        
        if (course.completed) {
            courseDiv.classList.add('courseComplete');
        } else {
            courseDiv.classList.add('courseNoComplete');
        }
        courseDiv.id = 'course';
        courseDiv.setAttribute('data-subject', course.subject);
        
        let courseTitle = document.createElement('h2');
        courseTitle.textContent = `${course.subject} ${course.number}`;
    
        courseDiv.appendChild(courseTitle);
        boxCourse.appendChild(courseDiv);
    });

    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('totalCredits').textContent = `Total Credits: ${totalCredits}`;
}

output(courses);

const boxCourse = document.querySelector('.boxCourse');
const boxButtons = document.querySelectorAll('.boxButton button');

boxButtons.forEach(button => {
    button.addEventListener("click", function () {
        const selectButton = this.value.toUpperCase(); // Convert to uppercase to match 'data-subject' values
        if (selectButton === "ALL") {
            boxCourse.querySelectorAll("#course").forEach(function (course) {
                course.style.display = "block";
            });
            return;
        }
        boxCourse.querySelectorAll("#course").forEach(function (course) {
            course.style.display = "none";
        });
        boxCourse.querySelectorAll(`.course[data-subject="${selectButton}"]`).forEach(function (course) {
            course.style.display = "block";
        });
    });
});



const allButton = document.querySelector('.boxButton button[value="all"]');
allButton.click();



// Footer information
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');
copyrightYearElement.textContent = currentYear;
lastModifiedElement.textContent = `Last update: ${lastModified}`;
