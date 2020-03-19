decodeMorse = function (morseCode) {
    let morse = morseCode.split(" ")
    let toAdd = ""
    for (let letter in morse) {
        if (letter.length === 1) {
            if (letter[0] === '.') {
                toAdd += 'E'
            }
            else {
                toAdd += 'T'
            }
        }
        else if (letter.length === 2) {
            if (letter[0] === '.') {
                if (letter[1] === '.') {
                    toAdd += 'I' //..
                }
                else {
                    toAdd += 'A' //.-
                }
            }
            else {
                if (letter[1] === '.') {
                    toAdd += 'N'//-.
                }
                else {
                    toAdd += 'M'//--
                }
            }
        }



        else if (letter.length === 3) {
            if (letter[0] === '.') {
                if (letter[1] === '.') {
                    if (letter[2] === '.') {
                        toAdd += 'S' // ...
                    }
                    else {
                        toAdd += 'U' //..-
                    }
                }
                else {
                    if (letter[2] === '.') {
                        toAdd += 'R' // .-.
                    }
                    else {
                        toAdd += 'W' //.--
                    }
                }
            }
            else {
                if (letter[1] === '.') {
                    if (letter[2] === '.') {
                        toAdd += 'D' // -..
                    }
                    else {
                        toAdd += 'K' //-.-
                    }
                }
                else {
                    if (letter[2] === '.') {
                        toAdd += 'G' // --.
                    }
                    else {
                        toAdd += 'O' //---
                    }
                }
            }
        }

        else {
            if (letter[0] === '.') {
                if (letter[1] === '.') {
                    if (letter[2] === '.') {
                        if (letter[3] === '.') {
                            toAdd += 'H' //....
                        }
                        else {
                            toAdd += 'V'//...-
                        }
                    }
                    else {
                        toAdd += 'F' //..-.
                    }
                }
                else {
                    if (letter[2] === '.') {
                        toAdd += 'L' //.-..
                    }
                    else {
                        if (letter[3] === '.') {
                            toAdd += 'P' //.--.
                        }
                        else {
                            toAdd += 'J'//.---
                        }
                    }
                }
            }
            else {
                if (letter[1] === '.') {
                    if (letter[2] === '.') {
                        if (letter[3] === '.') {
                            toAdd += 'B' //-...
                        }
                        else {
                            toAdd += 'X'//-..-
                        }
                    }
                    else {
                        if (letter[3] === '.') {
                            toAdd += 'C' //-.-.
                        }
                        else {
                            toAdd += 'Y'//-.--
                        }
                    }
                }
                else {
                    if (letter[2] === '.') {
                        if (letter[3] === '.') {
                            toAdd += 'Z' //--..
                        }
                        else {
                            toAdd += 'Q'//--.-
                        }
                    }
                }
            }
        }
    }
    return toAdd
}