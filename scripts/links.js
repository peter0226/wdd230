const baseURL = "https://peter0226.github.io/wdd230/";
const linksURL = "https://peter0226.github.io/wdd230/data/links.json";
const linksContent = document.querySelector('#links');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
  }
  
  getLinks();


  const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        let week = document.createElement('li');
        week.textContent = `Week ${lesson.lesson}: `;
        lesson.links.forEach((link, index) => {
        
            let newLink = document.createElement('a'); 

            newLink.href = link.url;
            newLink.textContent = link.title;
            if (link.type === "external") {
                newLink.target = "_blank";
            }
        
            week.appendChild(newLink); 
            linksContent.appendChild(week);
            if (index < lesson.links.length - 1) {
                week.appendChild(document.createTextNode(" | "));
            }
        });
    });
  }