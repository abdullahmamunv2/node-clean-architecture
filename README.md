# NodeJS Clean Architecture
## Getting Started
This project is based on uncle bob's clean architecture. If you dont know what clean architecture is then check the below links.

Blog:
https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
Video : 
https://www.youtube.com/watch?v=o_TH-Y78tt4
Book : 
Clean architecture: a craftsman's guide to software structure and design -- Robert C. Martin(a.k.a Uncle Bob)

### Prerequisites
1. Basic understanding on Clean architecture.
2. Have basic idea on both NodeJS and Typescript.

### Installing

```
1. git clone https://github.com/kamrulhasan1203/node-clean-architecture.git
2. cd project root folder/  
3. npm install
```

### Building
You can build application in three mood.(production,staging, development(default))

```
#development
npm run build 

#staging
npm run build:stage 

#production
npm run build:prod

#copy config files into dist folder
npm run copy   
```

### RUN Command
You can run using either node command or docker
NODE :
```
npm run start:local
```
DOCKER : 
```
docker-compose up --build
```
### Test
1. Go to browser and hit http://localhost:8080

### Documentation
Soon i'm going to write documentation on each part of the project structure.

## Versioning
Currently it's in development phase.

## Authors
1. iamcharlie


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspiration
* etc
