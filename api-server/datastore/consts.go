package datastore

// database info
const (
	DATABASE_HOST      string = "host"
	DATABASE_PORT      int    = 3000
	DATABASE_NAMESPACE string = "test"
	DATABASE_USER      string = ""
	DATABASE_PASS      string = ""
)

const (
	PROTOTYPE_DB_URL string = "http://127.0.0.1:3031"
)

var DATABASE_SETS = map[string]DatabaseSet{
	"rating_data": {
		name:  "rating_data",
		index: IndexList{"PK"},
	},
}
