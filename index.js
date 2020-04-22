console.log("i'm loading")

let nameList = [
    "john", "Susan", "Mauro", "Igor", "Peter", "Lukas"
]

let student = {
    name: "John",
    age: 20,
    email: "john@gmail.com",
    votes: [30, 27, 30, 20, 18],
    createUsername: () => {
        console.log(this.name)
    }
}


// [ 1, 3, 2, 5, 4]
// [ 1, 2, 3, 4, 5]

// [ 10, 3, 2 , 5]
// [ 3, 2, 5, 10 ]
// [ 2, 3, 5, 10 ]

function bubbleSort(myArray) {
    let anySwapOccurred = false;

    do {
        anySwapOccurred = false;
        for (let i = 0; i < myArray.length - 1; i++) { // go through all the array!
            if (myArray[i] < myArray[i + 1]) { // if i'm bigger than the next one!
                //swap elements
                let temp = myArray[i]
                myArray[i] = myArray[i + 1]
                myArray[i + 1] = temp
                anySwapOccurred = true;
            }
        }
        console.log(myArray)
    } while (anySwapOccurred)
}

function printName() {
    for (let i = 0; i < nameList.length; i++) {
        console.log("In position number " + i + " --> " + nameList[i])
    }
}

function helloWorld(name, email) {

    // > greater than
    // < lower than
    if (email !== undefined) {
        console.log("helloWorld is working")
        console.log(name, email)
        return email + " --> " + name
    }
    else {
        console.log("This is my name: " + name)
        return "This is my name: " + name
    }
}

function loopUntil(numberOfTimes) {
    while (numberOfTimes > 0) {
        console.log("The new value is: " + numberOfTimes)
        numberOfTimes--; // decrease value by 1. numberOfValues = numberOfValues - 1;
    }
    console.log("END")
}

function doLoopUntil(numberOfTimes) {
    do {
        console.log("The new value is: " + numberOfTimes)
        numberOfTimes--; // decrease value by 1. numberOfValues = numberOfValues - 1;
    } while (numberOfTimes > 0)

    console.log("END")
}

function loadBooks() {
    let library = document.querySelector("#library");

    for (let i = 0; i < 30; i++) { //for each book in my library ==> books.length
        //console.log(books[i])
        library.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 card">
                                <img class="card-img-top" src="${books[i].img}" />
                                    <div class="card-body">
                                     <p>${books[i].title} </p>
                                     <span class="badge badge-primary">${books[i].category}</span>
                                     <span class="badge badge-danger">${books[i].price} €</span>
                                </div>
                            </div>` //i'll add it to my library div
        // ALT + 96 => backtick`
    }
}


let books = [
    {
        "asin": "1940026091",
        "title": "Pandemic (The Extinction Files, Book 1)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg",
        "price": 7.81,
        "category": "scifi"
    },
    {
        "asin": "0425264041",
        "title": "Shards of Hope (Psy-Changeling Novel, A)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91ku%2B0LppPL.jpg",
        "price": 7.59,
        "category": "scifi"
    },
    {
        "asin": "1250082757",
        "title": "Born of Vengeance: The League: Nemesis Rising",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91J28bj3PYL.jpg",
        "price": 26.09,
        "category": "scifi"
    },
    {
        "asin": "045146799X",
        "title": "Gameboard of the Gods",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81-vppSolJL.jpg",
        "price": 7.59,
        "category": "scifi"
    },
    {
        "asin": "1101987790",
        "title": "Silver Silence (Psy-Changeling Trinity)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91eGxsWGH7L.jpg",
        "price": 17.6,
        "category": "scifi"
    },
    {
        "asin": "0987575422",
        "title": "The Battle of Evernight - Special Edition: The Bitterbynde Book #3 (The Bitterbynde Trilogy)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51vw%2Bn7xZCL.jpg",
        "price": 9.6,
        "category": "scifi"
    },
    {
        "asin": "1492667137",
        "title": "Nightchaser",
        "img": "https://images-na.ssl-images-amazon.com/images/I/514%2BSppz8AL.jpg",
        "price": 4.84,
        "category": "scifi"
    },
    {
        "asin": "1635551226",
        "title": "Proxima Five",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61pDS5vOIdL.jpg",
        "price": 16.34,
        "category": "scifi"
    },
    {
        "asin": "1773840509",
        "title": "The Cyborg's Stowaway: In the Stars Romance (Gypsy Moth)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51mV63NrjdL.jpg",
        "price": 3.73,
        "category": "scifi"
    },
    {
        "asin": "1732587035",
        "title": "Apparent Power: Diazem Trilogy, Book One",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61Q5NcIAeaL.jpg",
        "price": 8.65,
        "category": "scifi"
    },
    {
        "asin": "1944866191",
        "title": "Girl Like a Bomb",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61yFOVwNcML.jpg",
        "price": 16.55,
        "category": "scifi"
    },
    {
        "asin": "1982609494",
        "title": "Polaris Rising: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/810hI5IL-HL.jpg",
        "price": 24.05,
        "category": "scifi"
    },
    {
        "asin": "1642471003",
        "title": "Across the Dark Horizon",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61GXM097ZcL.jpg",
        "price": 13.81,
        "category": "scifi"
    },
    {
        "asin": "1943006733",
        "title": "Resistant: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/713wsx-exHL.jpg",
        "price": 10.16,
        "category": "scifi"
    },
    {
        "asin": "099961200X",
        "title": "Lucky",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71qOk4tFCWL.jpg",
        "price": 5.73,
        "category": "scifi"
    },
    {
        "asin": "1632167689",
        "title": "Rise & Fall (THIRDS)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41I3PgcCgNL.jpg",
        "price": 11.69,
        "category": "scifi"
    },
    {
        "asin": "1626392242",
        "title": "Advance: Exodus: Book One",
        "img": "https://images-na.ssl-images-amazon.com/images/I/812XgmsnMfL.jpg",
        "price": 13.01,
        "category": "scifi"
    },
    {
        "asin": "1473214769",
        "title": "From Darkest Skies",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71QzKhJ8YrL.jpg",
        "price": 13.6,
        "category": "scifi"
    },
    {
        "asin": "1732956308",
        "title": "Candy Savant",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51EsF8PiQ9L.jpg",
        "price": 8.27,
        "category": "scifi"
    },
    {
        "asin": "1496025555",
        "title": "Backs Against the Wall (Survival) (Volume 2)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/516ZDu7nsLL.jpg",
        "price": 6.03,
        "category": "scifi"
    },
    {
        "asin": "1509854525",
        "title": "The Charmed Life of Alex Moore",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61PVMb6YCaL.jpg",
        "price": 23.33,
        "category": "scifi"
    },
    {
        "asin": "0692124578",
        "title": "Second Life of Mr. Hunt: Book 2: Sacrifices",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41M%2BnF7VZSL.jpg",
        "price": 11.13,
        "category": "scifi"
    },
    {
        "asin": "148056785X",
        "title": "The Morcai Battalion: The Pursuit",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71f-LfPNGsL.jpg",
        "price": 5.51,
        "category": "scifi"
    },
    {
        "asin": "1634779150",
        "title": "Five Minutes Longer (Enhanced World)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41p5Lnpx4HL.jpg",
        "price": 10.37,
        "category": "scifi"
    },
    {
        "asin": "150234131X",
        "title": "Devoured: Brides of the Kindred 11 (Volume 11)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51Hpl9aPWRL.jpg",
        "price": 5.71,
        "category": "scifi"
    },
    {
        "asin": "0008120692",
        "title": "The Ark (The Ark Trilogy, Book 1)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51A8BmESq5L.jpg",
        "price": 9.36,
        "category": "scifi"
    },
    {
        "asin": "1514621363",
        "title": "Hugh Howey TwinPack vol.4: Peace in Amber & Promises of London",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61cvKNjNfvL.jpg",
        "price": 4.4,
        "category": "scifi"
    },
    {
        "asin": "1772265535",
        "title": "The Time Machine (100 Copy Limited Edition)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71KncO7sFzL.jpg",
        "price": 34.61,
        "category": "scifi"
    },
    {
        "asin": "1635334039",
        "title": "Skythane (The Oberon Cycle)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41S%2BAo5DEML.jpg",
        "price": 6.11,
        "category": "scifi"
    },
    {
        "asin": "1935751336",
        "title": "Haven",
        "img": "https://images-na.ssl-images-amazon.com/images/I/514pMqTVCfL.jpg",
        "price": 2.04,
        "category": "scifi"
    },
    {
        "asin": "1619848090",
        "title": "Maskerade",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51aW0XTqL4L.jpg",
        "price": 4.37,
        "category": "scifi"
    },
    {
        "asin": "1591940613",
        "title": "A Princess of Mars (John Carter of Mars)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51%2BTgaWpuOL.jpg",
        "price": 4.95,
        "category": "scifi"
    },
    {
        "asin": "1682810690",
        "title": "Scardust",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71e4jNi922L.jpg",
        "price": 3.17,
        "category": "scifi"
    },
    {
        "asin": "1487403127",
        "title": "Sector Guard Collection 3",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51-Q9IBcexL.jpg",
        "price": 6.61,
        "category": "scifi"
    },
    {
        "asin": "1634768264",
        "title": "This Is How It Ends (Deadworld)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41OI6hZ86IL.jpg",
        "price": 6.75,
        "category": "scifi"
    },
    {
        "asin": "0446584606",
        "title": "The Claimed (Sin Hunters)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41%2BVpF%2BzzyL.jpg",
        "price": 5.08,
        "category": "scifi"
    },
    {
        "asin": "1644051125",
        "title": "Ithani: NULL (The Oberon Cycle)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51qK7ndbbYL.jpg",
        "price": 16.47,
        "category": "scifi"
    },
    {
        "asin": "0648313549",
        "title": "Breakaway (Verdant String)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61-lWTp2ljL.jpg",
        "price": 6.43,
        "category": "scifi"
    },
    {
        "asin": "1640804773",
        "title": "Lander (The Oberon Cycle)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41cH1OSszQL.jpg",
        "price": 7.41,
        "category": "scifi"
    },
    {
        "asin": "1626493014",
        "title": "Fall and Rising",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51e7A-DT9fL.jpg",
        "price": 7.77,
        "category": "scifi"
    },
    {
        "asin": "1980570043",
        "title": "The Time It Takes",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51xdSzzNxmL.jpg",
        "price": 5.92,
        "category": "scifi"
    },
    {
        "asin": "1480953733",
        "title": "The Birth (Soulmate Prophecy)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/812vUZPbEHL.jpg",
        "price": 8.77,
        "category": "scifi"
    },
    {
        "asin": "1732048800",
        "title": "Warrior Princess of Mars (Barsoom Pentalogy)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71QZ6h7qjRL.jpg",
        "price": 10.7,
        "category": "scifi"
    },
    {
        "asin": "1978639392",
        "title": "FUSE (The Bolt Saga)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61YHowAptnL.jpg",
        "price": 10.49,
        "category": "scifi"
    },
    {
        "asin": "0857157760",
        "title": "Subspace",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51WFt%2BKrEZL.jpg",
        "price": 17.48,
        "category": "scifi"
    },
    {
        "asin": "197863921X",
        "title": "Bolt (The Bolt Saga)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71mgXBZNxSL.jpg",
        "price": 5.09,
        "category": "scifi"
    },
    {
        "asin": "1504778596",
        "title": "River's Run (Lords of Kassis series, Book 1)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/917IkbfPnsL.jpg",
        "price": 4.24,
        "category": "scifi"
    },
    {
        "asin": "1941368107",
        "title": "Lost Time (Between Two Evils)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51KUhM9Nl1L.jpg",
        "price": 6.79,
        "category": "scifi"
    },
    {
        "asin": "1594933197",
        "title": "Orphan Maker",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81veSVEr78L.jpg",
        "price": 2.8,
        "category": "scifi"
    },
    {
        "asin": "1487404239",
        "title": "Return of the Nine Collection",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51rIMGEiquL.jpg",
        "price": 7.71,
        "category": "scifi"
    },
    {
        "asin": "1480567868",
        "title": "Morcai Battalion: The Pursuit, The (The Morcai Battalion)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71B3l7m1OsL.jpg",
        "price": 6.61,
        "category": "scifi"
    },
    {
        "asin": "1634777336",
        "title": "Contact (Gothika)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41kP1mF1fhL.jpg",
        "price": 6.54,
        "category": "scifi"
    },
    {
        "asin": "1978639201",
        "title": "Bolt: The Bolt Saga Volume 1: Parts 1, 2 & 3",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71UWCHuzf9L.jpg",
        "price": 8.82,
        "category": "scifi"
    },
    {
        "asin": "145557578X",
        "title": "Fearless (The Survival Race)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71mHWidiW8L.jpg",
        "price": 12.86,
        "category": "scifi"
    },
    {
        "asin": "1644051168",
        "title": "The Strength of His Heart (Enhanced World)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41ZFPDMa-LL.jpg",
        "price": 11.0,
        "category": "scifi"
    },
    {
        "asin": "1626493030",
        "title": "Sword and Star",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41G5L9BLGmL.jpg",
        "price": 3.57,
        "category": "scifi"
    },
    {
        "asin": "1978639260",
        "title": "Ignite: The Bolt Saga Volume 2: Parts 4, 5 & 6",
        "img": "https://images-na.ssl-images-amazon.com/images/I/719HqqHTNhL.jpg",
        "price": 11.51,
        "category": "scifi"
    },
    {
        "asin": "1640801251",
        "title": "Exodus (Heaven Corp)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51XwpoLFOjL.jpg",
        "price": 5.03,
        "category": "scifi"
    },
    {
        "asin": "0606361537",
        "title": "Prototype (Turtleback School & Library Binding Edition)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91OnUmaHzzL.jpg",
        "price": 13.22,
        "category": "scifi"
    },
    {
        "asin": "1635551773",
        "title": "Killer Winter",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71tBnQyMTwL.jpg",
        "price": 16.1,
        "category": "scifi"
    },
    {
        "asin": "1546534091",
        "title": "Taking Stock",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41BQIb4nmAL.jpg",
        "price": 6.7,
        "category": "scifi"
    },
    {
        "asin": "172977220X",
        "title": "Joseph (Clan Companions) (Volume 1)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41tnwmeU22L.jpg",
        "price": 3.45,
        "category": "scifi"
    },
    {
        "asin": "0990655601",
        "title": "The Man Who Sold the World",
        "img": "https://images-na.ssl-images-amazon.com/images/I/616BIbuuiuL.jpg",
        "price": 5.82,
        "category": "scifi"
    },
    {
        "asin": "1980552975",
        "title": "Alien Captive's Abduction: A Sci-Fi Alien Abduction Romance",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51JIfJicTgL.jpg",
        "price": 6.79,
        "category": "scifi"
    },
    {
        "asin": "1634776445",
        "title": "Bone Rider (Deutsch) (German Edition)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51oZdyzG3OL.jpg",
        "price": 3.64,
        "category": "scifi"
    },
    {
        "asin": "0987631748",
        "title": "When the Cars Stopped Listening",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71R-8vFGgpL.jpg",
        "price": 15.3,
        "category": "scifi"
    },
    {
        "asin": "1911486373",
        "title": "Pillar of Frozen Light",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71zZJWVW40L.jpg",
        "price": 2.79,
        "category": "scifi"
    },
    {
        "asin": "099717952X",
        "title": "Pirate's Patch",
        "img": "https://images-na.ssl-images-amazon.com/images/I/711fEq6vqQL.jpg",
        "price": 5.56,
        "category": "scifi"
    },
    {
        "asin": "1504716019",
        "title": "Gracie's Touch (Zion Warriors Series, Book 1)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71zbNC%2Bsz9L.jpg",
        "price": 21.33,
        "category": "scifi"
    },
    {
        "asin": "1620074176",
        "title": "The Flight to Mecha",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71JqH7Nr5jL.jpg",
        "price": 0.53,
        "category": "scifi"
    },
    {
        "asin": "1520870019",
        "title": "Undead Love: Long Road Home",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51lLorCNJfL.jpg",
        "price": 2.47,
        "category": "scifi"
    },
    {
        "asin": "1504778804",
        "title": "Star's Storm (Lords of Kassis Series, Book 2)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91dmHUr6WxL.jpg",
        "price": 18.55,
        "category": "scifi"
    },
    {
        "asin": "0615361617",
        "title": "Intwine",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91mi03n5BGL.jpg",
        "price": 10.24,
        "category": "scifi"
    },
    {
        "asin": "1681603780",
        "title": "Claimed by Nicolai (Raiden Warriors)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/715ARTVvUvL.jpg",
        "price": 7.65,
        "category": "scifi"
    },
    {
        "asin": "1515956466",
        "title": "King (Space Gypsy Chronicles)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/A1-Abkx55FL.jpg",
        "price": 20.48,
        "category": "scifi"
    },
    {
        "asin": "1643760866",
        "title": "Yellow: The Blugees Book 4",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61Im9acgaEL.jpg",
        "price": 10.93,
        "category": "scifi"
    },
    {
        "asin": "1795902264",
        "title": "Im Griff ihrer Partner (Interstellare Bräute(r) Programm) (German Edition)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71XCdp-VkaL.jpg",
        "price": 7.05,
        "category": "scifi"
    },
    {
        "asin": "0999388843",
        "title": "Vendel Rising: Omnibus Volumes 1-4",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41FhysgEELL.jpg",
        "price": 11.39,
        "category": "scifi"
    },
    {
        "asin": "0986181072",
        "title": "DNA (Alex Cave)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/718YEl5CSNL.jpg",
        "price": 3.16,
        "category": "scifi"
    },
    {
        "asin": "1978639449",
        "title": "Surge: The Bolt Saga Volume 5: Parts 13, 14 & 15",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61f2F-rHMUL.jpg",
        "price": 4.68,
        "category": "scifi"
    },
    {
        "asin": "1619260301",
        "title": "Steamed Up Memories [Steampunked Lust 2] (Siren Publishing Menage Everlasting)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81pQyDAgLeL.jpg",
        "price": 3.46,
        "category": "scifi"
    },
    {
        "asin": "0615999263",
        "title": "Transmutation of the Fey (Transmutation Saga) (Volume 1)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/615XfljSdLL.jpg",
        "price": 3.62,
        "category": "scifi"
    },
    {
        "asin": "1623808928",
        "title": "Children of Forever",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61hJ8Nc-KpL.jpg",
        "price": 3.25,
        "category": "scifi"
    },
    {
        "asin": "1609284712",
        "title": "Overlord (Fringe, Book 2)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/512GcGS%2BR-L.jpg",
        "price": 11.45,
        "category": "scifi"
    },
    {
        "asin": "1441850805",
        "title": "Born to Darkness (Eternal Youth Series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71MpKdRHQoL.jpg",
        "price": 6.34,
        "category": "scifi"
    },
    {
        "asin": "1978659040",
        "title": "Instauration (The City)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61C2dtdPjvL.jpg",
        "price": 2.84,
        "category": "scifi"
    },
    {
        "asin": "1731129777",
        "title": "Le Cœur traître de Razor (L'Alliance) (French Edition)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51vCc-wtDOL.jpg",
        "price": 4.54,
        "category": "scifi"
    },
    {
        "asin": "1978684274",
        "title": "The Wolf Lord (Ars Numina)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61Cy7Zo1BzL.jpg",
        "price": 8.61,
        "category": "scifi"
    },
    {
        "asin": "064821625X",
        "title": "Aurora: Aurizun (Aurora 7)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/719GbSLXeNL.jpg",
        "price": 3.87,
        "category": "scifi"
    },
    {
        "asin": "190635216X",
        "title": "The Triclad: The Vluvidium Collection",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61jKkecFOxL.jpg",
        "price": 3.37,
        "category": "scifi"
    },
    {
        "asin": "1978684169",
        "title": "The Leopard King (Ars Numina)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/716vskh7W-L.jpg",
        "price": 7.7,
        "category": "scifi"
    },
    {
        "asin": "0008288798",
        "title": "A Reaper at the Gates (Ember Quartet, Book 3)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91vFU0KCm9L.jpg",
        "price": 12.6,
        "category": "romance"
    },
    {
        "asin": "1597808709",
        "title": "A Second Chance: The Chronicles of St. Mary's Book Three",
        "img": "https://images-na.ssl-images-amazon.com/images/I/714wSBJshRL.jpg",
        "price": 9.86,
        "category": "romance"
    },
    {
        "asin": "1578562953",
        "title": "Edge of Eternity",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91Ft%2BN5q0sL.jpg",
        "price": 15.19,
        "category": "romance"
    },
    {
        "asin": "0199540241",
        "title": "The Female Quixote: or The Adventures of Arabella (Oxford World's Classics)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51x4zFJVgSL.jpg",
        "price": 6.22,
        "category": "romance"
    },
    {
        "asin": "0345511190",
        "title": "The Essential Reader's Companion (Star Wars) (Star Wars: Essential Guides)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/A1wNlTrYVqL.jpg",
        "price": 28.45,
        "category": "romance"
    },
    {
        "asin": "1629143715",
        "title": "The Man from Battle Flat: A Western Trio",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71GCjmvwIjL.jpg",
        "price": 11.91,
        "category": "romance"
    },
    {
        "asin": "0345508998",
        "title": "No Prisoners (Star Wars: The Clone Wars)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91ycXXrwCsL.jpg",
        "price": 12.69,
        "category": "romance"
    },
    {
        "asin": "0451414888",
        "title": "Dragon Fate: Book Six of The Age of Fire",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81qAK72OCYL.jpg",
        "price": 8.53,
        "category": "romance"
    },
    {
        "asin": "0008238979",
        "title": "An Orphan's War",
        "img": "https://images-na.ssl-images-amazon.com/images/I/519z4%2B1KEfL.jpg",
        "price": 11.23,
        "category": "romance"
    },
    {
        "asin": "0425262227",
        "title": "The Tower (Guardians of Destiny)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91qzAwU5wcL.jpg",
        "price": 9.52,
        "category": "romance"
    },
    {
        "asin": "0316505382",
        "title": "Blood Oath (Sawbones)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71cLSp4y22L.jpg",
        "price": 15.19,
        "category": "romance"
    },
    {
        "asin": "0804179794",
        "title": "The Collected Short Stories of Louis L'Amour, Volume 7: Frontier Stories",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81%2ByT7qClCL.jpg",
        "price": 6.64,
        "category": "romance"
    },
    {
        "asin": "0515115843",
        "title": "Lord of Falcon Ridge",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91mxWdyMsCL.jpg",
        "price": 8.53,
        "category": "romance"
    },
    {
        "asin": "0316077070",
        "title": "The Rebel Prince (The Moorehawke Trilogy)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71REEAYhw1L.jpg",
        "price": 14.28,
        "category": "romance"
    },
    {
        "asin": "045120865X",
        "title": "Blaze Wyndham",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71Ul8Eoz09L.jpg",
        "price": 22.32,
        "category": "romance"
    },
    {
        "asin": "1499860846",
        "title": "The Seventh Scroll (2) (The Egyptian Series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81j3E4E4lyL.jpg",
        "price": 13.49,
        "category": "romance"
    },
    {
        "asin": "1524762474",
        "title": "The Mountain Between Us (Movie Tie-In): A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91oO1lRHkaL.jpg",
        "price": 10.3,
        "category": "romance"
    },
    {
        "asin": "0804192499",
        "title": "Utah Blaine",
        "img": "https://images-na.ssl-images-amazon.com/images/I/816d9nB7r5L.jpg",
        "price": 22.14,
        "category": "romance"
    },
    {
        "asin": "1524783358",
        "title": "North to the Rails: A Novel (Talon and Chantry)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71r0NaakVfL.jpg",
        "price": 25.71,
        "category": "romance"
    },
    {
        "asin": "0345511433",
        "title": "Crucible: Star Wars Legends",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81cOWVjJWFL.jpg",
        "price": 7.59,
        "category": "romance"
    },
    {
        "asin": "0739323741",
        "title": "The Collected Bowdrie Dramatizations: Volume III (Chuck Bowdrie's Adventures)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/912EUMHHMgL.jpg",
        "price": 27.27,
        "category": "romance"
    },
    {
        "asin": "0553804529",
        "title": "The Collected Short Stories of Louis L'Amour, Volume 3: The Frontier Stories",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71p8msuFWAL.jpg",
        "price": 17.38,
        "category": "romance"
    },
    {
        "asin": "0307737543",
        "title": "Last of the Breed",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81lFpMN9uXL.jpg",
        "price": 22.09,
        "category": "romance"
    },
    {
        "asin": "0735286124",
        "title": "Radigan: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81yNX5v5uAL.jpg",
        "price": 20.44,
        "category": "romance"
    },
    {
        "asin": "1489713921",
        "title": "River Divided",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71nt4jhGwUL.jpg",
        "price": 3.23,
        "category": "romance"
    },
    {
        "asin": "0804127093",
        "title": "The Quick and the Dead",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71EfTDy1sgL.jpg",
        "price": 27.62,
        "category": "romance"
    },
    {
        "asin": "0990846105",
        "title": "Apparition Island (4) (The Windjammer Mystery Series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51yDJ5TgDbL.jpg",
        "price": 12.72,
        "category": "romance"
    },
    {
        "asin": "0875654282",
        "title": "Sins of the Younger Sons",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81sC1XaM7XL.jpg",
        "price": 24.89,
        "category": "romance"
    },
    {
        "asin": "0307737500",
        "title": "The Walking Drum",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81OzqN3T0FL.jpg",
        "price": 25.86,
        "category": "romance"
    },
    {
        "asin": "0525531491",
        "title": "The Mountain Between Us (Movie Tie-In): A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91DyWHD5eAL.jpg",
        "price": 19.36,
        "category": "romance"
    },
    {
        "asin": "0441017851",
        "title": "The Devil's Eye (An Alex Benedict Novel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91-z5E-Y8QL.jpg",
        "price": 7.99,
        "category": "romance"
    },
    {
        "asin": "1644383357",
        "title": "Helen's Crusade",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71FRJ0J56UL.jpg",
        "price": 11.04,
        "category": "romance"
    },
    {
        "asin": "0544242157",
        "title": "Foxfire",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51c8-cGk9-L.jpg",
        "price": 13.97,
        "category": "romance"
    },
    {
        "asin": "1524783234",
        "title": "Taggart: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71uwInuX3FL.jpg",
        "price": 25.94,
        "category": "romance"
    },
    {
        "asin": "161170278X",
        "title": "The Crackerjack",
        "img": "https://images-na.ssl-images-amazon.com/images/I/616z3tDYdmL.jpg",
        "price": 5.57,
        "category": "romance"
    },
    {
        "asin": "0425262820",
        "title": "River of Dreams (A Novel of the Nine Kingdoms)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91JJv0wvgqL.jpg",
        "price": 12.57,
        "category": "romance"
    },
    {
        "asin": "0451462114",
        "title": "Marion Zimmer Bradley's Ravens of Avalon",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91kcKRLoskL.jpg",
        "price": 13.63,
        "category": "romance"
    },
    {
        "asin": "0316077062",
        "title": "The Poison Throne (The Moorehawke Trilogy)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71eOpcRHZrL.jpg",
        "price": 11.43,
        "category": "romance"
    },
    {
        "asin": "1934648302",
        "title": "Consuelo: A Romance of Venice",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51Rs2ZlRaPL.jpg",
        "price": 16.93,
        "category": "romance"
    },
    {
        "asin": "0980001714",
        "title": "Rigged For Murder (1) (The Windjammer Mystery Series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41rVUmaVMGL.jpg",
        "price": 13.56,
        "category": "romance"
    },
    {
        "asin": "1621052370",
        "title": "Bacon Fried Bastard",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71SovvgQVhL.jpg",
        "price": 7.47,
        "category": "romance"
    },
    {
        "asin": "0451465296",
        "title": "Downfall (Cal Leandros)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81QzorZkC1L.jpg",
        "price": 7.59,
        "category": "romance"
    },
    {
        "asin": "0804126577",
        "title": "The Man Called Noon",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81tuLxeFfdL.jpg",
        "price": 16.98,
        "category": "romance"
    },
    {
        "asin": "0441017185",
        "title": "Countdown",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91sAp2bPd6L.jpg",
        "price": 17.32,
        "category": "romance"
    },
    {
        "asin": "1427213879",
        "title": "More Plums in One: Four to Score, High Five, and Hot Six (Stephanie Plum Novels)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51e2WHkPTGL.jpg",
        "price": 29.44,
        "category": "romance"
    },
    {
        "asin": "0802124380",
        "title": "Captain in Calico",
        "img": "https://images-na.ssl-images-amazon.com/images/I/518J1HukJhL.jpg",
        "price": 9.01,
        "category": "romance"
    },
    {
        "asin": "1510732403",
        "title": "The Maw: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81GqXjyvKQL.jpg",
        "price": 8.78,
        "category": "romance"
    },
    {
        "asin": "0786039477",
        "title": "The Hour of Death (Sixkiller, U.S. Marshal)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91MZ7-twSAL.jpg",
        "price": 7.46,
        "category": "romance"
    },
    {
        "asin": "0451474422",
        "title": "Midnight Captive (A Killer Instincts Novel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/817GQvotg3L.jpg",
        "price": 7.59,
        "category": "romance"
    },
    {
        "asin": "0307338541",
        "title": "Hey, Cowgirl, Need a Ride?",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91Q23vCeSNL.jpg",
        "price": 11.52,
        "category": "romance"
    },
    {
        "asin": "014100200X",
        "title": "The Royal Family: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51%2BGxv8V0yL.jpg",
        "price": 20.46,
        "category": "romance"
    },
    {
        "asin": "0735286043",
        "title": "Last Stand at Papago Wells: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81tb0NCtAYL.jpg",
        "price": 26.04,
        "category": "romance"
    },
    {
        "asin": "0307914801",
        "title": "How the West Was Won",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71GBfa97tOL.jpg",
        "price": 25.99,
        "category": "romance"
    },
    {
        "asin": "1773021109",
        "title": "The Librarian",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51GYYSRTWHL.jpg",
        "price": 16.71,
        "category": "romance"
    },
    {
        "asin": "1978623372",
        "title": "Frame-Up, The (The Golden Arrow Mysteries)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61DddbrefWL.jpg",
        "price": 3.9,
        "category": "romance"
    },
    {
        "asin": "0515154938",
        "title": "Slocum 430: Slocum's Silver Burden",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81BTd8fZphL.jpg",
        "price": 5.67,
        "category": "romance"
    },
    {
        "asin": "1940177197",
        "title": "Around the World in 80 Days",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81tgMmYwMuL.jpg",
        "price": 3.61,
        "category": "romance"
    },
    {
        "asin": "1501142941",
        "title": "Hold Back the Stars: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71-3uRNabmL.jpg",
        "price": 13.21,
        "category": "romance"
    },
    {
        "asin": "1536682721",
        "title": "AFTERLIFE",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61qg6AstcML.jpg",
        "price": 3.08,
        "category": "romance"
    },
    {
        "asin": "1606600796",
        "title": "The War of the Worlds",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41C8uu0n62L.jpg",
        "price": 25.21,
        "category": "romance"
    },
    {
        "asin": "0451239490",
        "title": "Valley of the Gun (Ranger Sam Burrack)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71IH4FqgQuL.jpg",
        "price": 5.29,
        "category": "romance"
    },
    {
        "asin": "1573443646",
        "title": "The Low Road",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51FNT2IrZcL.jpg",
        "price": 12.93,
        "category": "romance"
    },
    {
        "asin": "0451463498",
        "title": "The Grimrose Path (Trickster, Book 2)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81n9CQS6FcL.jpg",
        "price": 7.13,
        "category": "romance"
    },
    {
        "asin": "1945181184",
        "title": "The Ballade of Mary Reede: Twilight of the Buccaneers",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71rOfBjcSUL.jpg",
        "price": 11.98,
        "category": "romance"
    },
    {
        "asin": "0307969401",
        "title": "The Rustlers of West Fork: A Novel (Hopalong Cassidy)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/713uI-unuxL.jpg",
        "price": 22.08,
        "category": "romance"
    },
    {
        "asin": "0345312015",
        "title": "Hooligans",
        "img": "https://images-na.ssl-images-amazon.com/images/I/714V%2BHRtTlL.jpg",
        "price": 7.82,
        "category": "romance"
    },
    {
        "asin": "0345401964",
        "title": "Exit to Eden",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91woJZrijhL.jpg",
        "price": 12.63,
        "category": "romance"
    },
    {
        "asin": "0140138986",
        "title": "Very Old Bones (Contemporary American Fiction)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81urNWREXLL.jpg",
        "price": 12.37,
        "category": "romance"
    },
    {
        "asin": "045146429X",
        "title": "The Doomsday Vault: A Novel of the Clockwork Empire",
        "img": "https://images-na.ssl-images-amazon.com/images/I/815zlGzAxgL.jpg",
        "price": 7.8,
        "category": "romance"
    },
    {
        "asin": "0307737624",
        "title": "The Broken Gun",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71wCTIHwCSL.jpg",
        "price": 14.98,
        "category": "romance"
    },
    {
        "asin": "0425266567",
        "title": "The Rider of Phantom Canyon (A Strongheart Western)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91Md5IiSWgL.jpg",
        "price": 6.93,
        "category": "romance"
    },
    {
        "asin": "0451464494",
        "title": "Devil's Punch: A Corine Solomon Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71VhTIf%2BlyL.jpg",
        "price": 7.6,
        "category": "romance"
    },
    {
        "asin": "0385341946",
        "title": "Tap & Gown (Ivy League)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91sdvpaHUEL.jpg",
        "price": 13.32,
        "category": "romance"
    },
    {
        "asin": "1589262654",
        "title": "Thr3e",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71ycUjc-NmL.jpg",
        "price": 10.07,
        "category": "romance"
    },
    {
        "asin": "1944125132",
        "title": "Alexandru's Kiss (Magic, New Mexico)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81w4DyBbVLL.jpg",
        "price": 5.3,
        "category": "romance"
    },
    {
        "asin": "1626392242",
        "title": "Advance: Exodus: Book One",
        "img": "https://images-na.ssl-images-amazon.com/images/I/812XgmsnMfL.jpg",
        "price": 13.01,
        "category": "romance"
    },
    {
        "asin": "1593091273",
        "title": "Two Thin Dimes: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51e9UmyhhmL.jpg",
        "price": 12.3,
        "category": "romance"
    },
    {
        "asin": "161986598X",
        "title": "The Wild Wild West 10th Anniversary Book Collection: Shadows from Boot Hill, King of the Gunman, The Magic Quirt and the No-Gun Man (Stories from the Golden Age)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91rtbJA88-L.jpg",
        "price": 13.25,
        "category": "romance"
    },
    {
        "asin": "0979647525",
        "title": "The Tourist Trail: A Novel (Across Oceans)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61G3kQRUjZL.jpg",
        "price": 10.92,
        "category": "romance"
    },
    {
        "asin": "1978637292",
        "title": "One Word Kill (Impossible Times)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71V%2BT%2BNO1GL.jpg",
        "price": 21.68,
        "category": "romance"
    },
    {
        "asin": "0997894512",
        "title": "The Boy Who Wanted Wings",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71qNt2Ob3%2BL.jpg",
        "price": 13.32,
        "category": "romance"
    },
    {
        "asin": "1594931526",
        "title": "Comfortable Distance",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51mm5DjD%2BcL.jpg",
        "price": 12.26,
        "category": "romance"
    },
    {
        "asin": "0486814718",
        "title": "Rob Roy (Dover Thrift Editions)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51chWEpdMCL.jpg",
        "price": 6.19,
        "category": "romance"
    },
    {
        "asin": "1543698549",
        "title": "The Ragged Edge of Night",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71ZScZGnsLL.jpg",
        "price": 26.13,
        "category": "romance"
    },
    {
        "asin": "0786033894",
        "title": "Charley Sunday's Texas Outfit",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91X7kZeswXL.jpg",
        "price": 6.6,
        "category": "romance"
    },
    {
        "asin": "1976578000",
        "title": "By the Sulu Sea: A Palawan Adventure Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51SX1e90jCL.jpg",
        "price": 8.27,
        "category": "romance"
    },
    {
        "asin": "1978644027",
        "title": "Girls on the Line: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71a2gjdTyPL.jpg",
        "price": 14.79,
        "category": "romance"
    },
    {
        "asin": "1781892377",
        "title": "The Jade Lioness (Kumashiro)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/918k-8I2Q4L.jpg",
        "price": 3.42,
        "category": "romance"
    },
    {
        "asin": "0553762931",
        "title": "The Way Beneath: Kingdoms, Book 3",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71FLEEh%2B7VL.jpg",
        "price": 18.05,
        "category": "romance"
    },
    {
        "asin": "0786033932",
        "title": "The Comancheros",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91KNGCv7YoL.jpg",
        "price": 5.52,
        "category": "romance"
    },
    {
        "asin": "1480540439",
        "title": "Magic Triumphs (Kate Daniels)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71mjTAvMklL.jpg",
        "price": 19.75,
        "category": "romance"
    },
    {
        "asin": "0062136003",
        "title": "Wicked Lies: A Dark Mission Novella",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51Rsu02bD2L.jpg",
        "price": 3.9,
        "category": "romance"
    },
    {
        "asin": "1511342021",
        "title": "Crash and Burn (Sisterhood Series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/7136bYereaL.jpg",
        "price": 21.13,
        "category": "romance"
    },
    {
        "asin": "0563524960",
        "title": "Just William: Volume 4",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71Mi6-TRRUL.jpg",
        "price": 18.97,
        "category": "romance"
    },
    {
        "asin": "1933110902",
        "title": "Wall of Silence",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51a%2BSB2WzJL.jpg",
        "price": 9.39,
        "category": "romance"
    },
    {
        "asin": "1922200867",
        "title": "Mud and Glass",
        "img": "https://images-na.ssl-images-amazon.com/images/I/8106zlwObJL.jpg",
        "price": 5.76,
        "category": "romance"
    },
    {
        "asin": "1504021762",
        "title": "A Sterkarm Tryst",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51jkZP-R7eL.jpg",
        "price": 15.93,
        "category": "romance"
    },
    {
        "asin": "0473458489",
        "title": "The Carlswick Mythology (The Carlswick Mysteries)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51E0jsUlH-L.jpg",
        "price": 5.95,
        "category": "romance"
    },
    {
        "asin": "0984304975",
        "title": "Jade: Outlaw",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41wpD1ENEzL.jpg",
        "price": 3.09,
        "category": "romance"
    },
    {
        "asin": "1640271716",
        "title": "Distraction",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61RxwDkZgdL.jpg",
        "price": 13.51,
        "category": "romance"
    },
    {
        "asin": "0809599813",
        "title": "Tarzan of the Apes by Edgar Rice Burroughs, Fiction, Classics, Action & Adventure",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71ANZC5paNL.jpg",
        "price": 5.25,
        "category": "romance"
    },
    {
        "asin": "1543120008",
        "title": "The Cursed Seven",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41HcKd0Rp3L.jpg",
        "price": 10.53,
        "category": "romance"
    },
    {
        "asin": "0995501300",
        "title": "Mission: Black (A Division Eight Thriller)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71qlpe1ySlL.jpg",
        "price": 6.1,
        "category": "romance"
    },
    {
        "asin": "0615698859",
        "title": "Thin Places",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51it4U9s3nL.jpg",
        "price": 2.52,
        "category": "romance"
    },
    {
        "asin": "0988285843",
        "title": "Land Sharks: A Swindle in Sumatra (A World Travel Mystery Adventure)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/514oOXqAIEL.jpg",
        "price": 6.63,
        "category": "romance"
    },
    {
        "asin": "1640278745",
        "title": "One Man's Journey",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71UENL%2BESUL.jpg",
        "price": 5.64,
        "category": "romance"
    },
    {
        "asin": "1980641129",
        "title": "Zombie Annihilation: A Post-Apocalyptic Zombie Survival (Last Man Standing)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/515gv62P3nL.jpg",
        "price": 10.64,
        "category": "romance"
    },
    {
        "asin": "0865348790",
        "title": "Little Kerber Creek, A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71c7VBIrvKL.jpg",
        "price": 7.61,
        "category": "romance"
    },
    {
        "asin": "0994517246",
        "title": "Seizing Control (Black Shamrocks MC)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/618Jc1Q32WL.jpg",
        "price": 9.18,
        "category": "romance"
    },
    {
        "asin": "080214019X",
        "title": "The Adventures of Miles and Isabel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51MrMdMRxyL.jpg",
        "price": 5.26,
        "category": "romance"
    },
    {
        "asin": "042526534X",
        "title": "Black Ransom",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81DrCqh6DxL.jpg",
        "price": 6.22,
        "category": "romance"
    },
    {
        "asin": "0595508987",
        "title": "The Amber Lights of Home",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61-NHgQRbLL.jpg",
        "price": 5.01,
        "category": "romance"
    },
    {
        "asin": "0692974458",
        "title": "Four Samuel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81T72IZwZmL.jpg",
        "price": 7.82,
        "category": "romance"
    },
    {
        "asin": "1095461494",
        "title": "RACHEL: The Whiskey Moon Ranch Trilogy Book One",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41BZfycYy0L.jpg",
        "price": 13.16,
        "category": "romance"
    },
    {
        "asin": "146854389X",
        "title": "Cheat River Three",
        "img": "https://images-na.ssl-images-amazon.com/images/I/515SkqZ-nqL.jpg",
        "price": 17.86,
        "category": "romance"
    },
    {
        "asin": "0999881728",
        "title": "The Council of Excalibur",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51u7iHb02jL.jpg",
        "price": 7.14,
        "category": "romance"
    },
    {
        "asin": "0999206710",
        "title": "Beneath the Mists (Of Astral and Umbral)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71iASuOvcVL.jpg",
        "price": 5.62,
        "category": "romance"
    },
    {
        "asin": "1520265603",
        "title": "Diamonds in the Rough: Gillian Panter Adventure 1 (The Gillian Panter Chronicles)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41dMgTwKHNL.jpg",
        "price": 2.7,
        "category": "romance"
    },
    {
        "asin": "198078146X",
        "title": "The Dark Lane",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51gqduG-DAL.jpg",
        "price": 7.79,
        "category": "romance"
    },
    {
        "asin": "1549896806",
        "title": "Ellas (Spanish Edition)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41OSyMQSrbL.jpg",
        "price": 7.34,
        "category": "romance"
    },
    {
        "asin": "1622872517",
        "title": "Off Plumb",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61UuvKp3qsL.jpg",
        "price": 5.36,
        "category": "romance"
    },
    {
        "asin": "145557578X",
        "title": "Fearless (The Survival Race)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71mHWidiW8L.jpg",
        "price": 12.86,
        "category": "romance"
    },
    {
        "asin": "996325506X",
        "title": "Matoula's Echo",
        "img": "https://images-na.ssl-images-amazon.com/images/I/613nQJf8auL.jpg",
        "price": 8.61,
        "category": "romance"
    },
    {
        "asin": "1980718466",
        "title": "BLOOD BROTHERS: A Novel By",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41jeRWinp9L.jpg",
        "price": 4.05,
        "category": "romance"
    },
    {
        "asin": "1943594112",
        "title": "The House of Baric Part One: Shields Down (House of Baric Trilogy)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81HsuBCA2VL.jpg",
        "price": 33.57,
        "category": "romance"
    },
    {
        "asin": "0995756112",
        "title": "Elephant Walk: The Brigandshaw Chronicles Book 2",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81LKd1nWrOL.jpg",
        "price": 5.45,
        "category": "romance"
    },
    {
        "asin": "1483022021",
        "title": "Over the Edge  (Troubleshooters series, Book 3)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91vVbxOztSL.jpg",
        "price": 26.04,
        "category": "romance"
    },
    {
        "asin": "1940310857",
        "title": "Pahutchae's Pouch",
        "img": "https://images-na.ssl-images-amazon.com/images/I/714Vz8-AWdL.jpg",
        "price": 9.85,
        "category": "romance"
    },
    {
        "asin": "0984903038",
        "title": "She Who Is Hidden",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71N0-iIbRdL.jpg",
        "price": 7.7,
        "category": "romance"
    },
    {
        "asin": "0692746617",
        "title": "Sonny's Secret",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61JxH0PiIgL.jpg",
        "price": 2.61,
        "category": "romance"
    },
    {
        "asin": "0595454860",
        "title": "Jabez Snow",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51XVHSdl7BL.jpg",
        "price": 2.17,
        "category": "romance"
    },
    {
        "asin": "1945756020",
        "title": "The Cure",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71WV9Pa4D5L.jpg",
        "price": 7.16,
        "category": "romance"
    },
    {
        "asin": "1621833046",
        "title": "Lisa Meets Her Match",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81heLvNmT6L.jpg",
        "price": 2.84,
        "category": "romance"
    },
    {
        "asin": "0997962429",
        "title": "Trapped",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61hUeLsCD4L.jpg",
        "price": 8.55,
        "category": "romance"
    },
    {
        "asin": "0999631292",
        "title": "For Love of Eden",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51ZT5baO0PL.jpg",
        "price": 0.96,
        "category": "romance"
    },
    {
        "asin": "1640962824",
        "title": "Eien No Ai",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61rxoTbf7DL.jpg",
        "price": 7.91,
        "category": "romance"
    },
    {
        "asin": "0425272435",
        "title": "The Great West Detective Agency",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81U%2B9vvwM4L.jpg",
        "price": 1.88,
        "category": "romance"
    },
    {
        "asin": "1536625469",
        "title": "Atlas",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71k3fnKzHFL.jpg",
        "price": 4.58,
        "category": "romance"
    },
    {
        "asin": "1587761572",
        "title": "The Tuareg: Blue Man of the Sahara",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81idEVWRrCL.jpg",
        "price": 20.2,
        "category": "romance"
    },
    {
        "asin": "0956500722",
        "title": "The Warm Pink Jelly Express Train",
        "img": "https://images-na.ssl-images-amazon.com/images/I/712EoQ5D%2B8L.jpg",
        "price": 6.71,
        "category": "romance"
    },
    {
        "asin": "0595310974",
        "title": "The Senior Year",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51cH%2BDpcG1L.jpg",
        "price": 9.36,
        "category": "romance"
    },
    {
        "asin": "1978650159",
        "title": "Ask No Mercy (Max Anger)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71mURHoL7lL.jpg",
        "price": 4.36,
        "category": "romance"
    },
    {
        "asin": "1718189540",
        "title": "Grace (Portuguese Edition)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41BymAHaHjL.jpg",
        "price": 2.36,
        "category": "romance"
    },
    {
        "asin": "0961451955",
        "title": "In Rembrandt's Shadow",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71p0n4HQaDL.jpg",
        "price": 5.45,
        "category": "romance"
    },
    {
        "asin": "099717952X",
        "title": "Pirate's Patch",
        "img": "https://images-na.ssl-images-amazon.com/images/I/711fEq6vqQL.jpg",
        "price": 5.56,
        "category": "romance"
    },
    {
        "asin": "1606646028",
        "title": "The Count of Monte Cristo, Volume II (of V) by Alexandre Dumas, Fiction, Classics, Action & Adventure, War & Military",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91OONfSuc6L.jpg",
        "price": 5.61,
        "category": "romance"
    },
    {
        "asin": "1608090027",
        "title": "Stuff to Spy For (The Stuff Series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81cmBZFVXIL.jpg",
        "price": 10.02,
        "category": "romance"
    },
    {
        "asin": "1592122604",
        "title": "Yukon Madness (Action Adventure Short Stories Collection)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81YCMdEgE9L.jpg",
        "price": 7.15,
        "category": "romance"
    },
    {
        "asin": "1504716019",
        "title": "Gracie's Touch (Zion Warriors Series, Book 1)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71zbNC%2Bsz9L.jpg",
        "price": 21.33,
        "category": "romance"
    },
    {
        "asin": "1941859739",
        "title": "Hidden Pearls: The Skull",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41MOdUFEQpL.jpg",
        "price": 11.7,
        "category": "romance"
    },
    {
        "asin": "0345546792",
        "title": "The Silent Corner: A Novel of Suspense (Jane Hawk)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91dDIYze1wL.jpg",
        "price": 7.92,
        "category": "horror"
    },
    {
        "asin": "0735218994",
        "title": "Celtic Empire (Dirk Pitt Adventure)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91xI4GjM7jL.jpg",
        "price": 17.32,
        "category": "horror"
    },
    {
        "asin": "0316334758",
        "title": "The Girl With All the Gifts",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51an6r%2B508L.jpg",
        "price": 6.89,
        "category": "horror"
    },
    {
        "asin": "1455586625",
        "title": "End Game (Will Robie Series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/516ykejOh0L.jpg",
        "price": 8.77,
        "category": "horror"
    },
    {
        "asin": "0316405345",
        "title": "Invisible",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61rnkCg2iYL.jpg",
        "price": 25.48,
        "category": "horror"
    },
    {
        "asin": "0525542264",
        "title": "The Lost Ones (A Quinn Colson Novel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61ZJTk%2BkoGL.jpg",
        "price": 6.79,
        "category": "horror"
    },
    {
        "asin": "1455559822",
        "title": "Memory Man (Amos Decker)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81sIePWJQwL.jpg",
        "price": 13.99,
        "category": "horror"
    },
    {
        "asin": "1455586609",
        "title": "End Game (Will Robie Series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/515wWsW%2BWkL.jpg",
        "price": 15.8,
        "category": "horror"
    },
    {
        "asin": "006113922X",
        "title": "Florida Roadkill: A Novel (Serge Storms)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51Xg-CTAszL.jpg",
        "price": 13.52,
        "category": "horror"
    },
    {
        "asin": "0062381652",
        "title": "The Bone Labyrinth: A Sigma Force Novel (Sigma Force Novels)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51SxxMdEk8L.jpg",
        "price": 6.54,
        "category": "horror"
    },
    {
        "asin": "0399575545",
        "title": "The Romanov Ransom (A Sam and Remi Fargo Adventure)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/914x%2Buf40qL.jpg",
        "price": 18.34,
        "category": "horror"
    },
    {
        "asin": "0345548531",
        "title": "Staked: The Iron Druid Chronicles, Book Eight",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91eMFXdhM0L.jpg",
        "price": 7.59,
        "category": "horror"
    },
    {
        "asin": "156975599X",
        "title": "Patriots: A Novel of Survival in the Coming Collapse",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51REczj2RJL.jpg",
        "price": 14.0,
        "category": "horror"
    },
    {
        "asin": "0735219257",
        "title": "A Delicate Touch (A Stone Barrington Novel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91FAwkAWvRL.jpg",
        "price": 14.94,
        "category": "horror"
    },
    {
        "asin": "1597808709",
        "title": "A Second Chance: The Chronicles of St. Mary's Book Three",
        "img": "https://images-na.ssl-images-amazon.com/images/I/714wSBJshRL.jpg",
        "price": 9.86,
        "category": "horror"
    },
    {
        "asin": "0804178801",
        "title": "Night School",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51nRytR2rbL.jpg",
        "price": 13.25,
        "category": "horror"
    },
    {
        "asin": "1730921825",
        "title": "Crime and Punishment",
        "img": "https://images-na.ssl-images-amazon.com/images/I/413%2BcSdz6bL.jpg",
        "price": 8.16,
        "category": "horror"
    },
    {
        "asin": "0735215251",
        "title": "The Pharaoh's Secret (The NUMA Files)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71EOFkXiVxL.jpg",
        "price": 6.79,
        "category": "horror"
    },
    {
        "asin": "039957557X",
        "title": "Typhoon Fury (The Oregon Files)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/A1ErB7w4WML.jpg",
        "price": 20.68,
        "category": "horror"
    },
    {
        "asin": "0062687883",
        "title": "Awakened: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51t7p2JzyJL.jpg",
        "price": 15.64,
        "category": "horror"
    },
    {
        "asin": "1492354252",
        "title": "The Cleaner (John Milton Thrillers)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41RvGFODgGL.jpg",
        "price": 9.39,
        "category": "horror"
    },
    {
        "asin": "0399574255",
        "title": "The Solomon Curse (A Sam and Remi Fargo Adventure)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/7171aYcIQpL.jpg",
        "price": 9.49,
        "category": "horror"
    },
    {
        "asin": "0399177574",
        "title": "Illidan: World of Warcraft: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81khLUoMKaL.jpg",
        "price": 6.12,
        "category": "horror"
    },
    {
        "asin": "0399574190",
        "title": "Fast and Loose (A Stone Barrington Novel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/914vewVfTLL.jpg",
        "price": 10.39,
        "category": "horror"
    },
    {
        "asin": "0399575510",
        "title": "Odessa Sea (Dirk Pitt Adventure)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81D2f6zFe9L.jpg",
        "price": 17.39,
        "category": "horror"
    },
    {
        "asin": "0345468260",
        "title": "Timeline: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/918vbcZK1vL.jpg",
        "price": 13.97,
        "category": "horror"
    },
    {
        "asin": "1578562953",
        "title": "Edge of Eternity",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91Ft%2BN5q0sL.jpg",
        "price": 15.19,
        "category": "horror"
    },
    {
        "asin": "0515155691",
        "title": "The Assassination Option (A Clandestine Operations Novel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/715AQ8YsMaL.jpg",
        "price": 8.99,
        "category": "horror"
    },
    {
        "asin": "1510701990",
        "title": "The Trail Driver: A Western Story",
        "img": "https://images-na.ssl-images-amazon.com/images/I/8129Yu2L8zL.jpg",
        "price": 13.73,
        "category": "horror"
    },
    {
        "asin": "0593104226",
        "title": "Red Metal",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91swIBU7QyL.jpg",
        "price": 27.67,
        "category": "horror"
    },
    {
        "asin": "0312330529",
        "title": "Shantaram: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51hYGaGO76L.jpg",
        "price": 27.36,
        "category": "horror"
    },
    {
        "asin": "0199540241",
        "title": "The Female Quixote: or The Adventures of Arabella (Oxford World's Classics)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51x4zFJVgSL.jpg",
        "price": 6.22,
        "category": "horror"
    },
    {
        "asin": "1629143715",
        "title": "The Man from Battle Flat: A Western Trio",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71GCjmvwIjL.jpg",
        "price": 11.91,
        "category": "horror"
    },
    {
        "asin": "0446564516",
        "title": "Robert Ludlum's (TM) The Janson Command (Janson series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51OyK48ufaL.jpg",
        "price": 9.52,
        "category": "horror"
    },
    {
        "asin": "0451488903",
        "title": "Agent in Place (Gray Man)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91JATxKfMPL.jpg",
        "price": 16.0,
        "category": "horror"
    },
    {
        "asin": "0451414888",
        "title": "Dragon Fate: Book Six of The Age of Fire",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81qAK72OCYL.jpg",
        "price": 8.53,
        "category": "horror"
    },
    {
        "asin": "0425245713",
        "title": "Skeleton Coast (The Oregon Files)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61iKU1lYrML.jpg",
        "price": 9.19,
        "category": "horror"
    },
    {
        "asin": "0515155616",
        "title": "Top Secret (A Clandestine Operations Novel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71kRpHaHvQL.jpg",
        "price": 9.49,
        "category": "horror"
    },
    {
        "asin": "1503936562",
        "title": "Hard Road (A Jon Reznick Thriller)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51m7iZY4fuL.jpg",
        "price": 9.58,
        "category": "horror"
    },
    {
        "asin": "1978633017",
        "title": "Agent in Place (Gray Man)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71%2BD-LLUTCL.jpg",
        "price": 13.7,
        "category": "horror"
    },
    {
        "asin": "1786489783",
        "title": "Leave No Trace: An unputdownable thriller packed with suspense and dark family secrets",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81XLjUGLGyL.jpg",
        "price": 11.42,
        "category": "horror"
    },
    {
        "asin": "0199537852",
        "title": "Greenmantle (Oxford World's Classics)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41Kw7fY5IcL.jpg",
        "price": 8.81,
        "category": "horror"
    },
    {
        "asin": "034542882X",
        "title": "Star Wars, Episode II: Attack of the Clones",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91iYPW9FejL.jpg",
        "price": 7.59,
        "category": "horror"
    },
    {
        "asin": "0062381644",
        "title": "The Bone Labyrinth: A Sigma Force Novel (Sigma Force Novels)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61ZS9pb7S4L.jpg",
        "price": 25.26,
        "category": "horror"
    },
    {
        "asin": "0425226697",
        "title": "Plague Ship (The Oregon Files)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81y20-oCk0L.jpg",
        "price": 7.92,
        "category": "horror"
    },
    {
        "asin": "0316505382",
        "title": "Blood Oath (Sawbones)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71cLSp4y22L.jpg",
        "price": 15.19,
        "category": "horror"
    },
    {
        "asin": "0345549198",
        "title": "The Fateful Lightning: A Novel of the Civil War",
        "img": "https://images-na.ssl-images-amazon.com/images/I/911Mp0fgjtL.jpg",
        "price": 14.93,
        "category": "horror"
    },
    {
        "asin": "0451467698",
        "title": "No Fortunate Son (A Pike Logan Thriller)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71FDmM4vwdL.jpg",
        "price": 9.49,
        "category": "horror"
    },
    {
        "asin": "0345505492",
        "title": "The Emperor's Tomb",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51r%2BG5HGkzL.jpg",
        "price": 14.93,
        "category": "horror"
    },
    {
        "asin": "0316302775",
        "title": "Shadowborn (Seraphim)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51Vfe9jrxML.jpg",
        "price": 10.94,
        "category": "horror"
    },
    {
        "asin": "0999051407",
        "title": "Blood Memory Society",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71Ht6hq-a8L.jpg",
        "price": 12.67,
        "category": "horror"
    },
    {
        "asin": "1402579373",
        "title": "Lies My Teacher Told Me: Everything Your American History Textbook Got Wrong",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71Y0GoEGz4L.jpg",
        "price": 26.36,
        "category": "horror"
    },
    {
        "asin": "0446519960",
        "title": "Absolute Power",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71QlNyX1VcL.jpg",
        "price": 17.22,
        "category": "horror"
    },
    {
        "asin": "1455559814",
        "title": "Memory Man (Memory Man series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51orhi%2B5XcL.jpg",
        "price": 12.66,
        "category": "horror"
    },
    {
        "asin": "0804179794",
        "title": "The Collected Short Stories of Louis L'Amour, Volume 7: Frontier Stories",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81%2ByT7qClCL.jpg",
        "price": 6.64,
        "category": "horror"
    },
    {
        "asin": "1607065231",
        "title": "Chew, Vol. 5: Major League Chew",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71LZ3cN%2BaaL.jpg",
        "price": 10.57,
        "category": "horror"
    },
    {
        "asin": "1631580973",
        "title": "The Last Flight: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71ifey%2BbcDL.jpg",
        "price": 19.52,
        "category": "horror"
    },
    {
        "asin": "0525590633",
        "title": "The Rising Sea (The NUMA Files)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91evxyNDiXL.jpg",
        "price": 35.25,
        "category": "horror"
    },
    {
        "asin": "045120865X",
        "title": "Blaze Wyndham",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71Ul8Eoz09L.jpg",
        "price": 22.32,
        "category": "horror"
    },
    {
        "asin": "147898421X",
        "title": "Invisible",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51qrZmTlaAL.jpg",
        "price": 18.07,
        "category": "horror"
    },
    {
        "asin": "0954013751",
        "title": "Nimbus: Hell on Earth",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51E-Y0FGfKL.jpg",
        "price": 9.44,
        "category": "horror"
    },
    {
        "asin": "0345485807",
        "title": "The Charlemagne Pursuit: A Novel (Cotton Malone)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/718s88qpjqL.jpg",
        "price": 9.15,
        "category": "horror"
    },
    {
        "asin": "0892962836",
        "title": "The Big Nowhere (Mr. Men and Little Miss)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/519zfC46zBL.jpg",
        "price": 27.75,
        "category": "horror"
    },
    {
        "asin": "0425272303",
        "title": "Robert B. Parker's Bull River (A Cole and Hitch Novel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/816odS2mz0L.jpg",
        "price": 9.08,
        "category": "horror"
    },
    {
        "asin": "0735217238",
        "title": "Barely Legal (Herbie Fisher)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91hQGBQFevL.jpg",
        "price": 10.01,
        "category": "horror"
    },
    {
        "asin": "0345503805",
        "title": "The Warded Man: Book One of The Demon Cycle",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91D7n-LlVDL.jpg",
        "price": 27.31,
        "category": "horror"
    },
    {
        "asin": "1478929987",
        "title": "Memory Man (Memory Man series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61WyFDR4KzL.jpg",
        "price": 23.79,
        "category": "horror"
    },
    {
        "asin": "1631402153",
        "title": "Tarzan: The Complete Russ Manning Newspaper Strips Volume 4 (1974-1979)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81qdNdSQpLL.jpg",
        "price": 41.93,
        "category": "horror"
    },
    {
        "asin": "045147306X",
        "title": "Cut and Thrust: A Stone Barrington Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81oyHIq5r2L.jpg",
        "price": 7.53,
        "category": "horror"
    },
    {
        "asin": "0425231453",
        "title": "Arctic Drift (Dirk Pitt)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91tdtjMTf2L.jpg",
        "price": 9.66,
        "category": "horror"
    },
    {
        "asin": "0571295711",
        "title": "Lord of the Flies",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81uc0ffe6xL.jpg",
        "price": 10.25,
        "category": "horror"
    },
    {
        "asin": "1499860846",
        "title": "The Seventh Scroll (2) (The Egyptian Series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81j3E4E4lyL.jpg",
        "price": 13.49,
        "category": "horror"
    },
    {
        "asin": "0804163944",
        "title": "Command Authority (A Jack Ryan Novel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81n8osk6RVL.jpg",
        "price": 26.07,
        "category": "horror"
    },
    {
        "asin": "0143036688",
        "title": "The Memory of Running",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91wnTFWrTTL.jpg",
        "price": 7.99,
        "category": "horror"
    },
    {
        "asin": "0441007155",
        "title": "Stark's War (Stark's War, Book 1)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91eT7F3HaKL.jpg",
        "price": 7.87,
        "category": "horror"
    },
    {
        "asin": "1405861835",
        "title": "Spies (York Notes Advanced)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/614ybf4Od3L.jpg",
        "price": 9.68,
        "category": "horror"
    },
    {
        "asin": "1524762474",
        "title": "The Mountain Between Us (Movie Tie-In): A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91oO1lRHkaL.jpg",
        "price": 10.3,
        "category": "horror"
    },
    {
        "asin": "0316242454",
        "title": "A Dance of Mirrors (Shadowdance 3)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51GWlXfaIbL.jpg",
        "price": 11.14,
        "category": "horror"
    },
    {
        "asin": "0425186709",
        "title": "Mission of Honor (Tom Clancy's Op-Center, Book 9)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81VbCtwOvdL.jpg",
        "price": 7.93,
        "category": "horror"
    },
    {
        "asin": "0345461347",
        "title": "To the Last Man: A Novel of the First World War",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91ml-SnGuPL.jpg",
        "price": 17.47,
        "category": "horror"
    },
    {
        "asin": "0999560247",
        "title": "Conch Republic, Island Stepping with Hemingway",
        "img": "https://images-na.ssl-images-amazon.com/images/I/711K9A702mL.jpg",
        "price": 14.84,
        "category": "horror"
    },
    {
        "asin": "0804192499",
        "title": "Utah Blaine",
        "img": "https://images-na.ssl-images-amazon.com/images/I/816d9nB7r5L.jpg",
        "price": 22.14,
        "category": "horror"
    },
    {
        "asin": "0345539214",
        "title": "The Icarus Agenda: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81gIma2MK3L.jpg",
        "price": 8.89,
        "category": "horror"
    },
    {
        "asin": "1511306718",
        "title": "SeaFire (James Bond Series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61gcsZwqhmL.jpg",
        "price": 8.51,
        "category": "horror"
    },
    {
        "asin": "1473671809",
        "title": "The Shout",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71V8EfSgRZL.jpg",
        "price": 4.32,
        "category": "horror"
    },
    {
        "asin": "1524783358",
        "title": "North to the Rails: A Novel (Talon and Chantry)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71r0NaakVfL.jpg",
        "price": 25.71,
        "category": "horror"
    },
    {
        "asin": "1611882672",
        "title": "The Flagler Hunt",
        "img": "https://images-na.ssl-images-amazon.com/images/I/917m3OasiKL.jpg",
        "price": 15.68,
        "category": "horror"
    },
    {
        "asin": "0739323741",
        "title": "The Collected Bowdrie Dramatizations: Volume III (Chuck Bowdrie's Adventures)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/912EUMHHMgL.jpg",
        "price": 27.27,
        "category": "horror"
    },
    {
        "asin": "074902013X",
        "title": "Bright Shiny Things (Hakim & Arnold)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81X4iWbIL5L.jpg",
        "price": 11.18,
        "category": "horror"
    },
    {
        "asin": "0804178321",
        "title": "Half a King (Shattered Sea)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81lCGUkjf7L.jpg",
        "price": 17.85,
        "category": "horror"
    },
    {
        "asin": "0062253832",
        "title": "The Fallen Angel: A Novel (Gabriel Allon)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51Lq6TyXc1L.jpg",
        "price": 13.26,
        "category": "horror"
    },
    {
        "asin": "0553804529",
        "title": "The Collected Short Stories of Louis L'Amour, Volume 3: The Frontier Stories",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71p8msuFWAL.jpg",
        "price": 17.38,
        "category": "horror"
    },
    {
        "asin": "0553578766",
        "title": "Tales from the Empire: Star Wars Legends",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81J45hLh1ML.jpg",
        "price": 7.88,
        "category": "horror"
    },
    {
        "asin": "1608090299",
        "title": "Fly by Night (A Jammer Davis Thriller)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71RiSW6zL2L.jpg",
        "price": 21.07,
        "category": "horror"
    },
    {
        "asin": "1250072689",
        "title": "The Revenant: A Novel of Revenge",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41OGesfH9RL.jpg",
        "price": 11.96,
        "category": "horror"
    },
    {
        "asin": "0316346969",
        "title": "Humans, Bow Down",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51JCvyoNjXL.jpg",
        "price": 12.49,
        "category": "horror"
    },
    {
        "asin": "0307737543",
        "title": "Last of the Breed",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81lFpMN9uXL.jpg",
        "price": 22.09,
        "category": "horror"
    },
    {
        "asin": "0751564885",
        "title": "Let Me Lie: The Number One Sunday Times Bestseller",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51f9wKHtBJL.jpg",
        "price": 9.6,
        "category": "horror"
    },
    {
        "asin": "0316024600",
        "title": "Sail",
        "img": "https://images-na.ssl-images-amazon.com/images/I/716mOr6gg9L.jpg",
        "price": 34.74,
        "category": "horror"
    },
    {
        "asin": "034536161X",
        "title": "Indiana Jones and the Last Crusade",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91%2Bduh1dJsL.jpg",
        "price": 7.74,
        "category": "horror"
    },
    {
        "asin": "1478999225",
        "title": "The Fallen (Memory Man series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81ZKeHIOs9L.jpg",
        "price": 11.49,
        "category": "horror"
    },
    {
        "asin": "1682616126",
        "title": "The Prefect of Panama (The Agency)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81E%2BkP%2B04kL.jpg",
        "price": 24.34,
        "category": "horror"
    },
    {
        "asin": "0735286124",
        "title": "Radigan: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81yNX5v5uAL.jpg",
        "price": 20.44,
        "category": "horror"
    },
    {
        "asin": "0446527017",
        "title": "Standoff",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61vJkp1J64L.jpg",
        "price": 15.23,
        "category": "horror"
    },
    {
        "asin": "0345540700",
        "title": "The High Druid's Blade: The Defenders of Shannara",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91rEIKBITuL.jpg",
        "price": 19.61,
        "category": "horror"
    },
    {
        "asin": "1432849506",
        "title": "The Marshal and the Sinister Still (A Nelson Lane Frontier Mystery)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91wOZCsGdSL.jpg",
        "price": 20.38,
        "category": "horror"
    },
    {
        "asin": "0525494308",
        "title": "Quick & Dirty (A Stone Barrington Novel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81QlXRjVg4L.jpg",
        "price": 30.74,
        "category": "horror"
    },
    {
        "asin": "1497642418",
        "title": "The Face in the Frost",
        "img": "https://images-na.ssl-images-amazon.com/images/I/516XFxgttiL.jpg",
        "price": 10.84,
        "category": "horror"
    },
    {
        "asin": "145552249X",
        "title": "Robert Ludlum's (TM) The Janson Option (Janson series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81CAhm7dV5L.jpg",
        "price": 32.86,
        "category": "horror"
    },
    {
        "asin": "0399177418",
        "title": "The Memory of Fire (The Waking Land)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91OvCAIaVUL.jpg",
        "price": 21.41,
        "category": "horror"
    },
    {
        "asin": "0804178429",
        "title": "Half the World (Shattered Sea)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51%2BsRzTLvdL.jpg",
        "price": 23.22,
        "category": "horror"
    },
    {
        "asin": "1608090663",
        "title": "Fly by Night (A Jammer Davis Thriller)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71RiSW6zL2L.jpg",
        "price": 12.44,
        "category": "horror"
    },
    {
        "asin": "0345806492",
        "title": "Inferno: En espanol (Spanish Edition)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91vHqD35GOL.jpg",
        "price": 12.53,
        "category": "horror"
    },
    {
        "asin": "1501167154",
        "title": "The Four Legendary Kingdoms (Jack West, Jr.)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81cFEf5fcrL.jpg",
        "price": 15.29,
        "category": "horror"
    },
    {
        "asin": "1489713921",
        "title": "River Divided",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71nt4jhGwUL.jpg",
        "price": 3.23,
        "category": "horror"
    },
    {
        "asin": "0692305475",
        "title": "The Searchers",
        "img": "https://images-na.ssl-images-amazon.com/images/I/415WRSuf5FL.jpg",
        "price": 4.59,
        "category": "horror"
    },
    {
        "asin": "0804127093",
        "title": "The Quick and the Dead",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71EfTDy1sgL.jpg",
        "price": 27.62,
        "category": "horror"
    },
    {
        "asin": "0990846105",
        "title": "Apparition Island (4) (The Windjammer Mystery Series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51yDJ5TgDbL.jpg",
        "price": 12.72,
        "category": "horror"
    },
    {
        "asin": "0804121060",
        "title": "Inferno: A Novel (Robert Langdon)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/A1p-6W6vlYL.jpg",
        "price": 23.24,
        "category": "horror"
    },
    {
        "asin": "0525497307",
        "title": "Typhoon Fury (The Oregon Files)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91wyICGOyHL.jpg",
        "price": 29.74,
        "category": "horror"
    },
    {
        "asin": "1480872016",
        "title": "The Shaft: A Supernatural Thriller",
        "img": "https://images-na.ssl-images-amazon.com/images/I/517qmE7PxGL.jpg",
        "price": 18.14,
        "category": "horror"
    },
    {
        "asin": "0875654282",
        "title": "Sins of the Younger Sons",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81sC1XaM7XL.jpg",
        "price": 24.89,
        "category": "horror"
    },
    {
        "asin": "1416509054",
        "title": "Ghost (Paladin of Shadows, Book 1)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51ptwTm04iL.jpg",
        "price": 18.89,
        "category": "horror"
    },
    {
        "asin": "0345514513",
        "title": "The Brotherhood of the Rose: A Novel (Mortalis)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81IFfeULcML.jpg",
        "price": 12.8,
        "category": "horror"
    },
    {
        "asin": "0857387936",
        "title": "Zambezi",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51x4kzKCW%2BL.jpg",
        "price": 15.72,
        "category": "horror"
    },
    {
        "asin": "0307737500",
        "title": "The Walking Drum",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81OzqN3T0FL.jpg",
        "price": 25.86,
        "category": "horror"
    },
    {
        "asin": "125012199X",
        "title": "Maze Master: A Thriller",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51fUTRHizFL.jpg",
        "price": 26.59,
        "category": "horror"
    },
    {
        "asin": "1501264249",
        "title": "Ranger, The (A Quinn Colson Novel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71PPOsWm2LL.jpg",
        "price": 12.58,
        "category": "horror"
    },
    {
        "asin": "0525531491",
        "title": "The Mountain Between Us (Movie Tie-In): A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91DyWHD5eAL.jpg",
        "price": 19.36,
        "category": "horror"
    },
    {
        "asin": "1590172728",
        "title": "In Hazard (New York Review Books Classics)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61Bedw%2Bk8WL.jpg",
        "price": 12.04,
        "category": "horror"
    },
    {
        "asin": "0441017851",
        "title": "The Devil's Eye (An Alex Benedict Novel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91-z5E-Y8QL.jpg",
        "price": 7.99,
        "category": "horror"
    },
    {
        "asin": "1455517089",
        "title": "The Kill Room (Lincoln Rhyme)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51yV8NXO0HL.jpg",
        "price": 12.85,
        "category": "horror"
    },
    {
        "asin": "1644383357",
        "title": "Helen's Crusade",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71FRJ0J56UL.jpg",
        "price": 11.04,
        "category": "horror"
    },
    {
        "asin": "0743250265",
        "title": "Now You See It: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41Bv93U8qCL.jpg",
        "price": 12.52,
        "category": "horror"
    },
    {
        "asin": "0544242157",
        "title": "Foxfire",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51c8-cGk9-L.jpg",
        "price": 13.97,
        "category": "horror"
    },
    {
        "asin": "1504041399",
        "title": "War Against the Mafia (The Executioner)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51yPa%2BKfCOL.jpg",
        "price": 11.32,
        "category": "horror"
    },
    {
        "asin": "0345483057",
        "title": "The Fires of Spring: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91mGElaxArL.jpg",
        "price": 15.73,
        "category": "horror"
    },
    {
        "asin": "0425259358",
        "title": "Tom Clancy Presents: Act of Valor",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71nOMAdm-iL.jpg",
        "price": 9.1,
        "category": "horror"
    },
    {
        "asin": "1598531646",
        "title": "Tarzan of the Apes: A Library of America Special Publication",
        "img": "https://images-na.ssl-images-amazon.com/images/I/615EQTEHR4L.jpg",
        "price": 13.26,
        "category": "horror"
    },
    {
        "asin": "1501181858",
        "title": "A Promise to Kill: A Clyde Barr Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71W9GRf9r9L.jpg",
        "price": 8.97,
        "category": "horror"
    },
    {
        "asin": "0553586092",
        "title": "Babylon Rising: The Edge of Darkness",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91BPjFtGDbL.jpg",
        "price": 8.19,
        "category": "horror"
    },
    {
        "asin": "1533233578",
        "title": "The Book Club",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41ph9NDADGL.jpg",
        "price": 10.99,
        "category": "horror"
    },
    {
        "asin": "0143108093",
        "title": "The Last Bookaneer: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91o1OjWX2uL.jpg",
        "price": 10.48,
        "category": "horror"
    },
    {
        "asin": "0451413423",
        "title": "Ralph Compton The Omaha Trail (The Trail Drive Series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81Rp8ge32eL.jpg",
        "price": 6.64,
        "category": "horror"
    },
    {
        "asin": "125010310X",
        "title": "In the Still of the Night: The Supernaturals II",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91xB0qU71lL.jpg",
        "price": 23.68,
        "category": "horror"
    },
    {
        "asin": "1591140560",
        "title": "Cold is the Sea: A Novel (Bluejacket Books)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/512Q8B2ANXL.jpg",
        "price": 8.31,
        "category": "horror"
    },
    {
        "asin": "1524723495",
        "title": "Fast and Loose (A Stone Barrington Novel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81ZdseZ23SL.jpg",
        "price": 24.84,
        "category": "horror"
    },
    {
        "asin": "1524783234",
        "title": "Taggart: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71uwInuX3FL.jpg",
        "price": 25.94,
        "category": "horror"
    },
    {
        "asin": "161170278X",
        "title": "The Crackerjack",
        "img": "https://images-na.ssl-images-amazon.com/images/I/616z3tDYdmL.jpg",
        "price": 5.57,
        "category": "horror"
    },
    {
        "asin": "0062473409",
        "title": "Dragon Teeth CD: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81vEZRynpSL.jpg",
        "price": 10.13,
        "category": "horror"
    },
    {
        "asin": "1621579832",
        "title": "Justice on Trial: The Kavanaugh Confirmation and the Future of the Supreme Court",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71WdFQNYSJL.jpg",
        "price": 17.39,
        "category": "history"
    },
    {
        "asin": "0307742482",
        "title": "Killers of the Flower Moon: The Osage Murders and the Birth of the FBI",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81qxqy2R%2BmL.jpg",
        "price": 12.71,
        "category": "history"
    },
    {
        "asin": "0525512179",
        "title": "21 Lessons for the 21st Century",
        "img": "https://images-na.ssl-images-amazon.com/images/I/811iZOA9%2B8L.jpg",
        "price": 14.9,
        "category": "history"
    },
    {
        "asin": "0307476073",
        "title": "Wild: From Lost to Found on the Pacific Crest Trail",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81WNVAgspxL.jpg",
        "price": 10.27,
        "category": "history"
    },
    {
        "asin": "0385349947",
        "title": "Lean In: Women, Work, and the Will to Lead",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81coZ37EmxL.jpg",
        "price": 14.3,
        "category": "history"
    },
    {
        "asin": "0062363603",
        "title": "Hidden Figures: The American Dream and the Untold Story of the Black Women Mathematicians Who Helped Win the Space Race",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71O3WN6oyzL.jpg",
        "price": 9.75,
        "category": "history"
    },
    {
        "asin": "1476794146",
        "title": "Five Presidents: My Extraordinary Journey with Eisenhower, Kennedy, Johnson, Nixon, and Ford",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81XDguZCJgL.jpg",
        "price": 7.78,
        "category": "history"
    },
    {
        "asin": "0393635244",
        "title": "These Truths: A History of the United States",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91NZ5Cw-4TL.jpg",
        "price": 29.27,
        "category": "history"
    },
    {
        "asin": "0316067601",
        "title": "Lone Survivor: The Eyewitness Account of Operation Redwing and the Lost Heroes of SEAL Team 10",
        "img": "https://images-na.ssl-images-amazon.com/images/I/411nhI-kPYL.jpg",
        "price": 9.86,
        "category": "history"
    },
    {
        "asin": "0743270754",
        "title": "Team of Rivals: The Political Genius of Abraham Lincoln",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51bpOR8qigL.jpg",
        "price": 13.14,
        "category": "history"
    },
    {
        "asin": "1455566675",
        "title": "The Plaza: The Secret Life of America's Most Famous Hotel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41v0b001ouL.jpg",
        "price": 17.1,
        "category": "history"
    },
    {
        "asin": "0385534248",
        "title": "Killers of the Flower Moon: The Osage Murders and the Birth of the FBI",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81XMxzljGaL.jpg",
        "price": 16.29,
        "category": "history"
    },
    {
        "asin": "1933782048",
        "title": "This Fleeting World: A Short History of Humanity (AP World History & Teachers' Edition)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81dMjTpUMnL.jpg",
        "price": 14.11,
        "category": "history"
    },
    {
        "asin": "0316743003",
        "title": "Skunk Works: A Personal Memoir of My Years at Lockheed",
        "img": "https://images-na.ssl-images-amazon.com/images/I/514RGQ3bURL.jpg",
        "price": 12.74,
        "category": "history"
    },
    {
        "asin": "0316202304",
        "title": "Area 51: An Uncensored History of America's Top Secret Military Base",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71QPBFYW0eL.jpg",
        "price": 11.59,
        "category": "history"
    },
    {
        "asin": "1977052304",
        "title": "Helmet for My Pillow: From Parris Island to the Pacific",
        "img": "https://images-na.ssl-images-amazon.com/images/I/511sLO4dtwL.jpg",
        "price": 5.66,
        "category": "history"
    },
    {
        "asin": "1465475850",
        "title": "History of the World Map by Map",
        "img": "https://images-na.ssl-images-amazon.com/images/I/811X5Rx5atL.jpg",
        "price": 42.28,
        "category": "history"
    },
    {
        "asin": "1627790640",
        "title": "Killing England: The Brutal Struggle for American Independence (Bill O'Reilly's Killing Series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91g9OsxMUUL.jpg",
        "price": 16.67,
        "category": "history"
    },
    {
        "asin": "1938895223",
        "title": "The Know Your Bill of Rights Book: Don't Lose Your Constitutional Rights--Learn Them!",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51aBg4cHcUL.jpg",
        "price": 11.87,
        "category": "history"
    },
    {
        "asin": "1401309615",
        "title": "The Match: The Day the Game of Golf Changed Forever",
        "img": "https://images-na.ssl-images-amazon.com/images/I/612U3Iex2bL.jpg",
        "price": 6.86,
        "category": "history"
    },
    {
        "asin": "019516895X",
        "title": "Battle Cry of Freedom: The Civil War Era",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81GHAhK2ngL.jpg",
        "price": 12.82,
        "category": "history"
    },
    {
        "asin": "1454933275",
        "title": "The Founding Myth: Why Christian Nationalism Is Un-American",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61t9gG8MXDL.jpg",
        "price": 20.39,
        "category": "history"
    },
    {
        "asin": "0812976355",
        "title": "The Thirteen American Arguments: Enduring Debates That Define and Inspire Our Country",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81wE5jzvEaL.jpg",
        "price": 8.82,
        "category": "history"
    },
    {
        "asin": "1984823310",
        "title": "On Faith: Lessons from an American Believer",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71HszFjJhjL.jpg",
        "price": 16.59,
        "category": "history"
    },
    {
        "asin": "150117200X",
        "title": "The Day After Roswell",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81gd5zjyj2L.jpg",
        "price": 12.73,
        "category": "history"
    },
    {
        "asin": "0883780305",
        "title": "Destruction of Black Civilization: Great Issues of a Race from 4500 B.C. to 2000 A.D.",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71T2eGT67IL.jpg",
        "price": 18.19,
        "category": "history"
    },
    {
        "asin": "0897333764",
        "title": "Five Chimneys: A Woman Survivor's True Story of Auschwitz",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51VfI0sH16L.jpg",
        "price": 11.54,
        "category": "history"
    },
    {
        "asin": "0553381482",
        "title": "The Last Stand of the Tin Can Sailors: The Extraordinary World War II Story of the U.S. Navy's Finest Hour",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91v0sqhxc9L.jpg",
        "price": 13.98,
        "category": "history"
    },
    {
        "asin": "1465437975",
        "title": "History: From the Dawn of Civilization to the Present Day",
        "img": "https://images-na.ssl-images-amazon.com/images/I/A1pGtb13XzL.jpg",
        "price": 36.61,
        "category": "history"
    },
    {
        "asin": "184668000X",
        "title": "Nella Last's War: The Second World War Diaries of Housewife, 49",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91L3zBxcaRL.jpg",
        "price": 13.41,
        "category": "history"
    },
    {
        "asin": "0803283911",
        "title": "Black Elk Speaks: The Complete Edition",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51Jf8JDQgvL.jpg",
        "price": 15.81,
        "category": "history"
    },
    {
        "asin": "0394726251",
        "title": "The Discoverers: A History of Man's Search to Know His World and Himself",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91LTOpc%2Bm2L.jpg",
        "price": 17.1,
        "category": "history"
    },
    {
        "asin": "0872205541",
        "title": "The Trial and Death of Socrates",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51VKjV0nAwL.jpg",
        "price": 7.68,
        "category": "history"
    },
    {
        "asin": "067002581X",
        "title": "The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91an-Qn0VfL.jpg",
        "price": 16.79,
        "category": "history"
    },
    {
        "asin": "034554482X",
        "title": "The Perfect Horse: The Daring U.S. Mission to Rescue the Priceless Stallions Kidnapped by the Nazis",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91O2OW-iE3L.jpg",
        "price": 13.43,
        "category": "history"
    },
    {
        "asin": "0393327655",
        "title": "The End of Faith: Religion, Terror, and the Future of Reason",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51g7qN0TxCL.jpg",
        "price": 10.34,
        "category": "history"
    },
    {
        "asin": "006227564X",
        "title": "Fall and Rise: The Story of 9/11",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71t92ZtjqaL.jpg",
        "price": 21.39,
        "category": "history"
    },
    {
        "asin": "1439107955",
        "title": "The Emperor of All Maladies: A Biography of Cancer",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51qVm-8ZJgL.jpg",
        "price": 16.73,
        "category": "history"
    },
    {
        "asin": "0393246108",
        "title": "Liar's Poker (25th Anniversary Edition): Rising Through the Wreckage on Wall Street (25th Anniversary Edition)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51A87ZBcRCL.jpg",
        "price": 10.24,
        "category": "history"
    },
    {
        "asin": "0743286936",
        "title": "The Summer of 1787: The Men Who Invented the Constitution (The Simon & Schuster America Collection)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51JtGtTnDQL.jpg",
        "price": 7.18,
        "category": "history"
    },
    {
        "asin": "1533305498",
        "title": "First One In, Last One Out: Auschwitz Survivor 31321",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51VRO3HiEXL.jpg",
        "price": 13.89,
        "category": "history"
    },
    {
        "asin": "0393265978",
        "title": "America: A Narrative History (Brief Tenth Edition)  (Vol. 1)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51GqzhVv%2BTL.jpg",
        "price": 56.41,
        "category": "history"
    },
    {
        "asin": "1574554506",
        "title": "United States Catholic Catechism for Adult",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41R7HQF9H2L.jpg",
        "price": 13.98,
        "category": "history"
    },
    {
        "asin": "147283447X",
        "title": "The First Anglo-Sikh War 1845-46: The betrayal of the Khalsa (Campaign)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/910pf0OjFfL.jpg",
        "price": 20.2,
        "category": "history"
    },
    {
        "asin": "1472833473",
        "title": "Roman Army Units in the Western Provinces (2): 3rd Century AD (Men-at-Arms)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91nNsDwqBCL.jpg",
        "price": 17.53,
        "category": "history"
    },
    {
        "asin": "1524758183",
        "title": "Cracking the AP World History Exam, 2019 Edition: Practice Tests & Proven Techniques to Help You Score a 5 (College Test Preparation)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91mP7KfdpSL.jpg",
        "price": 16.85,
        "category": "history"
    },
    {
        "asin": "1538728753",
        "title": "Russian Roulette: The Inside Story of Putin's War on America and the Election of Donald Trump",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51r5OKmakUL.jpg",
        "price": 18.01,
        "category": "history"
    },
    {
        "asin": "031651330X",
        "title": "The Queen: The Forgotten Life Behind an American Myth",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91bMOFBLTTL.jpg",
        "price": 17.13,
        "category": "history"
    },
    {
        "asin": "1627795073",
        "title": "Bill O'Reilly's Legends and Lies: The Real West",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71Io%2BhvCx0L.jpg",
        "price": 19.93,
        "category": "history"
    },
    {
        "asin": "0349100136",
        "title": "If This Is a Man and The Truce",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91O6bZSzBsL.jpg",
        "price": 8.86,
        "category": "history"
    },
    {
        "asin": "0358067766",
        "title": "FDR at War Boxed Set: The Mantle of Command, Commander in Chief, and War and Peace",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61Z3bZWPaOL.jpg",
        "price": 40.39,
        "category": "history"
    },
    {
        "asin": "1524797960",
        "title": "The World of Lore: Monstrous Creatures",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91QeaQInAfL.jpg",
        "price": 16.29,
        "category": "history"
    },
    {
        "asin": "0679723129",
        "title": "Gideon's Trumpet: How One Man, a Poor Prisoner, Took His Case to the Supreme Court-and Changed the Law of the United States",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71bPiSEjozL.jpg",
        "price": 13.24,
        "category": "history"
    },
    {
        "asin": "0804136653",
        "title": "A Spy Among Friends: Kim Philby and the Great Betrayal",
        "img": "https://images-na.ssl-images-amazon.com/images/I/916LCilIgYL.jpg",
        "price": 10.75,
        "category": "history"
    },
    {
        "asin": "0060197765",
        "title": "From Third World to First: The Singapore Story - 1965-2000",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51qLl7jTeEL.jpg",
        "price": 24.83,
        "category": "history"
    },
    {
        "asin": "0425276279",
        "title": "Team Dog: How to Train Your Dog--the Navy SEAL Way",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91HD0bxb0hL.jpg",
        "price": 9.99,
        "category": "history"
    },
    {
        "asin": "0385526261",
        "title": "Destiny of the Republic: A Tale of Madness, Medicine and the Murder of a President",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91VFBG-zQyL.jpg",
        "price": 18.6,
        "category": "history"
    },
    {
        "asin": "047018549X",
        "title": "All the Shah's Men: An American Coup and the Roots of Middle East Terror",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81uN%2BS8R0ZL.jpg",
        "price": 14.29,
        "category": "history"
    },
    {
        "asin": "0060518502",
        "title": "Manhunt: The 12-Day Chase for Lincoln's Killer (P.S.)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51s91pX5O8L.jpg",
        "price": 12.71,
        "category": "history"
    },
    {
        "asin": "1594204586",
        "title": "Directorate S: The C.I.A. and America's Secret Wars in Afghanistan and Pakistan",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81mZW-xOUvL.jpg",
        "price": 14.54,
        "category": "history"
    },
    {
        "asin": "1631492853",
        "title": "The Color of Law: A Forgotten History of How Our Government Segregated America",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91AgJz4BelL.jpg",
        "price": 20.17,
        "category": "history"
    },
    {
        "asin": "074326004X",
        "title": "Assassination Vacation",
        "img": "https://images-na.ssl-images-amazon.com/images/I/516ZpcYaeEL.jpg",
        "price": 7.01,
        "category": "history"
    },
    {
        "asin": "0802127002",
        "title": "Hue 1968: A Turning Point of the American War in Vietnam",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81z6Q26UC3L.jpg",
        "price": 20.54,
        "category": "history"
    },
    {
        "asin": "0195307143",
        "title": "Polio: An American Story",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81ANOmpfRGL.jpg",
        "price": 14.11,
        "category": "history"
    },
    {
        "asin": "0804176604",
        "title": "Devotion: An Epic Story of Heroism, Friendship, and Sacrifice",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91eSdBPeX7L.jpg",
        "price": 14.84,
        "category": "history"
    },
    {
        "asin": "0802145922",
        "title": "What It Is Like To Go To War",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51mJWfAuhwL.jpg",
        "price": 11.99,
        "category": "history"
    },
    {
        "asin": "0679730052",
        "title": "The Age of Extremes: A History of the World, 1914-1991",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91oQcQ4EEJL.jpg",
        "price": 8.94,
        "category": "history"
    },
    {
        "asin": "1594633932",
        "title": "How We Got to Now: Six Innovations That Made the Modern World",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81HMTLgpHML.jpg",
        "price": 13.28,
        "category": "history"
    },
    {
        "asin": "1472830903",
        "title": "USAF F-105 Thunderchief vs VPAF MiG-17: Vietnam 1965-68 (Duel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81q%2Bbsc6EnL.jpg",
        "price": 19.62,
        "category": "history"
    },
    {
        "asin": "1973427370",
        "title": "The Dark Ages 476-918 A.D.",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51zeEXMZCAL.jpg",
        "price": 7.22,
        "category": "history"
    },
    {
        "asin": "1501164929",
        "title": "The Liberation of Paris: How Eisenhower, de Gaulle, and von Choltitz Saved the City of Light",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81NvF5OIRfL.jpg",
        "price": 18.23,
        "category": "history"
    },
    {
        "asin": "022635721X",
        "title": "Why Learn History (When It's Already on Your Phone)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41lJfcnxskL.jpg",
        "price": 16.82,
        "category": "history"
    },
    {
        "asin": "1426218338",
        "title": "National Geographic Atlas of Beer: A Globe-Trotting Journey Through the World of Beer",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91gNoyxOIML.jpg",
        "price": 24.98,
        "category": "history"
    },
    {
        "asin": "1574882864",
        "title": "The Forgotten Soldier",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51OLqLHL9hL.jpg",
        "price": 15.85,
        "category": "history"
    },
    {
        "asin": "0306903199",
        "title": "The Swamp Fox: How Francis Marion Saved the American Revolution",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51CuKxlsq%2BL.jpg",
        "price": 10.37,
        "category": "history"
    },
    {
        "asin": "1451606338",
        "title": "Plunder and Deceit: Big Government's Exploitation of Young People and the Future",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81G5oeRG-JL.jpg",
        "price": 13.57,
        "category": "history"
    },
    {
        "asin": "0393326713",
        "title": "The 9/11 Commission Report: Final Report of the National Commission on Terrorist Attacks Upon the United States (Authorized Edition)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41InHz3EGBL.jpg",
        "price": 7.84,
        "category": "history"
    },
    {
        "asin": "0679733760",
        "title": "A Midwife's Tale: The Life of Martha Ballard, Based on Her Diary, 1785-1812",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71jY1aJd9YL.jpg",
        "price": 13.13,
        "category": "history"
    },
    {
        "asin": "0963188909",
        "title": "The Montauk Project: Experiments in Time",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51SLssizBxL.jpg",
        "price": 11.65,
        "category": "history"
    },
    {
        "asin": "1536988286",
        "title": "The Story of the  Moors  in Spain",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51N%2BFwszeSL.jpg",
        "price": 6.9,
        "category": "history"
    },
    {
        "asin": "0544800885",
        "title": "The Darkening Age: The Christian Destruction of the Classical World",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51hG1Ki8fkL.jpg",
        "price": 13.09,
        "category": "history"
    },
    {
        "asin": "0395859964",
        "title": "The Journals of Lewis and Clark (Lewis & Clark Expedition)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51ASiayazGL.jpg",
        "price": 10.73,
        "category": "history"
    },
    {
        "asin": "0544947290",
        "title": "The Winter Fortress: The Epic Mission to Sabotage Hitler's Atomic Bomb",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51s7l21SuAL.jpg",
        "price": 10.72,
        "category": "history"
    },
    {
        "asin": "0195182502",
        "title": "Lost Scriptures: Books that Did Not Make It into the New Testament",
        "img": "https://images-na.ssl-images-amazon.com/images/I/412g6yFWOvL.jpg",
        "price": 12.53,
        "category": "history"
    },
    {
        "asin": "1400067650",
        "title": "Destiny and Power: The American Odyssey of George Herbert Walker Bush",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91zCxqxC1sL.jpg",
        "price": 15.98,
        "category": "history"
    },
    {
        "asin": "0767900383",
        "title": "Under the Tuscan Sun: At Home in Italy",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91Rv469ZiFL.jpg",
        "price": 10.41,
        "category": "history"
    },
    {
        "asin": "0307720667",
        "title": "Without You, There Is No Us: Undercover Among the Sons of North Korea's Elite",
        "img": "https://images-na.ssl-images-amazon.com/images/I/A1ZfxlcYJeL.jpg",
        "price": 10.29,
        "category": "history"
    },
    {
        "asin": "1416580514",
        "title": "Horse Soldiers: The Extraordinary Story of a Band of US Soldiers Who Rode to Victory in Afghanistan",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91-dDqdidBL.jpg",
        "price": 16.41,
        "category": "history"
    },
    {
        "asin": "0316001945",
        "title": "Cleopatra: A Life",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91Jpi00b-vL.jpg",
        "price": 10.99,
        "category": "history"
    },
    {
        "asin": "0674976827",
        "title": "The People vs. Democracy: Why Our Freedom Is in Danger and How to Save It",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51hP5GttMqL.jpg",
        "price": 13.19,
        "category": "history"
    },
    {
        "asin": "161039691X",
        "title": "The Cadaver King and the Country Dentist: A True Story of Injustice in the American South",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41ZsMrcMb9L.jpg",
        "price": 11.82,
        "category": "history"
    },
    {
        "asin": "168358063X",
        "title": "Amazing Tales from the Boston Red Sox Dugout: A Collection of the Greatest Red Sox Stories Ever Told",
        "img": "https://images-na.ssl-images-amazon.com/images/I/718lCJM2jVL.jpg",
        "price": 20.72,
        "category": "history"
    },
    {
        "asin": "0967673747",
        "title": "Princess: A True Story of Life Behind the Veil in Saudi Arab",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91hjlftjPbL.jpg",
        "price": 12.21,
        "category": "history"
    },
    {
        "asin": "0385265204",
        "title": "Cartoon History of the Universe Volumes 1-7",
        "img": "https://images-na.ssl-images-amazon.com/images/I/A19wkecPXKL.jpg",
        "price": 18.07,
        "category": "history"
    },
    {
        "asin": "1465416056",
        "title": "Firearms: An Illustrated History",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91G8EbYWZHL.jpg",
        "price": 22.44,
        "category": "history"
    },
    {
        "asin": "0195170245",
        "title": "Egyptian Mythology: A Guide to the Gods, Goddesses, and Traditions of Ancient Egypt",
        "img": "https://images-na.ssl-images-amazon.com/images/I/813OMMKM7BL.jpg",
        "price": 15.82,
        "category": "history"
    },
    {
        "asin": "142621555X",
        "title": "National Geographic The Old West",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91rYTfJ19XL.jpg",
        "price": 22.66,
        "category": "history"
    },
    {
        "asin": "1426215436",
        "title": "National Geographic Family Reference Atlas of the World, Fourth Edition: Indispensable Information and More Than 1,000 Maps and Illustrations",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91F2xanmcGL.jpg",
        "price": 44.76,
        "category": "history"
    },
    {
        "asin": "0674237471",
        "title": "The Color of Money: Black Banks and the Racial Wealth Gap",
        "img": "https://images-na.ssl-images-amazon.com/images/I/610XgsBrlIL.jpg",
        "price": 14.24,
        "category": "history"
    },
    {
        "asin": "0738610372",
        "title": "CLEP® History of the U.S. I Book + Online (CLEP Test Preparation)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71h%2BPJ2yCfL.jpg",
        "price": 31.46,
        "category": "history"
    },
    {
        "asin": "0880800178",
        "title": "The Making of America: The Substance and Meaning of the Constitution",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71-lrB6B0ZL.jpg",
        "price": 22.28,
        "category": "history"
    },
    {
        "asin": "1945436239",
        "title": "Strange Cures",
        "img": "https://images-na.ssl-images-amazon.com/images/I/412QoCe8KyL.jpg",
        "price": 19.26,
        "category": "history"
    },
    {
        "asin": "0190229233",
        "title": "Strategy: A History",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51KqIOqFw9L.jpg",
        "price": 17.94,
        "category": "history"
    },
    {
        "asin": "0895555301",
        "title": "Lives of The Saints: For Everyday in the Year",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51nfuy8cySL.jpg",
        "price": 16.92,
        "category": "history"
    },
    {
        "asin": "0674951913",
        "title": "Whiteness of a Different Color: European Immigrants and the Alchemy of Race",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81hjS5cqYHL.jpg",
        "price": 28.91,
        "category": "history"
    },
    {
        "asin": "0140447601",
        "title": "Democracy in America and Two Essays on America (Penguin Classics)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71PqxqQ0mYL.jpg",
        "price": 12.91,
        "category": "history"
    },
    {
        "asin": "1510723323",
        "title": "The Plot to Hack America: How Putin's Cyberspies and WikiLeaks Tried to Steal the 2016 Election",
        "img": "https://images-na.ssl-images-amazon.com/images/I/813g8pEVwoL.jpg",
        "price": 11.46,
        "category": "history"
    },
    {
        "asin": "110187032X",
        "title": "Who We Are and How We Got Here: Ancient DNA and the New Science of the Human Past",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71QETwYLSbL.jpg",
        "price": 22.39,
        "category": "history"
    },
    {
        "asin": "1400063256",
        "title": "American Lion: Andrew Jackson in the White House",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91ESC5GDfWL.jpg",
        "price": 16.5,
        "category": "history"
    },
    {
        "asin": "1454909056",
        "title": "The Middle Ages: Everyday Life in Medieval Europe",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81qYxbFN0BL.jpg",
        "price": 8.01,
        "category": "history"
    },
    {
        "asin": "0393244660",
        "title": "Flash Boys",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41H9FWpKI4L.jpg",
        "price": 15.47,
        "category": "history"
    },
    {
        "asin": "162157637X",
        "title": "The True Jesus: Uncovering the Divinity of Christ in the Gospels",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91EcS6VR0PL.jpg",
        "price": 16.95,
        "category": "history"
    },
    {
        "asin": "0451495322",
        "title": "The Girl Who Smiled Beads: A Story of War and What Comes After",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81JoBghorwL.jpg",
        "price": 17.98,
        "category": "history"
    },
    {
        "asin": "1472833090",
        "title": "Weapons of the US Special Operations Command",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81BYcXdXiPL.jpg",
        "price": 19.62,
        "category": "history"
    },
    {
        "asin": "014044565X",
        "title": "Ecclesiastical History of the English People (Penguin Classics)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51h7QlF2hJL.jpg",
        "price": 14.83,
        "category": "history"
    },
    {
        "asin": "1465438866",
        "title": "Musicals: The Definitive Illustrated Story",
        "img": "https://images-na.ssl-images-amazon.com/images/I/A1l0nsZqYIL.jpg",
        "price": 22.64,
        "category": "history"
    },
    {
        "asin": "1629995479",
        "title": "Rise: In Defense of Judeo-Christian Values and Freedom",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61bmc5B%2BJTL.jpg",
        "price": 3.79,
        "category": "history"
    },
    {
        "asin": "1414368747",
        "title": "SEAL of God",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51zkdgHl2qL.jpg",
        "price": 12.16,
        "category": "history"
    },
    {
        "asin": "019531588X",
        "title": "The Glorious Cause: The American Revolution, 1763-1789 (Oxford History of the United States)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51iavGntWNL.jpg",
        "price": 19.01,
        "category": "history"
    },
    {
        "asin": "0756617723",
        "title": "World Religions: The Great Faiths Explored and Explained",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71ZW3135BsL.jpg",
        "price": 13.89,
        "category": "history"
    },
    {
        "asin": "0199540268",
        "title": "The Gallic War: Seven Commentaries on The Gallic War with an Eighth Commentary by Aulus Hirtius (Oxford World's Classics)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71qEKyTFX6L.jpg",
        "price": 9.05,
        "category": "history"
    },
    {
        "asin": "156164868X",
        "title": "Florida's Waters (Florida's Natural Ecosystems and Native Species)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91jeeBxth4L.jpg",
        "price": 18.14,
        "category": "history"
    },
    {
        "asin": "1250063310",
        "title": "Encounter in Rendlesham Forest: The Inside Story of the World's Best-Documented UFO Incident",
        "img": "https://images-na.ssl-images-amazon.com/images/I/811mvvVBiUL.jpg",
        "price": 13.69,
        "category": "history"
    },
    {
        "asin": "0618562095",
        "title": "The Perfect Mile: Three Athletes, One Goal, and Less Than Four Minutes to Achieve It",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51lOi0QBoeL.jpg",
        "price": 12.85,
        "category": "history"
    },
    {
        "asin": "0674062116",
        "title": "The Condemnation of Blackness: Race, Crime, and the Making of Modern Urban America",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71Gc6biBD5L.jpg",
        "price": 20.69,
        "category": "history"
    },
    {
        "asin": "0062092901",
        "title": "Liar, Temptress, Soldier, Spy: Four Women Undercover in the Civil War",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61u5vLwgUqL.jpg",
        "price": 13.12,
        "category": "history"
    },
    {
        "asin": "0374533997",
        "title": "Tombstone: The Great Chinese Famine, 1958-1962",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71gysJ%2Bu6xL.jpg",
        "price": 16.2,
        "category": "history"
    },
    {
        "asin": "0306821486",
        "title": "Genius of Place: The Life of Frederick Law Olmsted (A Merloyd Lawrence Book)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51zdiF%2BmRwL.jpg",
        "price": 12.2,
        "category": "history"
    },
    {
        "asin": "0804138265",
        "title": "The Gatekeepers: How the White House Chiefs of Staff Define Every Presidency",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91m4DtQ71ZL.jpg",
        "price": 11.59,
        "category": "history"
    },
    {
        "asin": "148700513X",
        "title": "Channel of Peace: Stranded in Gander on 9/11",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81RqRdXK9YL.jpg",
        "price": 14.2,
        "category": "history"
    },
    {
        "asin": "1471160785",
        "title": "Undaunted Courage",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51c0U3ST89L.jpg",
        "price": 11.09,
        "category": "history"
    },
    {
        "asin": "0449909336",
        "title": "The Fifties",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81C8DGxdPqL.jpg",
        "price": 14.44,
        "category": "history"
    },
    {
        "asin": "1472833511",
        "title": "Castagnaro 1387: Hawkwood's Great Victory (Campaign)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91BFrCZCUQL.jpg",
        "price": 20.6,
        "category": "history"
    },
    {
        "asin": "0486474674",
        "title": "Great Speeches of the 20th Century (Dover Thrift Editions)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/915zKAH2DmL.jpg",
        "price": 3.3,
        "category": "history"
    },
    {
        "asin": "0140092331",
        "title": "Sweetness and Power: The Place of Sugar in Modern History",
        "img": "https://images-na.ssl-images-amazon.com/images/I/918eyvG7MAL.jpg",
        "price": 11.14,
        "category": "history"
    },
    {
        "asin": "0140437649",
        "title": "The History of the Decline and Fall of the Roman Empire (Penguin Classics)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81-DuxI7YsL.jpg",
        "price": 15.2,
        "category": "history"
    },
    {
        "asin": "1732987602",
        "title": "The Truth Behind Trump Derangement Syndrome: \"There is more than meets the eye\"",
        "img": "https://images-na.ssl-images-amazon.com/images/I/513fCYzKnBL.jpg",
        "price": 10.79,
        "category": "history"
    },
    {
        "asin": "0836220854",
        "title": "The Far Side Gallery 2 (Volume 8)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91e%2BR7cHZtL.jpg",
        "price": 9.49,
        "category": "history"
    },
    {
        "asin": "0345548728",
        "title": "The Fleet at Flood Tide: America at Total War in the Pacific, 1944-1945",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91xf0nGAcqL.jpg",
        "price": 15.47,
        "category": "history"
    },
    {
        "asin": "0812979796",
        "title": "Elizabeth the Queen: The Life of a Modern Monarch",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91rKEubWHML.jpg",
        "price": 13.44,
        "category": "history"
    },
    {
        "asin": "1583670254",
        "title": "Discourse on Colonialism",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61msLG7tDDL.jpg",
        "price": 12.34,
        "category": "history"
    },
    {
        "asin": "1259284751",
        "title": "The Unfinished Nation: A Concise History of the American People Volume 2",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51XmYwIDZtL.jpg",
        "price": 65.81,
        "category": "history"
    },
    {
        "asin": "0814742963",
        "title": "White Cargo: The Forgotten History of Britain's White Slaves in America",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41N93AqGRsL.jpg",
        "price": 22.55,
        "category": "history"
    },
    {
        "asin": "1586483579",
        "title": "Auschwitz: A New History",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51FQK8SQDJL.jpg",
        "price": 10.22,
        "category": "history"
    },
    {
        "asin": "0393059758",
        "title": "The History of the Medieval World: From the Conversion of Constantine to the First Crusade",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71eZBpn-IBL.jpg",
        "price": 24.14,
        "category": "history"
    },
    {
        "asin": "0758202709",
        "title": "The Divine Nine: The History of African American Fraternities and Sororities",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91UxqaWeB0L.jpg",
        "price": 12.97,
        "category": "history"
    },
    {
        "asin": "0385468148",
        "title": "The Way of a Pilgrim and The Pilgrim Continues His Way",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91rUlUiMlzL.jpg",
        "price": 14.25,
        "category": "history"
    },
    {
        "asin": "1305633946",
        "title": "Gardner's Art through the Ages: The Western Perspective, Volume I",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51GP6fbx5nL.jpg",
        "price": 119.1,
        "category": "history"
    },
    {
        "asin": "1635571375",
        "title": "One Person, No Vote: How Voter Suppression Is Destroying Our Democracy",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71yBmWVXlkL.jpg",
        "price": 14.31,
        "category": "history"
    },
    {
        "asin": "107041722X",
        "title": "Samadhi - The Forgotten Eden: Revealing the Ancient Yogic Art of Samadhi",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41m7dk4ESYL.jpg",
        "price": 14.44,
        "category": "history"
    },
    {
        "asin": "0316438960",
        "title": "The Last Wish: Introducing the Witcher",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
        "price": 9.59,
        "category": "fantasy"
    },
    {
        "asin": "0316389706",
        "title": "Sword of Destiny (The Witcher)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91uxJwnolDL.jpg",
        "price": 10.39,
        "category": "fantasy"
    },
    {
        "asin": "0786966246",
        "title": "D&D MORDENKAINEN'S TOME OF FOES (Dungeons & Dragons)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/8147MOLG%2BoL.jpg",
        "price": 27.94,
        "category": "fantasy"
    },
    {
        "asin": "1945683694",
        "title": "Destiny Grimoire Anthology, Volume II: Fallen Kingdoms",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91IHwcEy2DL.jpg",
        "price": 19.92,
        "category": "fantasy"
    },
    {
        "asin": "0786966254",
        "title": "D&D Waterdeep Dragon Heist HC (Dungeons & Dragons)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81Sfnxpke4L.jpg",
        "price": 34.61,
        "category": "fantasy"
    },
    {
        "asin": "0062059882",
        "title": "American Gods: The Tenth Anniversary Edition: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/519mwdpzlmL.jpg",
        "price": 14.94,
        "category": "fantasy"
    },
    {
        "asin": "0345535413",
        "title": "A Clash of Kings (HBO Tie-in Edition): A Song of Ice and Fire: Book Two",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91Pqmk8FzAL.jpg",
        "price": 14.31,
        "category": "fantasy"
    },
    {
        "asin": "0140157379",
        "title": "Haroun and the Sea of Stories",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91R8tRi2KTL.jpg",
        "price": 11.4,
        "category": "fantasy"
    },
    {
        "asin": "0553808044",
        "title": "A Game of Thrones: The Illustrated Edition: A Song of Ice and Fire: Book One",
        "img": "https://images-na.ssl-images-amazon.com/images/I/A12tbaSby%2BL.jpg",
        "price": 28.06,
        "category": "fantasy"
    },
    {
        "asin": "0316228028",
        "title": "Stiletto: A Novel (The Rook Files)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51whAHbBsDL.jpg",
        "price": 10.37,
        "category": "fantasy"
    },
    {
        "asin": "0008288798",
        "title": "A Reaper at the Gates (Ember Quartet, Book 3)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91vFU0KCm9L.jpg",
        "price": 12.6,
        "category": "fantasy"
    },
    {
        "asin": "1250222060",
        "title": "A Gathering of Shadows Collector's Edition: A Novel (Shades of Magic)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81Jw33fmYzL.jpg",
        "price": 18.85,
        "category": "fantasy"
    },
    {
        "asin": "0345548531",
        "title": "Staked: The Iron Druid Chronicles, Book Eight",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91eMFXdhM0L.jpg",
        "price": 7.59,
        "category": "fantasy"
    },
    {
        "asin": "1597808709",
        "title": "A Second Chance: The Chronicles of St. Mary's Book Three",
        "img": "https://images-na.ssl-images-amazon.com/images/I/714wSBJshRL.jpg",
        "price": 9.86,
        "category": "fantasy"
    },
    {
        "asin": "0062678108",
        "title": "The City of Brass: A Novel (The Daevabad Trilogy)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51AiOrm56BL.jpg",
        "price": 18.37,
        "category": "fantasy"
    },
    {
        "asin": "0316434604",
        "title": "Strange Practice (A Dr. Greta Helsing Novel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61WMUVR7PWL.jpg",
        "price": 12.67,
        "category": "fantasy"
    },
    {
        "asin": "0765319233",
        "title": "Chronicles of the Black Company",
        "img": "https://images-na.ssl-images-amazon.com/images/I/511RvCsDsTL.jpg",
        "price": 17.94,
        "category": "fantasy"
    },
    {
        "asin": "0345461533",
        "title": "The Conquering Sword of Conan (Conan of Cimmeria, Book 3)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81MoomxPd3L.jpg",
        "price": 17.79,
        "category": "fantasy"
    },
    {
        "asin": "0316452211",
        "title": "The Night Angel Trilogy: 10th Anniversary Edition",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71vON1PofOL.jpg",
        "price": 30.28,
        "category": "fantasy"
    },
    {
        "asin": "1943407355",
        "title": "The Dark Truth (The Dark Passage Series) (Volume 1)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51pm0mSSzwL.jpg",
        "price": 1.77,
        "category": "fantasy"
    },
    {
        "asin": "1524799556",
        "title": "A Song of Ice and Fire 2020 Calendar: Illustrations by John Howe",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91JJwFLoOsL.jpg",
        "price": 15.3,
        "category": "fantasy"
    },
    {
        "asin": "0399177574",
        "title": "Illidan: World of Warcraft: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81khLUoMKaL.jpg",
        "price": 6.12,
        "category": "fantasy"
    },
    {
        "asin": "0316274119",
        "title": "An Echo of Things to Come (The Licanius Trilogy)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51xWXICigiL.jpg",
        "price": 18.73,
        "category": "fantasy"
    },
    {
        "asin": "1578562953",
        "title": "Edge of Eternity",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91Ft%2BN5q0sL.jpg",
        "price": 15.19,
        "category": "fantasy"
    },
    {
        "asin": "0756408997",
        "title": "Closer to Home (Valdemar: The Herald Spy)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/A1qDmoiER6L.jpg",
        "price": 21.19,
        "category": "fantasy"
    },
    {
        "asin": "110188603X",
        "title": "A Dance with Dragons (HBO Tie-in Edition): A Song of Ice and Fire: Book Five: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/813bxDL2PPL.jpg",
        "price": 9.1,
        "category": "fantasy"
    },
    {
        "asin": "0451414888",
        "title": "Dragon Fate: Book Six of The Age of Fire",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81qAK72OCYL.jpg",
        "price": 8.53,
        "category": "fantasy"
    },
    {
        "asin": "0765327740",
        "title": "Severed Souls: A Richard and Kahlan Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51pXmun9LfL.jpg",
        "price": 17.84,
        "category": "fantasy"
    },
    {
        "asin": "0345430441",
        "title": "Transcendence (The Second DemonWars Saga, Book 2)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71e1SKEZQOL.jpg",
        "price": 8.76,
        "category": "fantasy"
    },
    {
        "asin": "4805310812",
        "title": "The Tale of Genji: The Arthur Waley Translation of Lady Murasaki's Masterpiece with a new foreword by Dennis Washburn (Tuttle Classics)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/918dqgtXhdL.jpg",
        "price": 22.21,
        "category": "fantasy"
    },
    {
        "asin": "0425262227",
        "title": "The Tower (Guardians of Destiny)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91qzAwU5wcL.jpg",
        "price": 9.52,
        "category": "fantasy"
    },
    {
        "asin": "0345430816",
        "title": "The Drawing of the Dark: A Novel (Del Rey Impact)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81UHbZbNLvL.jpg",
        "price": 13.73,
        "category": "fantasy"
    },
    {
        "asin": "0062068687",
        "title": "The Long Earth",
        "img": "https://images-na.ssl-images-amazon.com/images/I/517wycdvwBL.jpg",
        "price": 8.77,
        "category": "fantasy"
    },
    {
        "asin": "0756413842",
        "title": "The Master of Dreams (The Dreamscape Trilogy)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91Ciw5J0wXL.jpg",
        "price": 11.6,
        "category": "fantasy"
    },
    {
        "asin": "0765316544",
        "title": "Toll the Hounds: Book Eight of The Malazan Book of the Fallen",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71gHp0g9ihL.jpg",
        "price": 23.55,
        "category": "fantasy"
    },
    {
        "asin": "0765375079",
        "title": "A Natural History of Dragons: A Memoir by Lady Trent (The Lady Trent Memoirs)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81mOMXgOdkL.jpg",
        "price": 10.37,
        "category": "fantasy"
    },
    {
        "asin": "0449011909",
        "title": "A Storm of Swords: A Song of Ice and Fire: Book Three",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81xHtJLehXL.jpg",
        "price": 67.4,
        "category": "fantasy"
    },
    {
        "asin": "0316302775",
        "title": "Shadowborn (Seraphim)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51Vfe9jrxML.jpg",
        "price": 10.94,
        "category": "fantasy"
    },
    {
        "asin": "1784966215",
        "title": "Plague Garden (1) (Hallowed Knights)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81NRqR0XqQL.jpg",
        "price": 10.45,
        "category": "fantasy"
    },
    {
        "asin": "1984806378",
        "title": "The Library of the Unwritten (A Novel from Hell's Library)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81tm0aYeBRL.jpg",
        "price": 11.54,
        "category": "fantasy"
    },
    {
        "asin": "1846771870",
        "title": "Tros of Samothrace 4: City of the Eagles",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71aOQgjMjTL.jpg",
        "price": 6.24,
        "category": "fantasy"
    },
    {
        "asin": "0980084288",
        "title": "Griots: A Sword and Soul Anthology",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71KwIdhoaUL.jpg",
        "price": 14.87,
        "category": "fantasy"
    },
    {
        "asin": "0316077070",
        "title": "The Rebel Prince (The Moorehawke Trilogy)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71REEAYhw1L.jpg",
        "price": 14.28,
        "category": "fantasy"
    },
    {
        "asin": "0345503805",
        "title": "The Warded Man: Book One of The Demon Cycle",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91D7n-LlVDL.jpg",
        "price": 27.31,
        "category": "fantasy"
    },
    {
        "asin": "0316004197",
        "title": "The Edge of the World (Terra Incognita)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51tQiTuTcvL.jpg",
        "price": 8.75,
        "category": "fantasy"
    },
    {
        "asin": "147893333X",
        "title": "The Last Wish  (The Witcher Series, Book 1)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51zTIGhJG7L.jpg",
        "price": 21.6,
        "category": "fantasy"
    },
    {
        "asin": "0553567713",
        "title": "Into the Labyrinth (A Death Gate Novel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91DgNRoiv-L.jpg",
        "price": 7.82,
        "category": "fantasy"
    },
    {
        "asin": "1499860846",
        "title": "The Seventh Scroll (2) (The Egyptian Series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81j3E4E4lyL.jpg",
        "price": 13.49,
        "category": "fantasy"
    },
    {
        "asin": "0316242454",
        "title": "A Dance of Mirrors (Shadowdance 3)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51GWlXfaIbL.jpg",
        "price": 11.14,
        "category": "fantasy"
    },
    {
        "asin": "1597809152",
        "title": "The Long and Short of It: Stories from the Chronicles of St. Mary's",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81fJjI8FtnL.jpg",
        "price": 11.05,
        "category": "fantasy"
    },
    {
        "asin": "0316190357",
        "title": "The Folly of the World",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71ScVeaHuUL.jpg",
        "price": 15.13,
        "category": "fantasy"
    },
    {
        "asin": "1784967866",
        "title": "Realmslayer (Warhammer: Age of Sigmar)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/714UsJGMFgL.jpg",
        "price": 29.57,
        "category": "fantasy"
    },
    {
        "asin": "0804178321",
        "title": "Half a King (Shattered Sea)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81lCGUkjf7L.jpg",
        "price": 17.85,
        "category": "fantasy"
    },
    {
        "asin": "0857667971",
        "title": "Ash Kickers (Smoke Eaters)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91cP5LzL9LL.jpg",
        "price": 7.19,
        "category": "fantasy"
    },
    {
        "asin": "0765331985",
        "title": "Voyage of the Basilisk: A Memoir by Lady Trent (The Lady Trent Memoirs)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51GYZq2eWDL.jpg",
        "price": 14.01,
        "category": "fantasy"
    },
    {
        "asin": "1629620297",
        "title": "The Chained Adept: A Lost Wizard's Tale (Volume 1)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/510Umbm8zGL.jpg",
        "price": 15.96,
        "category": "fantasy"
    },
    {
        "asin": "149764867X",
        "title": "Slave Girl of Gor (Gorean Saga)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/513uxbKrK0L.jpg",
        "price": 17.17,
        "category": "fantasy"
    },
    {
        "asin": "1597802247",
        "title": "Infidel: Bel Dame Apocrypha Volume 2",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71rlrGRk9xL.jpg",
        "price": 13.36,
        "category": "fantasy"
    },
    {
        "asin": "0345540700",
        "title": "The High Druid's Blade: The Defenders of Shannara",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91rEIKBITuL.jpg",
        "price": 19.61,
        "category": "fantasy"
    },
    {
        "asin": "0765316528",
        "title": "The Bonehunters (The Malazan Book of the Fallen, Book 6)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81WunmsIRgL.jpg",
        "price": 24.34,
        "category": "fantasy"
    },
    {
        "asin": "1405925787",
        "title": "Tomorrow: The spellbinding historical tale for readers who love The Night Circus and The Mermaid and Mrs Hancock",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91bgKs%2ByYaL.jpg",
        "price": 11.8,
        "category": "fantasy"
    },
    {
        "asin": "1497642418",
        "title": "The Face in the Frost",
        "img": "https://images-na.ssl-images-amazon.com/images/I/516XFxgttiL.jpg",
        "price": 10.84,
        "category": "fantasy"
    },
    {
        "asin": "0345352661",
        "title": "Guardians of the West (The Malloreon, Book 1)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91AiXb63YyL.jpg",
        "price": 8.72,
        "category": "fantasy"
    },
    {
        "asin": "0399177418",
        "title": "The Memory of Fire (The Waking Land)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91OvCAIaVUL.jpg",
        "price": 21.41,
        "category": "fantasy"
    },
    {
        "asin": "0804178429",
        "title": "Half the World (Shattered Sea)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51%2BsRzTLvdL.jpg",
        "price": 23.22,
        "category": "fantasy"
    },
    {
        "asin": "1477849319",
        "title": "Dryad-Born (Whispers from Mirrowen)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51d8K9kFlDL.jpg",
        "price": 9.99,
        "category": "fantasy"
    },
    {
        "asin": "110196569X",
        "title": "A Song of Ice and Fire 2017 Calendar: Illustrations by Didier Graffet",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61Y%2B7CAHiCL.jpg",
        "price": 9.35,
        "category": "fantasy"
    },
    {
        "asin": "1598531646",
        "title": "Tarzan of the Apes: A Library of America Special Publication",
        "img": "https://images-na.ssl-images-amazon.com/images/I/615EQTEHR4L.jpg",
        "price": 13.26,
        "category": "fantasy"
    },
    {
        "asin": "125010310X",
        "title": "In the Still of the Night: The Supernaturals II",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91xB0qU71lL.jpg",
        "price": 23.68,
        "category": "fantasy"
    },
    {
        "asin": "1732665117",
        "title": "Caught by Demons: Laila of Midgard Book 1",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71NgUnGjkCL.jpg",
        "price": 12.37,
        "category": "fantasy"
    },
    {
        "asin": "178909061X",
        "title": "Venom: Lethal Protector Prose Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91IXGJADw-L.jpg",
        "price": 7.19,
        "category": "fantasy"
    },
    {
        "asin": "0425262820",
        "title": "River of Dreams (A Novel of the Nine Kingdoms)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91JJv0wvgqL.jpg",
        "price": 12.57,
        "category": "fantasy"
    },
    {
        "asin": "0345549376",
        "title": "Chaos Unleashed (The Chaos Born)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/915g58MINOL.jpg",
        "price": 13.02,
        "category": "fantasy"
    },
    {
        "asin": "0316209287",
        "title": "Successor's Promise (Millennium's Rule)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61aeExM2i0L.jpg",
        "price": 14.54,
        "category": "fantasy"
    },
    {
        "asin": "1427210241",
        "title": "A Memory of Light (Wheel of Time, Book 14)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71DVGLI3F9L.jpg",
        "price": 53.68,
        "category": "fantasy"
    },
    {
        "asin": "0316187526",
        "title": "The Troupe",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71xhDsoR41L.jpg",
        "price": 21.35,
        "category": "fantasy"
    },
    {
        "asin": "0451462114",
        "title": "Marion Zimmer Bradley's Ravens of Avalon",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91kcKRLoskL.jpg",
        "price": 13.63,
        "category": "fantasy"
    },
    {
        "asin": "0316077062",
        "title": "The Poison Throne (The Moorehawke Trilogy)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71eOpcRHZrL.jpg",
        "price": 11.43,
        "category": "fantasy"
    },
    {
        "asin": "1495820777",
        "title": "Shadowdragon",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61D8NflWMpL.jpg",
        "price": 18.22,
        "category": "fantasy"
    },
    {
        "asin": "0316278025",
        "title": "War of Shadows (The Ascendant Kingdoms Saga)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51y8F9QRlFL.jpg",
        "price": 13.31,
        "category": "fantasy"
    },
    {
        "asin": "1427262233",
        "title": "Shadows of Self: A Mistborn Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81DclQKioIL.jpg",
        "price": 28.27,
        "category": "fantasy"
    },
    {
        "asin": "1497648459",
        "title": "Nomads of Gor (Gorean Saga)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/510PydR3zJL.jpg",
        "price": 11.33,
        "category": "fantasy"
    },
    {
        "asin": "0345335686",
        "title": "Land of Oz: A Novel (Wonderful Oz Books (Paperback))",
        "img": "https://images-na.ssl-images-amazon.com/images/I/915zBPErw2L.jpg",
        "price": 6.57,
        "category": "fantasy"
    },
    {
        "asin": "1416520643",
        "title": "Kildar (Paladin of Shadows, Book 2)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/515T%2B4h2IlL.jpg",
        "price": 23.04,
        "category": "fantasy"
    },
    {
        "asin": "1497644801",
        "title": "Hunters of Gor (Gorean Saga)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51kVnK8qH1L.jpg",
        "price": 14.39,
        "category": "fantasy"
    },
    {
        "asin": "1681444895",
        "title": "Saint's Blood (The Greatcoats)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51W%2Bl71lgdL.jpg",
        "price": 21.67,
        "category": "fantasy"
    },
    {
        "asin": "1597809705",
        "title": "MJ-12: Endgame: A MAJESTIC-12 Thriller",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81vZi1-TU1L.jpg",
        "price": 7.57,
        "category": "fantasy"
    },
    {
        "asin": "0451465296",
        "title": "Downfall (Cal Leandros)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81QzorZkC1L.jpg",
        "price": 7.59,
        "category": "fantasy"
    },
    {
        "asin": "0316374962",
        "title": "Swords and Scoundrels (The Duelists Trilogy)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51xZT2m-sdL.jpg",
        "price": 14.24,
        "category": "fantasy"
    },
    {
        "asin": "1497648742",
        "title": "Swordsmen of Gor (Gorean Saga)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91hrwsIPPOL.jpg",
        "price": 23.27,
        "category": "fantasy"
    },
    {
        "asin": "0316277983",
        "title": "A Crown for Cold Silver (The Crimson Empire)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61VtnYmU5JL.jpg",
        "price": 23.98,
        "category": "fantasy"
    },
    {
        "asin": "145161702X",
        "title": "Domino Falls: A Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51FrfUWRniL.jpg",
        "price": 20.16,
        "category": "fantasy"
    },
    {
        "asin": "1783291753",
        "title": "Corum - The Sword and the Stallion: The Eternal Champion",
        "img": "https://images-na.ssl-images-amazon.com/images/I/8169tL7MqBL.jpg",
        "price": 9.44,
        "category": "fantasy"
    },
    {
        "asin": "151136033X",
        "title": "Shroud of Eternity: Sister of Darkness (The Nicci Chronicles)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/713iDYFn2NL.jpg",
        "price": 16.45,
        "category": "fantasy"
    },
    {
        "asin": "0756409217",
        "title": "The Heir of Khored: Book Three of The Seven-Petaled Shield",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71mNg2cAYfL.jpg",
        "price": 7.17,
        "category": "fantasy"
    },
    {
        "asin": "0756409209",
        "title": "Shannivar: Book Two of The Seven-Petaled Shield",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81u4sQbhpnL.jpg",
        "price": 7.54,
        "category": "fantasy"
    },
    {
        "asin": "0578473046",
        "title": "The Pillars of Enroden: Everything Is about to Change",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71Rf01%2BMi1L.jpg",
        "price": 14.54,
        "category": "fantasy"
    },
    {
        "asin": "1250295092",
        "title": "Heaven Cent (Xanth)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71GJEMmx-uL.jpg",
        "price": 12.82,
        "category": "fantasy"
    },
    {
        "asin": "1480864676",
        "title": "Port Bliss",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61f0EGSAM6L.jpg",
        "price": 10.87,
        "category": "fantasy"
    },
    {
        "asin": "1988035864",
        "title": "Noble's Honor (Changeling Blood)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41Qe%2BZwkneL.jpg",
        "price": 12.85,
        "category": "fantasy"
    },
    {
        "asin": "0345470931",
        "title": "Time Dancers (The Meq)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51XXKl1lDWL.jpg",
        "price": 14.28,
        "category": "fantasy"
    },
    {
        "asin": "1400160510",
        "title": "The Lies of Locke Lamora (Gentleman Bastard)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61%2BFScgKJjL.jpg",
        "price": 32.65,
        "category": "fantasy"
    },
    {
        "asin": "8494853953",
        "title": "The Reversible Mask: An Elizabethan Spy Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51-dDtnxjrL.jpg",
        "price": 17.0,
        "category": "fantasy"
    },
    {
        "asin": "0441019269",
        "title": "Dragons Deal (A Dragon's Wild Novel)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91TXaRehLML.jpg",
        "price": 11.11,
        "category": "fantasy"
    },
    {
        "asin": "1781084394",
        "title": "The Shadowed Path: A Jonmarc Vanhanian Collection",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81eMOYOyMUL.jpg",
        "price": 9.78,
        "category": "fantasy"
    },
    {
        "asin": "1945430427",
        "title": "Tales of Mantica: Edge of the Abyss (Kings of War)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71BLqUpj-nL.jpg",
        "price": 17.1,
        "category": "fantasy"
    },
    {
        "asin": "0765377861",
        "title": "Cloudbound (Bone Universe)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61D-yZ7i7gL.jpg",
        "price": 14.66,
        "category": "fantasy"
    },
    {
        "asin": "1250303974",
        "title": "A King in Cobwebs: The Tales of Durand, Book Three",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91Zz9qL0pkL.jpg",
        "price": 18.03,
        "category": "fantasy"
    },
    {
        "asin": "1490673733",
        "title": "Day Shift (Midnight, Texas)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71X0%2B85X7ZL.jpg",
        "price": 28.44,
        "category": "fantasy"
    },
    {
        "asin": "076533478X",
        "title": "Sethra Lavode (The Viscount of Adrilankha)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81C%2BmsTnaoL.jpg",
        "price": 21.64,
        "category": "fantasy"
    },
    {
        "asin": "0765378744",
        "title": "The Seascape Tattoo",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81D03JlBogL.jpg",
        "price": 6.01,
        "category": "fantasy"
    },
    {
        "asin": "1481442899",
        "title": "Blackthorne (The Malorum Gates)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91Tnlkue5oL.jpg",
        "price": 31.72,
        "category": "fantasy"
    },
    {
        "asin": "1400162238",
        "title": "The Coming of Conan the Cimmerian: The Original Adventures of the Greatest Sword and Sorcery Hero of All Time! (Conan of Cimmeria)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51sM5al%2Bn5L.jpg",
        "price": 26.85,
        "category": "fantasy"
    },
    {
        "asin": "0553385860",
        "title": "The Glass Books of the Dream Eaters, Volume Two",
        "img": "https://images-na.ssl-images-amazon.com/images/I/A1n93sLnjkL.jpg",
        "price": 10.97,
        "category": "fantasy"
    },
    {
        "asin": "0345451139",
        "title": "High Druid of Shannara: Straken",
        "img": "https://images-na.ssl-images-amazon.com/images/I/911UL6gRPuL.jpg",
        "price": 12.27,
        "category": "fantasy"
    },
    {
        "asin": "1597804592",
        "title": "The Best Science Fiction and Fantasy of the Year Volume Seven",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71EBX1sNS9L.jpg",
        "price": 13.18,
        "category": "fantasy"
    },
    {
        "asin": "194045641X",
        "title": "Towers Fall: Towers Trilogy Book Three",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81MWHmuCTGL.jpg",
        "price": 13.0,
        "category": "fantasy"
    },
    {
        "asin": "0756414245",
        "title": "Child of Flame (Crown of Stars)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91b7202EwiL.jpg",
        "price": 21.72,
        "category": "fantasy"
    },
    {
        "asin": "1597808407",
        "title": "Weighing Shadows",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71kDIim47-L.jpg",
        "price": 10.3,
        "category": "fantasy"
    },
    {
        "asin": "0999043501",
        "title": "Coven Queen",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71LT6gnTeYL.jpg",
        "price": 12.57,
        "category": "fantasy"
    },
    {
        "asin": "1616143819",
        "title": "Ravensoul (Legends of the Raven, Book 4)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91VmMi5JimL.jpg",
        "price": 10.53,
        "category": "fantasy"
    },
    {
        "asin": "1597190896",
        "title": "Violet Crown: A Dr. Hedy Villarreal Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71tjwB3EpwL.jpg",
        "price": 7.18,
        "category": "fantasy"
    },
    {
        "asin": "1781084866",
        "title": "The City of Ice (Gates of the World)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81oyyKo1%2B9L.jpg",
        "price": 6.74,
        "category": "fantasy"
    },
    {
        "asin": "0996016791",
        "title": "Abengoni: First Calling",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71PQUC2BeUL.jpg",
        "price": 15.94,
        "category": "fantasy"
    },
    {
        "asin": "0451463498",
        "title": "The Grimrose Path (Trickster, Book 2)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81n9CQS6FcL.jpg",
        "price": 7.13,
        "category": "fantasy"
    },
    {
        "asin": "1642986976",
        "title": "The Will of My Father",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71yrszaVqFL.jpg",
        "price": 13.51,
        "category": "fantasy"
    },
    {
        "asin": "0345401964",
        "title": "Exit to Eden",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91woJZrijhL.jpg",
        "price": 12.63,
        "category": "fantasy"
    },
    {
        "asin": "1978679068",
        "title": "The Seventh Scroll (Ancient Egypt)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61ZHNxd7xuL.jpg",
        "price": 17.73,
        "category": "fantasy"
    },
    {
        "asin": "076538289X",
        "title": "The Skill of Our Hands: A Novel (The Incrementalists)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91AK5pd2USL.jpg",
        "price": 13.23,
        "category": "fantasy"
    },
    {
        "asin": "0606320881",
        "title": "Wards Of Faerie (Turtleback School & Library Binding Edition) (Dark Legacy of Shannara)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51bTeIGsZxL.jpg",
        "price": 12.48,
        "category": "fantasy"
    },
    {
        "asin": "0345513703",
        "title": "Helfort's War Book 3: The Battle of Devastation Reef",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91rDrs5biPL.jpg",
        "price": 6.11,
        "category": "fantasy"
    },
    {
        "asin": "1497644917",
        "title": "Magicians of Gor (Gorean Saga)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51xQGeVt7VL.jpg",
        "price": 18.78,
        "category": "fantasy"
    },
    {
        "asin": "075640701X",
        "title": "Skirmish (House War)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/A1wJBVOuy6L.jpg",
        "price": 21.37,
        "category": "fantasy"
    },
    {
        "asin": "045146429X",
        "title": "The Doomsday Vault: A Novel of the Clockwork Empire",
        "img": "https://images-na.ssl-images-amazon.com/images/I/815zlGzAxgL.jpg",
        "price": 7.8,
        "category": "fantasy"
    },
    {
        "asin": "1509803114",
        "title": "The Never King",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71avGvXderL.jpg",
        "price": 11.74,
        "category": "fantasy"
    },
    {
        "asin": "1783291834",
        "title": "The Condition of Muzak: The Cornelius Quartet 4 (The Eternal Champion)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/8132%2ByuSKIL.jpg",
        "price": 8.97,
        "category": "fantasy"
    },
    {
        "asin": "1612443702",
        "title": "35 Pounds",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61fRebGq0UL.jpg",
        "price": 11.96,
        "category": "fantasy"
    },
    {
        "asin": "0451464494",
        "title": "Devil's Punch: A Corine Solomon Novel",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71VhTIf%2BlyL.jpg",
        "price": 7.6,
        "category": "fantasy"
    },
    {
        "asin": "193500607X",
        "title": "The Great God Pan and Other Weird Stories",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51%2B9Izd7nlL.jpg",
        "price": 9.48,
        "category": "fantasy"
    },
    {
        "asin": "0886778425",
        "title": "The Granite Shield (Branion series, Book 3)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91zAuS3yn7L.jpg",
        "price": 6.67,
        "category": "fantasy"
    },
    {
        "asin": "1977358020",
        "title": "Arrows of the Queen (Heralds of Valdemar)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/915VH4%2BTHaL.jpg",
        "price": 17.89,
        "category": "fantasy"
    },
    {
        "asin": "1944125132",
        "title": "Alexandru's Kiss (Magic, New Mexico)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81w4DyBbVLL.jpg",
        "price": 5.3,
        "category": "fantasy"
    },
    {
        "asin": "1944728511",
        "title": "Inish Clare (The Pirate Queen) (Volume 2)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51db%2BRbyD1L.jpg",
        "price": 11.08,
        "category": "fantasy"
    },
    {
        "asin": "1721336869",
        "title": "Dragon's Code: Anne McCaffrey's Dragonriders of Pern (Dragonriders of Pern Series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61LvkU3fc%2BL.jpg",
        "price": 25.15,
        "category": "fantasy"
    },
    {
        "asin": "1732931801",
        "title": "Amalgam",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81xhThHMrZL.jpg",
        "price": 8.57,
        "category": "fantasy"
    },
    {
        "asin": "1635755425",
        "title": "The Sign Upon His Head",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51sJ-l9UV3L.jpg",
        "price": 10.47,
        "category": "fantasy"
    },
    {
        "asin": "1478780371",
        "title": "Quest of the Staff and the Sword",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71xeNf466JL.jpg",
        "price": 6.33,
        "category": "fantasy"
    },
    {
        "asin": "1515423301",
        "title": "Fantasy for the Throne: One-Sitting Reads",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81Mk4Q%2BWVoL.jpg",
        "price": 9.5,
        "category": "fantasy"
    },
    {
        "asin": "125030265X",
        "title": "Well-Tempered Clavicle (Xanth)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61p6SfHJcfL.jpg",
        "price": 13.5,
        "category": "fantasy"
    },
    {
        "asin": "1938821963",
        "title": "A Wing and a Prayer (The John Morano Eco-Adventure Series)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71VsfUWuQqL.jpg",
        "price": 7.68,
        "category": "fantasy"
    }
]


loadBooks()