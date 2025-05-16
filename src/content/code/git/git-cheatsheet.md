---
title: "Git CheatSheet"
description: "Un aide-mémoire des commandes git essentielles"
createddate: 2025-05-15
author: "Christophe"
status: "published"

# updateddate: 
# language: 
# framework: 
application: "git"
level: "beginner"
documenttype: "cheatsheet"



---

## Initialisation d'un repository git
```bash title="terminal"
git init .
git config user.name "Nom Utilisateur"
git config user.email "email@utilisateur"
```

## Branches

**Créer une nouvelle branche** 
```bash title="terminal"
git checkout -b nouvelle_branche
```

**Supprimer une branche**
```bash title="terminal"
git checkout -d nouvelle_branche
```

**Changer de branche**
```bash title="terminal"
git checkout nouvelle_branche
```

**Merge une branche avec main**
```bash title="terminal"
git checkout main
git merge nouvelle_branche
```

