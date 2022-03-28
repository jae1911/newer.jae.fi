export default function handler(req,res) {
    res.status(200).json({
        "members": [
            {
                "name": "Jae's Website",
                "url": "https://jae.fi",
                "owner": "Jae Lo Presti"
            },
            {
                "name": "Minteck's Space",
                "url": "https://minteck.org",
                "owner": "Minteck"
            },
            {
                "name": "NESPECTIO",
                "url": "https://nespectio.glitch.me",
                "owner": "Jmzd8"
            }
        ]
    })
}
