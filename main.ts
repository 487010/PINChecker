// Declare Variables
let digit1: string 
let digit2: string
let digit3: string
let digit4: string
let input1: string
let input2: string
let input3: string
let input4: string
let characters: int8
let pressedA
let pressedB
// Reset Variable Values
digit1 = null
digit2 = null
digit3 = null
digit4 = null
input1 = null
input2 = null
input3 = null
input4 = null
characters = 0
basic.showString("Please input a code")
basic.forever(function() {
    pressedA = input.buttonIsPressed(Button.A)
    pressedB = input.buttonIsPressed(Button.B)
})
while (characters < 4){ 
    if (pressedA) {
        basic.showString("A", 100)
        if (characters = 0){
            digit1 = "A"
        }
        else
            if (characters = 1){
                digit2 = "A"
            }
            else
                if (characters = 2){
                    digit3 = "A"
                }
                else
                    if (characters = 3){
                        digit4 = "A"
                    }
        characters += 1
    }   
    if (pressedB) {
        basic.showString("B", 100)
        if (characters = 0) {
            digit1 = "B"
        }
        else
            if (characters = 1) {
                digit2 = "B"
            }
            else
                if (characters = 2) {
                    digit3 = "B"
                }
                else
                    if (characters = 3) {
                        digit4 = "B"
                    }
        characters += 1
    } 
}
basic.showString("Code inputted successfully!")
characters = 0
basic.showString("Please input a code")
basic.forever(function() {
    while (characters < 4){ 
        if (pressedA = true) {
            if (characters = 0){
               digit1 = "A"
            }
        else
            if (characters = 1){
                digit2 = "A"
            }
            else
                if (characters = 2){
                    digit3 = "A"
                }
                else
                    if (characters = 3){
                        digit4 = "A"
                    }
        characters += 1
        }
        if (pressedB = true) {
            if (characters = 0) {
                digit1 = "B"
            }
            else
                if (characters = 1) {
                    digit2 = "B"
                }
                else
                    if (characters = 2) {
                        digit3 = "B"
                    }
                    else
                        if (characters = 3) {
                            digit4 = "B"
                        }
            characters += 1
        }
    } 
    if (input1 = digit1) {
        if (input2 = digit2) {
            
        }
    }
})