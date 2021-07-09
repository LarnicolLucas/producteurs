

const createPastels = (nb, saturation, light) => {

    const recursive = (index, nb, res, params) => index > nb ? 
        res :
        recursive(index + 1, nb, res.concat(
            `hsl(${
                Math.floor(((360/nb) * index))
            }, ${params.saturation}%, ${params.light}%)`
        ), params)
    ;

    return recursive(0, nb, [], {saturation: saturation, light: light})
}

const paletteGraph = createPastels(7, 100, 85);
export default paletteGraph