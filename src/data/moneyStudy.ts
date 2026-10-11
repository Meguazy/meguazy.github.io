import type { Language } from './site';

// Editorial draft for local review. Claims and publication status are recorded in inputs/private/content.md.
type Study = {
  heading: string;
  lead: string;
  steps: { title: string; body: string }[];
  statusTitle: string;
  status: string;
  contributionTitle: string;
  contributionText: string;
};

export const moneyStudy: Record<Language, Study> = {
  en: {
    heading: 'How I made an AI assistant accountable to financial rules',
    lead: 'Money Tracker is a personal, local-first finance assistant. I designed its product direction and architecture, then used coding agents to help implement it. The central design question was how to turn an uncertain interpretation into a checked, authorized financial operation.',
    steps: [
      { title: 'Separate interpretation from authority', body: 'A message can describe a purchase, ask a question, or request a correction. A bounded workflow interprets that intent and selects a typed route. It cannot make a model answer into a financial record by itself: scoped tools and deterministic domain services control the actual operation.' },
      { title: 'Make money rules explicit', body: 'The finance domain owns allocation, reconciliation, and authorization rules. Persistence and replay-safe operations protect those rules when a message is retried or a workflow resumes. The dashboard reads from the same authoritative data rather than maintaining a second account of a transaction.' },
      { title: 'Give development agents a contract', body: 'I used product requirements, a step-by-step roadmap, arc42 views, architecture decisions, and repository instructions to define component responsibilities and limits. Each delivery step had exit criteria and evidence, so an implemented feature was not treated as complete solely because code existed.' },
      { title: 'Evaluate the uncertain parts', body: 'Text workflows were tested with versioned datasets and explicit promotion gates. Software tests checked deterministic behavior and end-to-end paths; evaluations measured model-dependent routing, tool use, and advice. That distinction kept financial correctness outside the authority of a model score.' },
    ],
    statusTitle: 'What exists today',
    status: 'The accepted personal V1 is text-first. It includes a durable private-owner Telegram channel, a protected local dashboard, deterministic finance and persistence, evaluated text workflows, and encrypted backup. Receipt storage and review exist, while automated receipt extraction is deferred. The repository remains private.',
    contributionTitle: 'What my contribution demonstrates',
    contributionText: 'My contribution connects product scope, system architecture, and verification. In Money Tracker, natural language helps interpret a request, while typed workflows, limited tools, and deterministic domain rules decide what can change. I used architecture documentation and evaluation gates to make that boundary reviewable during AI-assisted development.',
  },
  it: {
    heading: 'Come ho vincolato un assistente AI alle regole finanziarie',
    lead: 'Money Tracker è un assistente personale per le finanze, progettato per funzionare anzitutto in locale. Ne ho definito direzione e architettura, poi ho usato agenti di coding per contribuire all’implementazione. La domanda centrale era come trasformare un’interpretazione incerta in un’operazione finanziaria controllata e autorizzata.',
    steps: [
      { title: 'Separare interpretazione e autorità', body: 'Un messaggio può descrivere una spesa, porre una domanda o chiedere una correzione. Un workflow delimitato interpreta l’intento e sceglie un percorso tipizzato. La risposta del modello non diventa da sola una registrazione: strumenti circoscritti e servizi di dominio deterministici governano l’operazione.' },
      { title: 'Esplicitare le regole sul denaro', body: 'Il dominio finanziario governa allocazioni, riconciliazione e autorizzazioni. Persistenza e operazioni sicure in caso di ripetizione proteggono le regole quando un messaggio viene ritentato o un workflow riprende. La dashboard legge gli stessi dati di riferimento, senza mantenere una seconda versione della transazione.' },
      { title: 'Dare un contratto agli agenti di sviluppo', body: 'Ho usato requisiti di prodotto, roadmap per passi, viste arc42, decisioni architetturali e istruzioni del repository per definire responsabilità e limiti dei componenti. Ogni passo aveva criteri di uscita e prove: la presenza del codice, da sola, non bastava a dichiararlo completo.' },
      { title: 'Valutare le parti incerte', body: 'I workflow testuali sono stati verificati con dataset versionati e soglie esplicite di promozione. I test software controllavano comportamento deterministico e percorsi completi; le valutazioni misuravano routing, uso degli strumenti e consigli dipendenti dal modello. Così la correttezza finanziaria non dipendeva dal punteggio del modello.' },
    ],
    statusTitle: 'Cosa esiste oggi',
    status: 'La V1 personale accettata è testuale. Include un canale Telegram persistente per il proprietario, una dashboard locale protetta, dominio finanziario e persistenza deterministici, workflow testuali valutati e backup cifrato. Archiviazione e revisione delle ricevute esistono; l’estrazione automatica è rinviata. Il repository resta privato.',
    contributionTitle: 'Cosa dimostra il mio contributo',
    contributionText: 'Il mio contributo collega perimetro di prodotto, architettura e verifica. In Money Tracker, il linguaggio naturale aiuta a interpretare una richiesta, mentre workflow tipizzati, strumenti limitati e regole di dominio deterministiche decidono cosa può cambiare. Ho usato documentazione architetturale e criteri di valutazione per rendere quel confine verificabile nello sviluppo assistito da AI.',
  },
  fr: {
    heading: 'Comment j’ai soumis un assistant IA à des règles financières',
    lead: 'Money Tracker est un assistant personnel de finances conçu d’abord pour un usage local. J’en ai défini l’orientation et l’architecture, puis utilisé des agents de programmation pour contribuer à sa réalisation. La question centrale était de transformer une interprétation incertaine en opération financière vérifiée et autorisée.',
    steps: [
      { title: 'Séparer interprétation et autorité', body: 'Un message peut décrire une dépense, poser une question ou demander une correction. Un flux encadré interprète l’intention et choisit une voie typée. Une réponse du modèle ne devient pas seule une écriture financière : des outils limités et des services métier déterministes contrôlent l’opération.' },
      { title: 'Expliciter les règles financières', body: 'Le domaine financier gère répartition, rapprochement et autorisation. La persistance et les opérations sûres en cas de répétition protègent ces règles lors des reprises. Le tableau de bord lit les mêmes données de référence, sans créer une deuxième version de la transaction.' },
      { title: 'Donner un contrat aux agents de développement', body: 'J’ai utilisé exigences produit, feuille de route par étapes, vues arc42, décisions d’architecture et instructions du dépôt pour définir responsabilités et limites. Chaque étape avait des critères de sortie et des preuves : la seule présence de code ne suffisait pas à la déclarer terminée.' },
      { title: 'Évaluer les parties incertaines', body: 'Les flux textuels ont été évalués avec des jeux de données versionnés et des seuils explicites. Les tests logiciels vérifiaient les règles déterministes et les parcours complets ; les évaluations mesuraient routage, usage des outils et conseils dépendants du modèle. La justesse financière ne dépendait donc pas d’un score de modèle.' },
    ],
    statusTitle: 'État actuel',
    status: 'La V1 personnelle acceptée est centrée sur le texte. Elle comprend un canal Telegram durable pour le propriétaire, un tableau de bord local protégé, un domaine financier déterministe avec persistance, des flux textuels évalués et une sauvegarde chiffrée. L’archivage et la révision des reçus existent ; leur extraction automatique est différée. Le dépôt reste privé.',
    contributionTitle: 'Ce que montre ma contribution',
    contributionText: 'Ma contribution relie périmètre produit, architecture et vérification. Dans Money Tracker, le langage naturel aide à comprendre la demande, tandis que des flux typés, des outils limités et des règles déterministes décident de ce qui peut changer. Documentation d’architecture et critères d’évaluation rendent cette frontière vérifiable.',
  },
  de: {
    heading: 'Wie ich einen KI-Assistenten an Finanzregeln gebunden habe',
    lead: 'Money Tracker ist ein persönlicher Finanzassistent mit lokalem Schwerpunkt. Ich definierte Produktausrichtung und Architektur und nutzte Coding-Agenten bei der Umsetzung. Die zentrale Frage war, wie aus einer unsicheren Interpretation eine geprüfte und autorisierte Finanzoperation wird.',
    steps: [
      { title: 'Interpretation und Befugnis trennen', body: 'Eine Nachricht kann eine Ausgabe beschreiben, eine Frage stellen oder eine Korrektur verlangen. Ein begrenzter Workflow deutet die Absicht und wählt einen typisierten Weg. Eine Modellantwort wird nicht selbst zum Finanzdatensatz: begrenzte Werkzeuge und deterministische Domänendienste steuern die Operation.' },
      { title: 'Finanzregeln ausdrücklich festlegen', body: 'Die Finanzdomäne verwaltet Aufteilung, Abgleich und Berechtigung. Persistenz und wiederholungssichere Operationen schützen diese Regeln bei erneuter Zustellung und Wiederaufnahme. Das Dashboard liest dieselben maßgeblichen Daten, statt eine zweite Fassung der Transaktion zu führen.' },
      { title: 'Entwicklungsagenten einen Vertrag geben', body: 'Produktanforderungen, eine schrittweise Roadmap, arc42-Sichten, Architekturentscheidungen und Repository-Anweisungen definierten Zuständigkeiten und Grenzen. Für jeden Schritt gab es Abnahmekriterien und Belege; vorhandener Code allein bedeutete noch keinen Abschluss.' },
      { title: 'Unsichere Teile evaluieren', body: 'Text-Workflows wurden mit versionierten Datensätzen und expliziten Freigabekriterien geprüft. Softwaretests prüften deterministisches Verhalten und vollständige Abläufe; Evaluationen maßen modellabhängiges Routing, Werkzeugnutzung und Beratung. Finanzielle Korrektheit wurde keinem Modellwert überlassen.' },
    ],
    statusTitle: 'Aktueller Stand',
    status: 'Die akzeptierte persönliche V1 konzentriert sich auf Text. Sie umfasst einen dauerhaften privaten Telegram-Kanal, ein geschütztes lokales Dashboard, deterministische Finanzlogik und Persistenz, evaluierte Text-Workflows sowie verschlüsselte Backups. Belege können gespeichert und geprüft werden; automatische Extraktion ist verschoben. Das Repository bleibt privat.',
    contributionTitle: 'Was mein Beitrag zeigt',
    contributionText: 'Mein Beitrag verbindet Produktumfang, Architektur und Überprüfung: Natürliche Sprache hilft, eine Anfrage zu verstehen; typisierte Workflows, begrenzte Werkzeuge und deterministische Domänenregeln entscheiden, was sich ändern darf. Architekturdokumentation und Evaluationskriterien machten diese Grenze bei KI-gestützter Entwicklung prüfbar.',
  },
  es: {
    heading: 'Cómo sujeté un asistente de IA a reglas financieras',
    lead: 'Money Tracker es un asistente personal de finanzas pensado primero para uso local. Definí su dirección y arquitectura y utilicé agentes de programación para ayudar a implementarlo. La pregunta central era cómo convertir una interpretación incierta en una operación financiera comprobada y autorizada.',
    steps: [
      { title: 'Separar interpretación y autoridad', body: 'Un mensaje puede describir un gasto, hacer una pregunta o pedir una corrección. Un flujo acotado interpreta la intención y elige una ruta tipada. La respuesta del modelo no se convierte por sí sola en un registro: herramientas limitadas y servicios de dominio deterministas controlan la operación.' },
      { title: 'Explicitar las reglas del dinero', body: 'El dominio financiero controla asignación, conciliación y autorización. La persistencia y las operaciones seguras ante repeticiones protegen esas reglas al reintentar un mensaje o reanudar un flujo. La interfaz lee los mismos datos autorizados, sin mantener otra versión de la transacción.' },
      { title: 'Dar un contrato a los agentes de desarrollo', body: 'Utilicé requisitos de producto, una hoja de ruta por etapas, vistas arc42, decisiones de arquitectura e instrucciones del repositorio para definir responsabilidades y límites. Cada etapa tenía criterios de salida y pruebas: tener código no bastaba para declararla terminada.' },
      { title: 'Evaluar lo incierto', body: 'Los flujos de texto se evaluaron con conjuntos de datos versionados y criterios explícitos de promoción. Las pruebas de software comprobaron las reglas deterministas y recorridos completos; las evaluaciones midieron enrutamiento, uso de herramientas y consejos dependientes del modelo. La corrección financiera no quedó en manos de una puntuación del modelo.' },
    ],
    statusTitle: 'Estado actual',
    status: 'La V1 personal aceptada se centra en texto. Incluye un canal Telegram duradero para el propietario, una interfaz local protegida, dominio financiero y persistencia deterministas, flujos de texto evaluados y copia de seguridad cifrada. Existen archivo y revisión de recibos; su extracción automática queda para después. El repositorio sigue siendo privado.',
    contributionTitle: 'Qué demuestra mi contribución',
    contributionText: 'Mi contribución conecta alcance del producto, arquitectura y verificación. En Money Tracker, el lenguaje natural ayuda a interpretar una solicitud; los flujos tipados, herramientas limitadas y reglas deterministas deciden qué puede cambiar. La documentación de arquitectura y los criterios de evaluación hicieron verificable ese límite durante el desarrollo asistido por IA.',
  },
  pl: {
    heading: 'Jak podporządkowałem asystenta AI regułom finansowym',
    lead: 'Money Tracker to osobisty asystent finansowy przeznaczony przede wszystkim do pracy lokalnej. Określiłem kierunek produktu i architekturę, a przy wdrażaniu korzystałem z agentów kodujących. Główne pytanie brzmiało: jak zmienić niepewną interpretację w sprawdzoną i autoryzowaną operację finansową?',
    steps: [
      { title: 'Oddzielić interpretację od uprawnień', body: 'Wiadomość może opisywać wydatek, zawierać pytanie lub prośbę o korektę. Ograniczony przepływ interpretuje intencję i wybiera typowaną ścieżkę. Odpowiedź modelu sama nie tworzy zapisu finansowego: ograniczone narzędzia i deterministyczne usługi domenowe kontrolują operację.' },
      { title: 'Jawnie określić reguły finansowe', body: 'Domena finansowa odpowiada za podział, uzgadnianie i autoryzację. Trwałość danych oraz operacje bezpieczne przy powtórzeniu chronią te reguły przy ponowieniu wiadomości. Panel odczytuje te same autorytatywne dane, bez tworzenia drugiej wersji transakcji.' },
      { title: 'Dać agentom programistycznym kontrakt', body: 'Wymagania produktu, etapowa roadmapa, widoki arc42, decyzje architektoniczne i instrukcje repozytorium określiły odpowiedzialności i granice. Każdy etap miał kryteria ukończenia i dowody; sam kod nie wystarczał, by uznać pracę za zakończoną.' },
      { title: 'Oceniać niepewne części', body: 'Przepływy tekstowe sprawdzano za pomocą wersjonowanych zbiorów danych i jawnych progów akceptacji. Testy oprogramowania kontrolowały deterministyczne reguły i całe ścieżki; ewaluacje mierzyły routing, użycie narzędzi i porady zależne od modelu. Poprawność finansowa nie zależała od wyniku modelu.' },
    ],
    statusTitle: 'Stan obecny',
    status: 'Zaakceptowana osobista V1 skupia się na tekście. Obejmuje trwały prywatny kanał Telegram, chroniony lokalny panel, deterministyczną domenę finansową i trwałość danych, ocenione przepływy tekstowe oraz szyfrowane kopie zapasowe. Zapisywanie i przegląd paragonów istnieją; automatyczna ekstrakcja jest odłożona. Repozytorium pozostaje prywatne.',
    contributionTitle: 'Co pokazuje mój wkład',
    contributionText: 'Mój wkład łączy zakres produktu, architekturę i weryfikację. W Money Tracker język naturalny pomaga zrozumieć prośbę, a typowane przepływy, ograniczone narzędzia i deterministyczne reguły decydują, co wolno zmienić. Dokumentacja architektury i kryteria ewaluacji pozwoliły sprawdzać tę granicę podczas pracy wspieranej przez AI.',
  },
};
