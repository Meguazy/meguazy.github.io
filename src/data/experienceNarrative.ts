import type { Language } from './site';

// Drafts for local review. Earlier role activities are sourced from the private CV and need owner confirmation.
export const experienceNarrative: Record<Language, { timelineTitle: string; overview: string; current: string; research: string; data: string; backend: string; related: string }> = {
  en: {
    timelineTitle: 'Experience & education',
    overview: 'I began in backend development, moved into data engineering, and then worked as a contract researcher across GenAI and optimization. Since June 2026, my role has been AI Engineer at Datapizza.',
    current: 'My current work is in AI architecture and engineering.',
    research: 'I worked across two distinct GenAI projects: a conversational platform joining AI workflows with retrieval and a live voice/avatar interface, and a collaborative document retrieval system. I also designed and developed a two-stage optimizer for ticket-machine schedules. The cases below explain the technical shape of each project and the boundaries of my personal contribution.',
    data: 'I worked on ETL pipelines and data workflows using Python, Scala, Spark, and Airflow, with containerized deployment using Docker and Kubernetes.',
    backend: 'I worked on Java backend and web development.',
    related: 'Explore the research projects',
  },
  it: {
    timelineTitle: 'Esperienza e formazione',
    overview: 'Ho iniziato nello sviluppo backend, sono passato alla data engineering e poi alla ricerca a contratto tra GenAI e ottimizzazione. Da giugno 2026 lavoro come AI Engineer presso Datapizza.',
    current: 'Il mio lavoro attuale riguarda architettura e ingegneria dell’AI.',
    research: 'Ho lavorato su due distinti progetti GenAI: una piattaforma conversazionale che univa workflow AI, retrieval e un’interfaccia voce/avatar in tempo reale, e un sistema collaborativo di ricerca documentale. Ho inoltre progettato e sviluppato un ottimizzatore in due fasi per pianificare biglietterie automatiche. I casi qui sotto spiegano la struttura tecnica dei progetti e i confini del mio contributo.',
    data: 'Ho lavorato su pipeline ETL e workflow dati con Python, Scala, Spark e Airflow, e su distribuzioni tramite Docker e Kubernetes.',
    backend: 'Ho lavorato nello sviluppo backend Java e web.',
    related: 'Esplora i progetti di ricerca',
  },
  fr: {
    timelineTitle: 'Expérience et formation',
    overview: 'J’ai commencé par le développement backend, puis travaillé dans l’ingénierie des données et la recherche contractuelle en GenAI et optimisation. Depuis juin 2026, je suis AI Engineer chez Datapizza.',
    current: 'Mon travail actuel concerne l’architecture et l’ingénierie de l’IA.',
    research: 'J’ai travaillé sur deux projets GenAI distincts : une plateforme conversationnelle reliant flux d’IA, recherche d’information et interface voix/avatar en direct, et un système collaboratif de recherche documentaire. J’ai aussi conçu et développé un optimiseur à deux étapes pour planifier des distributeurs de billets. Les études de cas détaillent la structure technique et les limites de ma contribution.',
    data: 'J’ai travaillé sur des pipelines ETL et des flux de données avec Python, Scala, Spark et Airflow, ainsi que sur des déploiements conteneurisés avec Docker et Kubernetes.',
    backend: 'J’ai travaillé sur le développement backend Java et web.',
    related: 'Explorer les projets de recherche',
  },
  de: {
    timelineTitle: 'Erfahrung und Ausbildung',
    overview: 'Ich begann in der Backend-Entwicklung, wechselte in das Data Engineering und arbeitete anschließend als Vertragsforscher an GenAI und Optimierung. Seit Juni 2026 bin ich AI Engineer bei Datapizza.',
    current: 'Meine aktuelle Arbeit umfasst KI-Architektur und Engineering.',
    research: 'Ich arbeitete an zwei getrennten GenAI-Projekten: einer Konversationsplattform mit KI-Workflows, Retrieval und Live-Sprach-/Avatar-Oberfläche sowie einem kollaborativen Dokumentensuchsystem. Außerdem entwarf und entwickelte ich einen zweistufigen Planungsoptimierer für Fahrkartenautomaten. Die Fallstudien erläutern die technische Struktur und die Grenzen meines persönlichen Beitrags.',
    data: 'Ich arbeitete an ETL-Pipelines und Daten-Workflows mit Python, Scala, Spark und Airflow sowie an Container-Deployments mit Docker und Kubernetes.',
    backend: 'Ich arbeitete an Java-Backend- und Webentwicklung.',
    related: 'Forschungsprojekte ansehen',
  },
  es: {
    timelineTitle: 'Experiencia y formación',
    overview: 'Empecé en desarrollo backend, pasé a ingeniería de datos y después trabajé como investigador contratado en GenAI y optimización. Desde junio de 2026 soy AI Engineer en Datapizza.',
    current: 'Mi trabajo actual abarca arquitectura e ingeniería de IA.',
    research: 'Trabajé en dos proyectos GenAI distintos: una plataforma conversacional que unía flujos de IA, recuperación de información y una interfaz de voz/avatar en directo, y un sistema colaborativo de búsqueda documental. También diseñé y desarrollé un optimizador de dos etapas para máquinas expendedoras de billetes. Los casos explican la estructura técnica y los límites de mi contribución personal.',
    data: 'Trabajé en pipelines ETL y flujos de datos con Python, Scala, Spark y Airflow, y en despliegues con Docker y Kubernetes.',
    backend: 'Trabajé en desarrollo backend en Java y desarrollo web.',
    related: 'Explorar los proyectos de investigación',
  },
  pl: {
    timelineTitle: 'Doświadczenie i wykształcenie',
    overview: 'Zacząłem od rozwoju backendu, potem zajmowałem się inżynierią danych, a następnie badaniami kontraktowymi nad GenAI i optymalizacją. Od czerwca 2026 pracuję jako AI Engineer w Datapizza.',
    current: 'Moja obecna praca dotyczy architektury i inżynierii AI.',
    research: 'Pracowałem nad dwoma odrębnymi projektami GenAI: platformą konwersacyjną łączącą przepływy AI, wyszukiwanie i interfejs głosowy z awatarem oraz zespołowym systemem wyszukiwania dokumentów. Zaprojektowałem też i opracowałem dwustopniowy optymalizator harmonogramów automatów biletowych. Opisy projektów wyjaśniają ich strukturę techniczną i granice mojego osobistego wkładu.',
    data: 'Pracowałem nad procesami ETL i przepływami danych z użyciem Python, Scala, Spark i Airflow oraz nad wdrożeniami kontenerowymi z Docker i Kubernetes.',
    backend: 'Pracowałem nad backendem w Javie i aplikacjami webowymi.',
    related: 'Poznaj projekty badawcze',
  },
};
