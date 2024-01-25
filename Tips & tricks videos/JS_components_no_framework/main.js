import card from "./components/card.js";
import header from "./components/header.js";
import footer from "./components/footer.js";

const root = document.getElementById('root')

const data = [
    {
        img: "https://picsum.photos/600?random=1", 
        user: "Jon Doe",
        created_at: "25 Jan, 2024"
    },
    {
        img: "https://picsum.photos/600?random=2", 
        user: "Sarah Doe",
        created_at: "10 Jan, 2024"
    },
    {
        img: "https://picsum.photos/600?random=3", 
        user: "Mike Doe",
        created_at: "25 Dec, 2023"
    }
]

root.insertAdjacentHTML("beforebegin", header())
root.insertAdjacentHTML("afterend", footer())

data.forEach(el => {

    root.innerHTML += card(el.img, el.user, el.created_at)
})
