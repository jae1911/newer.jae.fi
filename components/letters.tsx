import Image from 'next/image'

export default function Alphabet(letter) {
    let te = "/svgfont/" + letter.letter + ".svg";
    let altText = "Letter " + letter.letter;

    return(
        <Image width="30" height="30" alt={altText} src={te}/>
    )
}
