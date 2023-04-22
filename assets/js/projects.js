import {getComponents} from './components.js'

const projects = [
  {
    projectId: 1,
    projectName: "Baltaş Auto Gallery",

    description: "Back end: Spring Boot Database: PostgreSQL Front end: VueJSdsasf Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat natus aliquam asperiores obcaecati maxime reprehenderit itaque distinctio alias explicabo exercitationem. Enim cumque quae delectus! Eveniet rerum beatae quod adipisci reprehenderit, obcaecati officiis voluptatum vel quae eum est nihil necessitatibus quidem, quisquam harum consectetur distinctio. Ab voluptate ex non vitae omnis fuga facilis a cupiditate, dicta, excepturi assumenda, dolor quisquam odit numquam eveniet deleniti. Ducimus, ex facere. Quae voluptates quod cupiditate quas quisquam sequi asperiores ullam non necessitatibus sapiente, laborum fuga hic distinctio blanditiis doloremque, accusantium provident eveniet nam temporibus error ducimus facere tenetur nostrum. Dolorum excepturi aut sequi sunt voluptatum. ",
    images: [
      "assets/images/projects/c11.PNG",
      "assets/images/projects/c12.PNG",
      "assets/images/projects/c13.PNG",
      "assets/images/projects/c14.PNG",
      "assets/images/projects/c15.PNG",
    ],
    githubLink: "",
  },
  {
    projectId: 2,
    projectName: "Car Gallery Management System",
    description: "Back end: Spring Boot Database: PostgreSQL Front end: VueJSdsasf Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat natus aliquam asperiores obcaecati maxime reprehenderit itaque distinctio alias explicabo exercitationem. Enim cumque quae delectus! Eveniet rerum beatae quod adipisci reprehenderit, obcaecati officiis voluptatum vel quae eum est nihil necessitatibus quidem, quisquam harum consectetur distinctio. Ab voluptate ex non vitae omnis fuga facilis a cupiditate, dicta, excepturi assumenda, dolor quisquam odit numquam eveniet deleniti. Ducimus, ex facere. Quae voluptates quod cupiditate quas quisquam sequi asperiores ullam non necessitatibus sapiente, laborum fuga hic distinctio blanditiis doloremque, accusantium provident eveniet nam temporibus error ducimus facere tenetur nostrum. Dolorum excepturi aut sequi sunt voluptatum. ",
    images: [
      "assets/images/projects/cc1.PNG",
      "assets/images/projects/cc2.PNG",
      "assets/images/projects/cc3.PNG",
      "assets/images/projects/cc4.PNG",
      "assets/images/projects/cc5.PNG",
      "assets/images/projects/cc6.PNG",
    ],
    githubLink: "",
  },
  {
    projectId: 3,
    projectName: "Earth Info",
    description: "Back end: Spring Boot Database: PostgreSQL Front end: VueJSdsasf Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat natus aliquam asperiores obcaecati maxime reprehenderit itaque distinctio alias explicabo exercitationem. Enim cumque quae delectus! Eveniet rerum beatae quod adipisci reprehenderit, obcaecati officiis voluptatum vel quae eum est nihil necessitatibus quidem, quisquam harum consectetur distinctio. Ab voluptate ex non vitae omnis fuga facilis a cupiditate, dicta, excepturi assumenda, dolor quisquam odit numquam eveniet deleniti. Ducimus, ex facere. Quae voluptates quod cupiditate quas quisquam sequi asperiores ullam non necessitatibus sapiente, laborum fuga hic distinctio blanditiis doloremque, accusantium provident eveniet nam temporibus error ducimus facere tenetur nostrum. Dolorum excepturi aut sequi sunt voluptatum. ",
    images: [
      "assets/images/projects/ei1.PNG",
      "assets/images/projects/ei2.PNG",
    ],
    githubLink: "",
  },
  {
    projectId: 4,
    projectName: "Visual Exploration Assistant",
    description: "Back end: Spring Boot Database: PostgreSQL Front end: VueJSdsasf Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat natus aliquam asperiores obcaecati maxime reprehenderit itaque distinctio alias explicabo exercitationem. Enim cumque quae delectus! Eveniet rerum beatae quod adipisci reprehenderit, obcaecati officiis voluptatum vel quae eum est nihil necessitatibus quidem, quisquam harum consectetur distinctio. Ab voluptate ex non vitae omnis fuga facilis a cupiditate, dicta, excepturi assumenda, dolor quisquam odit numquam eveniet deleniti. Ducimus, ex facere. Quae voluptates quod cupiditate quas quisquam sequi asperiores ullam non necessitatibus sapiente, laborum fuga hic distinctio blanditiis doloremque, accusantium provident eveniet nam temporibus error ducimus facere tenetur nostrum. Dolorum excepturi aut sequi sunt voluptatum. ",
    images: [
      "assets/images/projects/bg1.PNG",
      "assets/images/projects/bg2.PNG",
      "assets/images/projects/bg3.PNG",
      "assets/images/projects/bg4.PNG"
    ],
    githubLink: "",
  },
]

window.onload = function() {
  getComponents();

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


