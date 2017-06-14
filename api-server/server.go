package main

import (
	"fmt"
	"log"
	"net"
	"net/http"
	"strconv"

	"bitbucket.org/honda/ratings/api-server/models"
)

/**
 * Starts the HTTP server.
 */
func startServer(opt models.ServerOptions) error {
	log.Println("Server started on at: ", opt.HttpHost)

	url := "http://" + net.JoinHostPort(opt.SQLHost, strconv.Itoa(opt.SQLPort))
	APIrouter := setupRoutes(url)

	// start listening for the client connections
	err := http.ListenAndServe(opt.HttpHost, APIrouter)
	if err != nil {

		fmt.Println(err)
		return err
	}

	return nil
}
