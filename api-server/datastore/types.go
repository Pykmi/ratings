package datastore

import as "github.com/aerospike/aerospike-client-go"

// saves database connection, writepolicy, and configuration
type Datastore struct {
	Namespace   string
	Sets        map[string]interface{}
	SearchID    int
	Store       *as.Client
	Writepolicy *as.WritePolicy
}

type DBSets struct {
	rating_data string
}

type AeroOptions struct {
	Host string
	Port int
}

// -->

type DatabaseSet struct {
	name  string
	index IndexList
}

type IndexList []string
