---
title: "Git CheatSheet"
description: "Un aide-mémoire des commandes git essentielles"
createddate: 2025-05-15
author: "Christophe"

# updateddate: 
# language: 
# framework: 
application: "git"
level: "beginner"
documenttype: "cheatsheet"
status: "published"
---

## Initialisation d'un repository git
```bash
git init .
git config user.name "Nom Utilisateur"
git config user.email "email@utilisateur"
```

## Branches

**Créer une nouvelle branche** 
```bash
git checkout -b nouvelle_branche
```

**Supprimer une branche**
```bash
git checkout -d nouvelle_branche
```

**Changer de branche**
```bash
git checkout nouvelle_branche
```

**Merge une branche avec main**
```bash
git checkout main
git merge nouvelle_branche
```

