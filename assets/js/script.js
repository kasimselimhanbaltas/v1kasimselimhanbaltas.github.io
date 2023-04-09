const skills = [
  { name: "VueJS", image: "assets/images/Vue.png" },
  { name: "NuxtJS", image: "assets/images/nuxt.png" },
  { name: "Spring Boot", image: "assets/images/springboot.png" },
  { name: "CSS", image: "assets/images/css.png" },
  { name: "JavaScript", image: "assets/images/js.png" },
  { name: "Java", image: "assets/images/java.png" },
  { name: "Python", image: "assets/images/python.png" },
];
const projects = [
  {
    projectId: 1,
    projectName: "Baltaş Auto Gallery",

    description: "Back end: Spring Boot Database: PostgreSQL Front end: VueJSdsasf Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat natus aliquam asperiores obcaecati maxime reprehenderit itaque distinctio alias explicabo exercitationem. Enim cumque quae delectus! Eveniet rerum beatae quod adipisci reprehenderit, obcaecati officiis voluptatum vel quae eum est nihil necessitatibus quidem, quisquam harum consectetur distinctio. Ab voluptate ex non vitae omnis fuga facilis a cupiditate, dicta, excepturi assumenda, dolor quisquam odit numquam eveniet deleniti. Ducimus, ex facere. Quae voluptates quod cupiditate quas quisquam sequi asperiores ullam non necessitatibus sapiente, laborum fuga hic distinctio blanditiis doloremque, accusantium provident eveniet nam temporibus error ducimus facere tenetur nostrum. Dolorum excepturi aut sequi sunt voluptatum. ",
    images: [
      "assets/images/projects/c11.png",
      "assets/images/projects/c12.png",
      "assets/images/projects/c13.png",
      "assets/images/projects/c14.png",
      "assets/images/projects/c15.png",
    ],
    githubLink: "",
  },
  {
    projectId: 2,
    projectName: "Car Gallery Management System",
    description: "Back end: Spring Boot Database: PostgreSQL Front end: VueJSdsasf Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat natus aliquam asperiores obcaecati maxime reprehenderit itaque distinctio alias explicabo exercitationem. Enim cumque quae delectus! Eveniet rerum beatae quod adipisci reprehenderit, obcaecati officiis voluptatum vel quae eum est nihil necessitatibus quidem, quisquam harum consectetur distinctio. Ab voluptate ex non vitae omnis fuga facilis a cupiditate, dicta, excepturi assumenda, dolor quisquam odit numquam eveniet deleniti. Ducimus, ex facere. Quae voluptates quod cupiditate quas quisquam sequi asperiores ullam non necessitatibus sapiente, laborum fuga hic distinctio blanditiis doloremque, accusantium provident eveniet nam temporibus error ducimus facere tenetur nostrum. Dolorum excepturi aut sequi sunt voluptatum. ",
    images: [
      "assets/images/projects/cc1.png",
      "assets/images/projects/cc2.png",
      "assets/images/projects/cc3.png",
      "assets/images/projects/cc4.png",
      "assets/images/projects/cc5.png",
      "assets/images/projects/cc6.png",
    ],
    githubLink: "",
  },
  {
    projectId: 3,
    projectName: "Earth Info",
    description: "Back end: Spring Boot Database: PostgreSQL Front end: VueJSdsasf Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat natus aliquam asperiores obcaecati maxime reprehenderit itaque distinctio alias explicabo exercitationem. Enim cumque quae delectus! Eveniet rerum beatae quod adipisci reprehenderit, obcaecati officiis voluptatum vel quae eum est nihil necessitatibus quidem, quisquam harum consectetur distinctio. Ab voluptate ex non vitae omnis fuga facilis a cupiditate, dicta, excepturi assumenda, dolor quisquam odit numquam eveniet deleniti. Ducimus, ex facere. Quae voluptates quod cupiditate quas quisquam sequi asperiores ullam non necessitatibus sapiente, laborum fuga hic distinctio blanditiis doloremque, accusantium provident eveniet nam temporibus error ducimus facere tenetur nostrum. Dolorum excepturi aut sequi sunt voluptatum. ",
    images: [
      "assets/images/projects/ei1.png",
      "assets/images/projects/ei2.png",
    ],
    githubLink: "",
  },
  {
    projectId: 4,
    projectName: "Visual Exploration Assistant",
    description: "Back end: Spring Boot Database: PostgreSQL Front end: VueJSdsasf Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat natus aliquam asperiores obcaecati maxime reprehenderit itaque distinctio alias explicabo exercitationem. Enim cumque quae delectus! Eveniet rerum beatae quod adipisci reprehenderit, obcaecati officiis voluptatum vel quae eum est nihil necessitatibus quidem, quisquam harum consectetur distinctio. Ab voluptate ex non vitae omnis fuga facilis a cupiditate, dicta, excepturi assumenda, dolor quisquam odit numquam eveniet deleniti. Ducimus, ex facere. Quae voluptates quod cupiditate quas quisquam sequi asperiores ullam non necessitatibus sapiente, laborum fuga hic distinctio blanditiis doloremque, accusantium provident eveniet nam temporibus error ducimus facere tenetur nostrum. Dolorum excepturi aut sequi sunt voluptatum. ",
    images: [
      "assets/images/projects/bg1.png",
      "assets/images/projects/bg2.png",
      "assets/images/projects/bg3.png",
      "assets/images/projects/bg4.png"
    ],
    githubLink: "",
  },
]

const myVariable = "Hello, world!";
document.getElementById("my-paragraph").innerHTML = myVariable;

function projectsFunction() {


  let currentProjectIndex = 0; // Şu anki proje dizindeki ilk proje
  let imageIndex = 0;
  const projectContainer = document.getElementById("project-container");
  const projectName = document.getElementById("project-name");
  const projectImage = document.getElementById("project-image");
  const imageNumber = document.getElementById("image-info");
  const projectDescription = document.getElementById("project-description");
  const projectGithub = document.getElementById("project-github");
  const projectNumber = document.getElementById("project-number");


  function showProject() {
    window.currentProject = projects[currentProjectIndex];
    projectName.innerHTML = currentProject.projectName;

    projectImage.src = currentProject.images[imageIndex];
    imageNumber.innerHTML = imageIndex + 1 + "/" + currentProject.images.length;

    projectDescription.innerHTML = currentProject.description;
    projectGithub.href = currentProject.githubLink;

    projectNumber.innerHTML = currentProjectIndex + 1 + "/" + projects.length;
  }


  showProject();

  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  //const container = document.getElementById("project-images");

  nextBtn.addEventListener("click", () => {

    // // Delete all img's of previous project 
    // while (container.firstChild) {
    //   container.removeChild(container.firstChild);
    // }


    imageIndex = 0;

    currentProjectIndex++;
    if (currentProjectIndex >= projects.length) {
      currentProjectIndex = 0;
    }
    showProject();
  });

  prevBtn.addEventListener("click", () => {

    imageIndex = 0;

    currentProjectIndex--;
    if (currentProjectIndex < 0) {
      currentProjectIndex = projects.length - 1;
    }
    showProject();
  });

  const nextImageBtn = document.getElementById("image-next-btn");
  const prevImageBtn = document.getElementById("image-prev-btn");
  //const container = document.getElementById("project-images");

  nextImageBtn.addEventListener("click", () => {

    // // Delete all img's of previous project 
    // while (container.firstChild) {
    //   container.removeChild(container.firstChild);
    // }
    imageIndex++;
    if (imageIndex >= currentProject.images.length) {
      imageIndex = 0;
    }
    showProject();
  });

  prevImageBtn.addEventListener("click", () => {

    imageIndex--;
    if (imageIndex < 0) {
      imageIndex = currentProject.images.length - 1;
    }
    showProject();
  });

}

