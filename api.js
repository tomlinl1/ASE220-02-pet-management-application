const express = require('express');
const fs=require('fs')
const path = require('path');

const app = express()
app.use(express.json());
app.use(express.static('public'))
const port = 3030

/* HTML ENDPOINTS */
// app.get('/', (req, res)=> {
// 	res.send(fs.readFileSync('./index.html','utf8'));
// })

app.get('/detail', (req, res)=> {
	res.send('HTML endpoint: detail');
})


/* ====== API ENDPOINTS ====== */

/*Creating a JSON Blob is accomplished by sending a POST request to /api/jsonBlob. 
	The body of the request should contain valid JSON that will used as the JSON Blob. 
	Upon successfully storing the JSON blob, a 201 response will be returned. 
	The Location header in the response will be set to the URL at which the blob can be accessed with a GET request. 
	The body of the response is the JSON that was stored in the JSON blob. 
*/
app.post('/api/jsonBlob', (req, res)=> {
	let filename=(new Date()).toISOString().replace(/[^a-zA-Z0-9]/g,'')
	let content=req.body;
	fs.writeFileSync(`./blobs/${filename}.json`,JSON.stringify(content));
	
    res.setHeader('filename',filename);
	res.json(content);
})

/*
	Retrieving a JSON Blob is accomplished by sending a GET request to / api / jsonBlob / <blobId>, where <blobId> is the last part of the URL path returned from the POST request.
	Upon successfully retrieving the JSON Blob, a 200 response will be returned.
	If no JSON Blob exists for the given <blobId>, a 404 response will be returned.
	The body of the response is the JSON that was stored in the JSON Blob. 
*/
app.get('/api/jsonBlob/:documentid', (req, res) => {
	if (!fs.existsSync(`./blobs/${req.params.documentid}.json`)) {
		res.status(404).json({error : `Document with id ${req.params.documentid} not found`});
	}
	let content =  JSON.parse(fs.readFileSync(`./blobs/${req.params.documentid}.json`,'utf8'));
	res.json(content);
})

/*
	Updating a JSON Blob is accomplished by sending a PUT request to /api/jsonBlob/<blobId>. 
	The request body should contain valid JSON that the stored JSON Blob will be replaced with. 
	Upon successfully storing the new JSON Blob, a 200 response will be returned. 
	If no JSON Blob exists for the given <blobId>, a 404 response will be returned. 
	The body of the response is the JSON that was stored in the JSON Blob.
*/
app.put('/api/jsonBlob/:documentid', (req, res) => {
	if (!fs.existsSync(`./blobs/${req.params.documentid}.json`)) {
		res.status(404).json({error : `Document with id ${req.params.documentid} not found`});
	}
	let content=req.body
	fs.writeFileSync(`./blobs/${req.params.documentid}.json`,JSON.stringify(content));
	res.json(content);
})

/*
	Deleting a JSON Blob is accomplished by sending a DELETE request to /api/jsonBlob/<blobId>. 
	Upon successfully deleting the JSON Blob, a 200 response will be returned. 
	If no JSON Blob exists for the given <blobId>, a 404 response will be returned. 
	If deleting blobs is not enabled, a 405 response will be returned.
*/
app.delete('/api/jsonBlob/:documentid', (req, res) => {
	if (!fs.existsSync(`./blobs/${req.params.documentid}.json`)) {
		res.status(404).json({error : `Document with id ${req.params.documentid} not found`});
	}
	fs.unlinkSync(`./blobs/${req.params.documentid}.json`)
	res.json({message:'data deleted'});
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
