const projectsDiv = document.querySelector("projects");
let projects = [
  {
    name: "Kanye's Quotes",
    imgUrl: "https://i.imgur.com/LIiyQ4J.png",
    deployedAt: "https://kanyesays.now.sh/",
    githubRepo: "https://github.com/jtwray/ReactReduxThunk",
  },
  {
    name: "Kanye's Quotes",
    imgUrl: "https://i.imgur.com/LIiyQ4J.png",
    deployedAt: "https://kanyesays.now.sh/",
    githubRepo: "https://github.com/jtwray/ReactReduxThunk",
  },
  {
    name: "Kanye's Quotes",
    imgUrl: "https://i.imgur.com/LIiyQ4J.png",
    deployedAt: "https://kanyesays.now.sh/",
    githubRepo: "https://github.com/jtwray/ReactReduxThunk",
  },
];
function createProjectsGroup() {
    let newdiv=document.createElement('div');
    let h3=document.createElement('h3');
    let img=document.createElement('img');
    let livelink=document.createElement('a');
    let repo=document.createElement('a');
    projects.map((p)=>{ return(
        projectsDiv.appendChild(newdiv);
    h3.textContent=p.name;
    img.setAttribute('src',p.imgUrl);
    livelink.href=p.deployedAt;
    repo.href=p.githubRepo }
    )})
projectsDiv.append();
