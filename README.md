# CardLearner
CardLearner ist eine Web-Applikation, zum Anlegen, Verwalten und Lernen von Karteikarten.

#### Verwendete Technologien:
- Angular
- SCSS
- Express
- Mysql

## Screenshots

![Home](https://user-images.githubusercontent.com/81222680/134314344-0f0d27c4-0388-4606-92ac-48c7d6cf47c3.png)

![Add](https://user-images.githubusercontent.com/81222680/134314436-a0a3ce84-b8c3-4801-bdfb-95863541f5cf.png)

![Cards](https://user-images.githubusercontent.com/81222680/134314471-3102d525-a3ee-4cb6-b502-1929f10120d6.png)

![Learn](https://user-images.githubusercontent.com/81222680/134314501-94f1a703-9a74-47cc-a065-79c0849e136b.png)

## Beschreibung

#### Gruppen
- Gruppen können hinzugefügt, bearbeitet und gelöscht werden. 
- Eine Gruppe gruppiert eine beliebige Anzahl von zusammengehörenden Stapeln.

#### Stapel
- Stapel können hinzugefügt, bearbeitet und gelöscht werden.
- Ein Stapel muss immer einer Gruppe zugeordnet werden.
- In einem Stapel befinden sich beliebig viele Karten.

#### Karten
- Karten können hinzugefügt, bearbeitet und gelöscht werden.
- Karten müssen immer einem Stapel zugeordnet werden.
- Eine Karte besteht aus einer Frage und einer Antwort

#### Lernen
- Stapel können gelernt werden. Dabei werden alle Karten des ausgewählten Stapels geladen und in 
beliebiger Reihenfolge abgefragt. Hierbei kann zwischen Frage und Antwort der Karte gewechselt werden,
um sich die richtige Antwort zu der gestellten Frage anzuschauen.

#### Zusätzliche Features
- Suchfunktion
- Sortierfunktion (Name - aufsteigend, absteigend)
