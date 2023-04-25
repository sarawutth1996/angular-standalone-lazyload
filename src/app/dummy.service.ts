import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor() { }

  data = [
    {
      "id": "09R8_2nJtjg",
      "title": "Maroon 5 - Sugar",
      "subtitle": "Music video by Maroon 5 performing Sugar. (C) 2015 Interscope Records",
      "avatar_image": "https://yt3.ggpht.com/-Xfs4y4Qvce4/AAAAAAAAAAI/AAAAAAAAAAA/GulIcxMxXR0/s100-c-k-no-rj-c0xffffff/photo.jpg",
      "youtube_image": "https://img.youtube.com/vi/09R8_2nJtjg/maxresdefault.jpg"
    },
    {
      "id": "7hPMmzKs62w",
      "title": "Madonna - Bitch I'm Madonna ft. Nicki Minaj",
      "subtitle": "REBEL HEART album featuring ?Living For Love,? ?Ghosttown,? & ?Bitch I?m Madonna? out now.",
      "avatar_image": "https://yt3.ggpht.com/-BbIEK796J7o/AAAAAAAAAAI/AAAAAAAAAAA/QDNn5umMuZY/s100-c-k-no-rj-c0xffffff/photo.jpg",
      "youtube_image": "https://img.youtube.com/vi/7hPMmzKs62w/maxresdefault.jpg"
    },
    {
      "id": "AJtDXIazrMo",
      "title": "Ellie Goulding - Love Me Like You Do (Official Video)",
      "subtitle": "Brand new album DELIRIUM out now, including LOVE ME LIKE YOU DO and the new single ON MY MIND.",
      "avatar_image": "https://yt3.ggpht.com/-m4Fx05JZV2s/AAAAAAAAAAI/AAAAAAAAAAA/wTZnA8Vp0qs/s100-c-k-no-rj-c0xffffff/photo.jpg",
      "youtube_image": "https://img.youtube.com/vi/AJtDXIazrMo/maxresdefault.jpg"
    },
    {
      "id": "bnVUHWCynig",
      "title": "Beyonc? - Halo",
      "subtitle": "Beyonc?'s official video for 'Halo'",
      "avatar_image": "https://yt3.ggpht.com/-UqZ1JKav00Q/AAAAAAAAAAI/AAAAAAAAAAA/YKBnbgUTIKU/s100-c-k-no-rj-c0xffffff/photo.jpg",
      "youtube_image": "https://img.youtube.com/vi/bnVUHWCynig/maxresdefault.jpg"
    },
    {
      "id": "cSnkWzZ7ZAA",
      "title": "Flo Rida - Whistle [Official Video]",
      "subtitle": "? 2012 WMG. Get an exclusive behind-the-scenes look at the making of the Flo Rida \"Whistle\"",
      "avatar_image": "https://yt3.ggpht.com/-WE6vUbmXvtM/AAAAAAAAAAI/AAAAAAAAAAA/Oi9qnPVKVcQ/s100-c-k-no-rj-c0xffffff/photo.jpg",
      "youtube_image": "https://img.youtube.com/vi/cSnkWzZ7ZAA/maxresdefault.jpg"
    },
    {
      "id": "hHUbLv4ThOo",
      "title": "Pitbull - Timber ft. Ke$ha",
      "subtitle": "Pitbull's official music video for 'Timber' ft. Kesha. ",
      "avatar_image": "https://yt3.ggpht.com/-ij709VA2ZnA/AAAAAAAAAAI/AAAAAAAAAAA/lMgSaCZf7kM/s88-c-k-no-rj-c0xffffff/photo.jpg",
      "youtube_image": "https://img.youtube.com/vi/hHUbLv4ThOo/maxresdefault.jpg"
    },
    {
      "id": "lf_wVfwpfp8",
      "title": "Ariana Grande - Focus",
      "subtitle": "Music video by Ariana Grande performing Focus. ? 2015 Republic Records, a division of UMG Recordings, Inc.",
      "avatar_image": "https://yt3.ggpht.com/-u_W-R7bGk1c/AAAAAAAAAAI/AAAAAAAAAAA/u6lamzb3BPc/s100-c-k-no-rj-c0xffffff/photo.jpg",
      "youtube_image": "https://img.youtube.com/vi/lf_wVfwpfp8/maxresdefault.jpg"
    },
    {
      "id": "lWA2pjMjpBs",
      "title": "Rihanna - Diamonds",
      "subtitle": "Music video by Rihanna performing Diamonds. ?: The Island Def Jam Music Group",
      "avatar_image": "https://yt3.ggpht.com/-7iKcy1xQesU/AAAAAAAAAAI/AAAAAAAAAAA/AqQs92Q0Y8w/s100-c-k-no-rj-c0xffffff/photo.jpg",
      "youtube_image": "https://img.youtube.com/vi/lWA2pjMjpBs/maxresdefault.jpg"
    },
    {
      "id": "My2FRPA3Gf8",
      "title": "Miley Cyrus - Wrecking Ball",
      "subtitle": "Miley Cyrus' official music video for 'Wrecking Ball'. ",
      "avatar_image": "https://yt3.ggpht.com/-7q31n1lfPcw/AAAAAAAAAAI/AAAAAAAAAAA/6otE9_5kJWc/s100-c-k-no-rj-c0xffffff/photo.jpg",
      "youtube_image": "https://img.youtube.com/vi/My2FRPA3Gf8/maxresdefault.jpg"
    },
    {
      "id": "OPf0YbXqDm0",
      "title": "Mark Ronson - Uptown Funk ft. Bruno Mars",
      "subtitle": "Mark Ronson's official music video for 'Uptown Funk' ft. Bruno Mars.",
      "avatar_image": "https://yt3.ggpht.com/-GRzX0bWC8M0/AAAAAAAAAAI/AAAAAAAAAAA/v9qmLE3oaJU/s100-c-k-no-rj-c0xffffff/photo.jpg",
      "youtube_image": "https://img.youtube.com/vi/OPf0YbXqDm0/maxresdefault.jpg"
    },
    {
      "id": "OpQFFLBMEPI",
      "title": "P!nk - Just Give Me A Reason ft. Nate Ruess",
      "subtitle": "P!nk's official music video for 'Just Give Me A Reason' ft. Nate Ruess.",
      "avatar_image": "https://yt3.ggpht.com/-d9Q0sD8cUzA/AAAAAAAAAAI/AAAAAAAAAAA/4X2MXYL6QWk/s100-c-k-no-rj-c0xffffff/photo.jpg",
      "youtube_image": "https://img.youtube.com/vi/OpQFFLBMEPI/maxresdefault.jpg"
    },
    {
      "id": "oyEuk8j8imI",
      "title": "Justin Bieber - Love Yourself (PURPOSE : The Movement)",
      "subtitle": "Created by Justin Bieber, Parris Goebel and Scott \"Scooter\" Braun",
      "avatar_image": "https://yt3.ggpht.com/-VA1VJBph20Q/AAAAAAAAAAI/AAAAAAAAAAA/WJxOBPTsGt8/s100-c-k-no-rj-c0xffffff/photo.jpg",
      "youtube_image": "https://img.youtube.com/vi/oyEuk8j8imI/maxresdefault.jpg"
    },
    {
      "id": "RgKAFK5djSk",
      "title": "Wiz Khalifa - See You Again ft. Charlie Puth",
      "subtitle": "SeeYouAgain on Shazam and get an exclusive behind the scenes look at the music video!",
      "avatar_image": "https://yt3.ggpht.com/-wHNdzVUOIZ0/AAAAAAAAAAI/AAAAAAAAAAA/_d0MLGyHqFc/s100-c-k-no-rj-c0xffffff/photo.jpg",
      "youtube_image": "https://img.youtube.com/vi/RgKAFK5djSk/maxresdefault.jpg"
    },
    {
      "id": "Xn676-fLq7I",
      "title": "Kelly Clarkson - Stronger (What Doesn't Kill You)",
      "subtitle": "Kelly Clarkson's official music video for 'Stronger (What Doesn't Kill You)'.",
      "avatar_image": "https://yt3.ggpht.com/-FKGX1M1NszY/AAAAAAAAAAI/AAAAAAAAAAA/pkzbVyqwuMo/s100-c-k-no-rj-c0xffffff/photo.jpg",
      "youtube_image": "https://img.youtube.com/vi/Xn676-fLq7I/maxresdefault.jpg"
    },
    {
      "id": "YQHsXMglC9A",
      "title": "Adele - Hello",
      "subtitle": "?Hello' is taken from the new album, 25, out November 20.",
      "avatar_image": "https://yt3.ggpht.com/-Pmv3XiLq6i0/AAAAAAAAAAI/AAAAAAAAAAA/PzA830mDGNo/s100-c-k-no-rj-c0xffffff/photo.jpg",
      "youtube_image": "https://img.youtube.com/vi/YQHsXMglC9A/maxresdefault.jpg"
    }
  ]
}
