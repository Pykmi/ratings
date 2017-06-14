package main

import (
	"net/http"

	"goji.io"
	"goji.io/pat"

	db "bitbucket.org/honda/ratings/api-server/datastore"
	"bitbucket.org/honda/ratings/api-server/handlers"
)

// corsMiddle middleware handles the supported access-control headers
func corsMiddle(h http.Handler) http.Handler {
	fn := func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Access-Control-Allow-Origin", "*")
		w.Header().Add("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE")
		w.Header().Add("Access-Control-Allow-Headers", "Content-Type")
		if r.Method == "OPTIONS" {
			w.WriteHeader(200)
			return
		}
		h.ServeHTTP(w, r)
	}
	return http.HandlerFunc(fn)
}

func setupRoutes(url string) http.Handler {
	// API Routes
	router := goji.NewMux()

	router.Use(corsMiddle)
	router.Use(db.Middleware(url))
	//router.Use(auth.TokenMiddleware)

	router.HandleFunc(pat.Get("/"), handlers.Default)
	router.HandleFunc(pat.Post("/ratings/new"), handlers.CreateRecord)
	router.HandleFunc(pat.Put("/ratings/update"), handlers.UpdateRecord)
	router.HandleFunc(pat.Get("/ratings/getall"), handlers.GetAll)
	router.HandleFunc(pat.Get("/ratings/getbyuid/:userid"), handlers.GetByUser)
	router.HandleFunc(pat.Get("/ratings/getbytid/:transactionid"), handlers.GetByTransaction)

	return router
}
