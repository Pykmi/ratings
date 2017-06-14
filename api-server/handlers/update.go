package handlers

import (
	"encoding/json"
	"net/http"

	db "bitbucket.org/honda/prototype-fetch"
	"bitbucket.org/honda/ratings/api-server/models"
)

func UpdateRecord(w http.ResponseWriter, r *http.Request) {
	var record models.Record
	var resp db.Response

	fetch := db.New()
	fetch.Url(getURL(r))

	err := json.NewDecoder(r.Body).Decode(&record)
	response := models.Response{Code: 200}
	if err == nil {
		data := models.SQLput{
			Table: "ratings",
			Map: map[string]string{
				"transaction_id": record.TransactionID,
				"sender_id":      record.SenderID,
				"overall":        record.Overall,
				"communication":  record.Communication,
				"shipping":       record.Shipping,
				"condition":      record.Condition,
				"comment":        record.Comment,
			},
			Condition: record.SQLCondition,
		}

		resp, err = fetch.Put(data)
	}

	if err != nil {
		response.Error = err.Error()
	} else {
		response.Data = resp.Message
	}

	// print response to the http writer
	err = writeJSON(w, response)
	httpError(w, err)
}
