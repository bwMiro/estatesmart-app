# ESTATE SMART - Application SaaS Next.js

Application SaaS complète pour automatiser la prospection immobilière avec l'IA.

## 🚀 Fonctionnalités

- **Générateur d'annonces IA** : Créez des annonces professionnelles en 3 versions (longue, courte, réseaux sociaux)
- **Amélioration photo IA** : Optimisez automatiquement vos photos immobilières
- **Scoring de prospects** : Qualifiez vos prospects et obtenez des messages personnalisés
- **Authentification complète** : Système d'inscription et de connexion sécurisé
- **Base de données PostgreSQL** : Stockage de toutes les données avec Prisma ORM

## 📋 Prérequis

- Node.js 18+ 
- PostgreSQL 14+
- Compte OpenAI avec clé API

## 🛠️ Installation

1. **Cloner le projet**
```bash
git clone <votre-repo>
cd estate-smart
```

2. **Installer les dépendances**
```bash
pnpm install
# ou
npm install
```

3. **Configurer les variables d'environnement**

Créez un fichier `.env` à la racine du projet :

```env
# Base de données PostgreSQL
DATABASE_URL="postgresql://user:password@localhost:5432/estate_smart?schema=public"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here-generate-with-openssl-rand-base64-32"
NEXTAUTH_URL="http://localhost:3000"

# OpenAI API
OPENAI_API_KEY="sk-your-openai-api-key-here"
```

**Générer NEXTAUTH_SECRET :**
```bash
openssl rand -base64 32
```

4. **Configurer la base de données**

```bash
# Générer le client Prisma
npx prisma generate

# Appliquer les migrations
npx prisma migrate dev

# (Optionnel) Ouvrir Prisma Studio
npx prisma studio
```

5. **Lancer le serveur de développement**

```bash
pnpm dev
# ou
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
├── app/
│   ├── api/                    # Routes API
│   │   ├── auth/               # Authentification
│   │   ├── generate-listing/  # Génération d'annonces
│   │   ├── enhance-photo/     # Amélioration photos
│   │   └── score-leads/       # Scoring prospects
│   ├── dashboard/              # Pages dashboard
│   ├── login/                  # Page de connexion
│   ├── signup/                 # Page d'inscription
│   └── layout.tsx              # Layout principal
├── components/                 # Composants React
│   ├── ui/                    # Composants UI (shadcn)
│   └── layouts/               # Layouts
├── lib/                        # Utilitaires
│   ├── prisma.ts              # Client Prisma
│   └── openai.ts              # Client OpenAI
├── prisma/
│   └── schema.prisma          # Schéma de base de données
└── public/                    # Fichiers statiques
```

## 🔐 API Routes

### POST `/api/auth/register`
Inscription d'un nouvel utilisateur

**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "Jean",
  "lastName": "Dupont",
  "company": "Agence Immobilière"
}
```

### POST `/api/generate-listing`
Génère des annonces immobilières

**Body:**
```json
{
  "propertyType": "appartement",
  "surface": 85,
  "rooms": 3,
  "city": "Paris",
  "neighborhood": "Marais",
  "price": 450000,
  "description": "Belle propriété...",
  "highlights": ["Balcon", "Cave", "Parking"]
}
```

### POST `/api/enhance-photo`
Améliore une photo immobilière

**Body:** FormData avec champ `image`

### POST `/api/score-leads`
Score et qualifie des prospects

**Body:**
```json
{
  "prospects": [
    {
      "name": "Jean Dupont",
      "budget": 300000,
      "timeline": "1-3",
      "motivation": "achat-urgent",
      "initialMessage": "Je cherche un appartement..."
    }
  ]
}
```

## 🚢 Déploiement sur Vercel

1. **Préparer le projet**
   - Assurez-vous que toutes les migrations Prisma sont appliquées
   - Vérifiez que le build fonctionne : `pnpm build`

2. **Connecter à Vercel**
   - Importez votre projet GitHub dans Vercel
   - Configurez les variables d'environnement dans les paramètres Vercel

3. **Variables d'environnement requises**
   - `DATABASE_URL` : URL de votre base PostgreSQL (ex: Supabase, Neon, etc.)
   - `NEXTAUTH_SECRET` : Clé secrète générée
   - `NEXTAUTH_URL` : URL de votre application (ex: https://votre-app.vercel.app)
   - `OPENAI_API_KEY` : Votre clé API OpenAI

4. **Déployer**
   - Vercel détectera automatiquement Next.js
   - Le build et le déploiement se feront automatiquement

5. **Post-déploiement**
   - Exécutez les migrations Prisma sur votre base de production :
   ```bash
   npx prisma migrate deploy
   ```

## 🧪 Tests

```bash
# Lancer les tests (si configurés)
pnpm test

# Vérifier le linting
pnpm lint
```

## 📝 Notes importantes

- **Design** : Le design original de V0 est préservé intégralement
- **Authentification** : Utilise NextAuth.js avec stratégie JWT
- **Base de données** : PostgreSQL avec Prisma ORM
- **IA** : Utilise OpenAI GPT-4o-mini pour le texte et l'API d'édition d'images pour les photos

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

Ce projet est privé et propriétaire.

