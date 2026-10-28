# Clyr

## Prérequis

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Git

## Lancer le projet

1. Cloner le repo :
   ```bash
   git clone <url-du-repo>
   cd Projet-semestriel-transverse
   ```

2. Créer le fichier `.env` à partir du modèle, puis renseigner `DB_PASSWORD` :
   ```bash
   cp .env.example .env
   ```

3. Lancer l'application :
   ```bash
   docker compose up --build
   ```

4. Ouvrir http://localhost:3000, qui doit répondre `{"message":"Clyr API OK"}`.

