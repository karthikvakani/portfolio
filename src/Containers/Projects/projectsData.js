import RiceImage from '../../images/riceleaf.png'
import Portfolio from '../../images/portfolio.jpg'
import ToDo from '../../images/todo.jpeg'

export const projectsData = [
    {
        name: 'Rice Leaf Disease Detection Using Ensemble Classifiers',
        icon: RiceImage,
        technology: 'Machine Learning',
        description: 'Developed the machine learning modal which takes the rice leaf images and classifies whether the rice leaf is effected by disease or not, if it is effected by disease it shows the disease name with a model accuracy of 93 percent.'
    },
    {
        name: 'Portfolio',
        icon: Portfolio,
        technology: 'React.js',
        description: 'Personal portfolio showcasing my skills and projects, created with React.js for a sleek, interactive, and modern presentation of my projects and skills.'
    },
    {
        name: 'ToDo List',
        icon: ToDo,
        technology: 'React.js',
        description: 'Developed To-Do List web application, where the user can store all the tasks that need to be done and they manage them. Local Storage system is used to store the tasks.'
    },
]