# Test_play-cards
Play cards and more to play Qwixx with friends and family without wasting paper!

ZETTEL – App zum Selbst-Hosten
=====================================

In diesem Repository liegt die fertige App. Sie besteht nur aus Dateien –
es läuft kein Server, keine Datenbank, es werden keine Daten verschickt.
Alle Spielstände und gespeicherten Runden bleiben auf dem Handy,
auf dem gespielt wird.


-------------------------------------------------------------------
INSTALLATION DER APP
-------------------------------------------------------------------

iPhone / iPad:
  Link in SAFARI öffnen (nicht Chrome).
  Unten auf das Teilen-Symbol tippen.
  "Zum Home-Bildschirm" auswählen, dann "Hinzufügen".

Android:
  Link in Chrome öffnen.
  Meist erscheint unten von selbst "App installieren".
  Sonst: Menü oben rechts (drei Punkte) -> "Zum Startbildschirm hinzufügen".

Danach liegt die App als eigenes Icon auf dem Handy, startet im
Vollbild ohne Browserleiste und funktioniert auch ohne Internet.


-------------------------------------------------------------------
WAS IST WAS
-------------------------------------------------------------------

index.html               die komplette App (Regeln, Karten, Oberfläche)
sw.js                    sorgt dafür, dass die App offline läuft
manifest.webmanifest     Name, Farben und Icons der installierten App
icon-*.png               App-Icons
apple-touch-icon.png     App-Icon für iPhone und iPad
favicon-32.png           kleines Symbol im Browser-Tab


-------------------------------------------------------------------
APP AKTUALISIEREN
-------------------------------------------------------------------

Wenn neue Fassung: die alten Dateien durch die neuen
ersetzen. Damit die Handys die neue Fassung auch wirklich laden, in der
Datei sw.js die erste Zeile mit der Versionsnummer erhöhen:

    var CACHE = "qwixx-v1";   ->   var CACHE = "qwixx-v2";


-------------------------------------------------------------------
HINWEIS ZU DEN SPIELSTÄNDEN
-------------------------------------------------------------------

Laufendes Spiel und gespeicherte Runden liegen im Speicher des
Browsers auf dem jeweiligen Gerät. Sie werden nicht übertragen und
sind für niemanden sonst sichtbar. Wer die Browserdaten löscht oder
die App deinstalliert, verliert auch die gespeicherten Runden.

Qwixx ist ein Spiel von Steffen Benndorf, erschienen im Nürnberger
Spielkarten Verlag. Diese App ist ein privater digitaler Ersatz für
die Papierzettel und ersetzt nicht das Spielmaterial.
