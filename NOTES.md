## last time at Redirection on Nestjs.com

## https://www.youtube.com/watch?v=yL1f1gt0ZbE
 
## - Typescript (Express)

## - ORM (Prisma / Drizzle ORM)

## - JWT (Json web Token)

## - RBAC (Role Base Access Control)

## - RabbitMQ / Redis

## - NestJs (Architecture Application)
 
## https://www.youtube.com/watch?v=uMKhYFjKeqU

## https://docs.nestjs.com/controllers
 
 ## npm run start:dev


 je ferais :

1. TypeScript / Node.js
          ↓
2. NestJS fundamentals
          ↓
3. Architecture NestJS
          ↓
4. Prisma OU Drizzle
          ↓
5. Authentification JWT
          ↓
6. RBAC
          ↓
7. Redis
          ↓
8. RabbitMQ
          ↓
9. Projet complet

Et à chaque étape, on fera le parallèle avec Symfony.

Par exemple :

« Voici comment fonctionne un Guard NestJS. Compare-le mentalement à un Voter/Security de Symfony. »

ou :

« Voici Prisma. Maintenant comparons cette opération à ce que tu ferais avec Doctrine. »


Notre fil rouge

On va construire progressivement une application backend réaliste :

                    ┌───────────────┐
                    │    Remix      │
                    │    Client     │
                    └───────┬───────┘
                            │ HTTP
                            ▼
                 ┌────────────────────┐
                 │       NestJS       │
                 │                    │
                 │ Auth / Users       │
                 │ Projects / Tasks   │
                 │ RBAC               │
                 └─────────┬──────────┘
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
        PostgreSQL       Redis        RabbitMQ
          + ORM          cache        messaging
Et notre progression

Phase 1 — TypeScript / Node.js


On consolide uniquement ce qui est important pour un développeur backend PHP :

types/interfaces
generics
async/await
Promises
modules
decorators
gestion des erreurs
particularités de Node.js

Phase 2 — NestJS

On apprend le framework en profondeur :

modules
controllers
providers
DI
lifecycle
middleware
pipes
guards
interceptors
exception filters
configuration

Phase 3 — ORM + PostgreSQL

On choisira Prisma ou Drizzle selon ce qui est utilisé dans ton projet professionnel, puis :

modèles
migrations
relations
transactions
requêtes
pagination
contraintes SQL

Phase 4 — Auth

On construira réellement :

register
   ↓
password hashing
   ↓
login
   ↓
JWT
   ↓
authentication guard
   ↓
current user
   ↓
refresh token

Phase 5 — RBAC

Puis :

User
 └── Role
      ├── USER
      ├── MANAGER
      └── ADMIN

avec Guards + decorators + permissions.

Phase 6 — Redis

On verra notamment :

cache
TTL
invalidation
éventuellement rate limiting
quand Redis est pertinent et quand il ne l'est pas

Phase 7 — RabbitMQ

On construira un vrai scénario asynchrone :

NestJS API
    │
    │ publish event
    ▼
 RabbitMQ
    │
    ├───────────────┐
    ▼               ▼
Consumer A       Consumer B

Et on parlera de concepts importants en production : queues, exchanges, routing keys, acknowledgements, retries, dead-letter queues, etc.

Phase 8 — Projet complet

Et enfin, on assemble tout.


Une règle importante

Je veux aussi qu'on fasse régulièrement le chemin inverse :

« Comment je ferais ça en Symfony, et comment NestJS me propose de le faire ? »

Parce que c'est probablement la meilleure façon pour toi d'apprendre rapidement.

Par exemple :

Symfony :

Controller
   ↓
Service
   ↓
Doctrine

NestJS :

Controller
   ↓
Provider / Service
   ↓
Prisma

Puis on regarde les différences réelles plutôt que d'apprendre NestJS dans le vide.


Parfait. On passe donc à Mapped Types + Conditional Types.


## =========================

On arrive maintenant à la partie que tu avais prévue au départ :
interface → Generics → Utility Types → TypeScript avancé
La première notion avancée que je te propose est Mapped Types.
 
Je pourrai reprendre le fil de cette conversation. Nous nous sommes arrêtés juste avant les Mapped Types, au début de la partie TypeScript avancé.
 
## ============================


On s'est arrêté précisément ici :

Phase 1 — TypeScript / Node.js


✅ types / interfaces
✅ generics
✅ async / await / Promises
✅ modules
✅ Mapped Types
✅ Conditional Types
✅ keyof / T[K]
✅ Utility Types
   - Partial
   - Pick
   - Omit
   - ReturnType
   - Awaited
   - etc.
✅ infer
⬇️
EN COURS → Classes + Decorators

Et la prochaine chose à faire sera :

Comprendre comment fonctionne réellement un decorator TypeScript, en en écrivant un petit nous-mêmes, puis faire le lien avec @Injectable(), @Controller() et @Get() de NestJS.

On a également commencé à faire systématiquement le parallèle avec Symfony, et on continuera comme prévu.

Donc demain, tu peux simplement me dire : « On reprend TypeScript/NestJS », et on repartira de là.