export const  authEndpoint= 'https://accounts.spotify.com/authorize'

const redirectUri ="http://localhost:3000/"

const clientId ="b0e4d18efba74625b6cfd937418a15a6"

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split("&")
    .reduce((accumulator,item) => {
        var parts = item.split('=')
        accumulator[parts[0]]= decodeURIComponent(parts[1])

        return accumulator
    },{})

}

export const loginUrl= `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`


