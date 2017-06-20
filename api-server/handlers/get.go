package handlers

import (
	"log"
	"net/http"

	"goji.io/pat"

	db "bitbucket.org/honda/prototype-fetch"
	"bitbucket.org/honda/ratings/api-server/models"
)

func GetAll(w http.ResponseWriter, r *http.Request) {
	var records []models.Record
	var response models.Response

	query := db.Query{
		Query: "SELECT * FROM ratings",
	}

	fetch := db.New()
	fetch.Url(getURL(r))

	status, err := fetch.GetQuery(query, &records)
	if err != nil {
		response.Error = err.Error()
		log.Print(err)
	}

	response.Code = status
	if len(records) > 0 {
		response.Data = records
	}

	err = writeJSON(w, response)
	httpError(w, err)
}

func GetByTransaction(w http.ResponseWriter, r *http.Request) {
	var records []models.Record
	var response models.Response

	fetch := db.New()
	fetch.Url(getURL(r))

	tid := pat.Param(r, "transactionid")
	path := "/db/select/ratings/*/transaction_id='" + tid + "'"

	status, err := fetch.Get(path, &records)
	if err != nil {
		response.Error = err.Error()
		log.Print(err)
	}

	response.Code = status
	if len(records) > 0 {
		response.Data = records
	}

	err = writeJSON(w, response)
	httpError(w, err)
}

func GetBySeller(w http.ResponseWriter, r *http.Request) {
	var records []models.Record
	var response models.Response

	fetch := db.New()
	fetch.Url(getURL(r))

	seller := pat.Param(r, "seller")
	path := "/db/select/ratings/*/seller='" + seller + "'"

	status, err := fetch.Get(path, &records)
	if err != nil {
		response.Error = err.Error()
		log.Print(err)
	}

	response.Code = status
	if len(records) > 0 {
		response.Data = records
	}

	err = writeJSON(w, response)
	httpError(w, err)
}

func GetBySender(w http.ResponseWriter, r *http.Request) {
	var records []models.Record
	var response models.Response

	fetch := db.New()
	fetch.Url(getURL(r))

	sender := pat.Param(r, "sender")
	path := "/db/select/ratings/*/sender='" + sender + "'"

	status, err := fetch.Get(path, &records)
	if err != nil {
		response.Error = err.Error()
		log.Print(err)
	}

	response.Code = status
	if len(records) > 0 {
		response.Data = records
	}

	err = writeJSON(w, response)
	httpError(w, err)
}
