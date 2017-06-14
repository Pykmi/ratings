package handlers

/*
func createStore(t *testing.T) db.Datastore {
	conn, err := db.Open("172.17.0.2", 3000)
	if err != nil {
		t.Logf("%v", err.Error())
		t.FailNow()
	}

	store := db.Datastore{
		Namespace:   db.DATABASE_NAMESPACE,
		Sets:        make(map[string]interface{}),
		Store:       conn,
		Writepolicy: as.NewWritePolicy(0, 0),
	}

	return store
}

func TestWriteJSON(t *testing.T) {
	data := math.Inf(1)

	rr := httptest.NewRecorder()

	err := writeJSON(rr, data)
	if err == nil {
		t.Logf("Writing JSON should have failed")
		t.FailNow()
	}
}

func TestHttpError(t *testing.T) {
	rr := httptest.NewRecorder()
	err := errors.New("HTTP Error")

	if httpError(rr, err) != true {
		t.Logf("No error was thrown")
		t.FailNow()
	}
}

func TestGetStore(t *testing.T) {
	req, err := http.NewRequest("GET", "/", nil)
	if err != nil {
		t.Logf("%v", err.Error())
		t.FailNow()
	}

	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(Default)

	ctx := req.Context()
	ctx = context.WithValue(ctx, "DB", createStore(t))

	req = req.WithContext(ctx)
	handler.ServeHTTP(rr, req)

	store := getStore(req)
	if store.Store.IsConnected() != true {
		t.Log("No connection found")
		t.FailNow()
	}
}
*/
