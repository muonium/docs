###
@api 		{post} 		/mv 			Move file(s)/folder(s) (or a copy of them) to a folder
@apiName 	PostMv
@apiGroup 	Mv

@apiHeader 								{String} token 						Token (Authorization: Bearer).

@apiParam 								{Int} 		copy 					0: cut, 1: copy
@apiParam 								{Array} 	files					Array of files ID from old_folder to move (they must not be in the trash).
@apiParam 								{Array} 	folders					Array of folders ID from old_folder to move (they must not be in the trash).
@apiParam 								{Int} 		[old_folder_id] 		Move from this folder ID (default: 0).
@apiParam 								{Int} 		folder_id 				Move to this folder ID.

@apiSuccess (Success 200) 				{String} 	token					Current token.
@apiSuccess (Success 200) 				{String} 	message					"ok".
@apiSuccess (Success 200) 				{Object} 	data
@apiSuccess (Success 200) 				{Array} 	data.warning			Can contains some warnings. "badFilename": unable to find at least one file, "badFoldername": unable to find at least one folder, "move": unable to move at least one file/folder, "copy": unable to copy at least one file/folder, "isAChild": unable to move to dest folder because it is a child of cut folder.

@apiSuccess (Error 400 - quota) 		{String} 	token					Current token.
@apiSuccess (Error 400 - quota) 		{String} 	message					"quota". You need more storage to perform this action.
###
