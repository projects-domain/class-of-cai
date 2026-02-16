const STUDENTS = [
    {
        image: "saif.webp",
        name: "Saif",
        studentId: "123456",
        bio: "Hello I am Saif, I am a student at ATS. I am currently in 10th grade and will be graduating in 2028.",
        grade: 10,
        class: "CAI",
        graduationYear: 2028,
        twitter: "https://twitter.com/saif_ats",
        linkedin: "https://www.linkedin.com/in/saif-ats/",
        instagram: "https://www.instagram.com/saif_ats/",
        achievements: [
            "Won the school science fair in 2023",
            "Member of the robotics club",
            "Volunteered at an animal shelter"
        ]
    },
    {
        image: "saif.webp",
        name: "Layla",
        studentId: "123457",
        bio: "Hi, I'm Layla. I'm passionate about design and technology and I study at ATS.",
        grade: 11,
        class: "CAI",
        graduationYear: 2027,
        twitter: "",
        linkedin: "https://www.linkedin.com/in/layla-ats/",
        instagram: "https://www.instagram.com/layla_ats/",
        achievements: [
            "Designed posters for school events",
            "UI/UX club member"
        ]
    },
    {
        image: "saif.webp",
        name: "Omar",
        studentId: "123458",
        bio: "I'm Omar, a student at ATS who enjoys coding and problem solving.",
        grade: 10,
        class: "CAI",
        graduationYear: 2028,
        twitter: "",
        linkedin: "",
        instagram: "",
        achievements: [
            "Participated in hackathons",
            "Top 5 in math competition"
        ]
    },
    {
        image: "saif.webp",
        name: "Noor",
        studentId: "123459",
        bio: "Hello! I'm Noor and I love data, logic, and learning new skills.",
        grade: 12,
        class: "CAI",
        graduationYear: 2026,
        twitter: "",
        linkedin: "https://www.linkedin.com/in/noor-ats/",
        instagram: "",
        achievements: [
            "Student council member",
            "Tutored junior students"
        ]
    },
    {
        image: "saif.webp",
        name: "Adam",
        studentId: "123460",
        bio: "I'm Adam, a creative student interested in game development.",
        grade: 9,
        class: "CAI",
        graduationYear: 2029,
        twitter: "",
        linkedin: "",
        instagram: "https://www.instagram.com/adam_ats/",
        achievements: [
            "Built a simple game using JavaScript",
            "Joined the coding club"
        ]
    },
    {
        image: "saif.webp",
        name: "Sara",
        studentId: "123461",
        bio: "Hi, I'm Sara. I enjoy teamwork and creating digital projects.",
        grade: 11,
        class: "CAI",
        graduationYear: 2027,
        twitter: "",
        linkedin: "",
        instagram: "",
        achievements: [
            "Led a group tech project",
            "Organized school events"
        ]
    },
    {
        image: "saif.webp",
        name: "Yousef",
        studentId: "123462",
        bio: "I'm Yousef, a student at ATS with an interest in cybersecurity.",
        grade: 12,
        class: "CAI",
        graduationYear: 2026,
        twitter: "",
        linkedin: "https://www.linkedin.com/in/yousef-ats/",
        instagram: "",
        achievements: [
            "Completed an online cybersecurity course",
            "Presented a tech talk at school"
        ]
    },
    {
        image: "saif.webp",
        name: "Mariam",
        studentId: "123463",
        bio: "Hello, I'm Mariam. I like mixing creativity with technology.",
        grade: 10,
        class: "CAI",
        graduationYear: 2028,
        twitter: "",
        linkedin: "",
        instagram: "",
        achievements: [
            "Created a personal portfolio website",
            "Photography club member"
        ]
    },
    {
        image: "saif.webp",
        name: "Khalid",
        studentId: "123464",
        bio: "I'm Khalid, a motivated student who enjoys learning new tech skills.",
        grade: 11,
        class: "CAI",
        graduationYear: 2027,
        twitter: "",
        linkedin: "",
        instagram: "",
        achievements: [
            "Assisted in school IT setup",
            "Volunteered at tech workshops"
        ]
    },
    {
        image: "saif.webp",
        name: "Hana",
        studentId: "123465",
        bio: "Hi! I'm Hana and I'm interested in AI and future technologies.",
        grade: 9,
        class: "CAI",
        graduationYear: 2029,
        twitter: "",
        linkedin: "",
        instagram: "",
        achievements: [
            "Built a simple AI project",
            "Participated in science exhibitions"
        ]
    }
]


const studentContainer = document.getElementById('student-container');

STUDENTS.forEach(student => {

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.innerHTML = `
               
                <img class="student-img" src="assets/students/${student.image}" alt="${student.name}">
                <div class="student-details">
                    <div class="student-name">${student.name}</div>
                    <div class="student-subtitle">
                        <div class="student-id">${student.studentId}</div>
                        <div>|</div>
                        <div class="student-grade">${student.grade}</div>
                    </div>
                    <div class="student-bio">
                        <p>${student.bio}</p>
                    </div>
                </div>
            
    `

    studentContainer.appendChild(cardDiv);
});

