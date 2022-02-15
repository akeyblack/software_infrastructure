/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const ShowsController = require("../api/controllers/ShowsController");
const WorkersController = require("../api/controllers/WorkersController");

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'get /workers': WorkersController.list,
  'get /shows': ShowsController.list,

  'get /workers/add': WorkersController.add,
  'get /shows/add': ShowsController.add,

  'post /workers/create': WorkersController.create,
  'post /shows/create': ShowsController.create,

  'post /workers/delete/:id': WorkersController.delete,
  'post /shows/delete/:id': ShowsController.delete


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
