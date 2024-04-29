/**
 * Contains the miscellaneous route handlers.
 * @author Onyango Hibrahim  <https://github.com/DevEbrah>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
