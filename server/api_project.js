define({
  "name": "Muonium",
  "version": "0.1.0",
  "description": "Server API",
  "title": "Muonium's server API",
  "url": "http://localhost/server",
  "header": {
    "title": "Getting started",
    "content": "<p>For every request, you must send it with raw body, in JSON format. The server will return a JSON based on this model:</p>\n<p><strong>Default response</strong></p>\n<pre><code class=\"language-json\">{\n\t&quot;code&quot;: 400,\n\t&quot;status&quot;: &quot;error&quot;,\n\t&quot;data&quot;: {\n\n\t},\n\t&quot;message&quot;: null,\n\t&quot;token&quot;: null\n}\n</code></pre>\n<p>Response code is set on HTTP status code and in response JSON.</p>\n<p>Status can be 'error' or 'success'</p>\n<p>Token contains a valid token generated by the server for a logged user. The client has to check it every time if different of null because a new one can be generated when expiration is soon.\nTokens are signed with HS384 algorithm.\nAn unsigned token server-side looks like that:</p>\n<pre><code class=\"language-php\">[\n\t'iat' =&gt; $issuedAt,     // Issued at: time when the token was generated\n\t'jti' =&gt; $jti,          // Json Token Id: an unique identifier for the token\n\t'iss' =&gt; $serverName,   // Issuer\n\t'nbf' =&gt; $issuedAt,     // Not before\n\t'exp' =&gt; $expire,       // Expire at\n\t'data' =&gt; [             // Data related to the signer user\n\t\t'uid' =&gt; $userId\n\t]\n]\n</code></pre>\n<p><strong>We recommend using sessionStorage to store token on the client.</strong></p>\n<p>For every request that needs a logged user, client has to send the last token returned by server in Header Authorization: Bearer.</p>\n<p><strong>If response message is 'removeToken', token has to be removed from client.</strong></p>\n<p>You can have the 'Default reponse' (error 400) for any request due to a bad request or when something went wrong.\nIf a token is required and you send an empty/invalid token, you will get a 401 error.</p>\n"
  },
  "template": {
    "withCompare": false,
    "withGenerator": true
  },
  "order": [
    "Session"
  ],
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2018-05-29T14:54:41.864Z",
    "url": "http://apidocjs.com",
    "version": "0.17.6"
  }
});
