# JPA Learning

## Project

The fetch mode for all the relationships between entities is left to default :
* ___EAGER___ for unitary attributes
* ___LAZY___ for collections.

## Cases

### Select 1+N

#### Test 1 : starting naively

This case will load :
* all clubs
* all matches
* all players

