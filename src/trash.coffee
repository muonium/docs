###
@api 		{post} 		/trash 			Move file(s)/folder(s) to trash
@apiName 	PostTrash
@apiGroup 	Trash

@apiHeader 								{String} 	token 					Token (Authorization: Bearer).

@apiParam 								{Array}		files 					Array of file ID to move.
@apiParam 								{Array}		folders 				Array of folder ID to move.

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{String} 	message					"moved".
###

###
@api 		{delete} 	/trash 			Restore file(s)/folder(s) from trash
@apiName 	DeleteTrash
@apiGroup 	Trash

@apiHeader 								{String} 	token 					Token (Authorization: Bearer).

@apiParam 								{Array}		files 					Array of file ID to move.
@apiParam 								{Array}		folders 				Array of folder ID to move.

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{String} 	message					"moved".
###
