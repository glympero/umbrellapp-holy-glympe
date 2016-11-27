import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import weather from '../controller/weather';

let router = express();
initializeDb(db => {
  //internal middleware
  router.use(middleware({config, db}));

  //api routes v1(/v1)
  router.use('/weather', weather( {config, db}));
});

export default router;
