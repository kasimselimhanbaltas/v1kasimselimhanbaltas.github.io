const skillsArray = [
    { name: "VueJS", image: "assets/images/Vue.png" },
    { name: "NuxtJS", image: "assets/images/nuxt.png" },
    { name: "Spring Boot", image: "assets/images/springboot.png" },
    { name: "CSS", image: "assets/images/css.png" },
    { name: "JavaScript", image: "assets/images/js.png" },
    { name: "Java", image: "assets/images/java.png" },
    { name: "Python", image: "assets/images/python.png" },
];

const skillsDiv = document.getElementById('skills');



for (let i = 0; i < skillsArray.length; i++) {
    const skill = skillsArray[i];
    console.log(skill)
    const skillHtml = `<div class="skillc"> <div class="skill"> <img src="${skill.image}" alt=""> <h3>${skill.name}</h3> </div> </div>`;
    skillsDiv.insertAdjacentHTML("beforeend", skillHtml);
}


const coin = document.getElementById("cc");
coin.addEventListener('click', () =>{
    coin.classList.add("animate");
    console.log("flippin")
    setTimeout(() => {
        coin.classList.remove("animate")
    }, 3000);
})
