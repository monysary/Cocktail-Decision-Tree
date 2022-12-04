const choices = [
    ["Light", "Dark"],
    ["Boozy", "Refreshing"],
    ["Sweet", "Complex"],
    ["Vintage", "Modern"],
]

const questions = [
    ["Move to a new city every year", "Never leave your hometown"], //1,2
    ["In jail for a year", "Lose a year off your life"], //3,4
    ["Covered in scales", "Covered in fur"], //5,6
    ["World Cornhole champion", "World bowling champion"], //7,8
    ["Never feel cold again", "Never feel hot again"], //9,10
    ["Power of flight", "Power of invisibility"], //11,12
    ["Weigh five pounds", "Weigh 500 pounds"], //13,14
    ["People hear your thoughts", "Your life is livestreamed"], //15,16
    ["Average person now", "King 2,500 years ago"], //17,18
    ["Never pay for food", "Never pay for travel"], //19,20
    ["Wedding/tux every day", "Pajamas every day"], //21,22
    ["All birds try to attack you", "All dogs try to attack you"], //23,24
    ["Only RT movies with 94% or lower", "Only RT movies with 95% or higher"], //25,26
    ["Lose your other friends", "Lose you best friend"], //27,28
    ["No search engines", "No texting"], //29,30
    ["Live on the beach", "Live in a cabin"] //31,32
]

const drinksArr = [
    "Espresso Martini", //1
    "Grasshopper", //2
    "Blue Motorcycle", //3
    "Nuclear Reactor", //4
    "Margarita", //5
    "Negroni", //6
    "Mai Tai", //7
    "Pina Colada", //8
    "Paloma", //9
    "Cranberry Moscow Mule", //10
    "Bee's Knees", //11
    "Plum Soju", //12
    "John Collins", //13
    "Mojito", //14
    "You Make Me Blush", //15
    "The Leviathan", //16
    "Old Fashioned", //17
    "Planter's Punch", //18
    "New Fashioned", //19
    "Vegas Bomb", //20
    "Manhattan", //21
    "Black Russian", //22
    "Jungle Bird", //23
    "Old Cuban", //24
    "Dark and Stormy", //25
    "Mint Julep", //26
    "Gold Rush", //27
    "Flaming Volcano", //28
    "Whiskey Sour", //29
    "Painkiller", //30
    "Lawn Flamingo", //31
    "Peach Fuzz" //32
]

const drinksIngred = [
    "Vodka\r\nKalua\r\nSyrup\r\nFull Espresso", //1
    "Cacao\r\nMenthe\r\nCream", //2
    "Tequila\r\nVodka\r\nGin\r\nrum\r\nBlue Curacao\r\nSweet & Sour Mix", //3
    "Melon Liqueur\r\nSweet & Sour Mix\r\nVodka\r\nSoda", //4
    "Tequila\r\nLime Juice\r\nAgave Syrup\r\nPinch Salt", //5
    "Gin\r\nVermouth\r\nCompari", //6
    "Dark Rum\r\nOverproof Rum\r\nTriple Sec\r\nOrgeat\r\nLime Juice\r\nSyrup", //7
    "White Rum\r\nCoconut Cream\r\nPineapple Juice", //8
    "Tequila\r\nGrapefruit Soda\r\nSplash Lime\r\nSalt", //9
    "Vodka\r\nLime Juice\r\nGinger Beer", //10
    "Gin\r\nLemon Juice\r\nOJ\r\nHoney Syrup", //11
    "Plum Soju", //12
    "Gin\r\nLemon Juice\r\nSyrup\r\nBitters\r\nSoda", //13
    "Rum\r\nLime Juice\r\nSyrup\r\nMint\r\nSoda", //14
    "Gin\r\nFlower Extract\r\nTonic", //15
    "Gin\r\nLemon Juice\r\nSyrup\r\nBitters\r\nRosemary\r\nGrapefruit Soda", //16
    "Whiskey\r\nSugar Cube\r\nBitters\r\nSoda", //17
    "Dark Rum\r\nPineapple Juice\r\nOJ\r\nLemon Juice\r\nGrenadine\r\nSyrup\r\nBitters", //18
    "Dark Rum\r\nBitters\r\nPumpkin Spice Syrup", //19
    "Whiskey\r\nPeach Schnapps\r\nMalibu\r\nRed Bull", //20
    "Whiskey\r\nRed Vermouth\r\nBitters", //21
    "Vodka\r\nCoffee Liqueur", //22
    "Dark Rum\r\nCompari\r\nPineapple Juice\r\nLime Juice\r\nSyrup", //23
    "Dark Rum\r\nLime Juice\r\nSyrup\r\nBitters\r\nSoda/Champagne", //24
    "Dark Rum\r\nGinger Beer", //25
    "Whiskey\r\nSyrup\r\nMint", //26
    "Whiskey\r\nHoney Syrup\r\nLemon Juice", //27
    "Light Rum\r\nBrandy\r\nOverproof\r\nOJ\r\nLemon Juice\r\nOrgeat", //28
    "Whiskey\r\nLemon Juice\r\nSyrup", //29
    "Overproof Rum\r\nMalibu\r\nPineapple Juice\r\nCream of Coconut\r\nOJ\r\nNutmeg", //30
    "Black Rum\r\nMezcal\r\nPineapple Juice\r\nLime Juice\r\nCompari\r\nSyrup", //31
    "Whiskey\r\nPeach Liqueur\r\nLemon Juice\r\nSyrup" //32
]