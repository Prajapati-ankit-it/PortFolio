const logotext = "ANKIT";
const meta = {
    title: "ANKIT_DEV",
    description: "I’m Ankit Prajapati Software engineer _ Full stack devloper,currently working in Coozmoo",
};

const introdata = {
    title: "I’m Ankit Prajapati",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
        fourth: "I develop ios apps",
    },
    description: "Hi, I'm Prajapati Ankit.  I'm a Software Engineer with a passion for Python, C++, React, Bootstrap & Figma, UI_UX.  This website showcases my skills and experience through my portfolio projects.",
    // your_img_url: process.env.PUBLIC_URL + "/your-video.mp4",
    your_img_url: "https://img.freepik.com/premium-vector/vector-flat-illustration-software-developer-cyber-program-security_776789-205.jpg?w=740",
    // your_img_url: "IMG_1800.jpg",
};


function Intro() {
    return (
        <div>
            <h1>{introdata.title}</h1>
            <p>{introdata.description}</p>
            <video width="320" height="240" controls>
                <source src={introdata.your_img_url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

const dataabout = {
    title: "abit about my self",
    aboutme: "Welcome! I'm Prajapati Ankit, a passionate developer dedicated to crafting seamless digital experiences. With expertise in Python, C++, React, UI_UX, Java Script, WordPress & Figma, I specialize in creating innovative solutions that blend creativity with functionality. Let's collaborate to bring your ideas to life!",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "Surbhi",
        date: "2024",
    },
    {
        jobtitle: "Designer of week",
        where: "Tushar",
        date: "2023",
    },
    {
        jobtitle: "Designer of week",
        where: "Jainis",
        date: "2024",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "c++",
        value: 95,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "MySql",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Elevate user experience with intuitive design and seamless navigation for enhanced engagement and conversions.",
    },
    {
        title: "Website Design",
        description: "Deliver a seamless experience on any device with our responsive design, enhancing accessibility and engagement for all users.",
    },
    {
        title: "Wordpress & Figma Design",
        description: "Harness the power of Wordpress and Figma to craft stunning, tailored websites that blend functionality with exceptional design precision and ease of management.",
    },
    {
        title: "Android Devlopment",
        description: " Leverage Android development expertise to create impactful, scalable apps tailored to reach and engage a global audience effectively and efficiently.",
    },
    {
        title: "IOS Devlopment",
        description: " Explore iOS development services for creating secure, seamless apps that elevate user experience on Apple devices, capturing market opportunities with precision and reliability.",
    },
];

const dataportfolio = [{
        img: "https://img.freepik.com/free-vector/mobile-app-development-concept-modern-technology-smartphone-interface-design-application-building-programming-vector-flat-illustration_613284-3169.jpg?w=740&t=st=1719739973~exp=1719740573~hmac=2b76fc0304cd82c5cdb0ddae31985a17d2624d6104c02f1aa8cc032e1cd7efcf",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://img.freepik.com/premium-photo/clean-vector-illustration-team-presenting-design-blog-interesting-composition_941097-96569.jpg?w=1060",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://img.freepik.com/free-vector/isometric-design-business-people-meeting_23-2148292915.jpg?w=740&t=st=1719739438~exp=1719740038~hmac=de630ba40a7130bb9edd95023d7f76aaf10694752d96118acfef47ca1efcf179",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://img.freepik.com/premium-vector/three-web-developers-working-vector-illustration_969863-47761.jpg?w=740",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://img.freepik.com/free-vector/business-people-working-laptop-development_1262-18907.jpg?w=900&t=st=1719739504~exp=1719740104~hmac=baaa013d4599ca336cf8765a4cc5eb83e45f21f728bce10e47be2d42506bfb74",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://img.freepik.com/free-vector/meeting-infographic-set-with-discussion-talk-symbols-cartoon-vector-illustration_1284-17881.jpg?w=740&t=st=1719739526~exp=1719740126~hmac=d0c71076d2b1467a6b1c514c4ce1c2b39d399496a842874ea6536469feacc2171",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://img.freepik.com/free-vector/programmer-working-isometric-style_52683-16805.jpg?w=740&t=st=1719739571~exp=1719740171~hmac=4cc2df3538bca2d75aabcb6ff32c67fb443aceef9b110871dfe24de65fd5aed9",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://img.freepik.com/free-vector/tech-company-concept-illustration_114360-9729.jpg?w=740&t=st=1719739589~exp=1719740189~hmac=d71714446e2e82438b18d700a078bff0a2c26d726a62a41186d4758e03985b90",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://img.freepik.com/premium-photo/cartoon-two-men-working-computer-with-blue-screen-with-words-blue-it_1252102-1569.jpg?w=740",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://img.freepik.com/free-vector/programmers-work-isometric-template_1284-25047.jpg?w=740&t=st=1719739942~exp=1719740542~hmac=bc20ccfd3f374b234717e6630c43294df43b39e904fc9505f4ab69f159decf7a",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2284.jpg?w=740&t=st=1719739669~exp=1719740269~hmac=f94c6490e1e9185cf8a59422eeacf889abf42091b555348b48399c4b4ac8bc88",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://img.freepik.com/free-vector/programmer-working-flat-style_52683-15040.jpg?w=740&t=st=1719739805~exp=1719740405~hmac=3ed8799e24bba9c18e3e163b602ceb65f0554913a01a7fb51e7df633394fd980",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "ankitprajapati10027@gmail.com",
    YOUR_FONE: "(879)904-7773",
    description:"Discover my portfolio showcasing interactive designs and innovative services tailored to elevate your digital presence. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_rwu5vam",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/5655565",
    facebook: "https://facebook.com",
    linkedin: "www.linkedin.com/in/ankit-prajapati-67a784250",
    twitter: "https://twitter.com",
};

export default Intro;

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    Intro,
};

