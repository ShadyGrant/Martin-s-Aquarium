const fishCollection = [
    {
        name: "Dede",
        Species: "Decor",
        Location: "Red sea",
        Length: 2.5,
        food: ["algae", "crustaceans"],
        image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80",
    },
    {
        name: "Nene",
        Species: "Decor",
        Location: "Red sea",
        Length: 3,
        food: ["algae", "crustaceans"],
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7xhhlta3q-wVKpgzGdTlpAHaFj%26pid%3DApi&f=1",
    },
    {
        name: "Keke",
        Species: "Orange Clownfish",
        Location: "Caribbean",
        Length: 2.5,
        food: ["algae", "crustaceans"],
        image: "https://3.imimg.com/data3/IW/XT/GLADMIN-105863/fish-125x125.jpg",
    },
    {
        name: "Sese",
        Species: "Decor",
        Location: "lake",
        Length: 2,
        food: ["algae", "crustaceans"],
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedisneyinme.files.wordpress.com%2F2013%2F12%2Fdory.jpg&f=1&nofb=1",
    },
    {
        name: "Fefe",
        Species: "orange clownfish",
        Location: "Caribbean",
        Length: 3,
        food: ["algae", "crustaceans"],
        image: "https://www.petbarn.com.au/petspot/app/uploads/2011/09/summer-fish-keeping-800x533px.jpg",
    },
    {
        name: "Rere",
        Species: "Orange Clownfish",
        Location: "mid sea",
        Length: 4,
        food: ["algae", "crustaceans"],
        image: "https://aerosouldzines.files.wordpress.com/2010/07/coral-fish2.jpg",
    }
]

export const useFish = () => {
    return fishCollection.slice()
}
