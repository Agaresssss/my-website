import {Box} from '@chakra-ui/react'

const GradientSquare = () => {

    return(
       <Box sx={gradientShape}/>
    )
}

let gradientShape = {
width: "405px",
height: "405px",



"mix-blend-mode": "normal",
transform: "rotate(45deg)"
}



export default GradientSquare