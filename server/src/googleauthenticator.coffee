###
@api 		{post} 		/generateQRcode		Get QR code
@apiName 	GetQRCodeGoogleAuthenticator
@apiGroup 	GoogleAuthenticator

@apiParam   {String}    username 		Username.

@apiSuccess (Success 200) 			{Object} data
@apiSuccess (Success 200) 			{String} data.QRcode	QR code image in base 64.
@apiSuccessExample {json} Success-Response:
{
    {
        "code":200,
        "status":"success",
        "data":{
            "QRcode":"iVBORw015168fi9HXEIiFYJASLhGCReNfkfWPN+8pMf8r4rjZWwhwrY9\/CiEVCsEgIFgnBInFn8t6tCG9cEF9Zah+\/d6U+p6uXn3JgTd+IRUKwSAgWCcEicWnyfmzNd2Ppy0t++mFj6f3KVtgDjFgkBIuEYJEQLBLfT95\/QJX3SlHNh5d80\/CSe77IiEVCsEgIFgnBInGpz\/tTq7pdKfrYUy3UVzrGbOxJueUpwYhFQrBICBYJwSLx9e3kq2tD2E2EjzWQeeokqSmPP2EYsUgIFgnBIiFYJC5N3sdWpvaPLxDfuO6xF29875QtNf5GLBKCRUKwSAgWiTsnrK6s6nZz2ykb64LeeQzTym1M\/fRPjFgkBIuEYJEQLBIb+rxvXHpeKX3ZuBB\/rMh97FiJUXEbRiwSgkVCsEgIFok7ZTPvLPaY8lfc1Vi3EWH8XjXvPEmwSAgWCcEisWHD6kvK2Fc++dhEePxR3V9jhZp3XkSwSAgWCcEicanP+0u2WU7VukzpFuKPTaK7BkFq3nkRwSIhWCQEi8SdmvdjK8JdQ8eVCx3rPn\/sxQUjFgnBIiFYJASLxJ1Dmo51m5n66cZNmF0JStdeZuWPU3S5MWKRECwSgkVCsEh8X\/P++aJ9VSUbJ\/7HCuSPzfSPdaw8UAdlxCIhWCQEi4RgkdhwSNOUrpx8Y5HJsYOWxp7av7plId6IRUKwSAgWCcEikR\/S9Fd0Yz\/WKrKrhJnav1rsUP1gxCIhWCQEi4RgkdhwSNOUY9UdU3PbjY51rBw7tgNA2QxHCRYJwSIhWCQutYqc8s4F8WJP5rruuhufe+4xYpEQLBKCRUKwSFxaeZ9ait14mOexderzB5DecKzN\/ZZPNmKRECwSgkVCsEhcahU5vWg+jB9Wpq67cdvw1BPVRUYsEoJFQrBICBaJO60iu6aMx7o\/bpyPTznWbeYYG1Y5SrBICBYJwSJxafLeTbH\/5+ayw6Ge2qH61IPO+f9BIxYJwSIhWCQEi8SdspmuDeHUe1cu1K3Ld08YK83ZN67LaxXJkwSLhGCRECwS36+8P2XjrLn7AmDsWPfHleseKAQyYpEQLBKCRUKwSOzvNjOla\/fYbSvtLrSxFc\/GbzjuFdcbsUgIFgnBIiFYJC6VzRzrqD5+8VMt1DfW2HTd2FcuVPydjVgkBIuEYJEQLBKvbhU5vu7KWVEbLzR2bLbenWSrzzsvIlgkBIuEYJG4M3k\/5ql6\/GMbZVdsrPEvqqSMWCQEi4RgkRAsEu+avD81Ed64F7Q7SunY6axjat55kmCRECwSgkUibxW50cba8\/Enr9zGh3f+rabee48Ri4RgkRAsEoJF4tLk\/VjzmZ93KtOHbuK\/sRfNlhobIxYJwSIhWCQEi8S7+rzzYxixSAgWCcEiIVgkBIuEYJEQLBL\/AVecpqm7Q7GBAAAAAElFTkSuQmCC"
        },
        "message":null,
        "token":null
    }
}
###