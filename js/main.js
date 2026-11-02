
import data from './data/data.json' with {type : "json"}

function load_zones() {

    const zoneSelector = document.querySelector("#zone-selector");
    const article = document.querySelector("article");

    for (const link of data) {

        let zone = link.split("/");
        zone = zone[zone.length - 1]
            .replace(".ics", "")


        let option = document.createElement("option");
        option.value = link;
        option.innerText = zone;

        zoneSelector.appendChild(option)
    }

    zoneSelector.addEventListener("change", (el) => {
        
        let input = document.createElement("input");
        input.type = "url"
        input.value = el.target.value;

        let childnodes = article.querySelectorAll("input")
        for (const child of childnodes) {
            article.removeChild(child)
        }
        article.appendChild(input)

    })

}

load_zones();