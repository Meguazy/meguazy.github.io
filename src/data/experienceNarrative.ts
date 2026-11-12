import type { Language } from './site';

// Owner-confirmed scope: docs/revision-2026-11-12-career-and-research.md.
type Narrative = {
  timelineTitle: string; overview: string; current: string; research: string;
  data: string; backend: string; related: string; focus: string;
  currentSummary: string; dataDates: string; backendDates: string;
};

export const experienceNarrative: Record<Language, Narrative> = {
  en: {
    timelineTitle: 'Experience & education',
    overview: 'My path connects Java backend development, enterprise data engineering and technical leadership in university R&D. Since June 2026, I have worked as an AI Engineer at Datapizza, regularly contributing to technical and design decisions.',
    current: 'At Datapizza, I contribute to design decisions and implementation on GenAI projects. For a technical-document Graph RAG system, my work includes deterministic ranking that prioritizes technical identifiers and shares text analysis between indexing and queries. I also work on asynchronous Python pipelines that turn XML into validated retrieval data, with document references and MongoDB/S3-compatible storage, and on LLM-as-a-Judge evaluation. Its end-to-end correctness score includes API failures and missing answers.',
    research: 'At the University of Camerino, I held technical-lead responsibilities for NINA and MR Wolf, covering architecture, development and AI-component integration within collaborative projects. NINA connects guided interviews, explicit conversation state, hierarchical context, reports and WebRTC voice/avatar interaction. MR Wolf organizes document retrieval around folders, files and chunks, with Milvus/Sentence Transformers search and path validation. I also designed and developed a two-stage mixed-integer scheduling optimizer; the separate forecasting component was outside my contribution.',
    data: 'At Sync Lab, I developed enterprise ETL pipelines in Python, Scala and Spark, with Airflow orchestration. The work also covered AWS data solutions with containerized components distributed through Docker and Kubernetes. This gave me a foundation in data processing and the infrastructure surrounding AI applications.',
    backend: 'At Par-Tec, I worked on Java backend development and web applications in an enterprise software environment.',
    related: 'Explore the R&D projects',
    focus: 'My university work combined technical leadership in conversational AI and document retrieval with the development of a scheduling optimizer. At Datapizza, I contribute to retrieval, ingestion and evaluation decisions. My personal projects make related engineering choices visible: bounded workflows, explicit rules, model evaluation and traceable development.',
    currentSummary: 'AI Engineer at Datapizza, contributing to GenAI design decisions, document retrieval, ingestion and evaluation.',
    dataDates: 'Feb 2022 – Feb 2025', backendDates: 'Sep 2017 – Sep 2018',
  },
  it: {
    timelineTitle: 'Esperienza e formazione',
    overview: 'Il mio percorso unisce sviluppo backend Java, data engineering enterprise e guida tecnica nella R&D universitaria. Da giugno 2026 sono AI Engineer in Datapizza, dove partecipo spesso alle decisioni tecniche e progettuali.',
    current: 'In Datapizza contribuisco a scelte progettuali e implementazione di sistemi GenAI. Per un Graph RAG su documentazione tecnica, il mio lavoro comprende ranking deterministico che dà priorità agli identificativi tecnici e analisi testuale condivisa tra indice e query. Lavoro anche su pipeline Python asincrone da XML a dati validati per il retrieval, con riferimenti documentali e persistenza MongoDB/storage compatibile S3, e sulla valutazione LLM-as-a-Judge. Il punteggio di correttezza end-to-end include errori API e risposte mancanti.',
    research: 'All’Università di Camerino ho avuto responsabilità di guida tecnica per NINA e MR Wolf, occupandomi di architettura, sviluppo e integrazione dei componenti AI in progetti collaborativi. NINA collega interviste guidate, stato conversazionale esplicito, contesto gerarchico, report e interazione voce/avatar WebRTC. MR Wolf organizza il retrieval in cartelle, file e chunk, con ricerca Milvus/Sentence Transformers e validazione dei percorsi. Ho inoltre progettato e sviluppato un ottimizzatore di scheduling in due fasi a programmazione intera mista; il componente separato di previsione era fuori dal mio contributo.',
    data: 'In Sync Lab ho sviluppato pipeline ETL enterprise in Python, Scala e Spark, orchestrate con Airflow. Il lavoro comprendeva anche soluzioni dati AWS con componenti containerizzati distribuiti tramite Docker e Kubernetes. È una base di esperienza nell’elaborazione dei dati e nell’infrastruttura che circonda le applicazioni AI.',
    backend: 'In Par-Tec ho lavorato allo sviluppo backend Java e ad applicazioni web in un contesto software enterprise.',
    related: 'Esplora i progetti R&D',
    focus: 'In università ho unito la guida tecnica di progetti di AI conversazionale e retrieval documentale allo sviluppo di un ottimizzatore. In Datapizza contribuisco alle scelte su retrieval, ingestion e valutazione. I progetti personali mostrano scelte ingegneristiche affini: workflow delimitati, regole esplicite, valutazione dei modelli e sviluppo tracciabile.',
    currentSummary: 'AI Engineer in Datapizza, con contributi alle scelte GenAI, al retrieval documentale, all’ingestion e alla valutazione.',
    dataDates: 'feb 2022 – feb 2025', backendDates: 'set 2017 – set 2018',
  },
  fr: {
    timelineTitle: 'Expérience et formation',
    overview: 'Mon parcours relie développement backend Java, ingénierie des données en entreprise et responsabilité technique en R&D universitaire. Depuis juin 2026, je suis AI Engineer chez Datapizza et participe régulièrement aux décisions techniques et de conception.',
    current: 'Chez Datapizza, je contribue à la conception et à la réalisation de projets GenAI. Pour un système Graph RAG consacré à la documentation technique, mon travail comprend un classement déterministe donnant priorité aux identifiants techniques et une analyse textuelle commune à l’indexation et aux requêtes. Je travaille aussi sur des pipelines Python asynchrones convertissant XML en données validées pour le retrieval, avec références documentaires et stockage MongoDB/compatible S3, ainsi que sur l’évaluation LLM-as-a-Judge. Le score de correction de bout en bout inclut les erreurs API et les réponses manquantes.',
    research: 'À l’Université de Camerino, j’ai exercé des responsabilités de direction technique sur NINA et MR Wolf : architecture, développement et intégration des composants IA dans des projets collaboratifs. NINA associe entretiens guidés, état conversationnel explicite, contexte hiérarchique, rapports et interaction voix/avatar WebRTC. MR Wolf structure le retrieval en dossiers, fichiers et fragments, avec recherche Milvus/Sentence Transformers et validation des chemins. J’ai également conçu et développé un optimiseur de planification en deux étapes par programmation mixte en nombres entiers ; le module distinct de prévision était hors de ma contribution.',
    data: 'Chez Sync Lab, j’ai développé des pipelines ETL d’entreprise en Python, Scala et Spark, orchestrés avec Airflow. Le travail comprenait aussi des solutions de données AWS avec des composants conteneurisés distribués via Docker et Kubernetes. Cette expérience constitue une base en traitement des données et en infrastructure des applications IA.',
    backend: 'Chez Par-Tec, j’ai travaillé sur le développement backend Java et des applications web dans un environnement logiciel d’entreprise.',
    related: 'Explorer les projets R&D',
    focus: 'À l’université, j’ai associé direction technique de projets d’IA conversationnelle et de retrieval documentaire au développement d’un optimiseur. Chez Datapizza, je contribue aux choix de retrieval, d’ingestion et d’évaluation. Mes projets personnels exposent des choix proches : flux encadrés, règles explicites, évaluation des modèles et développement traçable.',
    currentSummary: 'AI Engineer chez Datapizza, avec des contributions à la conception GenAI, au retrieval, à l’ingestion et à l’évaluation.',
    dataDates: 'févr. 2022 – févr. 2025', backendDates: 'sept. 2017 – sept. 2018',
  },
  de: {
    timelineTitle: 'Erfahrung und Ausbildung',
    overview: 'Mein Werdegang verbindet Java-Backend-Entwicklung, Data Engineering im Unternehmensumfeld und technische Leitung in der universitären Forschung und Entwicklung. Seit Juni 2026 bin ich AI Engineer bei Datapizza und beteilige mich regelmäßig an technischen und konzeptionellen Entscheidungen.',
    current: 'Bei Datapizza arbeite ich an Entwurfsentscheidungen und der Umsetzung von GenAI-Projekten mit. Für ein Graph-RAG-System für technische Dokumentation gehören deterministisches Ranking mit Vorrang für technische Kennungen und eine gemeinsame Textanalyse für Indexierung und Abfragen zu meinen Aufgaben. Hinzu kommen asynchrone Python-Pipelines von XML zu validierten Retrieval-Daten mit Dokumentverweisen und MongoDB/S3-kompatiblem Speicher sowie LLM-as-a-Judge-Evaluation. Der End-to-End-Korrektheitswert berücksichtigt API-Fehler und fehlende Antworten.',
    research: 'An der Universität Camerino übernahm ich technische Leitungsaufgaben für NINA und MR Wolf: Architektur, Entwicklung und Integration von KI-Komponenten in gemeinschaftlichen Projekten. NINA verbindet geführte Interviews, expliziten Gesprächszustand, hierarchischen Kontext, Berichte und WebRTC-Sprach-/Avatarinteraktion. MR Wolf organisiert Retrieval nach Ordnern, Dateien und Chunks mit Milvus/Sentence Transformers und Pfadvalidierung. Außerdem entwarf und entwickelte ich einen zweistufigen gemischt-ganzzahligen Planungsoptimierer; die separate Prognosekomponente gehörte nicht zu meinem Beitrag.',
    data: 'Bei Sync Lab entwickelte ich ETL-Pipelines für Unternehmen mit Python, Scala und Spark sowie Airflow-Orchestrierung. Die Arbeit umfasste außerdem AWS-Datenlösungen mit containerisierten Komponenten, die über Docker und Kubernetes bereitgestellt wurden. Daraus entstand meine Grundlage in Datenverarbeitung und der Infrastruktur von KI-Anwendungen.',
    backend: 'Bei Par-Tec arbeitete ich an Java-Backends und Webanwendungen in einem Unternehmenssoftware-Umfeld.',
    related: 'R&D-Projekte erkunden',
    focus: 'An der Universität verband ich technische Leitung in Conversational AI und Dokumenten-Retrieval mit der Entwicklung eines Optimierers. Bei Datapizza wirke ich an Entscheidungen zu Retrieval, Ingestion und Evaluation mit. Persönliche Projekte zeigen verwandte Entwürfe: begrenzte Workflows, explizite Regeln, Modellevaluation und nachvollziehbare Entwicklung.',
    currentSummary: 'AI Engineer bei Datapizza mit Beiträgen zu GenAI-Entwurf, Dokumenten-Retrieval, Ingestion und Evaluation.',
    dataDates: 'Feb. 2022 – Feb. 2025', backendDates: 'Sept. 2017 – Sept. 2018',
  },
  es: {
    timelineTitle: 'Experiencia y formación',
    overview: 'Mi trayectoria conecta desarrollo backend Java, ingeniería de datos empresarial y dirección técnica en I+D universitaria. Desde junio de 2026 soy AI Engineer en Datapizza, donde participo habitualmente en decisiones técnicas y de diseño.',
    current: 'En Datapizza contribuyo al diseño y la implementación de proyectos GenAI. En un sistema Graph RAG para documentación técnica, mi trabajo incluye ranking determinista que prioriza identificadores técnicos y un análisis textual compartido entre indexación y consultas. También trabajo en pipelines Python asíncronos que convierten XML en datos validados para retrieval, con referencias documentales y almacenamiento MongoDB/compatible con S3, y en evaluación LLM-as-a-Judge. La puntuación de corrección de extremo a extremo incluye errores API y respuestas ausentes.',
    research: 'En la Universidad de Camerino asumí responsabilidades de dirección técnica en NINA y MR Wolf: arquitectura, desarrollo e integración de componentes de IA dentro de proyectos colaborativos. NINA conecta entrevistas guiadas, estado conversacional explícito, contexto jerárquico, informes e interacción voz/avatar WebRTC. MR Wolf organiza el retrieval en carpetas, archivos y fragmentos, con búsqueda Milvus/Sentence Transformers y validación de rutas. También diseñé y desarrollé un optimizador de planificación en dos etapas mediante programación entera mixta; el componente separado de predicción quedó fuera de mi contribución.',
    data: 'En Sync Lab desarrollé pipelines ETL empresariales con Python, Scala y Spark, orquestados mediante Airflow. El trabajo también abarcaba soluciones de datos AWS con componentes en contenedores distribuidos mediante Docker y Kubernetes. Esta experiencia me dio una base en procesamiento de datos e infraestructura para aplicaciones de IA.',
    backend: 'En Par-Tec trabajé en desarrollo backend Java y aplicaciones web dentro de un entorno de software empresarial.',
    related: 'Explorar los proyectos de I+D',
    focus: 'En la universidad combiné dirección técnica de IA conversacional y retrieval documental con el desarrollo de un optimizador. En Datapizza contribuyo a decisiones de retrieval, ingestión y evaluación. Mis proyectos personales muestran decisiones afines: flujos acotados, reglas explícitas, evaluación de modelos y desarrollo trazable.',
    currentSummary: 'AI Engineer en Datapizza, con aportaciones al diseño GenAI, retrieval documental, ingestión y evaluación.',
    dataDates: 'feb 2022 – feb 2025', backendDates: 'sep 2017 – sep 2018',
  },
  pl: {
    timelineTitle: 'Doświadczenie i wykształcenie',
    overview: 'Moja ścieżka łączy rozwój backendu w Javie, inżynierię danych dla przedsiębiorstw i kierowanie techniczne pracami badawczo-rozwojowymi na uczelni. Od czerwca 2026 jestem AI Engineer w Datapizza i regularnie uczestniczę w decyzjach technicznych oraz projektowych.',
    current: 'W Datapizza współtworzę projekty GenAI, uczestnicząc w projektowaniu i implementacji. W systemie Graph RAG dla dokumentacji technicznej zajmuję się deterministycznym rankingiem z priorytetem dla identyfikatorów technicznych oraz wspólną analizą tekstu podczas indeksowania i zapytań. Pracuję też nad asynchronicznymi pipeline’ami Python przekształcającymi XML w zweryfikowane dane do retrieval, z odwołaniami do dokumentów i zapisem w MongoDB/pamięci zgodnej z S3, oraz nad oceną LLM-as-a-Judge. Wynik poprawności end-to-end uwzględnia błędy API i brakujące odpowiedzi.',
    research: 'Na Uniwersytecie w Camerino pełniłem funkcję lidera technicznego NINA i MR Wolf: architektura, rozwój oraz integracja komponentów AI w zespołowych projektach. NINA łączy prowadzone wywiady, jawny stan rozmowy, kontekst hierarchiczny, raporty i interakcję głos/awatar przez WebRTC. MR Wolf porządkuje retrieval według folderów, plików i fragmentów, wykorzystując Milvus/Sentence Transformers i walidację ścieżek. Zaprojektowałem i rozwinąłem także dwuetapowy optymalizator harmonogramów z programowaniem całkowitoliczbowym mieszanym; osobny moduł prognozowania nie należał do mojego wkładu.',
    data: 'W Sync Lab rozwijałem firmowe pipeline’y ETL w Pythonie, Scali i Sparku z orkiestracją Airflow. Praca obejmowała też rozwiązania danych AWS z komponentami kontenerowymi wdrażanymi przez Docker i Kubernetes. Dało mi to podstawy przetwarzania danych i infrastruktury otaczającej aplikacje AI.',
    backend: 'W Par-Tec pracowałem nad backendem Java i aplikacjami internetowymi w środowisku oprogramowania dla przedsiębiorstw.',
    related: 'Poznaj projekty R&D',
    focus: 'Na uczelni łączyłem kierowanie techniczne projektami AI konwersacyjnej i retrieval dokumentów z rozwojem optymalizatora. W Datapizza współtworzę decyzje o retrieval, ingestii i ewaluacji. Projekty osobiste pokazują pokrewne wybory: ograniczone przepływy, jawne reguły, ocenę modeli i prześledzalny rozwój.',
    currentSummary: 'AI Engineer w Datapizza: współudział w projektowaniu GenAI, retrieval dokumentów, ingestii i ewaluacji.',
    dataDates: 'lut 2022 – lut 2025', backendDates: 'wrz 2017 – wrz 2018',
  },
};
