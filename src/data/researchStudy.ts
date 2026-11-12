import type { Language } from './site';

export type ResearchId = 'conversational-ai' | 'document-retrieval';
type Node = { title: string; text: string };
type Study = {
  project: { title: string; field: string; summary: string; context: string; role: string; approach: string; boundary: string };
  stack: string[];
  architecture: { title: string; text: string; nodes: Node[]; caption: string };
  flow: { title: string; text: string; nodes: Node[]; caption: string };
  decisions: { title: string; items: Node[] };
  result: { title: string; text: string; items: string[] };
};

// Curated source descriptions, not service benchmarks or a claim of sole authorship.
// Source identities and disclosure boundaries: docs/revision-2026-11-12-career-and-research.md.
export const researchStudies: Record<Language, Record<ResearchId, Study>> = {
  en: {
    'conversational-ai': {
      project: {
        title: 'NINA — Conversational AI workflows', field: 'University R&D · Technical leadership',
        summary: 'Guided interviews with explicit conversation state, hierarchical context, generated reports and voice/avatar interaction.',
        context: 'A guided interview needs continuity across topics, a clear next step and a useful record afterwards. A model response alone cannot coordinate that experience.',
        role: 'I took technical-lead responsibilities across architecture, development and AI integration. I connected application workflows, context management and interaction components within a collaborative project.',
        approach: 'A custom workflow engine coordinates conversation state and model calls. Context is assembled by domain; summaries and conversation statistics also support report generation.',
        boundary: 'This is a curated architecture account. Private code, interview material, client identities and clinical protocols are excluded. It makes no claim of clinical effectiveness, measured quality or sole implementation.',
      },
      stack: ['Python', 'Custom workflow engine', 'LLM integration', 'WebRTC', 'Hierarchical context'],
      architecture: {
        title: 'From interaction to a controlled workflow',
        text: 'The application keeps progression explicit rather than leaving the next step entirely to a prompt. Expand each component to see its responsibility.',
        nodes: [
          { title: 'Interaction & API', text: 'Text interaction and a voice/avatar channel connect to application APIs. WebRTC supports the live interaction path.' },
          { title: 'Workflow & state', text: 'The orchestrator coordinates interview steps and conversation status through a custom workflow engine.' },
          { title: 'Context assembly', text: 'The context manager combines domain history, earlier summaries and current-topic metadata for the next model call.' },
          { title: 'Model & response', text: 'The LLM integration produces the response within the application workflow; conversation records remain available for later reporting.' },
        ],
        caption: 'Simplified conversation path. Reporting and document retrieval are separate components; the diagram does not imply every turn invokes retrieval.',
      },
      flow: {
        title: 'Keep detail where the conversation is active',
        text: 'The context strategy distinguishes the current domain from earlier ones. It preserves detailed local continuity while carrying previous subjects forward as summaries.',
        nodes: [
          { title: 'Earlier domains', text: 'Summaries retain the main content of previously explored domains.' },
          { title: 'Current domain', text: 'The full current-domain conversation history remains available.' },
          { title: 'Current topic', text: 'Topic metadata gives the next question its local direction.' },
          { title: 'Composed context', text: 'These inputs are combined for the model. Domain summaries and conversation statistics also feed the report service.' },
        ],
        caption: 'Context inputs converge; they are not four sequential model calls. Token estimates and warnings do not guarantee a hard context cap.',
      },
      decisions: { title: 'The engineering choices', items: [
        { title: 'Explicit progression', text: 'Keep workflow state in application code so interview progression is inspectable. The cost is maintaining transitions alongside prompt behavior.' },
        { title: 'Hierarchical memory', text: 'Keep full detail in the active domain and summarize earlier domains. Summaries preserve continuity, but can lose nuance and need quality review.' },
        { title: 'Separate reporting', text: 'Build reports from stored summaries and statistics rather than treating the last chat response as the final record. Generated reports still require review.' },
      ] },
      result: { title: 'What the project delivers', text: 'An integrated research application that connects guided conversation, state and context management, reporting and live interaction. My contribution was technical direction and implementation across those boundaries.', items: [
        'Source inspection supports the workflow orchestration, context composition and report-generation mechanisms shown here.',
        'The voice/avatar path is an integration capability, not a latency or reliability benchmark.',
        'No new live-service or clinical evaluation was run for this case study.',
      ] },
    },
    'document-retrieval': {
      project: {
        title: 'MR Wolf — Hierarchical document retrieval', field: 'University R&D · Technical leadership',
        summary: 'Organization-, folder- and file-scoped vector retrieval with Milvus, Sentence Transformers and explicit path rules.',
        context: 'Document search must retain where a passage belongs. Flattening folders, files and chunks into one undifferentiated list makes useful search scope harder to express.',
        role: 'I took technical-lead responsibilities and developed the hierarchical retrieval layer, connecting document structure, vector representation and scoped search within a collaborative project.',
        approach: 'The data model represents folders, file containers and chunks. Search methods combine embeddings with organization, path and item-type constraints.',
        boundary: 'This case describes the retrieval design and implementation. It does not present a complete production RAG assistant, prove tenant authorization or publish private code, documents, client identities or performance figures.',
      },
      stack: ['Python', 'Milvus', 'Sentence Transformers', 'Hierarchical retrieval', 'Path validation'],
      architecture: {
        title: 'Preserve the document hierarchy',
        text: 'Structure is part of the retrieval model. Each level has a role instead of becoming interchangeable text in a vector index.',
        nodes: [
          { title: 'Organization', text: 'An organization identifier scopes collection selection and search expressions.' },
          { title: 'Folder', text: 'Folder paths and summaries represent the document hierarchy and support navigation.' },
          { title: 'File', text: 'A file container holds metadata and connects a document to its parent folder.' },
          { title: 'Chunk', text: 'Text fragments carry embeddings and source/path metadata for retrieval and reconstruction.' },
        ],
        caption: 'Conceptual hierarchy. Organization-scoped search is not, by itself, proof of a security or authorization boundary.',
      },
      flow: {
        title: 'Ask within the right scope',
        text: 'Query similarity and document structure work together: the caller can search more narrowly than the entire corpus.',
        nodes: [
          { title: 'Query + scope', text: 'Choose an organization and, where relevant, a folder, file or hierarchy level.' },
          { title: 'Query embedding', text: 'Sentence Transformers maps the query to the configured embedding space.' },
          { title: 'Milvus search', text: 'Vector similarity is combined with organization, path and item-type expressions.' },
          { title: 'Source-aware results', text: 'Return relevant chunks with structural context; dedicated methods support browsing and document reconstruction.' },
        ],
        caption: 'Simplified retrieval path. Chunk records are inputs; a complete upload, parsing and answer-generation pipeline is outside this diagram.',
      },
      decisions: { title: 'The engineering choices', items: [
        { title: 'Hierarchy alongside vectors', text: 'Represent folders, file metadata and chunks explicitly. This supports navigation and scoped retrieval, with more schema and metadata to maintain.' },
        { title: 'Consistent path rules', text: 'Normalize and validate paths before using them as hierarchy references. The source includes automated tests for valid paths, malformed input and parent/child relationships.' },
        { title: 'Configurable embeddings', text: 'Keep embedding model and vector-store configuration explicit. Model changes must remain consistent with the indexed vectors; a new model is not a drop-in quality guarantee.' },
      ] },
      result: { title: 'What the project delivers', text: 'A retrieval layer with organization-, folder-, file- and level-scoped methods, browsing, chunk lookup and document reconstruction. The contribution makes document structure directly usable by search callers.', items: [
        'Source inspection supports the hierarchy, embedding and vector-search mechanisms described here.',
        'Path-validation tests were reviewed; they were not newly executed for this website revision.',
        'End-to-end integration, retrieval-quality benchmarks and production readiness are not established by this case study.',
      ] },
    },
  },
  it: {
    'conversational-ai': {
      project: {
        title: 'NINA — Workflow di AI conversazionale', field: 'R&D universitario · Direzione tecnica',
        summary: 'Interviste guidate con stato conversazionale esplicito, contesto gerarchico, report generati e interazione voce/avatar.',
        context: 'Un’intervista guidata richiede continuità fra gli argomenti, un passo successivo chiaro e una registrazione utile a conclusione. Una risposta del modello da sola non coordina questa esperienza.',
        role: 'Ho assunto responsabilità di guida tecnica su architettura, sviluppo e integrazione AI. Ho collegato workflow applicativi, gestione del contesto e componenti di interazione all’interno di un progetto collaborativo.',
        approach: 'Un motore di workflow dedicato coordina stato conversazionale e chiamate al modello. Il contesto è composto per dominio; riepiloghi e statistiche della conversazione alimentano anche la generazione dei report.',
        boundary: 'È una descrizione selezionata dell’architettura. Sono esclusi codice privato, contenuti delle interviste, identità dei clienti e protocolli clinici. Non implica efficacia clinica, qualità misurata o implementazione individuale dell’intero sistema.',
      },
      stack: ['Python', 'Motore di workflow dedicato', 'Integrazione LLM', 'WebRTC', 'Contesto gerarchico'],
      architecture: {
        title: 'Dall’interazione a un workflow controllato',
        text: 'L’applicazione rende esplicita la progressione senza affidare il passo successivo interamente al prompt. Espandi i componenti per esplorarne le responsabilità.',
        nodes: [
          { title: 'Interazione e API', text: 'L’interazione testuale e il canale voce/avatar si collegano alle API applicative. WebRTC supporta il percorso in tempo reale.' },
          { title: 'Workflow e stato', text: 'L’orchestratore coordina le fasi dell’intervista e lo stato della conversazione attraverso un motore di workflow dedicato.' },
          { title: 'Composizione del contesto', text: 'Il context manager unisce cronologia del dominio, riepiloghi precedenti e metadati dell’argomento per la chiamata successiva.' },
          { title: 'Modello e risposta', text: 'L’integrazione LLM produce la risposta nel workflow applicativo; i dati della conversazione restano disponibili per i report.' },
        ],
        caption: 'Percorso conversazionale semplificato. Report e retrieval documentale sono componenti separati: non ogni turno esegue necessariamente una ricerca.',
      },
      flow: {
        title: 'Conservare il dettaglio dove la conversazione è attiva',
        text: 'La strategia distingue il dominio corrente da quelli precedenti: mantiene la continuità locale dettagliata e porta avanti gli altri argomenti attraverso riepiloghi.',
        nodes: [
          { title: 'Domini precedenti', text: 'I riepiloghi conservano i contenuti principali dei domini già esplorati.' },
          { title: 'Dominio corrente', text: 'La cronologia completa della conversazione nel dominio corrente rimane disponibile.' },
          { title: 'Argomento corrente', text: 'I metadati dell’argomento orientano la domanda successiva.' },
          { title: 'Contesto composto', text: 'Gli input vengono uniti per il modello. Riepiloghi dei domini e statistiche alimentano anche il servizio di report.' },
        ],
        caption: 'Gli input convergono: non sono quattro chiamate sequenziali al modello. Stime e avvisi sui token non garantiscono un limite rigido al contesto.',
      },
      decisions: { title: 'Le scelte ingegneristiche', items: [
        { title: 'Progressione esplicita', text: 'Mantenere lo stato nel codice rende ispezionabile la progressione dell’intervista. Richiede di mantenere le transizioni insieme al comportamento dei prompt.' },
        { title: 'Memoria gerarchica', text: 'Conservare il dettaglio del dominio attivo e riassumere i precedenti. I riepiloghi mantengono continuità, ma possono perdere sfumature e richiedono revisione qualitativa.' },
        { title: 'Report separati', text: 'Costruire i report da riepiloghi e statistiche salvati, senza usare l’ultima risposta della chat come documento finale. Anche i report generati richiedono revisione.' },
      ] },
      result: { title: 'Cosa realizza il progetto', text: 'Un’applicazione di ricerca integrata che collega conversazione guidata, gestione di stato e contesto, report e interazione in tempo reale. Il mio contributo comprende direzione tecnica e implementazione fra questi componenti.', items: [
        'La lettura del codice supporta i meccanismi di orchestrazione, composizione del contesto e generazione dei report illustrati.',
        'Il canale voce/avatar è una capacità di integrazione, senza benchmark di latenza o affidabilità.',
        'Per questo caso studio non sono state eseguite nuove valutazioni cliniche o prove sui servizi live.',
      ] },
    },
    'document-retrieval': {
      project: {
        title: 'MR Wolf — Retrieval documentale gerarchico', field: 'R&D universitario · Direzione tecnica',
        summary: 'Ricerca vettoriale circoscritta a organizzazione, cartella e file, con Milvus, Sentence Transformers e regole esplicite sui percorsi.',
        context: 'La ricerca deve conservare la provenienza dei passaggi. Appiattire cartelle, file e frammenti in un unico elenco rende più difficile esprimere un ambito di ricerca utile.',
        role: 'Ho assunto responsabilità di guida tecnica e sviluppato il livello di retrieval gerarchico, collegando struttura documentale, rappresentazione vettoriale e ricerca circoscritta in un progetto collaborativo.',
        approach: 'Il modello rappresenta cartelle, contenitori di file e frammenti. I metodi di ricerca combinano embedding con vincoli su organizzazione, percorso e tipo di elemento.',
        boundary: 'Il caso descrive progettazione e implementazione del retrieval. Non presenta un assistente RAG completo in produzione, non dimostra isolamento autorizzativo e non pubblica codice privato, documenti, clienti o valori di prestazione.',
      },
      stack: ['Python', 'Milvus', 'Sentence Transformers', 'Retrieval gerarchico', 'Validazione dei percorsi'],
      architecture: {
        title: 'Preservare la gerarchia documentale',
        text: 'La struttura fa parte del modello di retrieval. Ogni livello ha un ruolo specifico e non diventa testo intercambiabile nell’indice vettoriale.',
        nodes: [
          { title: 'Organizzazione', text: 'Un identificatore circoscrive la selezione della collezione e le espressioni di ricerca.' },
          { title: 'Cartella', text: 'Percorsi e riepiloghi delle cartelle rappresentano la gerarchia e supportano la navigazione.' },
          { title: 'File', text: 'Un contenitore conserva i metadati e collega il documento alla cartella di appartenenza.' },
          { title: 'Frammento', text: 'I passaggi di testo portano embedding e metadati di provenienza/percorso per retrieval e ricostruzione.' },
        ],
        caption: 'Gerarchia concettuale. Una ricerca circoscritta per organizzazione non dimostra, da sola, un confine di sicurezza o autorizzazione.',
      },
      flow: {
        title: 'Cercare nell’ambito giusto',
        text: 'Similarità e struttura documentale collaborano: chi invoca la ricerca può restringerla rispetto all’intero corpus.',
        nodes: [
          { title: 'Query e ambito', text: 'Si sceglie un’organizzazione e, quando serve, una cartella, un file o un livello gerarchico.' },
          { title: 'Embedding della query', text: 'Sentence Transformers rappresenta la query nello spazio vettoriale configurato.' },
          { title: 'Ricerca Milvus', text: 'La similarità vettoriale si combina con espressioni su organizzazione, percorso e tipo di elemento.' },
          { title: 'Risultati con provenienza', text: 'I frammenti pertinenti mantengono il contesto strutturale; metodi dedicati supportano navigazione e ricostruzione del documento.' },
        ],
        caption: 'Percorso semplificato di retrieval. I frammenti sono input: il diagramma non rappresenta una pipeline completa di caricamento, parsing e generazione di risposte.',
      },
      decisions: { title: 'Le scelte ingegneristiche', items: [
        { title: 'Gerarchia insieme ai vettori', text: 'Rappresentare esplicitamente cartelle, metadati dei file e frammenti supporta navigazione e ricerca circoscritta, con più schema e metadati da mantenere.' },
        { title: 'Regole coerenti sui percorsi', text: 'Normalizzare e validare i percorsi prima di usarli nella gerarchia. Il codice include test automatici per percorsi validi, input malformati e relazioni padre/figlio.' },
        { title: 'Embedding configurabili', text: 'Rendere esplicita la configurazione del modello e del vector store. Cambiare modello richiede coerenza con i vettori indicizzati e non garantisce di per sé maggiore qualità.' },
      ] },
      result: { title: 'Cosa realizza il progetto', text: 'Un livello di retrieval con metodi circoscritti per organizzazione, cartella, file e livello, navigazione, ricerca di frammenti e ricostruzione documentale. Il contributo rende la struttura direttamente utilizzabile da chi invoca la ricerca.', items: [
        'La lettura del codice supporta i meccanismi di gerarchia, embedding e ricerca vettoriale descritti.',
        'I test sui percorsi sono stati esaminati, senza eseguirli nuovamente per questa revisione del sito.',
        'Il caso non stabilisce integrazione end-to-end, benchmark di qualità del retrieval o prontezza per la produzione.',
      ] },
    },
  },
  fr: {
    'conversational-ai': {
      project: {
        title: 'NINA — Flux d’IA conversationnelle', field: 'R&D universitaire · Direction technique',
        summary: 'Entretiens guidés avec état conversationnel explicite, contexte hiérarchique, rapports générés et interaction voix/avatar.',
        context: 'Un entretien guidé exige une continuité entre les sujets, une prochaine étape claire et une trace utile après la conversation. Une réponse du modèle ne suffit pas à coordonner cette expérience.',
        role: 'J’ai assumé la direction technique de l’architecture, du développement et de l’intégration IA. J’ai relié les flux applicatifs, la gestion du contexte et les composants d’interaction dans un projet collaboratif.',
        approach: 'Un moteur de workflow dédié coordonne l’état conversationnel et les appels au modèle. Le contexte est composé par domaine ; résumés et statistiques alimentent aussi les rapports.',
        boundary: 'Présentation sélectionnée de l’architecture, sans code privé, contenu d’entretiens, identité de clients ni protocoles cliniques. Aucune efficacité clinique, qualité mesurée ou réalisation individuelle complète n’est revendiquée.',
      },
      stack: ['Python', 'Moteur de workflow dédié', 'Intégration LLM', 'WebRTC', 'Contexte hiérarchique'],
      architecture: {
        title: 'De l’interaction à un workflow contrôlé',
        text: 'L’application rend la progression explicite au lieu de confier entièrement la prochaine étape au prompt. Dépliez les composants pour explorer leurs responsabilités.',
        nodes: [
          { title: 'Interaction et API', text: 'Le texte et le canal voix/avatar rejoignent les API applicatives. WebRTC prend en charge l’interaction en direct.' },
          { title: 'Workflow et état', text: 'L’orchestrateur coordonne les étapes de l’entretien et l’état conversationnel avec un moteur dédié.' },
          { title: 'Composition du contexte', text: 'Le gestionnaire réunit historique du domaine, résumés antérieurs et métadonnées du sujet pour le prochain appel.' },
          { title: 'Modèle et réponse', text: 'L’intégration LLM produit la réponse dans le workflow ; les données de conversation restent disponibles pour les rapports.' },
        ],
        caption: 'Parcours simplifié. Rapports et retrieval documentaire sont des composants distincts ; chaque tour ne déclenche pas nécessairement une recherche.',
      },
      flow: {
        title: 'Garder le détail là où la conversation est active',
        text: 'Le domaine courant conserve le détail ; les domaines précédents restent présents sous forme de résumés.',
        nodes: [
          { title: 'Domaines précédents', text: 'Les résumés conservent les éléments principaux déjà explorés.' },
          { title: 'Domaine courant', text: 'L’historique complet de ce domaine reste disponible.' },
          { title: 'Sujet courant', text: 'Ses métadonnées orientent la prochaine question.' },
          { title: 'Contexte composé', text: 'Les entrées sont réunies pour le modèle. Résumés et statistiques alimentent également le service de rapports.' },
        ],
        caption: 'Les entrées convergent : ce ne sont pas quatre appels successifs au modèle. Estimations et alertes de tokens ne garantissent pas un plafond strict.',
      },
      decisions: { title: 'Les choix d’ingénierie', items: [
        { title: 'Progression explicite', text: 'L’état dans le code rend le déroulement inspectable. Il faut maintenir les transitions en parallèle du comportement des prompts.' },
        { title: 'Mémoire hiérarchique', text: 'Détail complet dans le domaine actif, résumés pour les précédents. La continuité est conservée, mais des nuances peuvent être perdues et nécessitent une revue.' },
        { title: 'Rapports distincts', text: 'Les rapports utilisent résumés et statistiques enregistrés plutôt que la dernière réponse comme document final. Les rapports générés demandent une vérification.' },
      ] },
      result: { title: 'Ce que réalise le projet', text: 'Une application de recherche reliant conversation guidée, gestion de l’état et du contexte, rapports et interaction en direct. Ma contribution associe direction technique et implémentation entre ces composants.', items: [
        'La lecture du code étaye l’orchestration, la composition du contexte et la génération des rapports présentées.',
        'Le canal voix/avatar est une capacité d’intégration, sans benchmark de latence ou de fiabilité.',
        'Aucun nouvel essai de service en direct ni évaluation clinique n’a été effectué pour cette étude.',
      ] },
    },
    'document-retrieval': {
      project: {
        title: 'MR Wolf — Retrieval documentaire hiérarchique', field: 'R&D universitaire · Direction technique',
        summary: 'Recherche vectorielle ciblée par organisation, dossier et fichier avec Milvus, Sentence Transformers et règles de chemins explicites.',
        context: 'La recherche doit conserver la provenance des passages. Aplatir dossiers, fichiers et fragments dans une même liste complique l’expression d’un périmètre utile.',
        role: 'J’ai assumé la direction technique et développé la couche de retrieval hiérarchique, reliant structure documentaire, représentation vectorielle et recherche ciblée dans un projet collaboratif.',
        approach: 'Le modèle représente dossiers, conteneurs de fichiers et fragments. Les méthodes combinent embeddings et contraintes d’organisation, de chemin et de type.',
        boundary: 'Ce cas décrit la conception et l’implémentation du retrieval. Il ne présente pas un assistant RAG complet en production, ne prouve pas l’isolation des autorisations et ne publie ni code privé, ni documents, clients ou performances chiffrées.',
      },
      stack: ['Python', 'Milvus', 'Sentence Transformers', 'Retrieval hiérarchique', 'Validation des chemins'],
      architecture: {
        title: 'Préserver la hiérarchie documentaire',
        text: 'La structure appartient au modèle de retrieval. Chaque niveau joue un rôle distinct dans l’index.',
        nodes: [
          { title: 'Organisation', text: 'Un identifiant délimite le choix de collection et les expressions de recherche.' },
          { title: 'Dossier', text: 'Chemins et résumés représentent la hiérarchie et facilitent la navigation.' },
          { title: 'Fichier', text: 'Un conteneur conserve les métadonnées et rattache le document au dossier parent.' },
          { title: 'Fragment', text: 'Le texte porte embeddings et métadonnées de provenance/chemin pour la recherche et la reconstruction.' },
        ],
        caption: 'Hiérarchie conceptuelle. Un périmètre par organisation ne prouve pas, à lui seul, une frontière de sécurité ou d’autorisation.',
      },
      flow: {
        title: 'Chercher dans le bon périmètre',
        text: 'Similarité et structure se complètent : l’appelant peut restreindre la recherche à une partie du corpus.',
        nodes: [
          { title: 'Requête et périmètre', text: 'Choisir une organisation et, si nécessaire, un dossier, fichier ou niveau.' },
          { title: 'Embedding de requête', text: 'Sentence Transformers représente la requête dans l’espace configuré.' },
          { title: 'Recherche Milvus', text: 'La similarité vectorielle se combine aux expressions d’organisation, de chemin et de type.' },
          { title: 'Résultats avec provenance', text: 'Les fragments gardent leur contexte ; des méthodes dédiées permettent navigation et reconstruction documentaire.' },
        ],
        caption: 'Parcours simplifié de retrieval. Les fragments sont des entrées ; le chargement, parsing et génération de réponses complets sont hors du schéma.',
      },
      decisions: { title: 'Les choix d’ingénierie', items: [
        { title: 'Hiérarchie et vecteurs', text: 'Représenter explicitement dossiers, métadonnées et fragments facilite navigation et recherche ciblée, avec davantage de schéma à maintenir.' },
        { title: 'Règles de chemins cohérentes', text: 'Normaliser et valider les références hiérarchiques. Le code comprend des tests automatisés de chemins valides, entrées malformées et relations parent/enfant.' },
        { title: 'Embeddings configurables', text: 'Expliciter modèle et configuration du vector store. Un changement de modèle doit rester cohérent avec les vecteurs indexés et ne garantit pas une meilleure qualité.' },
      ] },
      result: { title: 'Ce que réalise le projet', text: 'Une couche de retrieval avec méthodes ciblées par organisation, dossier, fichier et niveau, navigation, recherche de fragments et reconstruction. La structure devient directement utilisable par les appelants.', items: [
        'La lecture du code étaye les mécanismes de hiérarchie, embeddings et recherche vectorielle décrits.',
        'Les tests de chemins ont été examinés sans être réexécutés pour cette révision.',
        'L’intégration de bout en bout, les benchmarks de qualité et l’aptitude à la production ne sont pas établis ici.',
      ] },
    },
  },
  de: {
    'conversational-ai': {
      project: {
        title: 'NINA — Conversational-AI-Workflows', field: 'Universitäre R&D · Technische Leitung',
        summary: 'Geführte Interviews mit explizitem Gesprächszustand, hierarchischem Kontext, generierten Berichten und Sprach-/Avatarinteraktion.',
        context: 'Ein geführtes Interview braucht Kontinuität zwischen Themen, einen klaren nächsten Schritt und eine brauchbare Dokumentation. Eine Modellantwort allein koordiniert diesen Ablauf nicht.',
        role: 'Ich übernahm technische Leitungsverantwortung für Architektur, Entwicklung und KI-Integration. Im gemeinsamen Projekt verband ich Anwendungsworkflows, Kontextverwaltung und Interaktionskomponenten.',
        approach: 'Eine eigene Workflow-Engine koordiniert Gesprächszustand und Modellaufrufe. Kontext wird nach Themenbereichen aufgebaut; Zusammenfassungen und Gesprächsstatistiken unterstützen auch Berichte.',
        boundary: 'Ausgewählte Architekturbeschreibung ohne privaten Code, Interviewinhalte, Kundenidentitäten oder klinische Protokolle. Keine Aussage zu klinischer Wirksamkeit, gemessener Qualität oder alleiniger Implementierung.',
      },
      stack: ['Python', 'Eigene Workflow-Engine', 'LLM-Integration', 'WebRTC', 'Hierarchischer Kontext'],
      architecture: {
        title: 'Von der Interaktion zum gesteuerten Workflow',
        text: 'Die Anwendung bildet den Fortschritt explizit ab. Der nächste Schritt liegt nicht vollständig beim Prompt. Komponenten lassen sich für weitere Details aufklappen.',
        nodes: [
          { title: 'Interaktion und API', text: 'Text und Sprach-/Avatarkanal sind an Anwendungs-APIs angebunden. WebRTC unterstützt die Live-Interaktion.' },
          { title: 'Workflow und Zustand', text: 'Der Orchestrator koordiniert Interviewschritte und Gesprächszustand über eine eigene Engine.' },
          { title: 'Kontextaufbau', text: 'Bereichsverlauf, frühere Zusammenfassungen und aktuelle Themenmetadaten fließen in den nächsten Modellaufruf.' },
          { title: 'Modell und Antwort', text: 'Die LLM-Integration liefert die Antwort im Anwendungsworkflow. Gesprächsdaten bleiben für Berichte verfügbar.' },
        ],
        caption: 'Vereinfachter Gesprächspfad. Berichte und Dokumenten-Retrieval sind separate Komponenten; nicht jeder Gesprächsschritt ruft Retrieval auf.',
      },
      flow: {
        title: 'Details dort behalten, wo das Gespräch aktiv ist',
        text: 'Der aktuelle Themenbereich behält den vollständigen Verlauf; frühere Bereiche werden durch Zusammenfassungen weitergeführt.',
        nodes: [
          { title: 'Frühere Bereiche', text: 'Zusammenfassungen erhalten die wichtigsten bereits besprochenen Inhalte.' },
          { title: 'Aktueller Bereich', text: 'Der gesamte Gesprächsverlauf dieses Bereichs bleibt verfügbar.' },
          { title: 'Aktuelles Thema', text: 'Themenmetadaten geben der nächsten Frage ihre Richtung.' },
          { title: 'Zusammengesetzter Kontext', text: 'Die Eingaben werden für das Modell kombiniert. Zusammenfassungen und Statistiken speisen auch den Berichtsdienst.' },
        ],
        caption: 'Zusammenlaufende Eingaben, keine vier aufeinanderfolgenden Modellaufrufe. Token-Schätzungen und Warnungen garantieren keine harte Kontextgrenze.',
      },
      decisions: { title: 'Die technischen Entscheidungen', items: [
        { title: 'Expliziter Fortschritt', text: 'Zustand im Anwendungscode macht den Interviewablauf nachvollziehbar. Übergänge müssen zusammen mit dem Prompt-Verhalten gepflegt werden.' },
        { title: 'Hierarchisches Gedächtnis', text: 'Volle Details im aktiven Bereich, Zusammenfassungen für frühere. Dabei können Nuancen verloren gehen; die Qualität muss geprüft werden.' },
        { title: 'Separate Berichte', text: 'Berichte entstehen aus gespeicherten Zusammenfassungen und Statistiken statt aus der letzten Chatantwort. Generierte Berichte brauchen weiterhin Prüfung.' },
      ] },
      result: { title: 'Was das Projekt umsetzt', text: 'Eine integrierte Forschungsanwendung verbindet geführte Gespräche, Zustands- und Kontextverwaltung, Berichte und Live-Interaktion. Mein Beitrag umfasst technische Leitung und Umsetzung zwischen diesen Komponenten.', items: [
        'Die Quellcodeprüfung stützt die dargestellte Orchestrierung, Kontextbildung und Berichtserstellung.',
        'Der Sprach-/Avatarkanal ist eine Integrationsfunktion ohne Latenz- oder Zuverlässigkeitsbenchmark.',
        'Für diese Fallstudie wurden keine neuen Live-Service- oder klinischen Tests durchgeführt.',
      ] },
    },
    'document-retrieval': {
      project: {
        title: 'MR Wolf — Hierarchisches Dokumenten-Retrieval', field: 'Universitäre R&D · Technische Leitung',
        summary: 'Vektorsuche nach Organisation, Ordner und Datei mit Milvus, Sentence Transformers und expliziten Pfadregeln.',
        context: 'Dokumentensuche muss die Herkunft von Textstellen erhalten. Werden Ordner, Dateien und Chunks zu einer flachen Liste, lässt sich ein sinnvoller Suchbereich schwerer ausdrücken.',
        role: 'Ich übernahm technische Leitungsverantwortung und entwickelte die hierarchische Retrieval-Schicht. Im gemeinsamen Projekt verband ich Dokumentenstruktur, Vektorrepräsentation und eingegrenzte Suche.',
        approach: 'Das Modell bildet Ordner, Datei-Container und Chunks ab. Suchmethoden kombinieren Embeddings mit Vorgaben für Organisation, Pfad und Elementtyp.',
        boundary: 'Die Fallstudie beschreibt Retrieval-Entwurf und -Implementierung. Sie zeigt keinen vollständigen produktiven RAG-Assistenten, beweist keine Mandantenautorisierung und veröffentlicht keinen privaten Code, Dokumente, Kunden oder Leistungszahlen.',
      },
      stack: ['Python', 'Milvus', 'Sentence Transformers', 'Hierarchisches Retrieval', 'Pfadvalidierung'],
      architecture: {
        title: 'Die Dokumentenhierarchie erhalten',
        text: 'Struktur gehört zum Retrieval-Modell. Jede Ebene hat eine eigene Rolle im Vektorindex.',
        nodes: [
          { title: 'Organisation', text: 'Eine Kennung grenzt Collection-Auswahl und Suchausdrücke ein.' },
          { title: 'Ordner', text: 'Pfade und Zusammenfassungen bilden die Hierarchie ab und unterstützen Navigation.' },
          { title: 'Datei', text: 'Ein Container hält Metadaten und verbindet das Dokument mit seinem übergeordneten Ordner.' },
          { title: 'Chunk', text: 'Textfragmente enthalten Embeddings und Herkunfts-/Pfadmetadaten für Suche und Rekonstruktion.' },
        ],
        caption: 'Konzeptionelle Hierarchie. Organisationsbezogene Suche beweist allein keine Sicherheits- oder Autorisierungsgrenze.',
      },
      flow: {
        title: 'Im passenden Bereich suchen',
        text: 'Ähnlichkeit und Struktur wirken zusammen: Aufrufer können die Suche auf einen Teil des Korpus begrenzen.',
        nodes: [
          { title: 'Anfrage und Bereich', text: 'Organisation sowie bei Bedarf Ordner, Datei oder Hierarchieebene auswählen.' },
          { title: 'Anfrage-Embedding', text: 'Sentence Transformers überführt die Anfrage in den konfigurierten Vektorraum.' },
          { title: 'Milvus-Suche', text: 'Vektorähnlichkeit wird mit Ausdrücken zu Organisation, Pfad und Elementtyp kombiniert.' },
          { title: 'Ergebnisse mit Herkunft', text: 'Relevante Chunks behalten ihren Strukturkontext; eigene Methoden unterstützen Navigation und Dokumentrekonstruktion.' },
        ],
        caption: 'Vereinfachter Retrieval-Pfad. Chunk-Datensätze sind Eingaben; vollständiger Upload, Parsing und Antwortgenerierung sind nicht dargestellt.',
      },
      decisions: { title: 'Die technischen Entscheidungen', items: [
        { title: 'Hierarchie neben Vektoren', text: 'Explizite Ordner, Dateimetadaten und Chunks ermöglichen Navigation und eingegrenzte Suche, benötigen aber mehr Schema- und Metadatenpflege.' },
        { title: 'Konsistente Pfadregeln', text: 'Pfade vor der Verwendung normalisieren und validieren. Der Code enthält automatisierte Tests für gültige Pfade, fehlerhafte Eingaben und Eltern-Kind-Beziehungen.' },
        { title: 'Konfigurierbare Embeddings', text: 'Modell und Vector-Store-Konfiguration explizit halten. Ein Modellwechsel muss zu den indexierten Vektoren passen und garantiert keine bessere Qualität.' },
      ] },
      result: { title: 'Was das Projekt umsetzt', text: 'Eine Retrieval-Schicht mit Suchmethoden für Organisation, Ordner, Datei und Ebene sowie Navigation, Chunk-Suche und Dokumentrekonstruktion. Dokumentenstruktur wird direkt für Aufrufer nutzbar.', items: [
        'Die Quellcodeprüfung stützt die beschriebenen Hierarchie-, Embedding- und Suchmechanismen.',
        'Pfadtests wurden geprüft, für diese Website-Revision jedoch nicht erneut ausgeführt.',
        'End-to-End-Integration, Qualitätsbenchmarks und Produktionsreife werden hier nicht nachgewiesen.',
      ] },
    },
  },
  es: {
    'conversational-ai': {
      project: {
        title: 'NINA — Flujos de IA conversacional', field: 'I+D universitaria · Dirección técnica',
        summary: 'Entrevistas guiadas con estado conversacional explícito, contexto jerárquico, informes generados e interacción voz/avatar.',
        context: 'Una entrevista guiada necesita continuidad entre temas, un siguiente paso claro y un registro útil al terminar. Una respuesta del modelo no coordina por sí sola esta experiencia.',
        role: 'Asumí responsabilidades de dirección técnica en arquitectura, desarrollo e integración de IA. Conecté flujos de aplicación, gestión de contexto e interacción dentro de un proyecto colaborativo.',
        approach: 'Un motor de workflow propio coordina el estado y las llamadas al modelo. El contexto se compone por dominio; resúmenes y estadísticas también alimentan los informes.',
        boundary: 'Descripción seleccionada de la arquitectura sin código privado, entrevistas, identidades de clientes ni protocolos clínicos. No afirma eficacia clínica, calidad medida o implementación individual completa.',
      },
      stack: ['Python', 'Motor de workflow propio', 'Integración LLM', 'WebRTC', 'Contexto jerárquico'],
      architecture: {
        title: 'De la interacción a un workflow controlado',
        text: 'La aplicación hace explícito el avance sin dejar el siguiente paso enteramente al prompt. Despliega los componentes para conocer sus responsabilidades.',
        nodes: [
          { title: 'Interacción y API', text: 'Texto y canal voz/avatar se conectan a las API de aplicación. WebRTC permite la interacción en directo.' },
          { title: 'Workflow y estado', text: 'El orquestador coordina pasos de entrevista y estado conversacional mediante un motor propio.' },
          { title: 'Composición del contexto', text: 'Combina historial del dominio, resúmenes anteriores y metadatos del tema para la próxima llamada.' },
          { title: 'Modelo y respuesta', text: 'La integración LLM produce la respuesta dentro del workflow; los registros quedan disponibles para informes.' },
        ],
        caption: 'Recorrido simplificado. Informes y retrieval documental son componentes separados; no cada turno ejecuta una búsqueda.',
      },
      flow: {
        title: 'Conservar el detalle donde la conversación está activa',
        text: 'El dominio actual conserva el detalle; los anteriores siguen presentes mediante resúmenes.',
        nodes: [
          { title: 'Dominios anteriores', text: 'Los resúmenes conservan el contenido principal ya explorado.' },
          { title: 'Dominio actual', text: 'Se mantiene disponible todo el historial de este dominio.' },
          { title: 'Tema actual', text: 'Los metadatos orientan la siguiente pregunta.' },
          { title: 'Contexto compuesto', text: 'Las entradas se combinan para el modelo. Resúmenes y estadísticas también alimentan el servicio de informes.' },
        ],
        caption: 'Las entradas convergen: no son cuatro llamadas sucesivas al modelo. Estimaciones y avisos de tokens no garantizan un límite rígido.',
      },
      decisions: { title: 'Las decisiones de ingeniería', items: [
        { title: 'Avance explícito', text: 'El estado en código permite inspeccionar el progreso de la entrevista. Las transiciones deben mantenerse junto al comportamiento de los prompts.' },
        { title: 'Memoria jerárquica', text: 'Detalle completo en el dominio activo y resúmenes para los anteriores. Pueden perderse matices y hace falta revisar su calidad.' },
        { title: 'Informes separados', text: 'Los informes se construyen con resúmenes y estadísticas guardados, sin usar la última respuesta como documento final. Requieren revisión.' },
      ] },
      result: { title: 'Qué realiza el proyecto', text: 'Una aplicación de investigación que integra conversación guiada, gestión de estado y contexto, informes e interacción en directo. Mi contribución combina dirección técnica e implementación entre estos componentes.', items: [
        'La inspección del código respalda la orquestación, composición del contexto y generación de informes descritas.',
        'El canal voz/avatar es una capacidad de integración, sin benchmark de latencia o fiabilidad.',
        'Este caso no incluye nuevas pruebas de servicios en directo ni evaluaciones clínicas.',
      ] },
    },
    'document-retrieval': {
      project: {
        title: 'MR Wolf — Retrieval documental jerárquico', field: 'I+D universitaria · Dirección técnica',
        summary: 'Búsqueda vectorial por organización, carpeta y archivo con Milvus, Sentence Transformers y reglas explícitas de rutas.',
        context: 'La búsqueda debe conservar la procedencia de los pasajes. Aplanar carpetas, archivos y fragmentos en una lista dificulta expresar un ámbito útil.',
        role: 'Asumí responsabilidades de dirección técnica y desarrollé la capa de retrieval jerárquico, conectando estructura documental, representación vectorial y búsqueda delimitada en un proyecto colaborativo.',
        approach: 'El modelo representa carpetas, contenedores de archivos y fragmentos. Los métodos combinan embeddings con restricciones de organización, ruta y tipo.',
        boundary: 'El caso describe diseño e implementación del retrieval. No presenta un asistente RAG completo en producción, no demuestra aislamiento de autorización ni publica código privado, documentos, clientes o cifras de rendimiento.',
      },
      stack: ['Python', 'Milvus', 'Sentence Transformers', 'Retrieval jerárquico', 'Validación de rutas'],
      architecture: {
        title: 'Preservar la jerarquía documental',
        text: 'La estructura forma parte del modelo de retrieval. Cada nivel tiene un papel específico en el índice.',
        nodes: [
          { title: 'Organización', text: 'Un identificador delimita la colección y las expresiones de búsqueda.' },
          { title: 'Carpeta', text: 'Rutas y resúmenes representan la jerarquía y permiten navegar.' },
          { title: 'Archivo', text: 'Un contenedor conserva metadatos y conecta el documento con su carpeta padre.' },
          { title: 'Fragmento', text: 'Los pasajes llevan embeddings y metadatos de procedencia/ruta para búsqueda y reconstrucción.' },
        ],
        caption: 'Jerarquía conceptual. La búsqueda por organización no demuestra por sí sola una frontera de seguridad o autorización.',
      },
      flow: {
        title: 'Buscar en el ámbito adecuado',
        text: 'Similitud y estructura colaboran: quien llama puede restringir la búsqueda a una parte del corpus.',
        nodes: [
          { title: 'Consulta y ámbito', text: 'Elegir organización y, si procede, carpeta, archivo o nivel.' },
          { title: 'Embedding de consulta', text: 'Sentence Transformers representa la consulta en el espacio configurado.' },
          { title: 'Búsqueda Milvus', text: 'La similitud vectorial se combina con expresiones de organización, ruta y tipo.' },
          { title: 'Resultados con procedencia', text: 'Los fragmentos mantienen su contexto; métodos específicos permiten navegación y reconstrucción documental.' },
        ],
        caption: 'Recorrido simplificado de retrieval. Los fragmentos son entradas; carga, parsing y generación de respuestas completos quedan fuera del diagrama.',
      },
      decisions: { title: 'Las decisiones de ingeniería', items: [
        { title: 'Jerarquía junto a vectores', text: 'Representar carpetas, metadatos y fragmentos explícitamente permite navegación y búsqueda delimitada, con más esquema que mantener.' },
        { title: 'Reglas coherentes de rutas', text: 'Normalizar y validar las referencias jerárquicas. El código incluye pruebas automáticas de rutas válidas, entradas malformadas y relaciones padre/hijo.' },
        { title: 'Embeddings configurables', text: 'Explicitar modelo y configuración vectorial. Cambiar de modelo exige coherencia con los vectores indexados y no garantiza mejor calidad.' },
      ] },
      result: { title: 'Qué realiza el proyecto', text: 'Una capa de retrieval con métodos por organización, carpeta, archivo y nivel, navegación, búsqueda de fragmentos y reconstrucción. La estructura queda directamente disponible para quien invoca la búsqueda.', items: [
        'La inspección del código respalda los mecanismos de jerarquía, embeddings y búsqueda descritos.',
        'Se revisaron las pruebas de rutas sin ejecutarlas de nuevo para esta revisión.',
        'Aquí no se establecen integración de extremo a extremo, benchmarks de calidad o preparación para producción.',
      ] },
    },
  },
  pl: {
    'conversational-ai': {
      project: {
        title: 'NINA — Przepływy konwersacyjnej AI', field: 'Uczelniane R&D · Kierowanie techniczne',
        summary: 'Prowadzone wywiady z jawnym stanem rozmowy, hierarchicznym kontekstem, generowaniem raportów i interakcją głos/awatar.',
        context: 'Prowadzony wywiad potrzebuje ciągłości między tematami, jasnego następnego kroku i użytecznego zapisu po rozmowie. Sama odpowiedź modelu nie koordynuje tego doświadczenia.',
        role: 'Pełniłem funkcję lidera technicznego w architekturze, rozwoju i integracji AI. Łączyłem przepływy aplikacji, zarządzanie kontekstem i komponenty interakcji w zespołowym projekcie.',
        approach: 'Własny silnik workflow koordynuje stan rozmowy i wywołania modelu. Kontekst jest składany według obszarów; podsumowania i statystyki zasilają też raporty.',
        boundary: 'Wybrany opis architektury bez prywatnego kodu, treści wywiadów, danych klientów i protokołów klinicznych. Nie oznacza skuteczności klinicznej, zmierzonej jakości ani samodzielnego wykonania całego systemu.',
      },
      stack: ['Python', 'Własny silnik workflow', 'Integracja LLM', 'WebRTC', 'Kontekst hierarchiczny'],
      architecture: {
        title: 'Od interakcji do kontrolowanego przepływu',
        text: 'Aplikacja jawnie opisuje postęp, nie pozostawiając następnego kroku wyłącznie promptowi. Rozwiń komponenty, aby poznać ich odpowiedzialności.',
        nodes: [
          { title: 'Interakcja i API', text: 'Tekst i kanał głos/awatar łączą się z API aplikacji. WebRTC obsługuje interakcję na żywo.' },
          { title: 'Workflow i stan', text: 'Orkiestrator koordynuje etapy wywiadu i stan rozmowy przez własny silnik workflow.' },
          { title: 'Składanie kontekstu', text: 'Historia obszaru, wcześniejsze podsumowania i metadane tematu trafiają do następnego wywołania.' },
          { title: 'Model i odpowiedź', text: 'Integracja LLM tworzy odpowiedź w przepływie aplikacji; zapisy rozmowy pozostają dostępne do raportów.' },
        ],
        caption: 'Uproszczony przebieg rozmowy. Raporty i retrieval dokumentów są osobnymi komponentami; nie każda tura uruchamia wyszukiwanie.',
      },
      flow: {
        title: 'Zachować szczegóły tam, gdzie rozmowa jest aktywna',
        text: 'Aktualny obszar zachowuje pełne szczegóły, a wcześniejsze pozostają obecne w podsumowaniach.',
        nodes: [
          { title: 'Wcześniejsze obszary', text: 'Podsumowania przechowują główne już omówione treści.' },
          { title: 'Aktualny obszar', text: 'Pełna historia rozmowy w tym obszarze pozostaje dostępna.' },
          { title: 'Aktualny temat', text: 'Metadane ukierunkowują następne pytanie.' },
          { title: 'Złożony kontekst', text: 'Wejścia są łączone dla modelu. Podsumowania i statystyki zasilają również usługę raportów.' },
        ],
        caption: 'Wejścia zbiegają się; nie są to cztery kolejne wywołania modelu. Szacunki i ostrzeżenia tokenowe nie gwarantują twardego limitu.',
      },
      decisions: { title: 'Decyzje inżynierskie', items: [
        { title: 'Jawny postęp', text: 'Stan w kodzie pozwala prześledzić przebieg wywiadu. Przejścia trzeba utrzymywać równolegle z zachowaniem promptów.' },
        { title: 'Hierarchiczna pamięć', text: 'Pełne szczegóły aktywnego obszaru i podsumowania wcześniejszych. Mogą ginąć niuanse, dlatego potrzebna jest kontrola jakości.' },
        { title: 'Osobne raporty', text: 'Raporty powstają z zapisanych podsumowań i statystyk, zamiast traktować ostatnią odpowiedź jako dokument końcowy. Wygenerowane raporty wymagają przeglądu.' },
      ] },
      result: { title: 'Co realizuje projekt', text: 'Zintegrowana aplikacja badawcza łączy prowadzenie rozmowy, zarządzanie stanem i kontekstem, raporty oraz interakcję na żywo. Mój wkład obejmuje kierowanie techniczne i implementację między tymi komponentami.', items: [
        'Przegląd kodu potwierdza opisane mechanizmy orkiestracji, składania kontekstu i generowania raportów.',
        'Kanał głos/awatar jest funkcją integracyjną bez benchmarku opóźnień czy niezawodności.',
        'Dla tego studium nie wykonywano nowych testów usług na żywo ani ocen klinicznych.',
      ] },
    },
    'document-retrieval': {
      project: {
        title: 'MR Wolf — Hierarchiczny retrieval dokumentów', field: 'Uczelniane R&D · Kierowanie techniczne',
        summary: 'Wyszukiwanie wektorowe według organizacji, folderu i pliku z Milvus, Sentence Transformers i jawnymi regułami ścieżek.',
        context: 'Wyszukiwanie musi zachować pochodzenie fragmentów. Spłaszczenie folderów, plików i fragmentów do jednej listy utrudnia określenie użytecznego zakresu.',
        role: 'Pełniłem funkcję lidera technicznego i rozwijałem warstwę hierarchicznego retrieval, łącząc strukturę dokumentów, reprezentację wektorową i wyszukiwanie o zadanym zakresie w projekcie zespołowym.',
        approach: 'Model reprezentuje foldery, kontenery plików i fragmenty. Metody łączą embeddingi z ograniczeniami organizacji, ścieżki i typu elementu.',
        boundary: 'Opis dotyczy projektu i implementacji retrieval. Nie przedstawia pełnego produkcyjnego asystenta RAG, nie dowodzi izolacji autoryzacji i nie ujawnia prywatnego kodu, dokumentów, klientów ani wyników wydajności.',
      },
      stack: ['Python', 'Milvus', 'Sentence Transformers', 'Hierarchiczny retrieval', 'Walidacja ścieżek'],
      architecture: {
        title: 'Zachować hierarchię dokumentów',
        text: 'Struktura jest częścią modelu retrieval. Każdy poziom pełni odrębną rolę w indeksie.',
        nodes: [
          { title: 'Organizacja', text: 'Identyfikator ogranicza wybór kolekcji i wyrażenia wyszukiwania.' },
          { title: 'Folder', text: 'Ścieżki i podsumowania reprezentują hierarchię oraz wspierają nawigację.' },
          { title: 'Plik', text: 'Kontener przechowuje metadane i łączy dokument z folderem nadrzędnym.' },
          { title: 'Fragment', text: 'Tekst ma embeddingi i metadane pochodzenia/ścieżki do wyszukiwania i rekonstrukcji.' },
        ],
        caption: 'Hierarchia pojęciowa. Zakres według organizacji sam w sobie nie dowodzi granicy bezpieczeństwa ani autoryzacji.',
      },
      flow: {
        title: 'Szukać we właściwym zakresie',
        text: 'Podobieństwo i struktura współpracują: wywołujący może ograniczyć wyszukiwanie do części korpusu.',
        nodes: [
          { title: 'Zapytanie i zakres', text: 'Wybór organizacji oraz w razie potrzeby folderu, pliku lub poziomu.' },
          { title: 'Embedding zapytania', text: 'Sentence Transformers odwzorowuje zapytanie w skonfigurowanej przestrzeni.' },
          { title: 'Wyszukiwanie Milvus', text: 'Podobieństwo wektorowe łączy się z wyrażeniami organizacji, ścieżki i typu.' },
          { title: 'Wyniki z pochodzeniem', text: 'Fragmenty zachowują kontekst struktury; osobne metody wspierają nawigację i rekonstrukcję dokumentów.' },
        ],
        caption: 'Uproszczony przebieg retrieval. Fragmenty są wejściem; pełne przesyłanie, parsowanie i generowanie odpowiedzi nie należą do diagramu.',
      },
      decisions: { title: 'Decyzje inżynierskie', items: [
        { title: 'Hierarchia obok wektorów', text: 'Jawne foldery, metadane i fragmenty pozwalają na nawigację i ograniczoną wyszukiwarkę kosztem większego schematu do utrzymania.' },
        { title: 'Spójne reguły ścieżek', text: 'Normalizacja i walidacja odwołań hierarchicznych. Kod zawiera automatyczne testy poprawnych ścieżek, błędnych wejść i relacji rodzic/dziecko.' },
        { title: 'Konfigurowalne embeddingi', text: 'Jawna konfiguracja modelu i bazy wektorowej. Zmiana modelu wymaga zgodności z zaindeksowanymi wektorami i nie gwarantuje poprawy jakości.' },
      ] },
      result: { title: 'Co realizuje projekt', text: 'Warstwa retrieval z metodami według organizacji, folderu, pliku i poziomu, nawigacją, wyszukiwaniem fragmentów i rekonstrukcją. Struktura staje się bezpośrednio dostępna dla wywołującego.', items: [
        'Przegląd kodu potwierdza opisane mechanizmy hierarchii, embeddingów i wyszukiwania.',
        'Testy ścieżek przejrzano, lecz nie uruchomiono ponownie dla tej rewizji strony.',
        'Nie ustalono tu integracji end-to-end, benchmarków jakości ani gotowości produkcyjnej.',
      ] },
    },
  },
};
