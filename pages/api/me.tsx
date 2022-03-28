export default function handler(req,res) {
    res.status(200).json({
        "name": "Jae",
        "currentJob": "Back-end Developer",
        "birthday": "2001-04-28",
        "location": "Helsinki, Finland",
        "mxid": "@me:jae.fi",
        "email": "me@jae.fi",
        "pronouns": "She/Her"
    })
}
