const circle = (radius) => {
    const proto = {
        type: 'Circle',
        //code 
    }
    return Object.assign(Object.create(proto), { radius })
}
const square = (length) => {
    const proto = {
        type: 'Square',
        //code 
    }
    return Object.assign(Object.create(proto), { length })
}
const areaCalculator = (s) => {
    const proto = {
        sum() {

        }
    }
    return Object.assign(Object.create(proto), { shapes: s })
}
const sumCalculatorOuputter = (a) => {
    const proto = {
        HTML() {
            return `
            <h1>
              Sum of the areas of provided shapes:
              ${a} 
            </h1>`
        },
        JSON() {
            return `
            {   sum: ${a} }`
        }
    }
    return Object.assign(Object.create(proto), { areas: a })
}
const shapes = [
    circle(2),
    square(5),
    square(6)
]
const areas = areaCalculator(shapes)
const output = sumCalculatorOuputter(areas)
console.log(output.JSON())
console.log(output.HTML())