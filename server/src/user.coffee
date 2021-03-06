###
@api 		{get} 		/user 			Get user infos
@apiName 	GetUser
@apiGroup 	User

@apiHeader 								{String} token 			Token (Authorization: Bearer).

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{Object} 	data
@apiSuccess (Success 200) 				{Int}	 	data.id					User id.
@apiSuccess (Success 200) 				{String} 	data.login				Username.
@apiSuccess (Success 200) 				{String} 	data.email				Email address.
@apiSuccess (Success 200) 				{Int} 	 	data.registration_date	Registration date (timestamp).
@apiSuccess (Success 200) 				{Int}	    data.double_auth		2-factor authentication method

@apiSuccessExample {json} Success-Response:
{
    "code": 200,
    "status": "success",
    "data": {
        "id": 1,
        "login": "muonium",
        "email": "muonium@muonium.ee",
        "registration_date": 1517233312,
        "double_auth": 0
    },
    "message": null,
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTk4OTI3MTMsImV4cCI6MTU1MTQyODcxMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9._PWCLR7lgLmX3qA3gVnAhyGj-wt3WjDeNaml_tOunJM"
}
###

###
@api 		{delete} 		/user		Delete user (definitively)
@apiName 	DeleteUser
@apiGroup 	User

@apiHeader 								{String} token 			Token (Authorization: Bearer).

@apiSuccess (Success 200) 				{String} message		"removeToken". Token has to be removed from client.
###

###
@api 		{post} 			/user 		Create a new account
@apiName 	PostUser
@apiGroup 	User

@apiParam 								{String} login 			Username.
@apiParam 								{String} password 		Password already hashed with mui_hash.js. You have to check length and if password confirm match in client side.
@apiParam 								{String} mail 			Email address.
@apiParam 								{String} cek 			CEK.
@apiParam 								{Int} [doubleAuth] 	    If 1, enable 2-factor authentication by mail, if 2, enable 2-factor authentication by Google Authenticator.

@apiSuccess (Created 201) 				{String} message		"created".
@apiSuccess (Created 201) 				{Int}    uid	       UID.

@apiError 	(Error 400 - loginExists)	{String} message		"loginExists". Login already exists.
@apiError 	(Error 400 - mailExists)	{String} message		"mailExists". Email already exists.
@apiError 	(Error 400 - loginFormat)	{String} message		"loginFormat". Username format is incorrect (between 2 and 20 alphanumeric characters, -_. allowed).
@apiError 	(Error 400 - mailFormat)	{String} message		"mailFormat". Email format is incorrect.
###

###
@api 		{post} 		/user/changeLogin 	Change username
@apiName 	PostChangeLogin
@apiGroup 	User

@apiHeader 								{String} token 			Token (Authorization: Bearer).

@apiParam 								{String} login 			Username.

@apiSuccess (Success 200) 				{String} token			Current token.
@apiSuccess (Success 200) 				{String} message		Username has been updated.

@apiError 	(Error 400 - loginExists) 	{String} token			Current token.
@apiError 	(Error 400 - loginExists)	{String} message		"loginExists". Login already exists.

@apiError 	(Error 400 - loginFormat) 	{String} token			Current token.
@apiError 	(Error 400 - loginFormat)	{String} message		"loginFormat". Username format is incorrect (between 2 and 20 alphanumeric characters, -_. allowed).
###

###
@api 		{post} 		/user/changeMail 	Change email
@apiName 	PostChangeMail
@apiGroup 	User

@apiHeader 								{String} token 			Token (Authorization: Bearer).

@apiParam 								{String} mail 			Email address.

@apiSuccess (Success 200) 				{String} token			Current token.
@apiSuccess (Success 200) 				{String} message		Email has been updated.

@apiError 	(Error 400 - mailExists) 	{String} token			Current token.
@apiError 	(Error 400 - mailExists)	{String} message		"mailExists". Email already exists.

@apiError 	(Error 400 - mailFormat) 	{String} token			Current token.
@apiError 	(Error 400 - mailFormat)	{String} message		"mailFormat". Email format is incorrect.
###

###
@api 		{post} 		/user/changePassword 	Change password
@apiName 	PostChangePassword
@apiGroup 	User

@apiHeader 								{String} token 			Token (Authorization: Bearer).

@apiParam 								{String} old_pwd 		Old password already hashed with mui_hash.js.
@apiParam 								{String} new_pwd 		New password already hashed with mui_hash.js. You have to check length and if password confirm match in client side.

@apiSuccess (Success 200) 				{String} message		"removeToken". Token has to be removed from client.

@apiError 	(Error 400 - badOldPass) 	{String} token			Current token.
@apiError 	(Error 400 - badOldPass)	{String} message		"badOldPass". Old password does not match.
###

###
@api 		{post} 		/user/changeCek 	Change CEK
@apiName 	PostChangeCek
@apiGroup 	User

@apiHeader 								{String} token 			Token (Authorization: Bearer).

@apiParam 								{String} cek 			CEK.

@apiSuccess (Success 200) 				{String} token			Current token.
@apiSuccess (Success 200) 				{String} message		"removeToken". Token has to be removed from client.
###

###
@api 		{post} 		/user/changeAuth 	Change 2-factor authentication method
@apiName 	PostChangeAuth
@apiGroup 	User

@apiHeader 								{String} token 			Token (Authorization: Bearer).

@apiParam 								{Int}    doubleAuth 	    If 1, enable 2-factor authentication by mail, if 2, enable 2-factor authentication by Google Authenticator.
@apiParam 								{String} [code] 	        Code generated by Google Authenticator needed for enabling or disabling Google Authenticator.

@apiSuccess (Success 200) 				{String} token			Current token.
@apiSuccess (Success 200) 				{String} message		Updated.

@apiError 	(Error 403 - badCode) 	{String} 	token					Current token.
@apiError 	(Error 403 - badCode)		{String} 	message				"badCode".
###

###
@api 		{post} 		/user/changeLang 	Update lang in database according to language header
@apiName 	PostChangeLang
@apiGroup 	User

@apiHeader 								{String} token 			Token (Authorization: Bearer).

@apiSuccess (Success 200) 				{String} token			Current token.
@apiSuccess (Success 200) 				{String} message		Updated.
###
