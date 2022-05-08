import Image from 'next/image'

export default function Alphabet(letter) {
    let te = "/svgfont/" + letter.letter + ".svg";

    return(
        <Image width="30" height="30" src={te}/>
    )
}
