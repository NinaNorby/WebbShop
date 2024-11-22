## Inlämningsuppgift i Javascript 4. Testdriven utveckling , React, typescript 

Vi har blivit kontaktade av en butik som ingår i en större kedja som i sina butiker säljer
produkter till jul- och nyårs-helgerna. Allt ifrån dekorationer till belysning och konstgjorda
granar. De vill ha hjälp att snabbt få upp en näthandel för att nå en större marknad.
I första skedet vill de ha ett förslag på hur en klient applikation kan se ut samt en server del
som levererar produkter till klient applikationen.
De enda krav som de har är att applikationen ska gå att köra i alla webbläsare och att den ska
fungera perfekt på små enheter samt större enheter.
Det som måste finnas tillgängligt i första test (UAT) versionen är listning av produkter med
namn samt pris. Det ska dessutom gå att via en vald produkt i listan komma till en detaljerad
sida med detaljerad beskrivning av produkten och antal i lager.

## Godkänt krav(G)

- En frontend del samt en backend del måste finnas. Det är ok att använda mock data för listning och presentation av produkter.
- Koden ska följa principerna **DRY** och SRP(Single Responsible Principle)
- **Backend** ska vara utvecklad som en Node.js applikation med JavaScript.
- **Frontend** ska vara utvecklad som en React applikation med TypeScript.

## Väl godkänd (VG)

- För VG ska React applikationen vara utvecklad enligt Test Driven metodik
- Alla komponenter behöver inte ha ett test men minst 2 komponenter ska ha en motsvarande test.
- Dessutom ska en kundkorg finnas så att  en kund kan lägga en beställning på en produkt.
- *Extra +
Använd gärna bilder på produkter så gör ni magistern glad*