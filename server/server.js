
const express = require('express');
const exphbs = require('express-handlebars');
// const hbsHelpers = require('handlebars-helpers');
const hbsLayouts = require('handlebars-layouts');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const errorhandler = require('errorhandler');
const csrf = require('csurf');
const morgan = require('morgan');
const favicon = require('serve-favicon');

router = require('./routes/router');
database = require('./lib/database');
seeder = require('./lib/dbSeeder');
app = express();
port = 3000;


/**
 *
 *
 * @class Server
 */
class Server {
  constructor() {
    this.initViewEngine();
    this.initExpressMiddleWare();
    this.initCustomMiddleware();
    this.initDbSeeder();
    this.initRoutes();
    this.start();
  }

  /**
       *
       *
       * @memberof Server
       */
  start() {
    app.listen(port, (err) => {
      console.log('[%s] Listening on http://localhost:%d', process.env.NODE_ENV, port);
    });
  }
  /**
       *
       *
       * @memberof Server
       */
  initViewEngine() {
    const hbs = exphbs.create({
      extname: '.hbs',
      defaultLayout: 'master',
    });
    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
    hbsLayouts.register(hbs.handlebars, {});
  }
  /**
       *
       *
       * @memberof Server
       */
  initExpressMiddleWare() {
    app.use(favicon(__dirname + '/public/images/favicon.ico'));
    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname + './../client/dist/Angular6-CustomersService'));
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(errorhandler());
    app.use(cookieParser());
    app.use(csrf({cookie: true}));

    app.use((req, res, next) => {
      let csrfToken = req.csrfToken();
      res.locals._csrf = csrfToken;
      res.cookie('XSRF-TOKEN', csrfToken);
      next();
    });

    process.on('uncaughtException', (err) => {
      if (err) console.log(err, err.stack);
    });
  }
  /**
       *
       *
       * @memberof Server
       */
  initCustomMiddleware() {
    if (process.platform === 'win32') {
      require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
      }).on('SIGINT', () => {
        console.log('SIGINT: Closing MongoDB connection');
        database.close();
      });
    }

    process.on('SIGINT', () => {
      console.log('SIGINT: Closing MongoDB connection');
      database.close();
    });
  }
  /**
       *
       *
       * @memberof Server
       */
  initDbSeeder() {
    database.open(() => {
      // Set NODE_ENV to 'development' and uncomment the following if to only run
      // the seeder when in dev mode
      // if (process.env.NODE_ENV === 'development') {
      //  seeder.init();
      // }
      seeder.init();
    });
  }
  /**
       *
       *
       * @memberof Server
       */
  initRoutes() {
    router.load(app, './controllers');

    // redirect all others to the index (HTML5 history)
    app.all('/*', (req, res) => {
      // res.sendFile(__dirname + './../client/dist/Angular6-CustomersService/index.html');
      res.sendFile('index.html', {root: './../client/dist/Angular6-CustomersService'});
    });
  }
}

let server = new Server();
