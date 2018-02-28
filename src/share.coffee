###
@api 		{post} 		/share 			Share a file
@apiName 	PostShare
@apiGroup 	Share

@apiHeader 								{String} 	token 					Token (Authorization: Bearer).

@apiParam 								{Int}		id 						File ID.
@apiParam 								{String}	dk 						DK.

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{String} 	data					Sharing link.
###

###
@api 		{delete} 	/share 			Unshare a file
@apiName 	DeleteShare
@apiGroup 	Share

@apiHeader 								{String} 	token 					Token (Authorization: Bearer).

@apiParam 								{Int}		id						File ID.

@apiSuccess (Success 200) 				{String} 	token					Current token.
###
