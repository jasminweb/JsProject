// lecture 3 - task 1

let mark = Number(prompt('Enter your mark: '))

if (mark >= 80 && mark <= 100 ){
    document.write('A+')
} else if (mark >= 80 && mark < 90) {
    document.write('A')
}else if (mark >= 70 && mark < 85) {
    document.write('B')
}else if (mark >= 60 && mark < 72) {
    document.write('C')
}else if (mark >= 50 && mark < 65) {
    document.write('D')
}else if (mark < 40 && mark >= 0) {
    document.write('F')
}else {
    document.write('Wrong Entry')
}