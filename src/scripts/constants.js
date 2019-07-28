const CONSTANTS = new (function() {
  this.API_DOMAIN = `https://newsapi.org/v2/everything`;
  this.API_KEY = "1f786742b00c448f86e480f27cbef264";
  this.DOMAIN_LIST = ["cnn.com", "nytimes.com"];
  this.NAV_URL = new (function() {
    this.HOME = "/";
    this.HISTORY = `${this.HOME}history`;
  })();
  this.CURRENT_PAGE = new (function() {
    this.NONE = -1;
    this.HOME = 0;
    this.HISTORY = 1;
  })();
})();
export default CONSTANTS;
