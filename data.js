// Edit this file to change the stories or swap the photographs.
// Each entry is one pair: the man who got the credit (shown first)
// and the woman who did the work (revealed on hover).
//
// photo: a URL or a path like "img/joan-clarke.jpg". Leave it as ""
// and the site shows a "no photograph on file" frame instead.

const PAIRS = [
  {
    id: "clarke-turing",
    field: "Codebreaking, Bletchley Park",
    him: {
      name: "Alan Turing",
      years: "1912–1954",
      role: "Mathematician, Hut 8",
      photo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Alan_turing_header.jpg",
      credit:
        "Turing played a central role in developing the British Bombe, building on earlier Polish cryptographic breakthroughs and working alongside Gordon Welchman. He also led Hut 8 in its efforts to decipher German naval Enigma."
    },
    her: {
      name: "Joan Clarke",
      years: "1917–1996",
      role: "Cryptanalyst, Hut 8",
      photo: "https://upload.wikimedia.org/wikipedia/en/3/35/Joan_Clarke_%28cryptanalyst%29.jpg",
      lede: "The only woman breaking naval Enigma in Hut 8, paid as a linguist because no pay grade existed for a female cryptanalyst.",
      story: [
        "Joan Clarke was a Cambridge mathematician with a double first she was never formally awarded, because Cambridge did not grant full degrees to women until 1948. Her supervisor, Gordon Welchman, recruited her to Bletchley Park in 1940.",
        "Within months she was working alongside Turing in Hut 8 on the German naval Enigma, the cipher protecting the U-boats that were strangling Britain's Atlantic supply lines. She became expert in Banburismus, the statistical technique that cut the Bombe's workload, and was regarded as one of the hut's best practitioners of it.",
        "The Civil Service had no job title for a woman doing this work, so she was classified and paid as a linguist. She later joked that on the form she wrote \"grade: linguist, languages: none\". Her male colleagues doing the same job earned more.",
        "She was briefly engaged to Turing in 1941. In 1944 she became deputy head of Hut 8. After the war she continued working in British intelligence and received an MBE for her wartime contributions. Bound by the Official Secrets Act, she said almost nothing about her work for the rest of her life.",
        "When her story reached a wider audience through The Imitation Game, much of the narrative centred on her relationship with Turing rather than her independent mathematical achievements."
      ],
      sources: [
        { label: "Joan Clarke, Mac Tutor", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Clarke_Joan/" },
        { label: "Bletchley Park Roll of Honour", url: "https://bletchleypark.org.uk/roll-of-honour/" }
      ]
    }
  },
  {
    id: "batey-cunningham",
    field: "Naval intelligence, Mediterranean",
    him: {
      name: "Admiral Andrew Cunningham",
      years: "1883–1963",
      role: "Commander-in-Chief, Mediterranean Fleet",
      photo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Andrew_Cunningham_1947.jpg",
      credit:
        "Cunningham commanded the Royal Navy's victory at Cape Matapan in March 1941, the heaviest Italian naval defeat of the war. It made him a national hero, and he rose to Admiral of the Fleet, First Sea Lord and a viscountcy. Cunningham personally thanked the Bletchley Park codebreakers, but the secrecy surrounding their work prevented their contributions from becoming publicly known for decades."
    },
    her: {
      name: "Mavis Batey",
      years: "1921–2013",
      role: "Codebreaker, Dilly Knox's research section",
      photo: "img/mavis-batey.png",
      lede: "At nineteen she broke the Italian naval Enigma message that told the Royal Navy where the enemy fleet would be.",
      story: [
        "Mavis Lever was a nineteen-year-old German student at University College London when she was recruited to Bletchley Park and placed in the small research section run by the eccentric classicist Dilly Knox. Knox liked to hire young women and trusted them with the hardest problems.",
        "In March 1941 she broke an Italian naval Enigma message that read, in effect, \"today's the day minus three\". The messages that followed laid out the Italian fleet's plan to attack British convoys to Greece. The intelligence went to Cunningham, who sailed to meet them. At Cape Matapan on 28 and 29 March, the Royal Navy sank three cruisers and two destroyers for the loss of a single aircraft.",
        "Later that year, working with Margaret Rock, she broke the Enigma used by the Abwehr, German military intelligence. That break let British intelligence read the Abwehr's own traffic and confirm that its captured spies were feeding Germany the false invasion plans of the Double Cross system, which helped keep the German army away from Normandy in June 1944.",
        "Knox died in 1943. Cunningham's victory stayed in the history books under his name, because the existence of Ultra, the codebreaking source, was secret until 1974. By then Mavis Batey had become a garden historian; she received an MBE in 1987 for that, not for Matapan.",
        "She described her wartime self as \"just one of the girls\". The men she worked for are the ones with biographies."
      ],
      sources: [
        { label: "Mavis Batey, UCL", url: "https://www.ucl.ac.uk/about/search-faces-ucl/breaking-bletchley-mavis-batey-student-codebreaker" },
        { label: "Obituary, The Telegraph (2013)", url: "https://www.telegraph.co.uk/news/obituaries/10446409/Mavis-Batey.html" }
      ]
    }
  },
  {
    id: "fawcett-tovey",
    field: "The sinking of the Bismarck",
    him: {
      name: "Admiral John Tovey",
      years: "1885–1971",
      role: "Commander-in-Chief, Home Fleet",
      photo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Tovey-TR_002931.jpg",
      credit:
        "Tovey led the hunt for the German battleship Bismarck in May 1941 after it sank HMS Hood. When the Bismarck was found and destroyed on 27 May, the victory was his: Churchill announced it in the Commons, and Tovey ended his career as Admiral of the Fleet and a baron. How the Navy knew which way the Bismarck had turned was never explained."
    },
    her: {
      name: "Jane Fawcett",
      years: "1921–2016",
      role: "Decoder, Hut 6",
      photo: "img/jane-fawcett.png",
      lede: "She decoded the message that revealed where the Bismarck was heading, two days before it was sunk.",
      story: [
        "Jane Hughes was eighteen, a former debutante and ballet student, when a friend suggested she apply to Bletchley Park. She was put in Hut 6, where thousands of decoded German army and air force messages passed through the hands of young women who turned the Bombe's output into readable German.",
        "On 25 May 1941 the Bismarck had shaken off its pursuers and the Royal Navy had lost it. That evening she decoded a Luftwaffe message: a senior German air force officer, anxious about a relative serving on the ship, had asked where it was going. The answer was Brest, on the French Atlantic coast.",
        "That single message told the Admiralty which way to turn the fleet. Two days later the Bismarck was caught and sunk. She was told what the message had meant, and then told never to speak of it.",
        "She kept that promise for more than thirty years, and in the meantime became an opera singer and then the secretary of the Victorian Society, where she led the campaign that saved St Pancras station from demolition. Her MBE, in 1976, was for conservation.",
        "Only in old age did she talk about the Bismarck, and she was matter-of-fact about it: it was a job, and thousands of women did it. None of their names are on the memorials to the ships."
      ],
      sources: [
        { label: "Jane Fawcett, Wikipedia", url: "https://en.wikipedia.org/wiki/Jane_Fawcett" },
        { label: "Obituary, The Guardian (2016)", url: "https://www.theguardian.com/world/2016/jun/01/jane-fawcett-obituary" }
      ]
    }
  },
  {
    id: "babington-smith-sandys",
    field: "Photographic intelligence, the V-1",
    him: {
      name: "Duncan Sandys",
      years: "1908–1987",
      role: "Chair of the Crossbow committee, Churchill's son-in-law",
      photo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Duncan_Sandys_1975.png",
      credit:
        "In 1943 Churchill put Sandys in charge of the investigation into German secret weapons, and he chaired the committee that directed the bombing of launch sites. In September 1944 it was Sandys who stood before the press and declared that \"the Battle of London is over\". He went on to a long cabinet career. The flying bomb had been found months earlier by a woman with a magnifying glass."
    },
    her: {
      name: "Constance Babington Smith",
      years: "1912–2000",
      role: "Photographic interpreter, RAF Medmenham",
      photo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Constance_Babington_Smith_award.webp",
      lede: "She found the first V-1 flying bomb on a reconnaissance photograph of Peenemünde, a shape a few millimetres long.",
      story: [
        "Constance Babington Smith joined the Women's Auxiliary Air Force in 1940 and was posted to the Allied Central Interpretation Unit at RAF Medmenham, where reconnaissance photographs from across occupied Europe were examined under stereoscopes. She was put in charge of the aircraft section and built it into a team that could identify a new German type from a wingtip.",
        "In 1943 the intelligence services knew Germany was building secret weapons at Peenemünde on the Baltic, but not what they looked like. She went back through old photographs of the site and in November found a tiny cruciform shape on a ramp: the first sighting of the Fieseler Fi 103, the V-1 flying bomb. She then identified the same ramps at sites across northern France, pointed at London.",
        "That discovery launched Operation Crossbow, the bombing campaign that destroyed many launch sites before they could fire. The V-1 offensive, when it came in June 1944, was smaller and later than Germany had planned.",
        "She received an MBE in 1945 and the American Legion of Merit, and wrote her own account, Evidence in Camera, in 1957. The 1965 film Operation Crossbow gave her a few scenes, played by Sylvia Syms, while the leading roles went to fictional men.",
        "She later wrote biographies of other people and, by her own account, was happiest with the technical work. The public announcements were made by politicians."
      ],
      sources: [
        { label: "Constance Babington Smith, MigFlug", url: "https://migflug.com/afterburner/constance-babington-smith-v-1-peenemunde-medmenham/" },
        { label: "Imperial War Museums, Medmenham", url: "https://www.iwm.org.uk/history/the-secret-wartime-work-of-the-photographic-interpreters" }
      ]
    }
  },
  {
    id: "curran-jones",
    field: "Radar countermeasures",
    him: {
      name: "R. V. Jones",
      years: "1911–1997",
      role: "Head of scientific intelligence, Air Ministry",
      photo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Jones-Woolsey-deClarens.gif",
      credit:
        "Jones ran scientific intelligence for the Air Ministry, won the \"Battle of the Beams\" against German navigation systems and argued for the use of Window against German radar. His memoir Most Secret War made him the storyteller of the electronic war, and the story of Window is usually told through him. The device itself was designed by a physicist whose name is in his book, but not on the honours lists."
    },
    her: {
      name: "Joan Curran",
      years: "1916–1999",
      role: "Physicist, Telecommunications Research Establishment",
      photo: "https://upload.wikimedia.org/wikipedia/en/a/a8/Joan_Curran.jpg",
      lede: "She invented Window, the strips of aluminium foil that blinded German radar and saved thousands of bomber crews.",
      story: [
        "Joan Strothers came from Swansea to Newnham College, Cambridge, on a scholarship to read physics. She completed the degree in 1937 but was not given one, because Cambridge did not award degrees to women. She went on to the Cavendish Laboratory, married the physicist Sam Curran, and followed the war work from Exeter to Leeds to the Telecommunications Research Establishment at Great Malvern.",
        "There, in 1942, she took on the problem of how to blind German radar. Her answer, after trying wires, leaflets and sheets of foil, was bundles of thin aluminium strips cut to half the wavelength of the enemy radar. Dropped from a bomber they filled the screens with thousands of false echoes. The British called it Window; the Americans later called it chaff.",
        "It was held back for a year for fear Germany would copy it, then first used on the night of 24 July 1943 over Hamburg. German night fighters and flak were thrown into confusion and bomber losses fell sharply. Chaff is still carried by military aircraft today.",
        "She went on to work on the proximity fuze and then, in the United States, on the Manhattan Project. After the war she raised four children, campaigned for disabled children and had no career in physics. Sam Curran was knighted. Joan Curran received no honours, and Cambridge gave her the degree she had earned in 1937 only in 1987.",
        "Her name appears in the histories of the radar war as a footnote to the men who decided to use what she had made."
      ],
      sources: [
        { label: "Joan Curran, Government of Canada", url: "https://parks.canada.ca/lhn-nhs/on/haida/culture/femmes-women/curran" },
        { label: "Royal Society of Edinburgh, biographical note", url: "https://www.rse.org.uk/" }
      ]
    }
  },
  {
    id: "shilling-hooker",
    field: "Aero engines, the Battle of Britain",
    him: {
      name: "Sir Stanley Hooker",
      years: "1907–1984",
      role: "Engineer, Rolls-Royce",
      photo: "https://upload.wikimedia.org/wikipedia/en/e/ee/Stanley_Hooker_-_Rolls-Royce.jpg",
      credit:
        "Hooker's supercharger work at Rolls-Royce gave the Merlin engine the power that kept the Spitfire and Hurricane ahead of the Messerschmitt, and he went on to lead British jet engine development. He was knighted and is remembered as one of the great aero-engine men. The Merlin's most famous flaw, though, was fixed not in Derby but by a woman from Farnborough with a brass washer."
    },
    her: {
      name: "Beatrice Shilling",
      years: "1909–1990",
      role: "Engineer, Royal Aircraft Establishment",
      photo: "https://upload.wikimedia.org/wikipedia/commons/4/47/Beatrice_SHILLING_%28cropped%29.jpg",
      lede: "Her small brass restrictor stopped the Merlin engine cutting out in a dive, a fault that was getting RAF pilots killed.",
      story: [
        "Beatrice Shilling bought her first motorcycle at fourteen, trained as an electrical engineer at Manchester, and in 1934 became one of the few women to lap Brooklands at over 100 miles per hour, earning the circuit's Gold Star. In 1936 she joined the Royal Aircraft Establishment at Farnborough as a technical writer and was soon moved to carburettor research because she was obviously better at it.",
        "During the Battle of Britain, RAF pilots found that when they pushed the nose down to chase a diving Messerschmitt, the Merlin engine coughed and briefly lost power. The Merlin's carburettor was flooded by negative g; the German engine used fuel injection and simply kept running. Pilots were rolling inverted before diving to avoid it, and losing the fight.",
        "Her solution, in 1941, was a small brass disc with a precisely sized hole, fitted into the fuel line to limit the surge of fuel. It was cheap, needed no redesign and could be fitted in the field. She toured fighter stations with a small team fitting it herself. The pilots named it, in her honour and with some vulgarity, Miss Shilling's orifice.",
        "The restrictor kept the Merlin fighting until Rolls-Royce produced a redesigned carburettor in 1943. She received an OBE in 1948, raced cars with her husband for the rest of her life, and was known at Farnborough as a formidable, plain-speaking engineer who had little patience with people who talked rather than tested.",
        "Her fix is in every history of the Spitfire. Her name, usually, is in the joke."
      ],
      sources: [
        { label: "Beatrice Shilling, The University of Manchaster", url: "https://www.manchester.ac.uk/about/news/beatrice-shilling--engineer-and-battle-of-britain-heroine/" },
        { label: "Beatrice Shilling, Institution of mechanical engineers", url: "https://imechearchive.wordpress.com/2020/03/06/international-womens-day-2020-highlight-on-beatrice-shilling/" },
        { label: "Royal Academy of Engineering profile", url: "https://raeng.org.uk/" }
      ]
    }
  },
  {
    id: "atkins-buckmaster",
    field: "Special Operations Executive, French Section",
    him: {
      name: "Maurice Buckmaster",
      years: "1902–1992",
      role: "Head of SOE's F Section",
      photo: "img/maurice-buckmaster.png",
      credit:
        "Buckmaster led F Section, which sent more than four hundred agents into occupied France to arm and organise the Resistance. He wrote two memoirs, became the public face of SOE and was decorated by Britain, France and the United States. He was also criticised for ignoring warnings that his networks had been penetrated. The officer who actually prepared the agents, and who later went to find the missing ones, sat at the desk beside his."
    },
    her: {
      name: "Vera Atkins",
      years: "1908–2000",
      role: "Intelligence officer, F Section",
      photo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Vera_Atkins.jpg",
      lede: "She briefed every agent F Section sent to France, and after the war traced the fate of the 118 who never came back.",
      story: [
        "Vera Atkins was born Vera Rosenberg in Romania to a Jewish family, educated in Paris and London, and arrived in Britain in 1937. In 1941 she joined the Special Operations Executive's French Section as Buckmaster's secretary. Within a year she was running the section's intelligence work in everything but title, and remained a civilian with no rank until 1944, because she was not yet a British citizen.",
        "She prepared agents for the field: checked their cover stories, their French papers, their clothes and the contents of their pockets, and personally saw them off at the airfield. She was the last familiar face they saw. Thirty-nine of the agents she briefed were women, among them Noor Inayat Khan, Violette Szabo and Odette Sansom.",
        "When the war ended, 118 of F Section's agents were missing. SOE was being shut down and nobody was going to look for them. Atkins got herself to Germany, interviewed camp commandants and guards, and over the following year established what had happened to all but one. She gave evidence at the war crimes trials, including against the commandant of Ravensbrück.",
        "She received the Croix de Guerre in 1948, but Britain gave her nothing until a CBE in 1997, when she was eighty-nine. Ian Fleming, who knew SOE, is said to have borrowed her for Miss Moneypenny: the competent woman at the desk outside the important man's office.",
        "Buckmaster's name is on the memoirs. Hers is on the files that told the families."
      ],
      sources: [
        { label: "Vera Atkins, Rusi", url: "https://www.rusi.org/publication/life-secrets-vera-atkins-and-lost-agents-soe" },
        { label: "Sarah Helm, A Life in Secrets (2005)", url: "https://en.wikipedia.org/wiki/A_Life_in_Secrets" }
      ]
    }
  },
  {
    id: "widdowson-mccance",
    field: "Nutrition and rationing",
    him: {
      name: "Robert McCance",
      years: "1898–1993",
      role: "Professor of experimental medicine, Cambridge",
      photo: "img/robert-mccance.png",
      credit:
        "McCance held the Cambridge chair, led the laboratory and was first author of the book that underpinned British wartime rationing. He was elected to the Royal Society in 1948 and appointed CBE. The partnership was genuinely shared, but the lab was his, the chair was his and the name order, McCance and Widdowson, put him first for sixty years. She did not get a permanent post for most of that time."
    },
    her: {
      name: "Elsie Widdowson",
      years: "1906–2000",
      role: "Chemist and nutritionist, Cambridge",
      photo: "img/elsie-widdowson.png",
      lede: "She did the measurements behind wartime rationing, tested the starvation diet on her own body and put calcium into Britain's bread.",
      story: [
        "Elsie Widdowson trained as a chemist at Imperial College and was one of the first women to take a doctorate there. She met Robert McCance in 1933 in a hospital kitchen, where she pointed out that his published figures for the sugar in cooked fruit were wrong. He hired her.",
        "Together they measured the composition of hundreds of foods, and in 1940 published The Chemical Composition of Foods, the tables that let the Ministry of Food calculate what a ration could contain and still keep people alive. It is still the basis of the British food tables today.",
        "When invasion and blockade threatened in 1940, they tested the worst-case diet, mostly bread, potatoes and cabbage, on themselves and their colleagues for three months, then cycled and climbed in the Lake District to prove people could work on it. Her finding that the diet lacked calcium led to chalk being added to all British flour, a rule that still stands.",
        "After the war she studied starving children in Germany and the Netherlands, and later the nutrition of newborns. She was elected to the Royal Society in 1976 and made a Companion of Honour in 1993, among the last of her generation to be recognised.",
        "She said she had never wanted to be anything but a scientist, and was cheerful about the name order. The British loaf is fortified because of her, and most people have never heard of either of them."
      ],
      sources: [
        { label: "Elsie Widdowson, Royal College Of Physicians", url: "https://history.rcp.ac.uk/inspiring-physicians/elsie-may-widdowson" },
        { label: "British Nutrition Foundation", url: "https://www.nutrition.org.uk/" }
      ]
    }
  },
  {
    id: "gower-derlanger",
    field: "Air Transport Auxiliary",
    him: {
      name: "Gerard d'Erlanger",
      years: "1906–1962",
      role: "Founder and Commodore, Air Transport Auxiliary",
      photo: "img/gerard-derlanger.webp",
      credit:
        "D'Erlanger, a banker and amateur pilot, proposed the Air Transport Auxiliary in 1939 and ran it for the whole war: a civilian service that ferried more than three hundred thousand aircraft from factories to squadrons. He was appointed CBE and later chaired British European Airways and BOAC. The women's section, which fought its way into flying Spitfires and then into equal pay, was built by someone else."
    },
    her: {
      name: "Pauline Gower",
      years: "1910–1947",
      role: "Commandant, ATA women's section",
      photo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Pauline_Gower.jpg",
      lede: "She founded the women's section of the ATA, got its pilots into Spitfires and Lancasters, and won them equal pay in 1943.",
      story: [
        "Pauline Gower learned to fly at nineteen against her father's wishes, paid for lessons by teaching the violin, and by 1931 was running her own air taxi and joyride business with the engineer Dorothy Spicer. By 1939 she had carried some thirty thousand passengers and was one of the most experienced pilots in Britain of either sex.",
        "When war came, the Air Ministry did not want women ferrying aircraft at all. Gower used her political contacts, her father was an MP, to get a women's section of the ATA approved in late 1939, starting with eight pilots flying open-cockpit trainers in the winter. The press called them \"the ATA girls\"; one aviation magazine called them a menace.",
        "She argued the section up, type by type: twin-engined trainers, then fighters, then in 1941 Hurricanes and Spitfires, and eventually four-engined bombers. By the end of the war 166 women had flown for the ATA, delivering every type in RAF service. Fifteen of them were killed, among them Amy Johnson.",
        "In 1943 she won the women of the ATA the same pay as the men, the first time the British government had paid women equally for the same work. She was appointed MBE in 1942 and joined the board of BOAC in 1943, its first woman director. She died in 1947, aged thirty-six, after giving birth to twins.",
        "The ATA's histories open with d'Erlanger. The equal pay belongs to her."
      ],
      sources: [
        { label: "Pauline Gower, The History Press", url: "https://thehistorypress.co.uk/article/pauline-gower-pioneering-leader-of-the-spitfire-women/" },
        { label: "ATA Museum, Maidenhead", url: "https://atamuseum.org/" }
      ]
    }
  }
];
