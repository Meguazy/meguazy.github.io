# Specifica del sito

**Stato: portfolio pubblicato; aggiornamento FounDaTionZy approvato per la pubblicazione il 2026-11-04.** Il checkout configura GitHub Pages come host e `https://github.com/Meguazy/meguazy.github.io.git` come remoto, distinto dal repository privato Money Tracker. Il proprietario ha autorizzato il push diretto su `main` della versione presentata e il deploy mediante il workflow esistente; vedere la [roadmap](roadmap.md).

## Struttura e contenuti

Pagine Home, Esperienza, Progetti e una pagina per ogni caso studio approvato. Navigazione coerente, collegamenti fra elenco e casi studio, contatto professionale neutro. Pubblicare solo testi e media con stato `contenuto approvato` nel [questionario](content.md), dopo selezione e anonimizzazione degli originali. I contenuti nuovi restano locali fino all’approvazione esplicita; quella del caso FounDaTionZy nelle sei lingue è registrata nelle note della revisione. Nessun contenuto grezzo di `inputs/private/` entra nel codice del sito.

## Lingue e scelta iniziale

L'inglese è l'originale. La prima versione offre EN, IT, FR, DE, ES e PL con URL statici distinti (`/en/`, `/it/`, `/fr/`, `/de/`, `/es/`, `/pl/` e percorsi localizzati delle pagine). Configurare il routing Astro con prefisso anche per la lingua predefinita, lasciando `/` a una pagina statica di scelta lingua. Preparare tutte le traduzioni con assistenza AI prima della pubblicazione e farle revisionare; nessuna traduzione tramite servizi esterni durante la visita.

Alla prima visita a `/`, mostrare le sei scelte leggibili e utilizzabili anche senza JavaScript. Una scelta esplicita salva il codice lingua in `localStorage` e apre la corrispondente Home. Nelle visite successive a `/`, uno script locale può leggere la preferenza valida e aprire la Home scelta; se lo storage non è disponibile, la pagina di scelta resta utilizzabile. Ogni pagina offre un selettore lingua che salva la nuova preferenza e porta alla pagina corrispondente, o alla Home della lingua scelta quando non esiste una traduzione della pagina. I link diretti agli URL localizzati funzionano indipendentemente dalla preferenza salvata e non devono essere sovrascritti da un reindirizzamento. La scelta lingua resta sempre raggiungibile.

La Home e le pagine tradotte mostrano un avviso accessibile: l'inglese è l'originale; le traduzioni sono state preparate con assistenza AI e potrebbero non essere perfettamente fedeli. Tradurre anche l'avviso. Impostare l'attributo `lang` corretto, link `hreflang` e canonical adeguati per ciascuna versione.

## Design, qualità e privacy

Design sobrio e responsive, navigabile da tastiera, con focus visibile, contrasto leggibile, gerarchia dei titoli, etichette chiare e testi alternativi appropriati. Verificare mobile e desktop, ingrandimento del testo e assenza di contenuti essenziali dipendenti da JavaScript. SEO essenziale: titoli e descrizioni specifici, URL comprensibili, metadati per la condivisione solo con media autorizzati e sitemap quando le pagine definitive sono note.

Non aggiungere analytics, font remoti, widget, traduttori runtime o altri servizi esterni non necessari. `localStorage` serve solo a ricordare la lingua scelta. GitHub Pages può raccogliere dati tecnici dei visitatori come descritto nella [documentazione ufficiale](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages); la descrizione pubblica della privacy dovrà essere controllata prima della messa online.

## Build e distribuzione previste

Astro genera file statici; il workflow GitHub Actions esistente prevede build e deploy su GitHub Pages a ogni push su `main` e su avvio manuale. `site` è configurato per `https://meguazy.github.io`. La presenza del workflow non prova che un deploy sia riuscito o sia stato autorizzato. Verificare impostazioni e approvazione della versione prima di pubblicare nuove modifiche. Riferimenti: [Astro su GitHub Pages](https://docs.astro.build/en/guides/deploy/github/), [routing internazionale Astro](https://docs.astro.build/en/guides/internationalization/) e [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

## FounDaTionZy case study

The approved publication includes FounDaTionZy in Home, Projects, and a dedicated case
study in all six languages. English source copy and translations live in
`src/data/foundation.ts` and `src/data/foundationStudy.ts`;
`src/components/FoundationCase.astro` provides seven chapters on philosophy,
canonical document responsibilities, delivery, decisions, evidence, continuity,
and adoption. Semantic HTML/CSS diagrams and native expandable document cards
remain usable without JavaScript. Source verification and editorial limits are recorded in
the [revision notes](revision-2026-11-04.md). The owner approved this six-language revision and its direct-to-main publication on 2026-11-04. Independent language review and complete visual QA are not claimed.
