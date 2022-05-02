export default function Alphabet(letter) {
    let te = "/svgfont/" + letter.letter + ".svg";

    return(
        <img src={te}/>
    )
}
