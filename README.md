## Project structure
### Folders
- components (all the components)
- app
    - pages (all the pages)
- styles (themes)
- utils (common functions)
- core (only ts files)
    - actions (each petition to the endpoints)
    - config
        - adapters (http/axios adapters)
        - api (connection to the endpoints)
    - domain (business logic)
        - entities (custom interfaces for the responses)
        - interfaces (custom interfaces for the requests)
        - mappers (mappers for the entities)
        - services (business logic)
    - store (zustand store)

 