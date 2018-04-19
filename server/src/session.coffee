###
@api 		{post} 		/session 			API Authentication
@apiName 	PostSession
@apiGroup 	Session

@apiParam 								{String} username 	Username (or email).
@apiParam 								{String} password 	Password already hashed with mui_hash.js.

@apiSuccess (Success 200 - Ok) 			{String} token		Generated token
@apiSuccess (Success 200 - Ok) 			{Object} data
@apiSuccess (Success 200 - Ok) 			{String} data.cek	CEK.
@apiSuccess (Success 200 - Ok) 			{Int}    data.uid	UID.

@apiSuccess (Success 200 - doubleAuth)	{String} message	"doubleAuth". 2-factor authentication is enabled, credentials are valid but you need to send them again with code sent by mail.
@apiSuccess (Success 200 - doubleAuth) 	{Object} data
@apiSuccess (Success 200 - doubleAuth) 	{String} data.cek	CEK.
@apiSuccess (Success 200 - doubleAuth) 	{Int}    data.uid	UID.

@apiSuccess (Success 200 - wait)		{String} message	"wait". 2-factor authentication is enabled, credentials are valid but you need to send them again with code sent by mail. Mail was not sent because a mail has been already sent recently.
@apiSuccess (Success 200 - wait) 		{Object} data
@apiSuccess (Success 200 - wait) 		{String} data.cek	CEK.
@apiSuccess (Success 200 - wait) 		{Int}    data.uid	UID.

@apiError 	(Error 401 - validate)		{String} message	"validate". Account is not validated but credentials are valid.
@apiError   (Error 401 - validate) 		{Int}    data     UID.

@apiError 	(Error 401 - badUser)		{String} message	"badUser". User does not exist.

@apiError 	(Error 401 - badPass)		{String} message	"badPass". User exists but incorrect password.
###

###
@api 		{get} 		/session 			Get UID and list of sessions from token
@apiName 	GetSession
@apiGroup 	Session

@apiHeader 								{String} token 		Token (Authorization: Bearer).

@apiSuccess (Success 200) 				{String} token		Current token.
@apiSuccess (Success 200) 				{Object} data
@apiSuccess (Success 200) 				{Int} data.uid		User id.
@apiSuccess (Success 200) 				{Object[]} data.tokens		List of sessions.
@apiSuccess (Success 200) 				{String} data.tokens.jti		Token.
@apiSuccess (Success 200) 				{Int} data.tokens.iat		Issued at.
@apiSuccess (Success 200) 				{Boolean} data.tokens.current		Current session?
###

###
@api 		{delete} 		/session 		Delete the session
@apiName 	DeleteSession
@apiGroup 	Session

@apiHeader 								{String} token 		Token (Authorization: Bearer).

@apiSuccess (Success 200) 				{String} message	"removeToken". Token has to be removed from client.
###

###
@api 		{delete} 		/session/jti/:jti 		Delete the session with jti
@apiDescription Jti is a base64 string, in order to pass it in the url, base64url standard must be respected (- instead + and _ instead /)
@apiName 	DeleteSessionJti
@apiGroup 	Session

@apiHeader 								{String} token 		Token (Authorization: Bearer).

@apiSuccess (Success 200) 				{String} [message]	"removeToken". Token has to be removed from client.
###

###
@api 		{delete} 		/session/all 		Delete all sessions
@apiName 	DeleteSessionAll
@apiGroup 	Session

@apiHeader 								{String} token 		Token (Authorization: Bearer).

@apiSuccess (Success 200) 				{String} message	"removeToken". Token has to be removed from client.
###

###
@api 		{post} 		/session/authcode 	2-factor API Authentication
@apiName 	PostSessionAuthCode
@apiGroup 	Session

@apiParam 								{Int}    uid 		User id.
@apiParam 								{String} password 	Password already hashed with mui_hash.js.
@apiParam 								{String} code 		Code sent by mail.

@apiSuccess (Success 200 - Ok) 			{String} token		Generated token
@apiSuccess (Success 200 - Ok) 			{Object} data
@apiSuccess (Success 200 - Ok) 			{String} data.cek	CEK.
@apiSuccess (Success 200 - Ok) 			{Int}    data.uid	UID.

@apiError 	(Error 401 - validate)		{String} message	"validate". Account is not validated but credentials are valid.
@apiError 	(Error 401 - validate)		{Int}    data     UID.

@apiError 	(Error 401 - badCode)		{String} message	"badCode". User exists but incorrect code.

@apiError 	(Error 401 - badPass)		{String} message	"badPass". User exists but incorrect password.
###
