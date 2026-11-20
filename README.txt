METROZO ADS – NEW WEBSITE (Design 3E · Growth Story)
=====================================================

FILES (ellaam ore folder-la, sub-folder illa)
---------------------------------------------
index.html            -> main page (ellaa sections-um idhula irukku)
style.css             -> design / colors / fonts (Montserrat)
main.js               -> animations, service chart, industry videos, WhatsApp form
logo.webp             -> Metrozo logo
.htaccess             -> pazhaya links redirect (cPanel / BigRock hosting-ku)
vercel.json           -> adhe redirects Vercel-ku (/careers, /industry/...)

BIGROCK-LA UPLOAD PANNRA STEPS (domain BigRock-la)
--------------------------------------------------
Mudhalla: website files enga host aagudhu-nu paarunga.
  BigRock login -> Manage Orders -> List/Search Orders -> metrozoads.com -> "DNS Management" / "Name Servers".
  * Nameservers "...bigrock..." / hosting order BigRock-la irundha -> CASE A.
  * A record / CNAME vera company-ku (Vercel, Netlify, Hostinger...) point aanaa -> CASE B.

CASE A – BigRock hosting (cPanel):
 1. BigRock login -> Manage Orders -> List/Search Orders -> unga Hosting order click pannunga.
 2. "Admin Details" / "Login to cPanel" -> cPanel open aagum.
 3. cPanel -> "File Manager" -> "public_html" folder open pannunga.
 4. BACKUP: public_html-la irukka ellaa files-um select -> "Compress" -> zip download pannikonga.
 5. Pazhaya files ellaam delete pannunga.
 6. "Upload" -> indha zip file-a upload pannunga -> zip-a right click -> "Extract".
 7. "metrozo-ads-website" folder-kulla irukka ELLAA files-um (index.html, style.css, main.js, logo.webp, .htaccess)
    select panni "Move" -> /public_html  (index.html nerla public_html-la irukkanum).
    (.htaccess theriyalana: File Manager -> Settings -> "Show Hidden Files" tick pannunga.)
 8. https://www.metrozoads.com open pannunga. Pazhaya site theriyudhuna Ctrl+F5.

CASE B – Vera hosting (Vercel / Netlify / Hostinger / ...):
 - Andha hosting account-la pazhaya project-a replace panni indha folder-a upload pannunga.
   (Netlify: Sites -> Deploys -> folder-a drag & drop. Vercel: pudhu project -> folder upload.)
 - Pudhu hosting-ku maathuna mattum: BigRock -> DNS Management -> A record / CNAME-a
   pudhu hosting kudukkura value-ku maathunga. Email use pannra-na MX records-a thodaadheenga.
 - .htaccess Vercel/Netlify-la work aagadhu (problem illa, site normal-a work aagum).

CHANGES PANNA (simple edits)
----------------------------
- Phone / WhatsApp number: main.js -> "const WA='916380650947'" + index.html-la tel: links.
- Industry videos (Instagram reels): main.js -> "const VIDEOS={" -> reel ID add / remove pannunga.
  Example link: https://www.instagram.com/reel/Dd3cYRgDUww/  -> ID = Dd3cYRgDUww
- Clients names: main.js -> "const INDUSTRIES=[" list.
- Jobs: main.js -> "const JOBS=[" list.
- Services details: main.js -> "const SERVICES=[" list.
- Logo maathanum-na: logo.webp file-a replace pannunga (adhe peru).

NOTE: Fonts (Montserrat) Google Fonts-la irundhu load aagum – internet thevai.
