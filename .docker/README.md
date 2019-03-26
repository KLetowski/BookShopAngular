# Zintegrowane środowisko developerskie w Dockerze
## Jak uruchomić?

Zależności:
* Docker 18.06.0+
 ([Jak zainstalować?](https://docs.docker.com/engine/installation)),
* Docker compose 1.22+
 ([Jak zainstalować?](https://docs.docker.com/compose/install/)).

Kiedy już masz zainstalowany Docker to przejdź do folderu z projektem i wykonaj:
```bash
docker-compose up -d
```
to uruchomi wszystkie kontenery i pozwoli pracować nad projektem z zerowym
 czasem konfiguracji. Docker będzie pracował w tle.

## Serwisy dostępne na zewnątrz

Po uruchomieniu możesz uruchomić stronę projektu przez adres `localhost`.

| Serwis        | Adres                                   | Port |
| --------------| --------------------------------------- | ---- |
| Frontend      | [localhost:3000](http://localhost:3000) | 3000 |
| Backend (API) | [localhost:3001](http://localhost:3001) | 3001 |

## Docker compose cheatsheet

* Uruchomienie kontenerów w tle: `docker-compose up -d`,
* Uruchomienie kontenerów: `docker-compose up` (logi będą wyświetlane
 bezpośrednio w konsoli),
* Zatrzymanie kontenerów: `docker-compose stop`,
* Zabicie kontenera: `docker-compose kill SERVICE_ID` (uruchamiane gdy kontener
 nie reaguje),
* Usunięcie kontenerów i danych: `docker-compose down -v` (zapomnienie
 projektu),
* Uruchomienie komendy wewnątrz kontenera:
 `docker-compose exec SERVICE_NAME COMMAND` gdzie `COMMAND` to komenda którą
 chcesz uruchomić; Przykłady:
  * Shell w API: `docker-compose exec api sh`
