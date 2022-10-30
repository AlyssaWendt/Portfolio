import self from "../img/self.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Alyssa",
    lastName: "Wendt",
    initials: "AW", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "📧",
            text: "alyssa95wendt@gmail.com"
        }
    ],
    socials: [
    
        {
            link: "https://github.com/AlyssaWendt",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/alyssa-wendt/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Alyssa. I'm an eager software developer with IT experience in civilian and government sector.",
    skills:
        {
            proficientWith: ['Javascript', 'Nodejs','Python','React', 'Git', 'Github', 'Bootstrap', 'HTML5', 'CSS3', 'Django', 'Postgres', 'Nextjs', 'MongoDB',  'JSON', 'EJS', 'Cisco CLI',
        ],
            exposedTo: [
                "Team Player","Analytical and problem-solving skills","Communication and collaboration skills","Attention to detail"

            ]
        },

    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        },
        {
            label: 'rugby',
            emoji: '🏉'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "ZodiacSMS",
            live: "https://zodiacsms.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/AlyssaWendt", // this should be a link to the **repository** of the project, where the code is hosted.
            image: "https://i.imgur.com/IEMDQAs.png"
        },
        {
            title: "Take Care Teddy",
            live: "https://alyssawendt.github.io/Take-Care-Teddy/",
            source: "https://github.com/AlyssaWendt/Take-Care-Teddy",
            image: "https://i.imgur.com/d80PP2G.png"
        },
        {
            title: "TravelHub",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: "https://i.imgur.com/5abYlR5.png"
        }
    ]
}