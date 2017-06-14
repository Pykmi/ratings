package datastore

import (
	"context"
	"net/http"

	as "github.com/aerospike/aerospike-client-go"
)

func Middleware(url string) func(h http.Handler) http.Handler {
	return func(h http.Handler) http.Handler {
		return http.HandlerFunc(func(
			w http.ResponseWriter,
			r *http.Request,
		) {
			ctx := r.Context()
			ctx = context.WithValue(ctx, "URL", url)
			h.ServeHTTP(w, r.WithContext(ctx))
		})
	}
}

func Open(host string, port int) (*as.Client, error) {
	var conn *as.Client

	// open a new persistent database connection
	conn, err := as.NewClient(host, port)

	// check for errors
	if err != nil {
		return conn, err
	}

	return conn, nil
}
