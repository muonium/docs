###
@api 		{get} 		/generateQRcode		Get QR code
@apiName 	GetQRCodeGoogleAuthenticator
@apiGroup 	GoogleAuthenticator

@apiParam   {String}    username 		Username.

@apiSuccess (Success 200) 			{Object} data
@apiSuccess (Success 200) 			{String} data.QRcode	Link to the QR code image.
@apiSuccessExample {json} Success-Response:
{
    "code": 200,
    "status": "success",
    "data": {
        "QRcode": "https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl=otpauth%3A%2F%2Ftotp%2FMuonium%3AUsername%3Fsecret%3DAEBB34AA7CD52A2CCAAF4B46AEF3BA5A%26issuer%3DMuonium"
    },
    "message": null,
    "token": null
}
###