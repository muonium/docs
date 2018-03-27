###
@api 		{post} 		/trash/to 			Move file(s)/folder(s) to trash
@apiName 	PostTrashTo
@apiGroup 	Trash

@apiHeader 								{String} 	token 					Token (Authorization: Bearer).

@apiParam 								{Int[]}		files 					Array of file ID to move.
@apiParam 								{Int[]}		folders 				Array of folder ID to move.

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{String} 	message					"moved".
###

###
@api 		{post} 	/trash/from 			Restore file(s)/folder(s) from trash
@apiName 	PostTrashFrom
@apiGroup 	Trash

@apiHeader 								{String} 	token 					Token (Authorization: Bearer).

@apiParam 								{Int[]}		files 					Array of file ID to move.
@apiParam 								{Int[]}		folders 				Array of folder ID to move.

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{String} 	message					"moved".
###
