###
@api 		{get} 		/home/languages 	Get available languages
@apiName 	GetHomeLanguages
@apiGroup 	Home

@apiSuccess (Success 200) 		{Object} data	An object containing languages (key: code, value: language name)

@apiSuccessExample {json} Success-Response:
{
    "code": 200,
    "status": "success",
    "data": {
        "en": "English",
        "de": "Deutsch",
        "es": "Español",
        "fr": "Français",
        "it": "Italiano",
        "pl": "Polskie",
        "ru": "Русский",
        "zh-cn": "简体中文"
    },
    "message": null,
    "token": null
}
###
