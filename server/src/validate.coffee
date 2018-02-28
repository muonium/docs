###
@api 		{post} 		/validate/key 				Validation with uid/key
@apiName 	PostValidateKey
@apiGroup 	Validate

@apiParam 									{Int}    uid 		User id.
@apiParam 									{String} key 		Validation key.

@apiSuccess (Success 200 - validated) 		{String} message	"validated". Account is now validated.

@apiError 	(Error 400 - differentKey)		{String} message	"differentKey". Validation key is different than key sent.
@apiError 	(Error 400 - alreadyValidated)	{String} message	"alreadyValidated". This account is already validated.
###

###
@api 		{get} 		/validate/key/:uid/:key 	Validation with uid/key in URL
@apiName 	GetValidateKey
@apiGroup 	Validate

@apiParam 									{Int}    uid 		User id.
@apiParam 									{String} key 		Validation key.

@apiSuccess (Success 200 - validated) 		{String} message	"validated". Account is now validated.

@apiError 	(Error 400 - differentKey)		{String} message	"differentKey". Validation key is different than key sent.
@apiError 	(Error 400 - alreadyValidated)	{String} message	"alreadyValidated". This account is already validated.
###

###
@api 		{post} 		/validate/mail 				Send a validation mail
@apiName 	PostValidateMail
@apiGroup 	Validate

@apiParam 									{Int}    uid 		User id.

@apiSuccess (Success 200 - sent) 			{String} message	"sent". Mail sent successfully.

@apiSuccess (Success 200 - wait)			{String} message	"wait". Mail was not sent because a mail has been already sent recently.

@apiError 	(Error 400 - alreadyValidated)	{String} message	"alreadyValidated". This account is already validated.
###
