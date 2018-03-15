###
@api 		{post} 		/lostpass 			Change password
@apiName 	PostLostpass
@apiGroup 	Lostpass

@apiParam 									{Int}    uid 		User id.
@apiParam 									{String} key 		Lostpass key.
@apiParam 									{String} password 	Password already hashed with mui_hash.js. You have to check length and if password confirm match in client side.

@apiSuccess (Success 200 - updated) 		{String} message	"updated". Password was updated successfully.

@apiError 	(Error 400 - differentKey)		{String} message	"differentKey". Lostpass key is different than key sent.
###

###
@api 		{post} 		/lostpass/key 		Verifying with uid/key
@apiName 	PostLostpassKey
@apiGroup 	Lostpass

@apiParam 									{Int}    uid 		User id.
@apiParam 									{String} key 		Lostpass key.

@apiSuccess (Success 200) 					{String} message	"ok". The key is correct.

@apiError 	(Error 400 - differentKey)		{String} message	"differentKey". Lostpass key is different than key sent.
###

###
@api 		{get} 		/lostpass/key/:uid/:key 	Verifying with uid/key in URL
@apiName 	GetLostpassKey
@apiGroup 	Lostpass

@apiParam 									{Int}    uid 		User id.
@apiParam 									{String} key 		Lostpass key.

@apiSuccess (Success 200) 					{String} message	"ok". The key is correct.

@apiError 	(Error 400 - differentKey)		{String} message	"differentKey". Lostpass key is different than key sent.
###

###
@api 		{post} 		/lostpass/mail 				Send a lost pass mail
@apiName 	PostLostpassMail
@apiGroup 	Lostpass

@apiParam 									{Int}    [uid] 		    User id, if not specified, you must send username.
@apiParam 									{String} [username]   Login or email, if not specified, you must send uid.

@apiSuccess (Success 200 - sent) 			{String} message	"sent". Mail sent successfully.
@apiSuccess (Success 200 - sent) 			{Int}    data     UID.

@apiSuccess (Success 200 - wait)			{String} message	"wait". Mail was not sent because a mail has been already sent recently.
@apiSuccess (Success 200 - wait) 			{Int}    data	    UID.

@apiError 	(Error 400 - unknownUser)	{String} message	"unknownUser". This user does not exist.
###
