// for example
let number = [1,2,3,4,5]

// here 3 is fizz and 5 is buzz

for num in number {
    // Body and calculation goes here
    if num % 3 == 0 {
        print("\(num) fizz")
    } else if num % 5 == 0 {
        print("\(num) buzz")
    }  else {
        print(num)
    }
}
