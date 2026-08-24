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

- **Booking**: la pagina `/booking/` è un form di richiesta prenotazione
  (non una prenotazione istantanea) — servizio, stilista preferito, data e
  fascia oraria desiderate, dati di contatto e note. Invio via
  [Web3Forms](https://web3forms.com) con lo stesso pattern del contact form
  (fetch JSON, stessa Access Key), messaggio di conferma dedicato che spiega
  che si verrà ricontattati entro poche ore per confermare l'orario. Nessuna
  integrazione di scheduling reale collegata.
- **Contact form**: usa [Web3Forms](https://web3forms.com) (standard
  dell'agenzia, vedi `documentazione-progetto/manuale-stile.md`) — invio via
  fetch in JSON con Access Key dedicata, messaggio di conferma inline.
  Funziona anche in locale, ma Web3Forms blocca le richieste che riconosce
  come non-browser (curl, ambienti di test automatizzati): un invio che
  fallisce da lì non indica un bug, va sempre verificato da un browser
  reale. Verificato funzionante in produzione (email recapitata).
- **Mappa**: embed statico OpenStreetMap, nessuna API key richiesta.
- Immagini: placeholder fotografici da Unsplash (URL diretti), verificati
  singolarmente per essere coerenti con un salone di parrucchieri.
- Nessun account esterno reale creato in questa fase (niente Stripe, PayPal,
  Calendly).
