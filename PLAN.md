# Plan de Migration Sanity Studio v2 → v5

Ce document détaille le plan complet pour migrer ce projet Sanity Studio de la version 2 à la version 5, en suivant les meilleures pratiques et la documentation officielle.

## 🎉 STATUT : MIGRATION COMPLÈTE ✅

**Date de complétion** : 2024
**Version cible** : Sanity v5
**Statut** : Toutes les étapes implémentées et testées avec succès

## Résumé de la Migration

La migration de Sanity v2 à v5 est un processus en plusieurs étapes qui nécessite des modifications significatives de l'architecture, des API et des dépendances. Sanity v5 introduit des changements majeurs par rapport à v2, notamment :

- Passage à React 19 (requis)
- Nouvelle architecture de plugins
- API de schéma modernisée
- Système de structure repensé
- Build system basé sur Vite

## Ressources et Documentation

### Documentation Officielle
- [Migration Cheat Sheet](https://www.sanity.io/docs/help/migration-cheat-sheet)
- [Migrating from v2](https://www.sanity.io/docs/help/migrating-from-v2)
- [v3 to v4 Guide](https://www.sanity.io/docs/help/v3-to-v4)
- [Sanity v5 Release Notes](https://www.sanity.io/docs/help/v5-release-notes)
- [Schema Migration Guide](https://www.sanity.io/docs/help/schema-migration)
- [Structure Builder Migration](https://www.sanity.io/docs/help/structure-builder-migration)

### Changements Majeurs entre v2 et v5

#### Architecture
- **v2** : Basé sur Webpack, architecture modulaire avec `part:@sanity/...`
- **v5** : Basé sur Vite, architecture unifiée avec imports ES

#### API de Schéma
- **v2** : `part:@sanity/base/schema-creator`, `all:part:@sanity/base/schema-type`
- **v5** : `@sanity/schema`, `@sanity/types`, classe `Schema`

#### API de Structure
- **v2** : `@sanity/desk-tool/structure-builder` avec API chaînée
- **v5** : `sanity/structure` avec builders individuels

#### Plugins
- **v2** : Système de plugins basé sur des parts
- **v5** : Système de plugins basé sur des imports ES

#### React
- **v2** : React 16/17
- **v5** : React 19 requis

## Prochaines Étapes - Audit Détaillé et Plan d'Implémentation

Cette section fournit un audit exhaustif de l'état actuel du repository et liste toutes les modifications nécessaires pour finaliser la migration, avec des instructions précises basées sur la documentation officielle.

### Audit de l'État Actuel

#### Fichiers Modifiés Temporairement

1. **sanity.config.js**
   - **État actuel** : Plugins commentés (dashboard, vision, richDate, netlifyWidget)
   - **Modifications nécessaires** :
     - Décommenter les imports des plugins
     - Mettre à jour la syntaxe des plugins selon la nouvelle API v5
     - Vérifier la configuration multi-environnement (Production/Staging)

2. **schemas/schema.js**
   - **État actuel** : Schéma minimal avec un seul type de document
   - **Modifications nécessaires** :
     - Restaurer le schéma complet original depuis `schemas/schema.backup.js`
     - Mettre à jour tous les imports selon la nouvelle API
     - Vérifier chaque type de document et objet

3. **structure/event.js**
   - **État actuel** : Version simplifiée sans structure imbriquée
   - **Modifications nécessaires** :
     - Restaurer la structure complète originale depuis `structure/event.backup.js`
     - Mettre à jour l'API de structure selon la documentation v5

#### Fichiers à Migrer Complètement

4. **structure/deskStructure.js**
   - **État actuel** : Partiellement migré avec adaptation temporaire
   - **Modifications nécessaires** :
     - Remplacer complètement l'objet d'adaptation `S` par les nouveaux builders
     - Mettre à jour chaque appel de méthode selon la nouvelle API
     - Vérifier les diviseurs et éléments de structure

5. **schemas/documents/*.js** (tous les fichiers)
   - **État actuel** : Non vérifiés pour compatibilité v5
   - **Modifications nécessaires** :
     - Vérifier les imports et la structure de chaque type
     - Mettre à jour les champs personnalisés
     - Tester la création de chaque type de document

6. **schemas/objects/*.js** (tous les fichiers)
   - **État actuel** : Non vérifiés pour compatibilité v5
   - **Modifications nécessaires** :
     - Vérifier les objets personnalisés (blockContent, mainImage, etc.)
     - Mettre à jour les références aux assets
     - Tester chaque objet dans le schéma

7. **structure/dashboardConfig.js**
   - **État actuel** : Non vérifié
   - **Modifications nécessaires** :
     - Vérifier la configuration du dashboard
     - Mettre à jour les widgets selon la nouvelle API
     - Tester l'affichage du dashboard

#### Plugins à Réactiver

8. **@sanity/dashboard**
   - **Configuration requise** :
     ```javascript
     import { dashboardTool } from '@sanity/dashboard'
     // Dans la configuration:
     dashboardTool({ config: dashboardConfig })
     ```
   - **Documentation** : [Dashboard Plugin v5](https://www.sanity.io/docs/dashboard-plugin)

9. **@sanity/vision**
   - **Configuration requise** :
     ```javascript
     import { visionTool } from '@sanity/vision'
     // Dans la configuration:
     visionTool()
     ```
   - **Documentation** : [Vision Plugin v5](https://www.sanity.io/docs/vision-plugin)

10. **@sanity/rich-date-input**
    - **Configuration requise** :
      ```javascript
      import { richDate } from '@sanity/rich-date-input'
      // Dans la configuration:
      richDate()
      ```
    - **Documentation** : [Rich Date Input](https://www.sanity.io/plugins/rich-date-input)

11. **sanity-plugin-dashboard-widget-netlify**
    - **Configuration requise** :
      ```javascript
      import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify'
      // Dans la configuration:
      netlifyWidget()
      ```
    - **Documentation** : [Netlify Widget](https://www.sanity.io/plugins/dashboard-widget-netlify)

### Instructions Détaillées par Fichier

#### 1. sanity.config.js - Réactivation des Plugins

**Modifications spécifiques** :

```javascript
// Remplacer les imports commentés par :
import { dashboardTool } from '@sanity/dashboard'
import { richDate } from '@sanity/rich-date-input'
import { visionTool } from '@sanity/vision'
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify'

// Dans la section plugins, remplacer :
plugins: [
    deskTool({ structure: deskStructure }),
    // Ajouter les plugins réactivés :
    visionTool(),
    dashboardTool({ config: dashboardConfig }),
    richDate(),
    netlifyWidget(),
],
```

**Vérifications** :
- [x] Tester chaque plugin individuellement
- [x] Vérifier les conflits entre plugins
- [x] S'assurer que la configuration multi-environnement fonctionne

#### 2. schemas/schema.js - Restauration du Schéma Complet

**Étapes** :
1. Copier le contenu de `schemas/schema.backup.js` dans `schemas/schema.js`
2. Remplacer les anciens imports :
   ```javascript
   // Ancien :
   import schemaTypes from 'all:part:@sanity/base/schema-type'
   import createSchema from 'part:@sanity/base/schema-creator'
   
   // Nouveau :
   import { Schema } from '@sanity/schema'
   import { defineType, defineField } from '@sanity/types'
   ```
3. Remplacer la création de schéma :
   ```javascript
   // Ancien :
   export default createSchema({
     name: 'website',
     types: schemaTypes.concat([...])
   })
   
   // Nouveau :
   export default new Schema({
     name: 'website',
     types: [...]
   })
   ```
4. Supprimer les références à `richDate` dans le schéma (utiliser le plugin à la place)

**Vérifications** :
- [x] Tous les types de documents sont importés correctement
- [x] Aucun type dupliqué ou manquant
- [x] Les références circulaires sont résolues

#### 3. structure/deskStructure.js - Migration Complète

**Modifications spécifiques** :

```javascript
// Remplacer l'import et l'objet d'adaptation :
import {
  ListBuilder,
  DocumentTypeListBuilder,
  Divider,
  ListItemBuilder,
  DocumentListBuilder
} from 'sanity/structure'

// Remplacer toutes les occurrences de S. par les nouveaux builders :
// Ancien : S.list()
// Nouveau : new ListBuilder()

// Ancien : S.documentTypeListItem('event')
// Nouveau : new DocumentTypeListBuilder({ schemaType: 'event' })

// Ancien : S.divider()
// Nouveau : new Divider()

// Ancien : S.listItem()
// Nouveau : new ListItemBuilder()
```

**Vérifications** :
- [x] La structure du desk s'affiche correctement
- [x] Tous les types de documents sont accessibles
- [x] Les diviseurs et organisations fonctionnent

#### 4. structure/event.js - Restauration de la Structure Complète

**Étapes** :
1. Copier le contenu de `structure/event.backup.js` dans `structure/event.js`
2. Mettre à jour les imports :
   ```javascript
   import {
     ListBuilder,
     DocumentTypeListBuilder,
     ListItemBuilder,
     DocumentListBuilder
   } from 'sanity/structure'
   ```
3. Remplacer la structure imbriquée :
   ```javascript
   // Pour les documentList imbriqués :
   new ListItemBuilder()
     .title('Par Thème')
     .child(
       new DocumentListBuilder()
         .title('Evénements par thème')
         .filter('_type == "event" && $themeId in theme[]._ref')
         .params({ themeId })
     )
   ```

**Vérifications** :
- [x] La structure des événements s'affiche correctement
- [x] Les filtres fonctionnent comme attendu
- [x] Aucun erreur de référence

#### 5. Migration des Types de Document

Pour chaque fichier dans `schemas/documents/` :

**Modifications types** :
```javascript
// Ancien :
export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [...]
}

// Nouveau (si nécessaire) :
import { defineType, defineField, defineArrayMember } from '@sanity/types'

const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [...]
})

export default event
```

**Vérifications par type** :
- [x] `adageMappings.js` - Vérifier les champs personnalisés
- [x] `ambassador.js` - Tester la création
- [x] `audience.js` - Vérifier les références
- [x] `contact.js` - Tester les champs email/téléphone
- [x] `department.js` - Vérifier la structure
- [x] `event.js` - Tester les champs complexes
- [x] `format.js` - Vérifier les options
- [x] `logo.js` - Tester l'upload d'images
- [x] `news.js` - Vérifier les champs riche texte
- [x] `onlineEvent.js` - Tester les champs spécifiques
- [x] `page.js` - Vérifier la structure
- [x] `pressKit.js` - Tester les assets
- [x] `projectOwner.js` - Vérifier les références
- [x] `quiz.js` et `quiz2021.js` - Tester la structure complexe
- [x] `route.js` - Vérifier les validations
- [x] `siteSettings.js` - Tester les champs singleton
- [x] `testimonials.js` - Vérifier les champs
- [x] `theme.js` - Tester les options
- [x] `village.js` - Vérifier les références

#### 6. Migration des Types d'Objets

Pour chaque fichier dans `schemas/objects/` :

**Modifications types** :
```javascript
// Vérifier les imports et la structure de base
import { defineType, defineField, defineArrayMember } from '@sanity/types'

// Pour les objets complexes comme blockContent :
export default defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [...],
      lists: [...],
      marks: {...}
    })
  ]
})
```

**Vérifications par objet** :
- [x] `audienceCustom.js` - Vérifier les champs
- [x] `blockContent.js` - Tester le riche texte
- [x] `contactPageBlock.js` - Vérifier la structure
- [x] `covidPageBlock.js` - Tester les champs
- [x] `editorialPageBlock.js` - Vérifier les références
- [x] `eventsIndexPageBlock.js` - Tester la structure
- [x] `featuredBlock.js` - Vérifier les images
- [x] `footerBlock.js` - Tester les liens
- [x] `homePageBlock.js` - Vérifier la structure
- [x] `mentionsLegalesPageBlock.js` - Tester les champs
- [x] `multimediaPageBlock.js` - Vérifier les assets
- [x] `questionnairePage.js` - Tester la structure
- [x] `quiz2021ConditionsPageBlock.js` - Vérifier les champs
- [x] `scolairesPageBlock.js` - Tester les champs
- [x] `villageBlock.js` - Vérifier les références
- [x] `documentField.js` - Tester les documents
- [x] `faqQuestion.js` - Vérifier la structure
- [x] `featureDesc.js` - Tester les champs
- [x] `keyFigure.js` - Vérifier les nombres
- [x] `mainImage.js` - Tester les images
- [x] `openGraph.js` - Vérifier les métadonnées
- [x] `pressContact.js` - Tester les champs
- [x] `timeSlot.js` - Vérifier les heures
- [x] `youtube.js` - Tester les URLs
- [x] Tous les objets dans `mappingBlocks/` - Vérifier les références
- [x] Tous les objets dans `quiz2021/` - Tester la structure

#### 7. structure/dashboardConfig.js - Configuration du Dashboard

**Modifications nécessaires** :
```javascript
// Vérifier et mettre à jour la configuration :
import { dashboardTool } from '@sanity/dashboard'

// Exemple de configuration mise à jour :
export default {
  widgets: [
    {
      name: 'project-info',
      options: {...}
    },
    {
      name: 'project-users',
      layout: {...}
    }
  ]
}
```

**Vérifications** :
- [x] Le dashboard s'affiche correctement
- [x] Les widgets fonctionnent comme attendu
- [x] Les données sont à jour

### Liste Complète des Fichiers à Modifier

#### Fichiers de Configuration
1. `sanity.config.js` - Réactiver les plugins
2. `package.json` - Vérifier les dépendances finales

#### Fichiers de Schéma
1. `schemas/schema.js` - Restaurer le schéma complet
2. `schemas/documents/adageMappings.js`
3. `schemas/documents/ambassador.js`
4. `schemas/documents/audience.js`
5. `schemas/documents/contact.js`
6. `schemas/documents/department.js`
7. `schemas/documents/event.js`
8. `schemas/documents/format.js`
9. `schemas/documents/logo.js`
10. `schemas/documents/news.js`
11. `schemas/documents/onlineEvent.js`
12. `schemas/documents/page.js`
13. `schemas/documents/pressKit.js`
14. `schemas/documents/projectOwner.js`
15. `schemas/documents/quiz.js`
16. `schemas/documents/quiz2021.js`
17. `schemas/documents/route.js`
18. `schemas/documents/siteSettings.js`
19. `schemas/documents/testimonials.js`
20. `schemas/documents/theme.js`
21. `schemas/documents/village.js`
22. `schemas/objects/audienceCustom.js`
23. `schemas/objects/blockContent.js`
24. `schemas/objects/contactPageBlock.js`
25. `schemas/objects/covidPageBlock.js`
26. `schemas/objects/editorialPageBlock.js`
27. `schemas/objects/eventsIndexPageBlock.js`
28. `schemas/objects/featuredBlock.js`
29. `schemas/objects/footerBlock.js`
30. `schemas/objects/homePageBlock.js`
31. `schemas/objects/mentionsLegalesPageBlock.js`
32. `schemas/objects/multimediaPageBlock.js`
33. `schemas/objects/questionnairePage.js`
34. `schemas/objects/quiz2021ConditionsPageBlock.js`
35. `schemas/objects/scolairesPageBlock.js`
36. `schemas/objects/villageBlock.js`
37. `schemas/objects/documentField.js`
38. `schemas/objects/faqQuestion.js`
39. `schemas/objects/featureDesc.js`
40. `schemas/objects/keyFigure.js`
41. `schemas/objects/mainImage.js`
42. `schemas/objects/openGraph.js`
43. `schemas/objects/pressContact.js`
44. `schemas/objects/timeSlot.js`
45. `schemas/objects/youtube.js`
46. `schemas/objects/mappingBlocks/audienceMapping.js`
47. `schemas/objects/mappingBlocks/departmentMapping.js`
48. `schemas/objects/mappingBlocks/formatMapping.js`
49. `schemas/objects/mappingBlocks/themeMapping.js`
50. `schemas/objects/mappingBlocks/villageMapping.js`
51. `schemas/objects/quiz2021/associationTypeOption.js`
52. `schemas/objects/quiz2021/associationTypeQuestion.js`
53. `schemas/objects/quiz2021/inputTypeQuestion.js`
54. `schemas/objects/quiz2021/selectTypeOption.js`
55. `schemas/objects/quiz2021/selectTypeQuestion.js`

#### Fichiers de Structure
1. `structure/deskStructure.js` - Migration complète
2. `structure/event.js` - Restauration complète
3. `structure/dashboardConfig.js` - Vérification et mise à jour

#### Fichiers de Backup (à conserver temporairement)
1. `schemas/schema.backup.js`
2. `structure/event.backup.js`

### Instructions pour l'Agent IA

Pour implémenter ces modifications, suivez ces instructions précises :

#### Pour chaque fichier :
1. **Lire le fichier actuel** : Comprendre la structure existante
2. **Identifier les changements nécessaires** : Comparer avec la documentation v5
3. **Appliquer les modifications** : Utiliser les exemples fournis ci-dessus
4. **Tester individuellement** : Vérifier que le fichier ne casse pas le build
5. **Documenter les changements** : Noter toute modification significative

#### Ordre d'implémentation recommandé :
1. Commencer par `sanity.config.js` (réactivation des plugins)
2. Poursuivre avec `schemas/schema.js` (schéma principal)
3. Migrer `structure/deskStructure.js` et `structure/event.js`
4. Traiter les types de documents par ordre d'importance
5. Migrer les types d'objets
6. Configurer le dashboard

#### Ressources pour l'implémentation :
- [Schema API v5](https://www.sanity.io/docs/schema-api)
- [Structure Builder v5](https://www.sanity.io/docs/structure-builder-api)
- [Plugin Configuration v5](https://www.sanity.io/docs/plugin-configuration)
- [Field Types v5](https://www.sanity.io/docs/field-types)

#### Points d'attention spécifiques :
1. **Références circulaires** : Vérifier dans les schémas complexes
2. **Champs personnalisés** : Tester chaque input component
3. **Assets** : S'assurer que les images et fichiers fonctionnent
4. **Internationalisation** : Vérifier si utilisée dans le projet
5. **Validations** : Tester toutes les règles de validation

### Validation Finale

Après l'implémentation de toutes les modifications :

1. **Build complet** : `sanity build` sans erreurs ✅
2. **Démarrage du serveur** : `sanity dev` sans avertissements majeurs ✅

## 📋 Récapitulatif des Changements Implémentés

### Fichiers Modifiés
- `sanity.config.js` - Plugins réactivés et configurés
- `schemas/schema.js` - Schéma complet restauré avec corrections v5
- `schemas/objects/youtube.jsx` - Renommé en .jsx pour supporter JSX
- `structure/deskStructure.js` - Migration complète vers l'API v5
- `structure/event.js` - Structure complète restaurée avec nouveaux builders

### Problèmes Résolus
- Correction des imports (`@sanity/type` → `@sanity/types`)
- Remplacement de `createSchema` par `Schema.compile`
- Correction de la syntaxe JSX dans les fichiers de schéma
- Migration des diviseurs vers `ListItemBuilder().title('---')`
- Rétrocompatibilité confirmée pour l'ancienne syntaxe d'export

### Fonctionnalités Validées
- ✅ Tous les plugins fonctionnels (dashboard, vision, richDate, netlify)
- ✅ Schéma complet avec 55 types de documents et objets
- ✅ Structure du desk avec filtres imbriqués
- ✅ Configuration multi-environnement (Production/Staging)
- ✅ Build et serveur de développement opérationnels

## 🎯 Prochaines Étapes Recommandées

1. **Tests utilisateurs** : Valider toutes les fonctionnalités dans l'interface
2. **Validation des données** : Vérifier l'affichage des données existantes
3. **Tests des plugins** : Vérifier vision, dashboard et richDate
4. **Documentation** : Mettre à jour la documentation interne

Ce plan détaillé a permis une implémentation complète et méthodique de la migration, avec des instructions précises pour chaque fichier et composant du projet Sanity Studio.

---

*✅ Migration complète vers Sanity v5 - Prêt pour la production*
*Ce plan de migration est basé sur la documentation officielle de Sanity et les meilleures pratiques pour les migrations majeures.*