package main

import (
	"flag"
	"log"
	"net"

	db "bitbucket.org/honda/ratings/api-server/datastore"

	"bitbucket.org/honda/ratings/api-server/models"
)

func main() {
	// set default commandline flags and parse them
	httphost := flag.String("host", "localhost", "HTTP hostname")
	httpport := flag.String("port", "80", "HTTP port number")
	sqlhost := flag.String("sqlhost", db.DATABASE_HOST, "Database server host")
	sqlport := flag.Int("sqlport", db.DATABASE_PORT, "Database server port")

	flag.Parse()

	// set the server options
	ServerOpt := models.ServerOptions{
		HttpHost: net.JoinHostPort(*httphost, *httpport),
		HttpPort: *httpport,
		SQLHost:  *sqlhost,
		SQLPort:  *sqlport,
	}

	// start the server
	if err := startServer(ServerOpt); err != nil {
		log.Printf("%#v", err)
		return
	}

}
