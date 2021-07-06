# Producteurs Enedis

## description
Site Web permettant de visualiser les données ouverte des producteurs d'énergie électrique raccordée au réseau de distribution fournit par ENEDIS

## Fonctionnalitées
Visualisation des données suivantes couvrant la periode de 2018 à la periode actuel :
- Evolution du nombre de point de raccordement durant l'année suivant le type de production
- Répartition des points de raccordement selon les puissances suivant le type de production
- Répartition du nombre des point de raccordement selon leur type de production
- répartition du nombre de point selon leur puissance

## Fonctionnement
Les données sont récupéré grace à des appel API suivant la méthode 
```javascript
fetch()
```
Les appels pointent vers l'[API proposer par ENEDIS](https://data.enedis.fr/explore/dataset/nb-clients-prod/api/) et sont transmises aux composants REACT


## Dependecies
- NextJS
- Sass
- API ENEDIS OPEN DATA

