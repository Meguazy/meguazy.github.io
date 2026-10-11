import type { Language } from './site';

type GraphPreview = {
  title: string; hint: string; close: string; introduction: string;
  router: string; expense: string; model: string; deterministic: string; conditional: string;
  preRoute: string; classify: string; extract: string; category: string; persist: string;
  resolved: string; infer: string; valid: string; clarify: string;
  routerDescription: string; expenseDescription: string; conclusion: string;
};

// Original editorial summary of verified topology; source and review status tracked privately.
export const moneyGraphPreview: Record<Language, GraphPreview> = {
  en: {
    title: 'Inside LangGraph', hint: 'Explore the graphs', close: 'Close graph preview',
    introduction: 'Two implemented workflows, coordinated by a typed dispatcher. Each graph has its own state.',
    router: 'Root router', expense: 'Expense / refund', model: 'Model boundary', deterministic: 'Deterministic node', conditional: 'Conditional edge',
    preRoute: 'Resolve explicit actions', classify: 'Classify free text', extract: 'Parse the movement', category: 'Match the owner’s taxonomy', persist: 'Validate and save a draft',
    resolved: 'resolved', infer: 'needs inference', valid: 'valid output', clarify: 'clarify',
    routerDescription: 'START → pre_route. Resolved actions go directly to END; free text continues to classify, then END. The result is a typed routing decision.',
    expenseDescription: 'START → extract → classify_category → persist → END. Either model boundary can end early with a clarification. Persistence validates domain values and returns a draft, pending category review or clarification.',
    conclusion: 'The model proposes; application rules validate. Drafts require confirmation before posting. Read queries, category review and movement changes use separate graphs.',
  },
  it: {
    title: 'Dentro LangGraph', hint: 'Esplora i grafi', close: 'Chiudi l’anteprima dei grafi',
    introduction: 'Due workflow implementati, coordinati da un dispatcher tipizzato. Ogni grafo ha il proprio stato.',
    router: 'Router principale', expense: 'Spesa / rimborso', model: 'Chiamata al modello', deterministic: 'Nodo deterministico', conditional: 'Arco condizionale',
    preRoute: 'Risolvi azioni esplicite', classify: 'Classifica il testo libero', extract: 'Estrai il movimento', category: 'Usa la tassonomia del proprietario', persist: 'Valida e salva una bozza',
    resolved: 'risolto', infer: 'serve inferenza', valid: 'output valido', clarify: 'chiarimento',
    routerDescription: 'START → pre_route. Le azioni risolte vanno direttamente a END; il testo libero prosegue in classify, poi END. Il risultato è una decisione di routing tipizzata.',
    expenseDescription: 'START → extract → classify_category → persist → END. Entrambe le chiamate al modello possono terminare anticipatamente con un chiarimento. La persistenza valida i dati di dominio e restituisce una bozza, una revisione di categoria in attesa o un chiarimento.',
    conclusion: 'Il modello propone; le regole applicative validano. Le bozze richiedono conferma prima della registrazione definitiva. Query, revisione delle categorie e modifiche ai movimenti usano grafi separati.',
  },
  fr: {
    title: 'Dans LangGraph', hint: 'Explorer les graphes', close: 'Fermer l’aperçu des graphes',
    introduction: 'Deux workflows réalisés, coordonnés par un dispatcher typé. Chaque graphe possède son propre état.',
    router: 'Routeur principal', expense: 'Dépense / remboursement', model: 'Appel au modèle', deterministic: 'Nœud déterministe', conditional: 'Arête conditionnelle',
    preRoute: 'Résoudre les actions explicites', classify: 'Classifier le texte libre', extract: 'Extraire le mouvement', category: 'Utiliser la taxonomie du propriétaire', persist: 'Valider et enregistrer un brouillon',
    resolved: 'résolu', infer: 'inférence requise', valid: 'sortie valide', clarify: 'préciser',
    routerDescription: 'START → pre_route. Les actions résolues vont directement à END ; le texte libre passe par classify, puis END. Le résultat est une décision de routage typée.',
    expenseDescription: 'START → extract → classify_category → persist → END. Chaque appel au modèle peut terminer plus tôt par une clarification. La persistance valide les données du domaine et renvoie un brouillon, une catégorie à examiner ou une clarification.',
    conclusion: 'Le modèle propose ; les règles applicatives valident. Les brouillons exigent une confirmation avant leur enregistrement définitif. Les requêtes, la revue des catégories et les modifications utilisent des graphes distincts.',
  },
  de: {
    title: 'Einblick in LangGraph', hint: 'Graphen ansehen', close: 'Graphenvorschau schließen',
    introduction: 'Zwei implementierte Workflows, koordiniert durch einen typisierten Dispatcher. Jeder Graph hat seinen eigenen Zustand.',
    router: 'Hauptrouter', expense: 'Ausgabe / Erstattung', model: 'Modellaufruf', deterministic: 'Deterministischer Knoten', conditional: 'Bedingte Kante',
    preRoute: 'Explizite Aktionen auflösen', classify: 'Freitext klassifizieren', extract: 'Bewegung extrahieren', category: 'Taxonomie des Eigentümers nutzen', persist: 'Entwurf prüfen und speichern',
    resolved: 'aufgelöst', infer: 'Inferenz nötig', valid: 'gültige Ausgabe', clarify: 'Rückfrage',
    routerDescription: 'START → pre_route. Aufgelöste Aktionen gehen direkt zu END; Freitext läuft über classify zu END. Das Ergebnis ist eine typisierte Routingentscheidung.',
    expenseDescription: 'START → extract → classify_category → persist → END. Beide Modellaufrufe können frühzeitig mit einer Rückfrage enden. Die Persistenz prüft Domänenwerte und liefert einen Entwurf, eine ausstehende Kategorieprüfung oder eine Rückfrage.',
    conclusion: 'Das Modell schlägt vor; Anwendungsregeln prüfen. Entwürfe brauchen eine Bestätigung vor der endgültigen Buchung. Abfragen, Kategorieprüfung und Änderungen verwenden separate Graphen.',
  },
  es: {
    title: 'Dentro de LangGraph', hint: 'Explorar los grafos', close: 'Cerrar la vista de los grafos',
    introduction: 'Dos workflows implementados, coordinados por un dispatcher tipado. Cada grafo tiene su propio estado.',
    router: 'Router principal', expense: 'Gasto / reembolso', model: 'Llamada al modelo', deterministic: 'Nodo determinista', conditional: 'Arista condicional',
    preRoute: 'Resolver acciones explícitas', classify: 'Clasificar texto libre', extract: 'Extraer el movimiento', category: 'Usar la taxonomía del propietario', persist: 'Validar y guardar un borrador',
    resolved: 'resuelto', infer: 'requiere inferencia', valid: 'salida válida', clarify: 'aclarar',
    routerDescription: 'START → pre_route. Las acciones resueltas van directamente a END; el texto libre pasa por classify y después END. El resultado es una decisión de enrutamiento tipada.',
    expenseDescription: 'START → extract → classify_category → persist → END. Ambas llamadas al modelo pueden terminar antes con una aclaración. La persistencia valida los datos del dominio y devuelve un borrador, una revisión de categoría pendiente o una aclaración.',
    conclusion: 'El modelo propone; las reglas de la aplicación validan. Los borradores requieren confirmación antes del registro definitivo. Las consultas, la revisión de categorías y los cambios usan grafos separados.',
  },
  pl: {
    title: 'Wewnątrz LangGraph', hint: 'Zobacz grafy', close: 'Zamknij podgląd grafów',
    introduction: 'Dwa zaimplementowane procesy, koordynowane przez typowany dispatcher. Każdy graf ma własny stan.',
    router: 'Główny router', expense: 'Wydatek / zwrot', model: 'Wywołanie modelu', deterministic: 'Węzeł deterministyczny', conditional: 'Krawędź warunkowa',
    preRoute: 'Rozpoznaj jawne akcje', classify: 'Klasyfikuj swobodny tekst', extract: 'Wyodrębnij operację', category: 'Użyj taksonomii właściciela', persist: 'Sprawdź i zapisz szkic',
    resolved: 'rozpoznano', infer: 'potrzebny model', valid: 'poprawny wynik', clarify: 'doprecyzuj',
    routerDescription: 'START → pre_route. Rozpoznane akcje przechodzą bezpośrednio do END; swobodny tekst przechodzi przez classify do END. Wynikiem jest typowana decyzja routingu.',
    expenseDescription: 'START → extract → classify_category → persist → END. Oba wywołania modelu mogą zakończyć się wcześniej prośbą o doprecyzowanie. Zapis sprawdza dane domeny i zwraca szkic, oczekującą ocenę kategorii albo prośbę o doprecyzowanie.',
    conclusion: 'Model proponuje; reguły aplikacji sprawdzają. Szkice wymagają potwierdzenia przed ostatecznym zaksięgowaniem. Zapytania, ocena kategorii i zmiany operacji używają osobnych grafów.',
  },
};
