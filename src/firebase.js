import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyArsWTCeCLy2OIvO898sx5IJ1kRpf8vBZY',
  authDomain: 'disney-plus-clone-4734d.firebaseapp.com',
  projectId: 'disney-plus-clone-4734d',
  storageBucket: 'disney-plus-clone-4734d.appspot.com',
  messagingSenderId: '248081092439',
  appId: '1:248081092439:web:cc05c564a5d6242b9db812',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.firestore();

export { auth, provider, storage };
export default db;

// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;

const moviesARRAY = [
  {
    adult: false,
    backdrop_path: '/A8NQOYBIueFqy41bUud3I6FWLz2.jpg',
    genre_ids: [99],
    id: 655571,
    original_language: 'en',
    original_title: 'One Day at Disney',
    overview:
      'Discover the inspiring personal stories of the people behind the enduring magic of Disney.',
    popularity: 4.867,
    poster_path: '/q0g2K64QOoRhVVhCzF3WLMIoxtS.jpg',
    release_date: '2019-12-03',
    title: 'One Day at Disney',
    video: false,
    vote_average: 6.7,
    vote_count: 13,
  },
  {
    adult: false,
    backdrop_path: '/x3gRlImBMVdzctrIqpzzQozLP7I.jpg',
    genre_ids: [10751, 10402],
    id: 723975,
    original_language: 'en',
    original_title: 'Disney Channel Summer Sing-Along',
    overview:
      'Harnessing the unifying power of music, Disney Channel is presenting a night of entertainment for kids and families with two music specials featuring a bevy of fan-favorite Disney Channel stars, past and present, along with celebrity guests and popular artists.',
    popularity: 2.96,
    poster_path: '/er2sbtjYpXUZP2CYbTIOERT7ukA.jpg',
    release_date: '2020-07-10',
    title: 'Disney Channel Summer Sing-Along',
    video: false,
    vote_average: 7.7,
    vote_count: 3,
  },
  {
    adult: false,
    backdrop_path: '/edisblwuIFjQD3YEEkfRZrIpuNN.jpg',
    genre_ids: [10751, 14],
    id: 694040,
    original_language: 'en',
    original_title: 'The Disney Family Singalong',
    overview:
      'Ryan Seacrest hosts a nationwide singalong event featuring celebrities and their families as they take on their favorite Disney tunes from their homes; onscreen lyrics allow viewers to sing along.',
    popularity: 4.286,
    poster_path: '/CNQF4cQVVSFixkERbh3rLJGqQr.jpg',
    release_date: '2020-04-16',
    title: 'The Disney Family Singalong',
    video: false,
    vote_average: 8.2,
    vote_count: 10,
  },
  {
    adult: false,
    backdrop_path: '/uZcObQyrpo8w1ZXzMv62EwMB5kT.jpg',
    genre_ids: [35, 10751],
    id: 754560,
    original_language: 'en',
    original_title: 'Disney Channel Halloween House Party',
    overview:
      'Disney Channel fan-favorite stars take on a variety of zany characters and spooktacular spoofs in this sketch comedy show. Filmed remotely, and hosted by Tobie Windham (“Just Roll With It&rdquo, the cast transforms themselves and their homes for a hilarious party filled with wacky sketches, including a befuddled monster, a pet goldfish’s virtual celebration, and other ghostly surprises and treats for kids and families.',
    popularity: 4.673,
    poster_path: '/qkAy96zJBENSum8Dlfl2JudIgpa.jpg',
    release_date: '2020-10-16',
    title: 'Disney Channel Halloween House Party',
    video: false,
    vote_average: 8.5,
    vote_count: 2,
  },
  {
    adult: false,
    backdrop_path: '/eEqZkzIbozq2Mu6aQerUnCZlGcY.jpg',
    genre_ids: [10402],
    id: 800903,
    original_language: 'fr',
    original_title: '25e Anniversaire : Disney Illuminations',
    overview:
      'For this magical pre-recorded viewing of the Disneyland® Paris classic, “Disney Illuminations" you’re front and center for the amazing special effects and fireworks at Sleeping Beauty Castle. Prepare to hold your breath and “ahhhh” as the show recreates iconic Disney moments in ways you never thought possible!',
    popularity: 1.4,
    poster_path: '/1T1mUQK8tSaIZwOkT7Fmh3dBdWX.jpg',
    release_date: '2017-03-25',
    title: 'Disney Illuminations Firework Show Disneyland Paris',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/yHtslDmsrldF3AW13Cnu7bc6iv1.jpg',
    genre_ids: [10402, 35],
    id: 769647,
    original_language: 'en',
    original_title: 'The Disney Holiday Singalong',
    overview:
      'Returning for a third iteration, “The Disney Holiday Singalong” features more music and magic just in time for the holidays. The one-hour festive musical event includes star-studded performances, animated on-screen lyrics, more favorite Disney melodies and classic holiday songs.',
    popularity: 2.014,
    poster_path: '/ajWfaNxgu1z7aenyt3UyMnF9sfy.jpg',
    release_date: '2020-11-30',
    title: 'The Disney Holiday Singalong',
    video: false,
    vote_average: 8,
    vote_count: 6,
  },
  {
    adult: false,
    backdrop_path: '/Amq9yQBzRtBli5ooQzowTD63EPF.jpg',
    genre_ids: [],
    id: 766209,
    original_language: 'en',
    original_title: 'Disney Holiday Magic Quest',
    overview:
      'Raven-Symoné virtually hosts the challenge, which features "ZOMBIES 2" stars competing in a holiday adventure through Magic Kingdom Park. After iconic Disney villains Maleficent and Evil Queen steal holiday magic, the stars must overcome obstacles and complete challenges to restore the joy of the season.',
    popularity: 2.566,
    poster_path: '/pXmGA2prcVWpQB9KRXzXATnmhjw.jpg',
    release_date: '2020-12-04',
    title: 'Disney Holiday Magic Quest',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/fH143TVxsm4lf01kXSupkK0gWcf.jpg',
    genre_ids: [10751, 14, 10402],
    id: 702920,
    original_language: 'en',
    original_title: 'The Disney Family Singalong: Volume II',
    overview:
      'Ryan Seacrest hosts the second Disney Family Singalong featuring celebrities and their families as they take on their favorite Disney tunes from their homes. Special guests include John Legend, Christina Aguilera, Shakira, and Katy Perry.',
    popularity: 3.36,
    poster_path: '/uOYIKG0RfK6iWGQQXXY2vEHA7gI.jpg',
    release_date: '2020-05-10',
    title: 'The Disney Family Singalong: Volume II',
    video: false,
    vote_average: 7.6,
    vote_count: 7,
  },
  {
    adult: false,
    backdrop_path: '/z8CHx36Ze9FpTTRpijwZI0r3mgX.jpg',
    genre_ids: [10402, 99],
    id: 800740,
    original_language: 'ja',
    original_title: 'Disney マイ・ミュージック・ストーリー – Perfume',
    overview:
      'This documentary features the band performing their favourite classic Disney tracks, along with information on Perfume’s life stories, their passion for music, giving details of their favourite Disney memories and much more.',
    popularity: 1.263,
    poster_path: '/yAaF1m2lobbA3r3do5hGFjp42v7.jpg',
    release_date: '2020-01-31',
    title: 'Disney My Music Story: Perfume',
    video: true,
    vote_average: 8,
    vote_count: 1,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [10402, 10751],
    id: 694672,
    original_language: 'en',
    original_title: 'Celebrating 25 Magical Years of Disney on Broadway',
    overview:
      'Enjoy a special stream of Broadway Cares/Equity Fights AIDS’ benefit concert celebrating Disney on Broadway’s 25th anniversary. The online playback will raise money for Broadway Cares’ COVID-19 Emergency Assistance Fund, which is helping everyone in the theater and performing arts community impacted by the pandemic and work shutdown.  Ryan McCartan (Frozen) hosted the stream live from his family’s home and will interview special Disney on Broadway stars, from their homes, throughout the evening.  The show also included a much-anticipated, high-energy reunion of 18 Newsies from the show’s Broadway and national touring productions, and a moving performance from Broadway Inspirational Voices.  The November concert was directed by Casey Hushion. James Abbott was the music director and created the revised orchestrations. Howard Joines was the orchestra coordinator. The creative team included lighting designer Ryan J. O’Gara and sound designers Kurt Fischer and Marie Renee Foucher.',
    popularity: 3.287,
    poster_path: '/yXmt13BHuut2sA3hZZ6nblBcb9P.jpg',
    release_date: '2020-04-17',
    title: 'Celebrating 25 Magical Years of Disney on Broadway',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/lTg58KGbaURicvzvfZbuQ0tzp3U.jpg',
    genre_ids: [99],
    id: 719917,
    original_language: 'en',
    original_title: 'Adventure Thru the Walt Disney Archives',
    overview:
      'Adventure Thru the Walt Disney Archives will celebrate the lasting legacy of the Archives and provides an inside look at rarely seen treasures from the extensive collection. Each stop on the adventure offers a look at some of the iconic treasures that have played a role in shaping The Walt Disney Company.  The film, hosted by legendary producer Don Hahn, premiered on D23.com exclusively for D23 Gold Members on June 27, 2020.',
    popularity: 2.371,
    poster_path: '/wM0mkmtHFosGQpUg84jgf0htYnZ.jpg',
    release_date: '2020-06-27',
    title: 'Adventure Thru the Walt Disney Archives',
    video: false,
    vote_average: 6,
    vote_count: 1,
  },
  {
    adult: false,
    backdrop_path: '/dSeO4SaOPV8u9UDJPj0UxFL8W95.jpg',
    genre_ids: [35],
    id: 774869,
    original_language: 'en',
    original_title: 'Disney Channel Holiday House Party',
    overview:
      "This year Disney Channel is helping kids around the world get into the holiday spirit with a new special and we have all the details on how you can watch the Disney Channel Holiday House Party on TV or online.  The Disney Channel Holiday House Party is a new holiday-themed sketch comedy show that will feature all of your favorite Disney Channel stars participating remotely from their homes. The special will be hosted by Miranda May from the Disney Channel original series Bunk'd and will star Raphael Alejandro, Suzi Barrett, Issac Ryan Brown, Kylie Cantrall, Scarlett Estevez, Kaylin Hayman, Ramon Reed, Trevor Tordjman, Ruby Rose Turner and Tobie Windham.",
    popularity: 0.891,
    poster_path: '/bWwwuqzq3D8gfui9yGLXDAXJ19E.jpg',
    release_date: '2020-12-11',
    title: 'Disney Channel Holiday House Party',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/h1BGqudCTodBPbUkwVFlUV6u8bx.jpg',
    genre_ids: [10402, 10751],
    id: 769645,
    original_language: 'en',
    original_title:
      'The Wonderful World of Disney: Magical Holiday Celebration',
    overview:
      'Original hosts Derek and Julianne Hough return, kicking off the night with a glittering new holiday performance, while Trevor Jackson (Freeform’s “grown-ish”) hosts from Walt Disney World Resort in Florida. Together, they will take viewers on a wintry ride through fan-favorite performances and new heartwarming family moments.',
    popularity: 1.761,
    poster_path: '/4EQsIeQlojnvvuHzZ5Fm4ci62HX.jpg',
    release_date: '2020-11-26',
    title: 'The Wonderful World of Disney: Magical Holiday Celebration',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/i7KKPieIasF9IT9cpsZG5QDah67.jpg',
    genre_ids: [],
    id: 770989,
    original_language: 'pt',
    original_title: 'Pobre + A Casa Da Disney',
    overview: '',
    popularity: 0.6,
    poster_path: '/ioqv5Rl2OSY7uByk1BrrAnpIM8g.jpg',
    release_date: '2020-12-01',
    title: 'Pobre + A Casa Da Disney',
    video: true,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [99, 10751],
    id: 762062,
    original_language: 'es',
    original_title: 'Disney+ Presenta: Muchas historias, Un mismo lugar',
    overview: '',
    popularity: 0.6,
    poster_path: '/fhVqtYxi4AL83u52mwbhENnSgaz.jpg',
    release_date: '2020-11-10',
    title: 'Disney+ Presenta: Muchas historias, Un mismo lugar',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [],
    id: 780173,
    original_language: 'en',
    original_title: 'Disney Parks Magical Christmas Day Celebration',
    overview:
      "Hosted by Tituss Burgess and Julianne Hough from the Walt Disney World Resort in Florida, this year's iteration will feature merry musical performances by some of today's hottest artists  creating spectacular moments in exciting locations around the Parks, laugh-out-loud moments from Emmy® Award-winning actor Keegan-Michael Key, fun social moments with master TikTok creator Alex Ojeda, heartwarming family stories, Disney Cast Member highlights, a look into Disney Dreamers Academy and more festive surprises.",
    popularity: 0.6,
    poster_path: '/ki1OdQuqbWfoQgEZQb5DZVD6tTV.jpg',
    release_date: '2020-12-25',
    title: 'Disney Parks Magical Christmas Day Celebration',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/4HbFg7LYnuBxKYS0ZS3BJuQWrFA.jpg',
    genre_ids: [],
    id: 816704,
    original_language: 'en',
    original_title: 'Beauty and the Beast on the Disney Dream',
    overview:
      'Beauty and the Beast is the largest and most ambitious production to ever hit the stage on a Disney ship. The innovative take on the classic story transforms renowned songs into spectacular, show-stopping numbers and creates a visual panorama that reaches beyond the stage and into the audience.  Drawing inspiration from the live-action film, the stage musical uses the scenic motif of a music box to guide you through the story. A transforming set takes you on a magical journey through the music box, from Belle’s provincial French town to the Beast’s mysterious castle. In fact, high-definition video projections immerse you in 23 different locations, which is quite a feat for a theatrical production.',
    popularity: 0.6,
    poster_path: '/84uLXd4w2Js0lIOgrHw8Ogy9OS8.jpg',
    release_date: '2020-08-08',
    title: 'Beauty and the Beast on the Disney Dream',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [99],
    id: 757998,
    original_language: 'en',
    original_title: 'On the Lot with Becky Cline - Disney Studio Tour',
    overview:
      'Walt Disney Archives Director Becky Cline leads Disney Files Magazine Editor Ryan March on an insider tour of the Walt Disney Studios lot in Burbank, Calif., exploring hidden tunnels, the Ink & Paint Lab, Walt Disney’s office suite and other historic sites.',
    popularity: 0.626,
    poster_path: '/msTxBAWuXpk4Pnk3FECQXnEEfkw.jpg',
    release_date: '2020-10-23',
    title: 'On the Lot with Becky Cline - Disney Studio Tour',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/8Fipsuf4NtzQ8vn6wHebXaXLddy.jpg',
    genre_ids: [10402, 10751, 35],
    id: 761740,
    original_language: 'en',
    original_title: 'Frozen, A Musical Spectacular',
    overview:
      'For the first time in forever, Disney Cruise Line shared full video of Frozen, A Musical Spectacular to enjoy on land featuring the opening cast. Frozen, A Musical Spectacular is presented exclusively aboard the Disney Wonder and Disney Fantasy. The show is a full-length retelling of Anna and Elsa’s Frozen adventure in Arendelle based on the Disney animated movie. Frozen, A Musical Spectacular revisits the captivating escapades of royal sisters Anna and Elsa when an accident as children changes their lives—and their relationship—forever.',
    popularity: 6.773,
    poster_path: '/cDm5ON9PLj1plyjPurdiRPkByOT.jpg',
    release_date: '2020-11-06',
    title: 'Frozen, A Musical Spectacular',
    video: true,
    vote_average: 7,
    vote_count: 2,
  },
  {
    adult: false,
    backdrop_path: '/7E3hdaEYz6WJ0DGbuNCy3KrukFg.jpg',
    genre_ids: [10402, 10751],
    id: 708392,
    original_language: 'en',
    original_title: 'Tangled: The Musical',
    overview:
      "A live recording of Disney's Tangled: The Musical, an original live stage production exclusively on the Disney Magic cruise ship.",
    popularity: 4.649,
    poster_path: '/pwKFyav6nNI4ONzv3tBTn3jzOU7.jpg',
    release_date: '2020-07-24',
    title: 'Tangled: The Musical',
    video: true,
    vote_average: 6.8,
    vote_count: 3,
  },
  {
    adult: false,
    backdrop_path: '/hEeTr3qAh2drYE6EYosFeGKgwSb.jpg',
    genre_ids: [99],
    id: 897298,
    original_language: 'en',
    original_title: 'Pixar 2021 Disney+ Day Special',
    overview:
      'Join Pete Docter for a tour around Pixar and get a sneak peek at several upcoming Disney+ releases.',
    popularity: 11.229,
    poster_path: '/lwm4suR4rF61kiNUqEQEdGE55QU.jpg',
    release_date: '2021-11-12',
    title: 'Pixar 2021 Disney+ Day Special',
    video: false,
    vote_average: 6,
    vote_count: 7,
  },
  {
    adult: false,
    backdrop_path: '/vn8G4EZjKnO5SuXHLYN3YWuDEyz.jpg',
    genre_ids: [99],
    id: 877188,
    original_language: 'en',
    original_title: "Marvel Studios' 2021 Disney+ Day Special",
    overview: 'Explore the Disney+ series of the MCU—past, present and future.',
    popularity: 10.522,
    poster_path: '/zh0B5DDP93e3zokktb5aHHfIh01.jpg',
    release_date: '2021-11-12',
    title: "Marvel Studios' 2021 Disney+ Day Special",
    video: false,
    vote_average: 6.6,
    vote_count: 11,
  },
  {
    adult: false,
    backdrop_path: '/eEqZkzIbozq2Mu6aQerUnCZlGcY.jpg',
    genre_ids: [10402],
    id: 800903,
    original_language: 'fr',
    original_title: '25e Anniversaire : Disney Illuminations',
    overview:
      'For this magical pre-recorded viewing of the Disneyland® Paris classic, “Disney Illuminations" you’re front and center for the amazing special effects and fireworks at Sleeping Beauty Castle. Prepare to hold your breath and “ahhhh” as the show recreates iconic Disney moments in ways you never thought possible!',
    popularity: 1.4,
    poster_path: '/1T1mUQK8tSaIZwOkT7Fmh3dBdWX.jpg',
    release_date: '2017-03-25',
    title: 'Disney Illuminations Firework Show Disneyland Paris',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/z9GZxKxA6GQvKRD6u8rcf7XLoRO.jpg',
    genre_ids: [10402],
    id: 850056,
    original_language: 'en',
    original_title: 'Disney Princess Remixed: An Ultimate Princess Celebration',
    overview:
      'A music special celebrating the empowering attributes of Disney princesses and queens through re-imagined performances of their iconic songs by Disney stars.',
    popularity: 3.307,
    poster_path: '/aanpR48XsGzRFKx79aHLbVQsNEu.jpg',
    release_date: '2021-08-27',
    title: 'Disney Princess Remixed: An Ultimate Princess Celebration',
    video: false,
    vote_average: 6,
    vote_count: 6,
  },
  {
    adult: false,
    backdrop_path: '/z8CHx36Ze9FpTTRpijwZI0r3mgX.jpg',
    genre_ids: [10402, 99],
    id: 800740,
    original_language: 'ja',
    original_title: 'Disney マイ・ミュージック・ストーリー – Perfume',
    overview:
      'This documentary features the band performing their favourite classic Disney tracks, along with information on Perfume’s life stories, their passion for music, giving details of their favourite Disney memories and much more.',
    popularity: 1.263,
    poster_path: '/yAaF1m2lobbA3r3do5hGFjp42v7.jpg',
    release_date: '2020-01-31',
    title: 'Disney My Music Story: Perfume',
    video: true,
    vote_average: 8,
    vote_count: 1,
  },
  {
    adult: false,
    backdrop_path: '/t7DmpLxr4GenAPG9enhPuYXsf3b.jpg',
    genre_ids: [10402, 99, 10770],
    id: 880862,
    original_language: 'en',
    original_title:
      'The Most Magical Story on Earth: 50 Years of Walt Disney World',
    overview:
      'A historical journey spanning half a century and beyond at Walt Disney World, featuring spectacular visuals, musical performances, and interviews.',
    popularity: 4.798,
    poster_path: '/xotGafR6hFdfYJAzxqF5T1bE2tm.jpg',
    release_date: '2021-10-01',
    title: 'The Most Magical Story on Earth: 50 Years of Walt Disney World',
    video: false,
    vote_average: 9,
    vote_count: 2,
  },
  {
    adult: false,
    backdrop_path: '/pgE7MKIaRN9TdcKOPuJ0WUG23a4.jpg',
    genre_ids: [10402, 99],
    id: 787922,
    original_language: 'en',
    original_title: 'Disney マイ・ミュージック・ストーリー – YOSHIKI',
    overview:
      'Expect to see Yoshiki perform new arrangements and performances of hit songs Let It Go from Frozen, and Can You Feel the Love Tonight from The Lion King. Of course, we’ll also see performances of some iconic X Japan songs such as Endless Rain, and Without You. In addition to all of this, Yoshiki will give fans an intimate look at his musical origins and recording process at his L.A. studio.',
    popularity: 0.93,
    poster_path: '/cjZQ20H30jDkyU1RTAtwu9RAXs9.jpg',
    release_date: '2021-02-05',
    title: 'Disney My Music Story: YOSHIKI',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [27, 9648],
    id: 792684,
    original_language: 'en',
    original_title: 'Disney after Dark.',
    overview:
      'A look at a Disney Hotel once the lights are down and the guests are away... and the mystery that may or may not be hidden from the public eye.',
    popularity: 0.6,
    poster_path: '/1dSxsrp3N30w2lgGT3YKViIUPW2.jpg',
    release_date: '2021-01-30',
    title: 'Disney after Dark.',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/5dovrfSZ85wf0WN3fXC94Mh357m.jpg',
    genre_ids: [10770],
    id: 899878,
    original_language: 'en',
    original_title: "Disney's Holiday Magic Quest",
    overview:
      'The stars from "ZOMBIES" navigate a series of new challenges and obstacles through a variety of iconic and immersive Walt Disney World attractions.',
    popularity: 3.323,
    poster_path: '/mP5I5x5XqOwfFpWr8qylH5zBvrn.jpg',
    release_date: '2021-12-03',
    title: "Disney's Holiday Magic Quest",
    video: false,
    vote_average: 6,
    vote_count: 1,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [10751, 10402],
    id: 920013,
    original_language: 'en',
    original_title: 'Disney Parks Magical Christmas Day Parade',
    overview:
      'Featuring the Christmas Day Parade down Main Street U.S.A., heartwarming stories and amazing celebrity performances. Viewers will also get a special look at "the most magical flight on earth".',
    popularity: 1.4,
    poster_path: '/9ikQYfxRVZOC7FQCPHmPmh5sV41.jpg',
    release_date: '2021-12-25',
    title: 'Disney Parks Magical Christmas Day Parade',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/rV0T2UkRrXPqv5goR9Zaf0igQgh.jpg',
    genre_ids: [99],
    id: 920208,
    original_language: 'fr',
    original_title: "Walt Disney, l'homme qui voulait changer le monde",
    overview: '',
    popularity: 1.101,
    poster_path: '/ibVg6rBfnseZJLudeVUh2vw75iN.jpg',
    release_date: '2021-12-10',
    title: "Walt Disney, l'homme qui voulait changer le monde",
    video: false,
    vote_average: 8.5,
    vote_count: 2,
  },
  {
    adult: false,
    backdrop_path: '/qWlFpHd047E5vdsDn4XideSXTt0.jpg',
    genre_ids: [10402, 10751],
    id: 905029,
    original_language: 'en',
    original_title:
      'The Wonderful World of Disney: Magical Holiday Celebration',
    overview:
      'Celebrity musical performances; sneak peeks at new adventures to come at Disney Parks.',
    popularity: 1.132,
    poster_path: '/1vsehA0goaU4MmOBAxP7W0XqWsk.jpg',
    release_date: '2021-11-28',
    title: 'The Wonderful World of Disney: Magical Holiday Celebration',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [99],
    id: 920152,
    original_language: 'fr',
    original_title: 'Disney : Les Secrets de la Magie',
    overview: 'Discover the secrets of Disney',
    popularity: 0.6,
    poster_path: null,
    release_date: '2021-12-24',
    title: 'Disney : Les Secrets de la Magie',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/do1IvKEUoUH43OhE2n6flAN8vlj.jpg',
    genre_ids: [10402],
    id: 538040,
    original_language: 'en',
    original_title: "Disney's Broadway Hits at London's Royal Albert Hall",
    overview:
      "Experience the Disney on Broadway songs you know and love in a whole new way from the comfort of your home. Disney's Broadway Hits at Royal Albert Hall is now available on demand!",
    popularity: 3.983,
    poster_path: '/1b5DD2dz9CqLrG5v6pFtaaVNxRY.jpg',
    release_date: '2016-12-21',
    title: "Disney's Broadway Hits at London's Royal Albert Hall",
    video: false,
    vote_average: 7.8,
    vote_count: 4,
  },
  {
    adult: false,
    backdrop_path: '/uIGbye92DBh3PQ645ZnS5gz5PkN.jpg',
    genre_ids: [18],
    id: 818367,
    original_language: 'en',
    original_title: "Let's Be Tigers",
    overview:
      "Avalon’s not ready to process the loss of her mother, but when she's put in charge of a 4-year-old for one night, she finds more comfort than she ever could have expected.",
    popularity: 14.112,
    poster_path: '/hPaF9ICdWIAubVAsM9t8elG5ddV.jpg',
    release_date: '2021-05-28',
    title: "Let's Be Tigers",
    video: false,
    vote_average: 6.9,
    vote_count: 10,
  },
  {
    adult: false,
    backdrop_path: '/eakQ2Gn1HxuOaSj3VrbIzcDKHy3.jpg',
    genre_ids: [10751, 18],
    id: 818370,
    original_language: 'en',
    original_title: 'The Little Prince(ss)',
    overview:
      "When Gabriel, a 7-year-old Chinese kid who loves ballet, becomes friends with Rob, another Chinese kid from school, Rob’s dad gets suspicious about Gabriel's feminine behavior and decides to intervene.",
    popularity: 18.396,
    poster_path: '/4O65UNeSnWqRcuTUFcy75PluCzz.jpg',
    release_date: '2021-05-28',
    title: 'The Little Prince(ss)',
    video: false,
    vote_average: 7.3,
    vote_count: 107,
  },
  {
    adult: false,
    backdrop_path: '/253Fdzx1V6gsQ7MlQ6nkceXhVtx.jpg',
    genre_ids: [18],
    id: 818356,
    original_language: 'en',
    original_title: 'Growing Fangs',
    overview:
      'Val Garcia, a Mexican-American teen who is half human/half vampire, has had to keep her identity a secret from both worlds. But when her human best friend shows up at her monster-infested school, she has to confront her truth, her identity, and herself.',
    popularity: 9.812,
    poster_path: '/4aOSsGy8Pal5VgtiBkhw27boVk1.jpg',
    release_date: '2021-05-28',
    title: 'Growing Fangs',
    video: false,
    vote_average: 6.8,
    vote_count: 11,
  },
  {
    adult: false,
    backdrop_path: '/mtiV9I1OswrwfMT2yWa3HRDgQXP.jpg',
    genre_ids: [18, 10749, 16],
    id: 779047,
    original_language: 'en',
    original_title: 'Us Again',
    overview:
      'In a vibrant city pulsating with rhythm and movement, an elderly man and his young-at-heart wife rekindle their youthful passion for life and each other on one magical night.',
    popularity: 9.501,
    poster_path: '/zKnenwvQB6xA4mxc8zxL2S8qVbR.jpg',
    release_date: '2021-03-03',
    title: 'Us Again',
    video: false,
    vote_average: 8,
    vote_count: 218,
  },
  {
    adult: false,
    backdrop_path: '/6xVPduB3kZlrqWAawvriOXJdD61.jpg',
    genre_ids: [18, 35],
    id: 15198,
    original_language: 'en',
    original_title: 'Mystery, Alaska',
    overview:
      'In Mystery, Alaska, life revolves around the legendary Saturday hockey game at the local pond. But everything changes when the hometown team unexpectedly gets booked in an exhibition match against the New York Rangers. When quirky small-towners, slick promoters and millionaire athletes come together.',
    popularity: 11.022,
    poster_path: '/bmg4sjOQswcrP5mPL9YzNom9cXx.jpg',
    release_date: '1999-10-01',
    title: 'Mystery, Alaska',
    video: false,
    vote_average: 6.2,
    vote_count: 186,
  },
  {
    adult: false,
    backdrop_path: '/lSFR4mw9T7vFwS9NOikhIe5aTKO.jpg',
    genre_ids: [18],
    id: 818336,
    original_language: 'en',
    original_title: 'American Eid',
    overview:
      'Ameena, a Muslim Pakistani immigrant, wakes up on Eid to find out that she has to go to school. Homesick and heartbroken, she goes on a mission to make Eid a public-school holiday, and in the process, reconnects with her older sister, and embraces her new home, while her new home embraces her.',
    popularity: 3.76,
    poster_path: '/xrWefFCMuYWSuL7B4wPFw262J2Y.jpg',
    release_date: '2021-05-28',
    title: 'American Eid',
    video: false,
    vote_average: 7,
    vote_count: 10,
  },
  {
    adult: false,
    backdrop_path: '/A8NQOYBIueFqy41bUud3I6FWLz2.jpg',
    genre_ids: [99],
    id: 655571,
    original_language: 'en',
    original_title: 'One Day at Disney',
    overview:
      'Discover the inspiring personal stories of the people behind the enduring magic of Disney.',
    popularity: 4.867,
    poster_path: '/q0g2K64QOoRhVVhCzF3WLMIoxtS.jpg',
    release_date: '2019-12-03',
    title: 'One Day at Disney',
    video: false,
    vote_average: 6.7,
    vote_count: 13,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [10402],
    id: 650410,
    original_language: 'en',
    original_title: 'Disney Hall of Villains',
    overview:
      'Superstar host Meg Donnelly takes you on a journey down a haunted hallway where behind every door awaits a villain-tastic surprise!',
    popularity: 1.796,
    poster_path: '/xQaZTFiNjLExDAg9sCKv0G0fj0c.jpg',
    release_date: '2019-10-13',
    title: 'Disney Hall of Villains',
    video: false,
    vote_average: 9.5,
    vote_count: 2,
  },
  {
    adult: false,
    backdrop_path: '/fO709E3eEKcH2iKNhqKriuIIX46.jpg',
    genre_ids: [],
    id: 901324,
    original_language: 'en',
    original_title: 'Disney 2019',
    overview: 'The story of one family and the vacation of a lifetime.',
    popularity: 0.6,
    poster_path: '/8R9BivV3EWxDGnOWER7g5Ft8Qhs.jpg',
    release_date: '2019-12-22',
    title: 'Disney 2019',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/7LdrWejkJRPo0tjJ6ty0pEuorgI.jpg',
    genre_ids: [10402, 10751, 10770],
    id: 716654,
    original_language: 'en',
    original_title: 'Disney Channel Holiday Party @ Walt Disney World',
    overview:
      'Disney Channel’s “ZOMBIES 2” stars Meg Donnelly and Milo Manheim co-host this holiday party with artist Matthew Morrison, treating you to a magical holiday celebration. Featured performers include Shaggy, Pentatonix and Disney Channel stars Issac Ryan Brown (“Raven’s Home“), Ruby Rose Turner (“Coop & Cami Ask the World”) and Kylie Cantrall (“Gabby Duran & The Unsittables”). The whole show is broadcast from Walt Disney World Resort in Florida and aboard the majestic Disney Fantasy – part of the Disney Cruise Line fleet.',
    popularity: 0.626,
    poster_path: '/737uiN1cnk8ygvl1ISi0jL9gU0z.jpg',
    release_date: '2019-12-13',
    title: 'Disney Channel Holiday Party @ Walt Disney World',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/85IVAqzhfidGB0KiJlEN9J4g1Of.jpg',
    genre_ids: [10751],
    id: 651780,
    original_language: 'en',
    original_title:
      'The Wonderful World of Disney: Magical Holiday Celebration',
    overview:
      "The Wonderful World of Disney: Magical Holiday Celebration kicked off the holiday season with one grand TV special. Matthew Morrison, Emma Bunton, and Jesse Palmer co-hosted the holiday special on Thanksgiving night from Cinderella Castle at Walt Disney World Resort in Florida and Sleeping Beauty Castle at Disneyland Resort in California. Today's favorite artists also show up to the happiest places on Earth to get in on the festive fun. From epic duets to solo numbers, this TV special is perfect holiday entertainment.",
    popularity: 1.5,
    poster_path: '/4VAG2dm7xrI8dPhfp4qXIhE21vY.jpg',
    release_date: '2019-11-28',
    title: 'The Wonderful World of Disney: Magical Holiday Celebration',
    video: false,
    vote_average: 7.8,
    vote_count: 6,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [],
    id: 949636,
    original_language: 'en',
    original_title: "Disney's Cinderella 2 Tagalog dub",
    overview:
      'After Cinderella had became a Princess she needs to face the controversy in the palace with strict roles and a three events of adventures lends to a beautiful second fairytale after Cinderella\'s first story as her new adventures ".',
    popularity: 0.84,
    poster_path: null,
    release_date: '2019-11-27',
    title: "Disney's Cinderella 2 Tagalog dub",
    video: true,
    vote_average: 2,
    vote_count: 1,
  },
  {
    adult: false,
    backdrop_path: '/6xVPduB3kZlrqWAawvriOXJdD61.jpg',
    genre_ids: [18, 35],
    id: 15198,
    original_language: 'en',
    original_title: 'Mystery, Alaska',
    overview:
      'In Mystery, Alaska, life revolves around the legendary Saturday hockey game at the local pond. But everything changes when the hometown team unexpectedly gets booked in an exhibition match against the New York Rangers. When quirky small-towners, slick promoters and millionaire athletes come together.',
    popularity: 11.022,
    poster_path: '/bmg4sjOQswcrP5mPL9YzNom9cXx.jpg',
    release_date: '1999-10-01',
    title: 'Mystery, Alaska',
    video: false,
    vote_average: 6.2,
    vote_count: 186,
  },
  {
    adult: false,
    backdrop_path: '/8Fp6sLzRDiR0FgYLWeBhmPGzJAY.jpg',
    genre_ids: [10402],
    id: 642271,
    original_language: 'en',
    original_title: 'The Little Mermaid Live!',
    overview:
      'Live musical performances by a star-studded cast will be interwoven into the broadcast of the animated classic.',
    popularity: 5.891,
    poster_path: '/mVZklqsmbbkOgTG4o0nVtM8rJ82.jpg',
    release_date: '2019-11-05',
    title: 'The Little Mermaid Live!',
    video: false,
    vote_average: 6.9,
    vote_count: 30,
  },
  {
    adult: false,
    backdrop_path: '/9c1rYqUGEgee9xGNGiafiX341cN.jpg',
    genre_ids: [99, 10751],
    id: 508802,
    original_language: 'en',
    original_title: 'Penguins',
    overview:
      'The story of Steve, an Adélie penguin, on a quest to find a life partner and start a family. When Steve meets with Wuzzo the emperor penguin they become friends. But nothing comes easy in the icy Antarctic.',
    popularity: 4.404,
    poster_path: '/eMSuKJ2e5VgYFr4SwOTLnnl5L15.jpg',
    release_date: '2019-04-17',
    title: 'Penguins',
    video: false,
    vote_average: 7.1,
    vote_count: 27,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [99],
    id: 607907,
    original_language: 'fr',
    original_title: "Phantom Manor : Une Attraction Pleine d'Esprits",
    overview:
      'Join us for a very private tour of this special place with the Imagineers, the designers of the Disney Parks who participated in the great refurbishment of the attraction.',
    popularity: 0.6,
    poster_path: '/nNBwsXWlLJmpLNoZU9RR6zUezHq.jpg',
    release_date: '2019-06-07',
    title: 'Phantom Manor: A High-Spirited Attraction',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
];

// moviesARRAY.forEach(mov => {
//   db.collection('movies').add({
//     backgroundImg: mov.backdrop_path,
//     cardImg: mov.poster_path,
//     description: mov.overview,
//     idAPI: mov.id,
//     subTitle: `Popularity: ${mov.popularity} Release date: ${mov.release_date}`,
//     title: mov.original_title,
//     titleImg: mov.poster_path,
//     type: 'recommend',
//   });
// });
