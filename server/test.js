const path = require('path')

const image = "https://res.cloudinary.com/dpckbfoq3/image/upload/v1732985983/nfsqs4p5wndzfzkjtqaz.jpg"
const x = path.basename(image).split('.')[0]
// const y = path.parse(x).name    
console.log(x);

const arr = [1, 2, 3]
arr.shift()
console.log(arr);

