import CONSTANTS from "./constants";
const APIServices = new (function() {
  this.callRequest = (successFunc, errorFunc) => {
    const api = `${CONSTANTS.API_DOMAIN}?domains=${
      CONSTANTS.DOMAIN_LIST
    }&apiKey=${CONSTANTS.API_KEY}`;
    fetch(api)
      .then(res => res.json())
      .then(
        result => {
          if (successFunc !== undefined) successFunc(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          if (errorFunc !== undefined) errorFunc();
        }
      );
  };
})();
export default APIServices;
