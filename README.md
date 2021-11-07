# Halo API Wrapper for Node JS
See [https://ethangrahn.github.io/halo-api/index.html](https://ethangrahn.github.io/halo-api/index.html) for documentation.

This is a rework/continuation of a project found here: [https://github.com/Googlrr/Halo-API-Wrapper-for-Node-JS](https://github.com/Googlrr/Halo-API-Wrapper-for-Node-JS)


Returns a Promise containing the JSON of the requested API Call.

List of official Halo API Calls found at [https://developer.haloapi.com/docs/services/](https://developer.haloapi.com/docs/services/).

Check 'classes' in the documentation for a complete list of commands. Each command includes an example usage.

## Examples

```
var haloWrapper = require('@ekgrahn/halo-api');
var halo = new haloWrapper(YOUR_API_KEY);

// Halo 5 PC Service Records
halo.h5.stats.playerServiceRecordsPC('MAX1MUM D3ATH').then((records) => {
  console.log(records.Results);
});

// Halo Wars 2 Match History
halo.hw2.stats.playerMatchHistory('MAX1MUM D3ATH').then((matches) => {
  console.log(matches);
});
```

This is purely a wrapper for the API and does not include any caching or rate limiting. Contributing code and submission of issues is welcomed and appreciated. Please review the [contributing guidelines](https://github.com/EthanGrahn/halo-api/blob/master/CONTRIBUTING.md) before doing so.
