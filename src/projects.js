const projectsDiv = document.querySelector(".projects");

let projects = [
  {
    name: "Kanyes Quotes",
    imgUrl: "https://i.imgur.com/LIiyQ4J.png",
    deployedAt: "https://kanyesays.now.sh/",
    githubRepo: "https://github.com/jtwray/ReactReduxThunk",
  },
  {
    name: "Kanyes Quotes",
    imgUrl: "https://i.imgur.com/LIiyQ4J.png",
    deployedAt: "https://kanyesays.now.sh/",
    githubRepo: "https://github.com/jtwray/ReactReduxThunk",
  },
  {
    name: "Kanyes Quotes",
    imgUrl: "https://i.imgur.com/LIiyQ4J.png",
    deployedAt: "https://kanyesays.now.sh/",
    githubRepo: "https://github.com/jtwray/ReactReduxThunk",
  },
];

function createProjectCards(projectsArr) {
  let card,
    cardImage,
    cardTitle,
    projectDeployedLink,
    projectRepo,
    projectInfoBlock;

  projectsArr.map((project) => {
    (card = document.createElement("div")),
      card.classList.add("card"),
      (cardImage = document.createElement("img")),
      (cardImage.src = project.imgUrl),
      card.appendChild(cardImage),
      (cardTitle = document.createElement("h3")),
      cardTitle.classList.add("cardTitle"),
      (cardTitle.style.fontSize = "3rem"),
      (cardTitle.textContent = project.name),
      card.appendChild(cardTitle),
      (projectDeployedLink = document.createElement("a")),
      (projectDeployedLink.textContent = `Deployed Project`),
      (projectDeployedLink.href = project.deployedAt),
      (projectRepo = document.createElement("a")),
      (projectRepo.textContent = `Project Repository & Commit History`),
      (projectRepo.href = project.githubRepo),
      (projectInfoBlock = document.createElement("div")),
      projectInfoBlock.appendChild(projectRepo),
      projectInfoBlock.appendChild(projectDeployedLink),
      projectInfoBlock.classList.add("projectInfoBlock"),
      card.appendChild(projectInfoBlock),
      console.log(card),
      projectsDiv.appendChild(card);
  });
}
createProjectCards(projects);

console.log({ projects });
