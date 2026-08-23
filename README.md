# Wren Hair Studio — demo site (parrucchieri/beauty)

Sito dimostrativo fittizio (nessun cliente reale) per il settore
parrucchieri/beauty, usato come materiale di vendita verso prospect londinesi.
Mostra il pacchetto **Premium**: Home, About, Services, Gallery, Booking,
Contact, Privacy Policy.

- Brand: Wren Hair Studio, Clapham, Londra
- Stack: Astro + Tailwind CSS v4 (vedi `documentazione-progetto/manuale-stile.md`)
- Lingua: inglese

## Sviluppo locale

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build statica in dist/
npm run preview   # serve la build di dist/
```

Richiede Node.js >= 22.12.

## Note importanti

- **Booking**: la pagina `/booking/` contiene un vero embed inline Calendly,
  collegato a un account di test gratuito dell'utente (un solo tipo di
  evento), usato solo per verificare come si comporta un widget di
  prenotazione reale sul sito — non è la configurazione finale per un
  cliente vero. Dettagli commentati nel file `src/pages/booking/index.astro`:
  per un cliente reale va sostituito il `data-url` con il link Calendly del
  cliente (l'account deve già esistere, non va mai creato per suo conto).
- **Contact form**: markup pronto per Netlify Forms (`data-netlify="true"`),
  con invio via fetch e messaggio di conferma inline. Funzionerà
  concretamente solo una volta pubblicato su Netlify.
- **Mappa**: embed statico OpenStreetMap, nessuna API key richiesta.
- Immagini: placeholder fotografici da Unsplash (URL diretti), verificati
  singolarmente per essere coerenti con un salone di parrucchieri.
- Nessun account esterno reale creato in questa fase a parte l'account di
  test Calendly usato per l'embed sopra (niente Stripe, PayPal).
