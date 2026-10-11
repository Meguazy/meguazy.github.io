import type { Language } from './site';
type Details = {
  introduction: string; read: string; review: string; movement: string; mixed: string;
  select: string; execute: string; ask: string; settle: string; extractCorrection: string; correctionCategory: string; correct: string; undo: string; post: string;
  pending: string; settled: string; orchestration: string; dispatcher: string;
  readDescription: string; reviewDescription: string; movementDescription: string; reviewNote: string; movementNote: string;
};
export const moneyGraphDetails: Record<Language, Details> = {
  en: {
    introduction:'Five independently compiled graphs. An external typed dispatcher coordinates routing, specialist calls and category-review resumes.',
    read:'Query / advice',review:'Category review',movement:'Correction / undo / posting',mixed:'Rules + optional model call',
    select:'Select a registered read tool',execute:'Execute a read-only query',ask:'interrupt() · owner decision',settle:'Apply the owner’s decision',extractCorrection:'Extract replacement facts',correctionCategory:'Classify the replacement',correct:'Validate and apply correction',undo:'Cancel / void',post:'Post confirmed draft',pending:'still pending',settled:'settled',orchestration:'Orchestration outside LangGraph',dispatcher:'Typed dispatcher',
    readDescription:'START → select_tool → execute_tool → END. Invalid or unsupported selections go directly to END with a clarification. Execution returns grounded figures or clarification.',
    reviewDescription:'START → ask_owner → settle_review. ask_owner pauses through interrupt() and resumes with an owner decision. settle_review ends when resolved or loops back to ask_owner while pending; requesting another proposal may call the category model inside settle_review.',
    movementDescription:'START branches to extract_correction, apply_undo or apply_posting from trusted intent/action. Correction continues through classify_correction_category and apply_correction. Both interpretation nodes can exit to END with a clarification; all apply nodes end at END.',
    reviewNote:'The loop crosses an owner decision and a persistent checkpoint. Reproposal may call the model inside settle_review; it is not an additional graph node.',
    movementNote:'Undo and posting use trusted movement references without model calls. Only the correction branch invokes extraction and category classification.',
  },
  it: {
    introduction:'Cinque grafi compilati separatamente. Un dispatcher tipizzato esterno coordina routing, chiamate agli specialisti e riprese della revisione delle categorie.',
    read:'Query / consigli',review:'Revisione delle categorie',movement:'Correzione / annullamento / conferma',mixed:'Regole + chiamata opzionale al modello',
    select:'Scegli una query autorizzata',execute:'Esegui una query in sola lettura',ask:'interrupt() · decisione del proprietario',settle:'Applica la decisione del proprietario',extractCorrection:'Estrai i dati sostitutivi',correctionCategory:'Classifica la sostituzione',correct:'Valida e applica la correzione',undo:'Annulla',post:'Registra la bozza confermata',pending:'ancora aperta',settled:'conclusa',orchestration:'Orchestrazione esterna a LangGraph',dispatcher:'Dispatcher tipizzato',
    readDescription:'START → select_tool → execute_tool → END. Selezioni invalide o non supportate vanno direttamente a END con un chiarimento. L’esecuzione restituisce dati verificati o un chiarimento.',
    reviewDescription:'START → ask_owner → settle_review. ask_owner si sospende con interrupt() e riprende dalla decisione del proprietario. settle_review termina se la revisione è conclusa o torna ad ask_owner se resta aperta; una nuova proposta può richiamare il modello di categoria dentro settle_review.',
    movementDescription:'START seleziona extract_correction, apply_undo o apply_posting da intento/azione fidati. La correzione prosegue con classify_correction_category e apply_correction. I due nodi interpretativi possono uscire a END con un chiarimento; tutti i nodi apply terminano a END.',
    reviewNote:'Il ciclo attraversa una decisione del proprietario e un checkpoint persistente. La riproposta può chiamare il modello dentro settle_review; non è un nodo aggiuntivo del grafo.',
    movementNote:'Annullamento e conferma usano riferimenti fidati ai movimenti senza chiamate al modello. Solo la correzione usa estrazione e classificazione della categoria.',
  },
  fr: {
    introduction:'Cinq graphes compilés séparément. Un dispatcher typé externe coordonne routage, appels aux spécialistes et reprises de la revue des catégories.',
    read:'Requêtes / conseils',review:'Revue des catégories',movement:'Correction / annulation / confirmation',mixed:'Règles + appel optionnel au modèle',
    select:'Choisir une requête autorisée',execute:'Exécuter en lecture seule',ask:'interrupt() · décision du propriétaire',settle:'Appliquer la décision du propriétaire',extractCorrection:'Extraire les données de remplacement',correctionCategory:'Classifier le remplacement',correct:'Valider et appliquer la correction',undo:'Annuler',post:'Enregistrer le brouillon confirmé',pending:'encore ouverte',settled:'terminée',orchestration:'Orchestration externe à LangGraph',dispatcher:'Dispatcher typé',
    readDescription:'START → select_tool → execute_tool → END. Une sélection invalide ou non prise en charge va directement à END avec une clarification. L’exécution renvoie des données vérifiées ou une clarification.',
    reviewDescription:'START → ask_owner → settle_review. ask_owner se suspend avec interrupt() puis reprend avec la décision du propriétaire. settle_review termine une revue résolue ou revient à ask_owner ; une nouvelle proposition peut appeler le modèle de catégorie dans settle_review.',
    movementDescription:'START choisit extract_correction, apply_undo ou apply_posting depuis une intention/action fiable. La correction passe par classify_correction_category et apply_correction. Les deux nœuds interprétatifs peuvent rejoindre END avec une clarification ; tous les nœuds apply aboutissent à END.',
    reviewNote:'La boucle passe par une décision du propriétaire et un checkpoint persistant. Une nouvelle proposition peut appeler le modèle dans settle_review ; ce n’est pas un nœud supplémentaire.',
    movementNote:'Annulation et confirmation utilisent des références fiables sans appel au modèle. Seule la correction utilise extraction et classification.',
  },
  de: {
    introduction:'Fünf getrennt kompilierte Graphen. Ein externer typisierter Dispatcher koordiniert Routing, Spezialistenaufrufe und die Fortsetzung der Kategorieprüfung.',
    read:'Abfragen / Empfehlungen',review:'Kategorieprüfung',movement:'Korrektur / Storno / Bestätigung',mixed:'Regeln + optionaler Modellaufruf',
    select:'Zugelassene Abfrage auswählen',execute:'Nur lesend abfragen',ask:'interrupt() · Eigentümerentscheidung',settle:'Eigentümerentscheidung anwenden',extractCorrection:'Ersatzdaten extrahieren',correctionCategory:'Ersatz klassifizieren',correct:'Korrektur prüfen und anwenden',undo:'Stornieren',post:'Bestätigten Entwurf buchen',pending:'noch offen',settled:'abgeschlossen',orchestration:'Orchestrierung außerhalb LangGraph',dispatcher:'Typisierter Dispatcher',
    readDescription:'START → select_tool → execute_tool → END. Ungültige oder nicht unterstützte Auswahlen gehen mit einer Rückfrage direkt zu END. Die Ausführung liefert geprüfte Zahlen oder eine Rückfrage.',
    reviewDescription:'START → ask_owner → settle_review. ask_owner pausiert mit interrupt() und setzt mit der Eigentümerentscheidung fort. settle_review endet bei Abschluss oder kehrt zu ask_owner zurück. Ein neuer Vorschlag kann das Kategoriemodell innerhalb von settle_review aufrufen.',
    movementDescription:'START wählt extract_correction, apply_undo oder apply_posting anhand vertrauenswürdiger Absicht/Aktion. Korrektur läuft über classify_correction_category und apply_correction. Beide Interpretationsknoten können mit Rückfrage zu END gehen; alle apply-Knoten enden bei END.',
    reviewNote:'Die Schleife führt über eine Eigentümerentscheidung und einen persistenten Checkpoint. Ein neuer Vorschlag kann das Modell in settle_review aufrufen; dies ist kein zusätzlicher Graphknoten.',
    movementNote:'Storno und Bestätigung nutzen vertrauenswürdige Referenzen ohne Modellaufrufe. Nur Korrektur verwendet Extraktion und Klassifizierung.',
  },
  es: {
    introduction:'Cinco grafos compilados por separado. Un dispatcher tipado externo coordina enrutamiento, llamadas a especialistas y reanudaciones de revisión de categorías.',
    read:'Consultas / consejos',review:'Revisión de categorías',movement:'Corrección / anulación / confirmación',mixed:'Reglas + llamada opcional al modelo',
    select:'Elegir una consulta autorizada',execute:'Ejecutar en solo lectura',ask:'interrupt() · decisión del propietario',settle:'Aplicar la decisión del propietario',extractCorrection:'Extraer datos de reemplazo',correctionCategory:'Clasificar el reemplazo',correct:'Validar y aplicar la corrección',undo:'Anular',post:'Registrar el borrador confirmado',pending:'aún abierta',settled:'resuelta',orchestration:'Orquestación fuera de LangGraph',dispatcher:'Dispatcher tipado',
    readDescription:'START → select_tool → execute_tool → END. Las selecciones inválidas o no admitidas terminan en END con una aclaración. La ejecución devuelve datos verificados o una aclaración.',
    reviewDescription:'START → ask_owner → settle_review. ask_owner se pausa con interrupt() y reanuda con la decisión del propietario. settle_review termina si está resuelta o vuelve a ask_owner si sigue pendiente; otra propuesta puede llamar al modelo dentro de settle_review.',
    movementDescription:'START elige extract_correction, apply_undo o apply_posting según intención/acción fiables. La corrección sigue por classify_correction_category y apply_correction. Ambos nodos interpretativos pueden salir a END con una aclaración; todos los nodos apply terminan en END.',
    reviewNote:'El ciclo pasa por una decisión del propietario y un checkpoint persistente. Otra propuesta puede llamar al modelo dentro de settle_review; no es un nodo adicional.',
    movementNote:'Anulación y confirmación usan referencias fiables sin llamadas al modelo. Solo la corrección emplea extracción y clasificación.',
  },
  pl: {
    introduction:'Pięć osobno kompilowanych grafów. Zewnętrzny typowany dispatcher koordynuje routing, wywołania specjalistów i wznawianie oceny kategorii.',
    read:'Zapytania / porady',review:'Ocena kategorii',movement:'Korekta / anulowanie / zatwierdzenie',mixed:'Reguły + opcjonalne wywołanie modelu',
    select:'Wybierz dozwolone zapytanie',execute:'Wykonaj tylko odczyt',ask:'interrupt() · decyzja właściciela',settle:'Zastosuj decyzję właściciela',extractCorrection:'Wyodrębnij dane zastępcze',correctionCategory:'Klasyfikuj dane zastępcze',correct:'Sprawdź i zastosuj korektę',undo:'Anuluj',post:'Zaksięguj zatwierdzony szkic',pending:'nadal otwarta',settled:'zakończona',orchestration:'Orkiestracja poza LangGraph',dispatcher:'Typowany dispatcher',
    readDescription:'START → select_tool → execute_tool → END. Niepoprawny lub niedostępny wybór przechodzi do END z prośbą o doprecyzowanie. Wykonanie zwraca zweryfikowane dane lub prośbę o doprecyzowanie.',
    reviewDescription:'START → ask_owner → settle_review. ask_owner zatrzymuje się przez interrupt() i wznawia po decyzji właściciela. settle_review kończy rozstrzygniętą ocenę lub wraca do ask_owner; nowa propozycja może wywołać model kategorii wewnątrz settle_review.',
    movementDescription:'START wybiera extract_correction, apply_undo albo apply_posting na podstawie zaufanej intencji/akcji. Korekta przechodzi przez classify_correction_category i apply_correction. Oba węzły interpretacji mogą zakończyć się w END prośbą o doprecyzowanie; wszystkie węzły apply kończą się w END.',
    reviewNote:'Pętla obejmuje decyzję właściciela i trwały checkpoint. Nowa propozycja może wywołać model w settle_review; nie jest to dodatkowy węzeł grafu.',
    movementNote:'Anulowanie i zatwierdzenie używają zaufanych referencji bez modelu. Tylko korekta wykorzystuje ekstrakcję i klasyfikację.',
  },
};
