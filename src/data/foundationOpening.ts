import type { Language } from './site';

type Opening = {
  nav: string;
  problemTitle: string; problemText: string;
  solutionTitle: string; solutionText: string;
  whyTitle: string; whyText: string;
  exampleLabel: string; exampleTitle: string; exampleText: string;
  steps: [string, string, string][];
  takeaway: string;
};

// Editorial example based on the framework's booking scenario and delivery rules.
// The scenario is illustrative; it is not an implemented application or test result.
export const foundationOpening: Record<Language, Opening> = {
  en: {
    nav: 'Problem and example',
    problemTitle: 'A new session can lose the reasoning behind the code.',
    problemText: 'When software is developed across several AI conversations, requirements, rejected alternatives, and unfinished work can remain inside those conversations. The code moves on, but the next session has to reconstruct which choices are binding and what still needs work. A plausible implementation can then follow an assumption the owner never accepted.',
    solutionTitle: 'Keep the project’s intent and current state in the repository.',
    solutionText: 'FounDaTionZy connects requirements, decisions, delivery steps, and evidence in versioned documents. Before making a change, a person or agent can inspect the current scope and its constraints. After the change, the documents record what was checked and what remains open.',
    whyTitle: 'Why organize it this way?',
    whyText: 'The code shows an implementation; it rarely preserves the full requirement or why an alternative was rejected. Giving each kind of fact a clear home makes that reasoning recoverable without replaying the original chat. Keeping it useful requires updating it alongside the software.',
    exampleLabel: 'Illustrative example · not a delivered application or a test report',
    exampleTitle: 'A room-booking application, across two sessions',
    exampleText: 'The owner asks for room bookings: two confirmed bookings for the same room must never overlap. The first session works on creation; a later session will add cancellation.',
    steps: [
      ['Preserve the rule', 'Product baseline', 'Write the no-overlap rule as a requirement with an observable acceptance condition. A later session can find it even when the original request is outside its context.'],
      ['Bound the next step', 'Roadmap + open decision', 'Select booking creation as the current step. Record the unanswered cancellation-deadline question, with a decision due before cancellation work begins.'],
      ['Check the behavior', 'Tests + evidence', 'Define the check for two simultaneous requests for the same room and time: only one may be confirmed. Record the actual result, source revision, and storage boundary when the check runs.'],
      ['Resume from an explicit state', 'Handoff', 'A checkpoint can say: creation checked, cancellation planned, owner acceptance pending. The next session verifies that record against the checkout before continuing.'],
    ],
    takeaway: 'The next contributor can reconstruct the rule, the scope, and the evidence separately. A tested booking path does not silently turn cancellation into a completed feature.',
  },
  it: {
    nav: 'Problema ed esempio',
    problemTitle: 'Una nuova sessione può perdere il ragionamento dietro al codice.',
    problemText: 'Quando lo sviluppo passa attraverso più conversazioni con agenti AI, requisiti, alternative scartate e lavoro incompleto possono restare dentro quelle conversazioni. Il codice avanza, ma la sessione successiva deve ricostruire quali scelte siano vincolanti e cosa resti da fare. Un’implementazione plausibile può così seguire un’ipotesi mai accettata dal proprietario.',
    solutionTitle: 'Conservare intento e stato del progetto nel repository.',
    solutionText: 'FounDaTionZy collega requisiti, decisioni, passi di sviluppo ed evidenze in documenti versionati. Prima di modificare qualcosa, una persona o un agente può consultare il perimetro corrente e i suoi vincoli. Dopo la modifica, i documenti registrano cosa è stato verificato e cosa rimane aperto.',
    whyTitle: 'Perché organizzarli così?',
    whyText: 'Il codice mostra un’implementazione; raramente conserva il requisito completo o il motivo per cui un’alternativa è stata scartata. Dare a ogni fatto una sede precisa rende ricostruibile quel ragionamento senza rileggere tutta la chat. Per mantenerlo utile occorre aggiornarlo insieme al software.',
    exampleLabel: 'Esempio illustrativo · non è un’applicazione realizzata né un report di test',
    exampleTitle: 'Un’app di prenotazione sale, fra due sessioni',
    exampleText: 'Il proprietario chiede di prenotare sale: due prenotazioni confermate per la stessa sala non devono sovrapporsi. La prima sessione lavora sulla creazione; una successiva aggiungerà la cancellazione.',
    steps: [
      ['Conservare la regola', 'Baseline di prodotto', 'Registrare il divieto di sovrapposizione come requisito con un criterio di accettazione osservabile. Una nuova sessione lo trova anche quando la richiesta originale non è più nel suo contesto.'],
      ['Delimitare il passo', 'Roadmap e decisione aperta', 'Selezionare la creazione come passo corrente. Registrare la domanda ancora aperta sulla scadenza per cancellare, da decidere prima di iniziare quel lavoro.'],
      ['Verificare il comportamento', 'Test ed evidenze', 'Definire il controllo per due richieste simultanee sulla stessa sala e fascia oraria: una sola può essere confermata. Quando il controllo viene eseguito, registrarne risultato reale, revisione sorgente e confine di persistenza.'],
      ['Riprendere da uno stato esplicito', 'Passaggio di consegne', 'Un checkpoint può indicare: creazione verificata, cancellazione pianificata, accettazione del proprietario in attesa. La sessione successiva confronta quel record con il checkout prima di continuare.'],
    ],
    takeaway: 'Chi subentra ricostruisce separatamente regola, perimetro ed evidenze. Il percorso di prenotazione verificato non fa diventare implicitamente completa anche la cancellazione.',
  },
  fr: {
    nav: 'Problème et exemple',
    problemTitle: 'Une nouvelle session peut perdre le raisonnement derrière le code.',
    problemText: 'Lorsqu’un développement traverse plusieurs conversations avec des agents IA, exigences, options écartées et travail inachevé peuvent y rester dispersés. Le code évolue, mais la session suivante doit reconstruire les choix contraignants et les tâches restantes. Une implémentation plausible peut alors suivre une hypothèse jamais acceptée par le propriétaire.',
    solutionTitle: 'Conserver l’intention et l’état du projet dans le dépôt.',
    solutionText: 'FounDaTionZy relie exigences, décisions, étapes et preuves dans des documents versionnés. Avant une modification, personnes et agents consultent le périmètre et les contraintes. Après, les documents précisent ce qui a été vérifié et ce qui reste ouvert.',
    whyTitle: 'Pourquoi cette organisation ?',
    whyText: 'Le code montre une implémentation ; il conserve rarement toute l’exigence ou les raisons d’un rejet. Une source précise pour chaque fait permet de retrouver ce raisonnement sans rejouer la conversation. Il faut la maintenir avec le logiciel.',
    exampleLabel: 'Exemple illustratif · ni application réalisée ni rapport de test',
    exampleTitle: 'Une application de réservation de salles, sur deux sessions',
    exampleText: 'Le propriétaire demande des réservations : deux réservations confirmées d’une même salle ne doivent pas se chevaucher. La première session traite la création ; une autre ajoutera l’annulation.',
    steps: [
      ['Conserver la règle', 'Base produit', 'Écrire la règle de non-chevauchement avec une condition d’acceptation observable. Une session ultérieure la retrouve même sans la demande originale dans son contexte.'],
      ['Délimiter l’étape', 'Feuille de route et question ouverte', 'Choisir la création comme étape courante. Consigner la question du délai d’annulation, à résoudre avant de commencer cette fonctionnalité.'],
      ['Vérifier le comportement', 'Tests et preuves', 'Définir le contrôle de deux demandes simultanées pour la même salle et le même créneau : une seule peut être confirmée. À l’exécution, consigner résultat réel, révision et périmètre de persistance.'],
      ['Reprendre un état explicite', 'Transmission', 'Le point de reprise peut indiquer : création vérifiée, annulation prévue, acceptation en attente. La nouvelle session compare ce document au dépôt avant de continuer.'],
    ],
    takeaway: 'Le nouveau contributeur retrouve séparément règle, périmètre et preuves. Vérifier le parcours de réservation ne rend pas implicitement l’annulation terminée.',
  },
  de: {
    nav: 'Problem und Beispiel',
    problemTitle: 'Eine neue Sitzung kann die Begründung hinter dem Code verlieren.',
    problemText: 'Entsteht Software über mehrere Gespräche mit KI-Agenten, können Anforderungen, verworfene Optionen und offene Arbeiten dort verstreut bleiben. Der Code entwickelt sich weiter, doch die nächste Sitzung muss bindende Entscheidungen und Restaufgaben rekonstruieren. Eine plausible Umsetzung kann dann einer vom Eigentümer nie akzeptierten Annahme folgen.',
    solutionTitle: 'Absicht und Projektstand im Repository festhalten.',
    solutionText: 'FounDaTionZy verbindet Anforderungen, Entscheidungen, Arbeitsschritte und Nachweise in versionierten Dokumenten. Vor einer Änderung sehen Menschen und Agenten Umfang und Vorgaben ein. Danach halten die Dokumente Prüfungen und offene Punkte fest.',
    whyTitle: 'Warum diese Struktur?',
    whyText: 'Code zeigt eine Implementierung, bewahrt aber selten die vollständige Anforderung oder den Grund für eine verworfene Alternative. Ein klarer Ort für jede Tatsache macht diese Gründe ohne Wiederholung des Chats auffindbar. Das erfordert Pflege zusammen mit der Software.',
    exampleLabel: 'Illustratives Beispiel · keine gelieferte Anwendung und kein Testbericht',
    exampleTitle: 'Eine Raumbuchungsanwendung über zwei Sitzungen',
    exampleText: 'Der Eigentümer möchte Raumbuchungen: Zwei bestätigte Buchungen desselben Raums dürfen sich nicht überschneiden. Die erste Sitzung bearbeitet die Erstellung; eine spätere ergänzt Stornierungen.',
    steps: [
      ['Die Regel erhalten', 'Produktbasis', 'Das Überschneidungsverbot mit beobachtbarer Abnahmebedingung dokumentieren. Eine spätere Sitzung findet es auch ohne die ursprüngliche Anfrage im Kontext.'],
      ['Den Schritt eingrenzen', 'Roadmap und offene Entscheidung', 'Buchungserstellung als aktuellen Schritt auswählen. Die offene Stornierungsfrist mit einer Entscheidung vor Beginn dieser Funktion festhalten.'],
      ['Das Verhalten prüfen', 'Tests und Nachweise', 'Für zwei gleichzeitige Anfragen zum selben Raum und Zeitraum eine Prüfung definieren: Nur eine darf bestätigt werden. Bei Ausführung tatsächliches Ergebnis, Revision und Persistenzgrenze dokumentieren.'],
      ['Einen expliziten Stand fortsetzen', 'Übergabe', 'Ein Übergabestand kann lauten: Erstellung geprüft, Stornierung geplant, Abnahme ausstehend. Die nächste Sitzung gleicht ihn vor der Fortsetzung mit dem Checkout ab.'],
    ],
    takeaway: 'Der nächste Beitragende rekonstruiert Regel, Umfang und Nachweise getrennt. Ein geprüfter Buchungspfad macht Stornierungen nicht automatisch zu einer fertigen Funktion.',
  },
  es: {
    nav: 'Problema y ejemplo',
    problemTitle: 'Una nueva sesión puede perder el razonamiento detrás del código.',
    problemText: 'Cuando el desarrollo pasa por varias conversaciones con agentes de IA, requisitos, alternativas descartadas y trabajo pendiente pueden quedar dispersos en ellas. El código avanza, pero la siguiente sesión debe reconstruir las decisiones vinculantes y las tareas restantes. Una implementación plausible puede seguir una suposición nunca aceptada por el propietario.',
    solutionTitle: 'Conservar la intención y el estado del proyecto en el repositorio.',
    solutionText: 'FounDaTionZy conecta requisitos, decisiones, etapas y evidencias en documentos versionados. Antes de cambiar algo, personas y agentes consultan alcance y restricciones. Después, los documentos registran lo comprobado y lo pendiente.',
    whyTitle: '¿Por qué esta organización?',
    whyText: 'El código muestra una implementación; rara vez conserva el requisito completo o por qué se descartó una alternativa. Un lugar claro para cada hecho permite recuperar ese razonamiento sin repetir la conversación. Hay que mantenerlo junto con el software.',
    exampleLabel: 'Ejemplo ilustrativo · no es una aplicación entregada ni un informe de pruebas',
    exampleTitle: 'Una aplicación de reservas de salas, entre dos sesiones',
    exampleText: 'El propietario pide reservas: dos reservas confirmadas de una misma sala no deben solaparse. La primera sesión trabaja en crearlas; otra añadirá la cancelación.',
    steps: [
      ['Conservar la regla', 'Base del producto', 'Documentar la prohibición de solapamiento con una condición de aceptación observable. Otra sesión la encuentra incluso sin la solicitud original en su contexto.'],
      ['Delimitar la etapa', 'Hoja de ruta y decisión abierta', 'Elegir la creación como etapa actual. Registrar la pregunta pendiente sobre el plazo de cancelación, que debe resolverse antes de desarrollar esa función.'],
      ['Comprobar el comportamiento', 'Pruebas y evidencias', 'Definir la comprobación de dos solicitudes simultáneas para la misma sala y franja: solo una puede confirmarse. Al ejecutarla, registrar resultado real, revisión y límite de persistencia.'],
      ['Retomar un estado explícito', 'Traspaso', 'Un punto de control puede indicar: creación verificada, cancelación prevista, aceptación pendiente. La nueva sesión lo compara con el código antes de continuar.'],
    ],
    takeaway: 'Quien continúa reconstruye por separado regla, alcance y evidencias. Verificar las reservas no convierte implícitamente la cancelación en una función terminada.',
  },
  pl: {
    nav: 'Problem i przykład',
    problemTitle: 'Nowa sesja może utracić rozumowanie stojące za kodem.',
    problemText: 'Gdy oprogramowanie powstaje w wielu rozmowach z agentami AI, wymagania, odrzucone opcje i niedokończona praca mogą pozostać w tych rozmowach. Kod się rozwija, ale kolejna sesja musi odtworzyć wiążące decyzje i pozostałe zadania. Pozornie poprawna implementacja może wtedy wynikać z założenia, którego właściciel nigdy nie zaakceptował.',
    solutionTitle: 'Zachować zamiar i stan projektu w repozytorium.',
    solutionText: 'FounDaTionZy łączy wymagania, decyzje, etapy i dowody w wersjonowanych dokumentach. Przed zmianą ludzie i agenci sprawdzają zakres i ograniczenia. Po niej dokumenty zapisują wyniki kontroli i otwarte kwestie.',
    whyTitle: 'Dlaczego taka organizacja?',
    whyText: 'Kod pokazuje implementację, ale rzadko zachowuje pełne wymaganie lub powód odrzucenia alternatywy. Jasne miejsce dla każdego faktu pozwala odtworzyć rozumowanie bez powtarzania rozmowy. Wymaga to aktualizacji dokumentów wraz z kodem.',
    exampleLabel: 'Przykład ilustracyjny · nie jest gotową aplikacją ani raportem z testów',
    exampleTitle: 'Aplikacja rezerwacji sal w dwóch sesjach',
    exampleText: 'Właściciel chce rezerwacji sal: dwie potwierdzone rezerwacje tej samej sali nie mogą się nakładać. Pierwsza sesja zajmuje się tworzeniem; następna doda anulowanie.',
    steps: [
      ['Zachować regułę', 'Podstawa produktu', 'Zapisać zakaz nakładania jako wymaganie z obserwowalnym warunkiem akceptacji. Nowa sesja odnajdzie je nawet bez pierwotnej prośby w kontekście.'],
      ['Określić etap', 'Plan i otwarta decyzja', 'Wybrać tworzenie rezerwacji jako bieżący etap. Zapisać otwarte pytanie o termin anulowania z decyzją wymaganą przed rozpoczęciem tej funkcji.'],
      ['Sprawdzić zachowanie', 'Testy i dowody', 'Określić kontrolę dwóch równoczesnych żądań tej samej sali i terminu: tylko jedno może zostać potwierdzone. Po wykonaniu zapisać rzeczywisty wynik, rewizję i granicę trwałości danych.'],
      ['Wznowić jawny stan', 'Przekazanie pracy', 'Punkt kontrolny może wskazywać: tworzenie sprawdzone, anulowanie planowane, akceptacja oczekuje. Nowa sesja porównuje go z kodem przed kontynuacją.'],
    ],
    takeaway: 'Kolejna osoba odtwarza osobno regułę, zakres i dowody. Sprawdzona ścieżka rezerwacji nie oznacza automatycznie ukończonego anulowania.',
  },
};
