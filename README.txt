METROZO ADS – NEW WEBSITE (Design 3E · Growth Story)
=====================================================

FILES (ellaam ore folder-la, sub-folder illa)
---------------------------------------------
index.html        -> main page (ellaa sections-um idhula irukku)
style.css         -> design / colors / fonts (Montserrat)
main.js           -> animations, service chart, industry videos, WhatsApp form
logo.webp         -> Metrozo logo
reel-XXXX.jpg     -> Instagram reel thumbnails (XXXX = reel ID)
vercel.json       -> pazhaya links redirect (/careers, /industry/...) – Vercel-ku
.htaccess         -> adhe redirects – cPanel / BigRock hosting-ku

GITHUB + VERCEL (ippo use pannradhu)
------------------------------------
1. GitHub repo -> Add file -> Upload files -> indha folder-la irukka ELLAA files-um drag pannunga -> Commit.
2. Vercel GitHub-oda connect aagi irukkuradhaala, commit pannina 1-2 nimishathula site auto update aagum.
3. Vercel -> Settings -> Domains -> metrozoads.com + www.metrozoads.com add pannunga.
4. BigRock -> Manage Orders -> metrozoads.com -> DNS Management:
     A     @    -> Vercel domain card-la kaatura IP (perumbaalum 76.76.21.21)
     CNAME www  -> Vercel domain card-la kaatura CNAME value
   Pazhaya A / AAAA records delete pannunga. MX records-a THODAADHEENGA (email).

AUTO THUMBNAILS (api/thumb.js)
------------------------------
reel-<ID>.jpg photo illaadha reels-ku website thaane Instagram-la irundhu cover photo edukkum.
Idhukku GitHub-la "api" folder-kulla "thumb.js" file irukkanum:
  GitHub -> Add file -> Create new file -> name box-la  api/thumb.js  type pannunga
  -> indha ZIP-la irukka api/thumb.js-a Notepad-la open panni copy-paste -> Commit.
Pudhu reel add pannumbodhu main.js-la VIDEOS-la ID mattum podunga podhum – photo thaane varum.

CHANGES PANNA (simple edits)
----------------------------
- Phone / WhatsApp number: main.js -> "const WA='916380650947'" + index.html-la tel: links.
- Industry videos (Instagram reels): main.js -> "const VIDEOS={" -> reel ID add / remove pannunga.
  Example link: https://www.instagram.com/reel/Dd3cYRgDUww/  -> ID = Dd3cYRgDUww
  Thumbnail: reel cover image-a "reel-<ID>.jpg"-nu peru vechu upload pannunga (example: reel-Dd3cYRgDUww.jpg).
  Thumbnail illana card-la orange color mattum varum, click pannna reel open aagum.
- Social media links: index.html -> instagram.com / facebook.com / youtube.com links.
- Clients names: main.js -> "const INDUSTRIES=[" list.
- Jobs: main.js -> "const JOBS=[" list.
- Services details: main.js -> "const SERVICES=[" list.
- Logo maathanum-na: logo.webp file-a replace pannunga (adhe peru).

NOTE: Fonts (Montserrat) Google Fonts-la irundhu load aagum – internet thevai.
