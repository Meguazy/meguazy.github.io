# Specifica del sito

**Stato: anteprima Astro locale implementata; contenuti e traduzioni non ancora approvati per la pubblicazione.** GitHub Pages resta l'host previsto. Il futuro repository del sito sarà `meguazy.github.io`, distinto dal repository privato Money Tracker. Creazione del repository e pubblicazione sono riservate alla fase finale della [roadmap](roadmap.md).

## Struttura e contenuti

Pagine Home, Esperienza, Progetti e una pagina per ogni caso studio approvato. Navigazione coerente, collegamenti fra elenco e casi studio, contatto professionale neutro. Pubblicare solo testi e media con stato `contenuto approvato` nel [questionario](content.md), dopo selezione e anonimizzazione degli originali. L'anteprima locale contiene copie editoriali candidate e deve rimanere privata. Nessun contenuto grezzo di `inputs/private/` entra nel codice del sito.

## Lingue e scelta iniziale

L'inglese è l'originale. La prima versione offre EN, IT, FR, DE, ES e PL con URL statici distinti (`/en/`, `/it/`, `/fr/`, `/de/`, `/es/`, `/pl/` e percorsi localizzati delle pagine). Configurare il routing Astro con prefisso anche per la lingua predefinita, lasciando `/` a una pagina statica di scelta lingua. Preparare tutte le traduzioni con assistenza AI prima della pubblicazione e farle revisionare; nessuna traduzione tramite servizi esterni durante la visita.

Alla prima visita a `/`, mostrare le sei scelte leggibili e utilizzabili anche senza JavaScript. Una scelta esplicita salva il codice lingua in `localStorage` e apre la corrispondente Home. Nelle visite successive a `/`, uno script locale può leggere la preferenza valida e aprire la Home scelta; se lo storage non è disponibile, la pagina di scelta resta utilizzabile. Ogni pagina offre un selettore lingua che salva la nuova preferenza e porta alla pagina corrispondente, o alla Home della lingua scelta quando non esiste una traduzione della pagina. I link diretti agli URL localizzati funzionano indipendentemente dalla preferenza salvata e non devono essere sovrascritti da un reindirizzamento. La scelta lingua resta sempre raggiungibile.

La Home e le pagine tradotte mostrano un avviso accessibile: l'inglese è l'originale; le traduzioni sono state preparate con assistenza AI e potrebbero non essere perfettamente fedeli. Tradurre anche l'avviso. Impostare l'attributo `lang` corretto, link `hreflang` e canonical adeguati per ciascuna versione.

## Design, qualità e privacy

Design sobrio e responsive, navigabile da tastiera, con focus visibile, contrasto leggibile, gerarchia dei titoli, etichette chiare e testi alternativi appropriati. Verificare mobile e desktop, ingrandimento del testo e assenza di contenuti essenziali dipendenti da JavaScript. SEO essenziale: titoli e descrizioni specifici, URL comprensibili, metadati per la condivisione solo con media autorizzati e sitemap quando le pagine definitive sono note.

Non aggiungere analytics, font remoti, widget, traduttori runtime o altri servizi esterni non necessari. `localStorage` serve solo a ricordare la lingua scelta. GitHub Pages può raccogliere dati tecnici dei visitatori come descritto nella [documentazione ufficiale](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages); la descrizione pubblica della privacy dovrà essere controllata prima della messa online.

## Build e distribuzione previste

Astro genera file statici; GitHub Actions eseguirà build e deploy su GitHub Pages soltanto dopo l'approvazione finale. Configurare `site` per l'URL dell'account e verificare le impostazioni richieste dalla guida Astro al momento dell'implementazione. Riferimenti: [Astro su GitHub Pages](https://docs.astro.build/en/guides/deploy/github/), [routing internazionale Astro](https://docs.astro.build/en/guides/internationalization/) e [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).
