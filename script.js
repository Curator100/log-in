const rollsPasswords = {
    "set1": { 
        "rolls": [150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175], 
        "passwords": [
            '193743', '289408', '444155', '989742', '135548', 
            '057400', '559621', '020747', '899592', '201084', 
            '997466', '542941', '418895', '682098', '820494', 
            '177988', '490224', '141485', '595175', '718394', 
            '998326', '838964', '975288', '423217', '004974', 
            '407126'
        ]
    },
    "set2": { 
        "rolls": [350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375], 
        "passwords": [
            '904798', '726442', '782866', '703481', '584359', 
            '475411', '726008', '357632', '941621', '270144', 
            '464157', '874472', '378714', '196888', '567694', 
            '396964', '894748', '521386', '761511', '580462', 
            '391627', '577496', '438784', '522692', '101508', 
            '738787'
        ]
    },
    "set3": { "roll": 543, "password": "885993" },
    "set4": { "roll": 986, "password": "050940" }
};

function submitForm() {
    const roll = parseInt(document.getElementById("roll").value);
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    errorMsg.textContent = "";  // Clear previous errors

    // Set 1 validation
    if (roll >= 150 && roll <= 175) {
        const rollIndex = rollsPasswords.set1.rolls.indexOf(roll);
        if (rollIndex !== -1 && rollsPasswords.set1.passwords[rollIndex] === password) {
            window.location.href = "https://fishy-suede-a92.notion.site/Your-Education-e1a465adb07d444d88f7417570733fc2?pvs=4";
            return;
        }
    }
    // Set 2 validation
    if (roll >= 350 && roll <= 375) {
        const rollIndex = rollsPasswords.set2.rolls.indexOf(roll);
        if (rollIndex !== -1 && rollsPasswords.set2.passwords[rollIndex] === password) {
            window.location.href = "https://y.com";
            return;
        }
    }
    // Set 3 validation
    if (roll === rollsPasswords.set3.roll && password === rollsPasswords.set3.password) {
        window.location.href = "https://fishy-suede-a92.notion.site/Your-Education-e1a465adb07d444d88f7417570733fc2?pvs=4";
        return;
    }
    // Set 4 validation
    if (roll === rollsPasswords.set4.roll && password === rollsPasswords.set4.password) {
        window.location.href = "https://fishy-suede-a92.notion.site/Team-Business-109a62814a478071a1caf297d61f2169?pvs=4";
        return;
    }

    // If no match
    errorMsg.textContent = "Please, ask curator for your roll.";
          }
